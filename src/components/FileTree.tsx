import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Braces,
  ChevronDown,
  ChevronRight,
  Code2,
  Database,
  File,
  FileCode2,
  FileImage,
  FileJson,
  FilePlus2,
  FileText,
  Folder,
  FolderPlus,
  Palette,
  ShieldAlert,
  Terminal,
} from "lucide-react";

import {
  clearFileTreeClipboard,
  getFileTreeClipboard,
  setFileTreeClipboard,
  subscribeFileTreeClipboard,
} from "../state/fileTreeClipboard";
import { fileTreeInputCallbacks } from "../state/inputCallbacks";
import {
  attachFileTreeUndoHotkeys,
  pushFileTreeUndoEntry,
} from "../state/fileTreeUndo";
import {
  defaultFileTreeLabels,
  type FileTreeClipboardItem,
  type FileTreeError,
  type FileTreeFsAdapter,
  type FileTreeItemType,
  type FileTreeLabels,
  type FileTreeNode,
  type FileTreePlatform,
  type FileTreeProps,
  type FileTreeSelection,
} from "../types";
import {
  dedupeNodes,
  getBaseName,
  getParentPath,
  isPathInside,
  isSamePath,
  joinTreePath,
  normalizePath,
} from "../utils/path";
import {
  FILE_TREE_INLINE_CREATE_INPUT_CLASS,
  FILE_TREE_RENAME_INPUT_CLASS,
} from "../state/inputCallbacks";

const CLOSE_CONTEXT_MENUS_EVENT = "jack-file-tree:close-context-menus";
const DRAG_PAYLOAD_TYPE = "application/x-jack-file-tree-item";

let interactionTrackingInstalled = false;
let isUserInteracting = false;

function ensureInteractionTracking(): void {
  if (interactionTrackingInstalled || typeof window === "undefined") {
    return;
  }

  interactionTrackingInstalled = true;

  window.addEventListener(
    "mousedown",
    () => {
      isUserInteracting = true;
    },
    true,
  );

  window.addEventListener(
    "mouseup",
    () => {
      setTimeout(() => {
        isUserInteracting = false;
      }, 0);
    },
    true,
  );

  window.addEventListener(
    "keydown",
    () => {
      isUserInteracting = true;
    },
    true,
  );

  window.addEventListener(
    "keyup",
    () => {
      setTimeout(() => {
        isUserInteracting = false;
      }, 0);
    },
    true,
  );
}

function resolvePlatform(
  platform: FileTreePlatform | undefined,
): "windows" | "mac" | "linux" {
  if (platform && platform !== "auto") {
    return platform;
  }

  if (typeof navigator === "undefined") {
    return "mac";
  }

  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) {
    return "windows";
  }

  if (userAgent.includes("mac")) {
    return "mac";
  }

  return "linux";
}

function getShortcutLabel(
  action: "cut" | "copy" | "paste" | "delete",
  platform: "windows" | "mac" | "linux",
): string {
  if (action === "delete") {
    return platform === "mac" ? "⌘⌫" : "Del";
  }

  const modifier = platform === "mac" ? "⌘" : "Ctrl+";
  const key = action === "cut" ? "X" : action === "copy" ? "C" : "V";
  return `${modifier}${key}`;
}

function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

function resolveExtension(node: FileTreeNode): string {
  if (node.extension) {
    return node.extension.toLowerCase();
  }

  const name = node.name.toLowerCase();
  const lastDot = name.lastIndexOf(".");

  if (lastDot === -1) {
    return "";
  }

  return name.slice(lastDot + 1);
}

function renderDefaultIcon(node: FileTreeNode) {
  if (node.type === "directory") {
    return <Folder size={14} color="var(--sft-accent, var(--accent, #3b82f6))" />;
  }

  switch (resolveExtension(node)) {
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
      return <Braces size={14} color="#eab308" />;
    case "json":
      return <FileJson size={14} color="#22c55e" />;
    case "html":
      return <Code2 size={14} color="#ef4444" />;
    case "css":
    case "scss":
    case "less":
      return <Palette size={14} color="var(--sft-accent, var(--accent, #3b82f6))" />;
    case "md":
      return <FileText size={14} color="#a1a1aa" />;
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
    case "webp":
      return <FileImage size={14} color="#8b5cf6" />;
    case "sh":
    case "bash":
    case "zsh":
      return <Terminal size={14} color="#10b981" />;
    case "php":
      return <FileCode2 size={14} color="#7b7fb5" />;
    case "sql":
      return <Database size={14} color="#f97316" />;
    case "env":
      return <ShieldAlert size={14} color="#eab308" />;
    default:
      return <File size={14} color="var(--sft-text-muted, var(--text-muted, #71717a))" />;
  }
}

function getSelectedContainerPath(
  selectedNode: FileTreeSelection | null,
  workspaceRoot: string,
): string {
  if (!selectedNode) {
    return normalizePath(workspaceRoot);
  }

  return selectedNode.type === "directory"
    ? normalizePath(selectedNode.path)
    : getParentPath(selectedNode.path);
}

function getPortalTarget(portalContainer?: Element | null): Element | null {
  if (portalContainer) {
    return portalContainer;
  }

  if (typeof document === "undefined") {
    return null;
  }

  return document.body;
}

interface CreatingItem {
  type: "file" | "folder";
  parentPath: string;
}

interface InlineCreateInputProps {
  type: "file" | "folder";
  depth: number;
  hasFolders: boolean;
  indentPx: number;
  labels: FileTreeLabels;
  monacoSelector: string;
  onSubmit: (name: string) => void;
  onCancel: () => void;
}

function InlineCreateInput({
  type,
  depth,
  hasFolders,
  indentPx,
  labels,
  monacoSelector,
  onSubmit,
  onCancel,
}: InlineCreateInputProps) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const submittedRef = useRef(false);
  const blurTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedAtRef = useRef(Date.now());
  const onSubmitRef = useRef(onSubmit);
  const onCancelRef = useRef(onCancel);

  onSubmitRef.current = onSubmit;
  onCancelRef.current = onCancel;

  useEffect(() => {
    const element = inputRef.current;
    if (element) {
      element.focus();
    }

    const rafId = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const element = inputRef.current;
    if (!element) {
      return;
    }

    fileTreeInputCallbacks.set(element, {
      onSubmit: () => {
        if (blurTimeoutRef.current) {
          clearTimeout(blurTimeoutRef.current);
          blurTimeoutRef.current = null;
        }
        handleSubmit();
      },
      onCancel: () => {
        if (blurTimeoutRef.current) {
          clearTimeout(blurTimeoutRef.current);
          blurTimeoutRef.current = null;
        }
        onCancelRef.current();
      },
    });

    return () => {
      fileTreeInputCallbacks.delete(element);
    };
  });

  useEffect(() => {
    return () => {
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = useCallback(() => {
    if (submittedRef.current) {
      return;
    }

    const trimmedValue = value.trim();
    if (!trimmedValue) {
      onCancelRef.current();
      return;
    }

    submittedRef.current = true;
    onSubmitRef.current(trimmedValue);
  }, [value]);

  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const relatedTarget = event.relatedTarget as Element | null;
      const userClickedAway = isUserInteracting;
      const wentToMonaco = relatedTarget && !!relatedTarget.closest(monacoSelector);
      const wentToBody = relatedTarget === document.body || !relatedTarget;
      const isEarlyBlur = Date.now() - mountedAtRef.current < 500;

      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }

      blurTimeoutRef.current = setTimeout(() => {
        if (document.activeElement === inputRef.current) {
          return;
        }

        if (isEarlyBlur || (!userClickedAway && (wentToMonaco || wentToBody))) {
          inputRef.current?.focus();
          return;
        }

        handleSubmit();
      }, 300);
    },
    [handleSubmit, monacoSelector],
  );

  const handleFocus = useCallback(() => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = null;
    }
  }, []);

  return (
    <div
      className="sft-tree-node sft-inline-create"
      style={{ paddingLeft: `${depth * indentPx + 8}px` }}
      onClick={(event) => event.stopPropagation()}
      onMouseDown={(event) => event.stopPropagation()}
    >
      {hasFolders ? (
        <span className="sft-expand-icon" />
      ) : (
        <span className="sft-expand-icon sft-expand-icon-empty" />
      )}
      <span className="sft-file-icon">
        {type === "folder" ? (
          <Folder size={14} color="var(--sft-accent, var(--accent, #3b82f6))" />
        ) : (
          <File size={14} />
        )}
      </span>
      <input
        ref={inputRef}
        className={FILE_TREE_INLINE_CREATE_INPUT_CLASS}
        title={type === "folder" ? labels.newFolder : labels.newFile}
        value={value}
        placeholder={
          type === "folder"
            ? labels.createFolderPlaceholder
            : labels.createFilePlaceholder
        }
        onChange={(event) => setValue(event.target.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClick={(event) => event.stopPropagation()}
        onMouseDown={(event) => event.stopPropagation()}
      />
    </div>
  );
}

interface FileTreeNodeProps {
  fs: FileTreeFsAdapter;
  node: FileTreeNode;
  depth: number;
  indentPx: number;
  platform: "windows" | "mac" | "linux";
  labels: FileTreeLabels;
  activeFilePath: string | null | undefined;
  onFileClick: (path: string, name: string) => void;
  onRefresh: () => void;
  creatingItem: CreatingItem | null;
  onSetCreating: (item: CreatingItem | null) => void;
  selectedNode: FileTreeSelection | null;
  onSelectNode: (node: FileTreeSelection | null) => void;
  onFileOpened?: (path: string, name: string, isPreview?: boolean) => void;
  onFileDeleted?: (path: string, type: FileTreeItemType, skipBroadcast?: boolean) => void;
  onFileRenamed?: (oldPath: string, newPath: string) => void;
  onFileCreated?: (path: string, name: string, savedContent?: string, isUndo?: boolean) => void;
  onFolderCreated?: (path: string, isUndo?: boolean) => void;
  onFileCopied?: (newPath: string, type: FileTreeItemType) => void;
  onFileMoved?: () => void;
  refreshTrigger?: number;
  renderIcon?: (node: FileTreeNode) => React.ReactNode;
  clipboardSnapshot: FileTreeClipboardItem | null;
  monacoSelector: string;
  portalContainer?: Element | null;
  reportError: (details: FileTreeError) => void;
}

function FileTreeNodeComponent({
  fs,
  node,
  depth,
  indentPx,
  platform,
  labels,
  activeFilePath,
  onFileClick,
  onRefresh,
  creatingItem,
  onSetCreating,
  selectedNode,
  onSelectNode,
  onFileOpened,
  onFileDeleted,
  onFileRenamed,
  onFileCreated,
  onFolderCreated,
  onFileCopied,
  onFileMoved,
  refreshTrigger,
  renderIcon,
  clipboardSnapshot,
  monacoSelector,
  portalContainer,
  reportError,
}: FileTreeNodeProps) {
  const [expanded, setExpanded] = useState(false);
  const [children, setChildren] = useState<FileTreeNode[]>(node.children || []);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [renaming, setRenaming] = useState(false);
  const [newName, setNewName] = useState(node.name);
  const renameInputRef = useRef<HTMLInputElement>(null);
  const renameBlurTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastProcessedActivePath = useRef<string | null>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const commitRenameRef = useRef(false);
  const dragCounter = useRef(0);
  const childrenDragCounter = useRef(0);
  const hasChildFolders = children.some((child) => child.type === "directory");
  const portalTarget = getPortalTarget(portalContainer);
  const isCreatingHere =
    creatingItem &&
    isSamePath(creatingItem.parentPath, node.path) &&
    node.type === "directory";
  const isCut =
    clipboardSnapshot?.action === "cut" &&
    isSamePath(clipboardSnapshot.path, node.path);

  const loadChildren = useCallback(async () => {
    if (node.type !== "directory") {
      return;
    }

    try {
      const items = await fs.readDirectory(node.path);
      setChildren(dedupeNodes(items));
    } catch (error) {
      reportError({
        action: "load-children",
        error,
        node,
        sourcePath: node.path,
      });
    }
  }, [fs, node, reportError]);

  useEffect(() => {
    if (isCreatingHere && !expanded) {
      setExpanded(true);
      void loadChildren();
    }
  }, [expanded, isCreatingHere, loadChildren]);

  useEffect(() => {
    if (expanded && typeof refreshTrigger === "number" && refreshTrigger > 0) {
      void loadChildren();
    }
  }, [expanded, loadChildren, refreshTrigger]);

  useEffect(() => {
    if (activeFilePath !== lastProcessedActivePath.current) {
      lastProcessedActivePath.current = activeFilePath ?? null;

      if (node.type === "directory" && activeFilePath && isPathInside(node.path, activeFilePath)) {
        if (!expanded) {
          setExpanded(true);
          void loadChildren();
        }
      }
    }
  }, [activeFilePath, expanded, loadChildren, node.path, node.type]);

  useEffect(() => {
    if (contextMenu) {
      const handler = (event: Event) => {
        const target = event.target instanceof HTMLElement ? event.target : null;
        if (target?.closest(".sft-context-menu")) {
          return;
        }
        setContextMenu(null);
      };

      const blurHandler = () => setContextMenu(null);
      const closeHandler = () => setContextMenu(null);

      window.addEventListener("mousedown", handler);
      window.addEventListener("blur", blurHandler);
      document.addEventListener(CLOSE_CONTEXT_MENUS_EVENT, closeHandler);

      return () => {
        window.removeEventListener("mousedown", handler);
        window.removeEventListener("blur", blurHandler);
        document.removeEventListener(CLOSE_CONTEXT_MENUS_EVENT, closeHandler);
      };
    }
  }, [contextMenu]);

  useEffect(() => {
    if (renaming) {
      const element = renameInputRef.current;
      if (element) {
        fileTreeInputCallbacks.set(element, {
          onSubmit: () => {
            if (renameBlurTimeoutRef.current) {
              clearTimeout(renameBlurTimeoutRef.current);
              renameBlurTimeoutRef.current = null;
            }
            void commitRename();
          },
          onCancel: () => {
            if (renameBlurTimeoutRef.current) {
              clearTimeout(renameBlurTimeoutRef.current);
              renameBlurTimeoutRef.current = null;
            }
            setRenaming(false);
          },
        });
      }

      return () => {
        if (renameBlurTimeoutRef.current) {
          clearTimeout(renameBlurTimeoutRef.current);
        }
        if (element) {
          fileTreeInputCallbacks.delete(element);
        }
      };
    }
  }, [newName, node.name, node.path, renaming]);

  useEffect(() => {
    if (selectedNode?.type === "file" && isSamePath(selectedNode.path, node.path)) {
      setTimeout(() => {
        nodeRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 50);
    }
  }, [node.path, selectedNode]);

  const toggleExpanded = async () => {
    if (node.type !== "directory") {
      return;
    }

    if (!expanded) {
      await loadChildren();
    }

    setExpanded((value) => !value);
  };

  const closeContextMenu = () => setContextMenu(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    document.dispatchEvent(new CustomEvent(CLOSE_CONTEXT_MENUS_EVENT));
    setContextMenu({ x: event.clientX, y: event.clientY });
  };

  const handleNewFile = () => {
    closeContextMenu();
    const parentPath =
      node.type === "directory" ? normalizePath(node.path) : getParentPath(node.path);
    setTimeout(() => onSetCreating({ type: "file", parentPath }), 0);
  };

  const handleNewFolder = () => {
    closeContextMenu();
    const parentPath =
      node.type === "directory" ? normalizePath(node.path) : getParentPath(node.path);
    setTimeout(() => onSetCreating({ type: "folder", parentPath }), 0);
  };

  const handleInlineCreate = async (name: string) => {
    if (!creatingItem) {
      return;
    }

    const parentPath = normalizePath(creatingItem.parentPath);
    const fullPath = joinTreePath(parentPath, name);
    const itemType = creatingItem.type;
    onSetCreating(null);

    try {
      if (itemType === "file") {
        await fs.createFile(fullPath);
        await loadChildren();
        onFileCreated?.(fullPath, name);
        onFileOpened?.(fullPath, name, false);
      } else {
        await fs.createFolder(fullPath);
        await loadChildren();
        onFolderCreated?.(fullPath);
      }
    } catch (error) {
      reportError({
        action: itemType === "file" ? "create-file" : "create-folder",
        error,
        node,
        targetPath: fullPath,
      });
      await loadChildren().catch(() => undefined);
    }
  };

  const handleDeleteMenuClick = async () => {
    closeContextMenu();

    try {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      const parentPath = getParentPath(node.path);
      const trashPath = joinTreePath(parentPath, `.trash_${Date.now()}_${node.name}`);

      let savedContent: string | undefined;
      if (node.type === "file" && fs.readFile) {
        try {
          savedContent = await fs.readFile(node.path);
        } catch (error) {
          reportError({
            action: "delete-item",
            error,
            node,
            sourcePath: node.path,
          });
        }
      }

      await fs.renameItem(node.path, trashPath);

      pushFileTreeUndoEntry({
        originalPath: node.path,
        trashPath,
        type: node.type,
        restore: async () => {
          await fs.renameItem(trashPath, node.path);
          if (node.type === "file") {
            onFileCreated?.(node.path, node.name, savedContent, true);
          } else {
            onFolderCreated?.(node.path, true);
          }
          onRefresh();
        },
      });

      onFileDeleted?.(node.path, node.type);
      onRefresh();
    } catch (error) {
      reportError({
        action: "delete-item",
        error,
        node,
        sourcePath: node.path,
      });
    }
  };

  const handleCut = (event?: React.MouseEvent) => {
    event?.stopPropagation();
    closeContextMenu();
    setFileTreeClipboard({ path: node.path, type: node.type, action: "cut" });
  };

  const handleCopy = (event?: React.MouseEvent) => {
    event?.stopPropagation();
    closeContextMenu();
    setFileTreeClipboard({ path: node.path, type: node.type, action: "copy" });
  };

  const handlePaste = async (event?: React.MouseEvent) => {
    event?.stopPropagation();
    closeContextMenu();

    const clipboard = getFileTreeClipboard();
    if (!clipboard) {
      return;
    }

    const targetDirectory =
      node.type === "directory" ? normalizePath(node.path) : getParentPath(node.path);
    const fileName = getBaseName(clipboard.path);
    const newPath = joinTreePath(targetDirectory, fileName);

    if (clipboard.action === "cut" && isSamePath(newPath, clipboard.path)) {
      clearFileTreeClipboard();
      return;
    }

    try {
      if (clipboard.action === "cut") {
        onFileDeleted?.(clipboard.path, clipboard.type, true);

        let finalPath = newPath;
        try {
          const result = await fs.renameItem(clipboard.path, newPath);
          if (result) {
            finalPath = normalizePath(result);
          }
        } catch (error) {
          reportError({
            action: "paste-item",
            error,
            node,
            sourcePath: clipboard.path,
            targetPath: newPath,
          });
          return;
        }

        onFileRenamed?.(clipboard.path, finalPath);
        clearFileTreeClipboard();
        onFileMoved?.();
      } else {
        let finalPath = newPath;
        try {
          const result = await fs.copyItem(clipboard.path, newPath);
          if (result) {
            finalPath = normalizePath(result);
          }
        } catch (error) {
          reportError({
            action: "paste-item",
            error,
            node,
            sourcePath: clipboard.path,
            targetPath: newPath,
          });
          return;
        }

        onFileCopied?.(finalPath, clipboard.type);
        onFileMoved?.();
      }

      onRefresh();
    } catch (error) {
      reportError({
        action: "paste-item",
        error,
        node,
        sourcePath: clipboard.path,
        targetPath: newPath,
      });
    }
  };

  const handleDragStart = (event: React.DragEvent) => {
    event.stopPropagation();
    event.dataTransfer.setData(
      DRAG_PAYLOAD_TYPE,
      JSON.stringify({ path: node.path, type: node.type }),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnter = (event: React.DragEvent) => {
    if (node.type !== "directory") {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    dragCounter.current += 1;
    if (dragCounter.current === 1) {
      setIsDragOver(true);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    if (node.type === "directory") {
      event.stopPropagation();
    }
    event.dataTransfer.dropEffect = "move";
  };

  const handleDragLeave = (event: React.DragEvent) => {
    if (node.type !== "directory") {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) {
      setIsDragOver(false);
    }
  };

  const handleDrop = async (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    dragCounter.current = 0;
    setIsDragOver(false);

    const data = event.dataTransfer.getData(DRAG_PAYLOAD_TYPE);
    if (!data) {
      return;
    }

    const targetDirectory =
      node.type === "directory" ? normalizePath(node.path) : getParentPath(node.path);

    try {
      const source = JSON.parse(data) as { path: string; type: FileTreeItemType };
      const newPath = joinTreePath(targetDirectory, getBaseName(source.path));

      if (isSamePath(newPath, source.path)) {
        return;
      }

      onFileDeleted?.(source.path, source.type, true);

      let finalPath = newPath;
      try {
        const result = await fs.renameItem(source.path, newPath);
        if (result) {
          finalPath = normalizePath(result);
        }
      } catch (error) {
        reportError({
          action: "move-item",
          error,
          node,
          sourcePath: source.path,
          targetPath: newPath,
        });
        return;
      }

      onFileRenamed?.(source.path, finalPath);
      onRefresh();
      onFileMoved?.();
    } catch (error) {
      reportError({
        action: "move-item",
        error,
        node,
      });
    }
  };

  const handleChildrenDragEnter = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    childrenDragCounter.current += 1;
    if (childrenDragCounter.current === 1) {
      setIsDragOver(true);
    }
  };

  const handleChildrenDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "move";
  };

  const handleChildrenDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    childrenDragCounter.current -= 1;
    if (childrenDragCounter.current === 0) {
      setIsDragOver(false);
    }
  };

  const handleChildrenDrop = async (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    childrenDragCounter.current = 0;
    dragCounter.current = 0;
    setIsDragOver(false);

    const data = event.dataTransfer.getData(DRAG_PAYLOAD_TYPE);
    if (!data) {
      return;
    }

    try {
      const source = JSON.parse(data) as { path: string; type: FileTreeItemType };
      const newPath = joinTreePath(node.path, getBaseName(source.path));

      if (isSamePath(newPath, source.path)) {
        return;
      }

      onFileDeleted?.(source.path, source.type, true);

      let finalPath = newPath;
      try {
        const result = await fs.renameItem(source.path, newPath);
        if (result) {
          finalPath = normalizePath(result);
        }
      } catch (error) {
        reportError({
          action: "move-item",
          error,
          node,
          sourcePath: source.path,
          targetPath: newPath,
        });
        return;
      }

      onFileRenamed?.(source.path, finalPath);
      onRefresh();
      onFileMoved?.();
    } catch (error) {
      reportError({
        action: "move-item",
        error,
        node,
      });
    }
  };

  const startRename = () => {
    closeContextMenu();
    setNewName(node.name);
    setRenaming(true);
    commitRenameRef.current = false;
  };

  const commitRename = async () => {
    if (commitRenameRef.current) {
      return;
    }

    commitRenameRef.current = true;
    setRenaming(false);

    const trimmedName = newName.trim();
    if (!trimmedName || trimmedName === node.name) {
      commitRenameRef.current = false;
      return;
    }

    const newPath = joinTreePath(getParentPath(node.path), trimmedName);
    let finalPath = newPath;

    try {
      const result = await fs.renameItem(node.path, newPath);
      if (result) {
        finalPath = normalizePath(result);
      }
    } catch (error) {
      commitRenameRef.current = false;
      reportError({
        action: "rename-item",
        error,
        node,
        sourcePath: node.path,
        targetPath: newPath,
      });
      onRefresh();
      return;
    }

    onFileRenamed?.(node.path, finalPath);
    onRefresh();
    commitRenameRef.current = false;
  };

  const handleRenameBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const relatedTarget = event.relatedTarget as Element | null;
      const userClickedAway = isUserInteracting;
      const wentToMonaco = relatedTarget && !!relatedTarget.closest(monacoSelector);
      const wentToBody = relatedTarget === document.body || !relatedTarget;

      if (renameBlurTimeoutRef.current) {
        clearTimeout(renameBlurTimeoutRef.current);
      }

      renameBlurTimeoutRef.current = setTimeout(() => {
        if (document.activeElement === renameInputRef.current) {
          return;
        }

        if (!userClickedAway && (wentToMonaco || wentToBody)) {
          renameInputRef.current?.focus();
          return;
        }

        void commitRename();
      }, 300);
    },
    [monacoSelector, newName, node.name, node.path],
  );

  const isSelected = selectedNode ? isSamePath(selectedNode.path, node.path) : false;
  const isSelectedFile = isSelected && node.type === "file";
  const isSelectedFolder = isSelected && node.type === "directory";

  return (
    <div className="sft-tree-node-wrapper" ref={nodeRef}>
      <div
        className={cx(
          "sft-tree-node",
          isSelectedFile && "sft-active",
          isSelectedFolder && "sft-selected-folder",
          isDragOver && node.type === "directory" && "sft-drag-over",
          isCut && "sft-cut-node",
        )}
        style={{ paddingLeft: `${depth * indentPx + 8}px` }}
        draggable={!renaming}
        onDragStart={handleDragStart}
        {...(node.type === "directory"
          ? {
              onDragEnter: handleDragEnter,
              onDragOver: handleDragOver,
              onDragLeave: handleDragLeave,
              onDrop: handleDrop,
            }
          : {
              onDragOver: (event: React.DragEvent) => {
                event.preventDefault();
                event.dataTransfer.dropEffect = "move";
              },
            })}
        onKeyDown={(event) => {
          if (renaming) {
            return;
          }

          if (event.key.toLowerCase() === "x" && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            event.stopPropagation();
            handleCut();
            return;
          }

          if (event.key.toLowerCase() === "c" && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            event.stopPropagation();
            handleCopy();
            return;
          }

          if (event.key.toLowerCase() === "v" && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            event.stopPropagation();
            void handlePaste();
            return;
          }

          if (event.key === "F2") {
            event.preventDefault();
            event.stopPropagation();
            startRename();
            return;
          }

          if (
            event.key === "Delete" ||
            event.key === "Del" ||
            (event.metaKey && event.key === "Backspace")
          ) {
            event.preventDefault();
            event.stopPropagation();
            void handleDeleteMenuClick();
            return;
          }

          if (event.key === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            onSelectNode({ path: node.path, type: node.type });
            if (node.type === "file") {
              onFileClick(node.path, node.name);
            } else {
              void toggleExpanded();
            }
          }
        }}
        tabIndex={0}
        onClick={(event) => {
          event.stopPropagation();
          (event.currentTarget as HTMLElement).focus();
          onSelectNode({ path: node.path, type: node.type });
          if (node.type === "file") {
            onFileClick(node.path, node.name);
          } else {
            void toggleExpanded();
          }
        }}
        onContextMenu={(event) => {
          onSelectNode({ path: node.path, type: node.type });
          handleContextMenu(event);
        }}
      >
        {hasChildFolders || node.type === "directory" ? (
          node.type === "directory" ? (
            <span className="sft-expand-icon">
              {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </span>
          ) : (
            <span className="sft-expand-icon" />
          )
        ) : (
          <span className="sft-expand-icon sft-expand-icon-empty" />
        )}
        <span className="sft-file-icon">
          {renderIcon ? renderIcon(node) : renderDefaultIcon(node)}
        </span>
        {renaming ? (
          <input
            ref={renameInputRef}
            autoFocus
            className={FILE_TREE_RENAME_INPUT_CLASS}
            title={labels.rename}
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            onFocus={(event) => {
              if (renameBlurTimeoutRef.current) {
                clearTimeout(renameBlurTimeoutRef.current);
                renameBlurTimeoutRef.current = null;
              }
              event.target.select();
            }}
            onBlur={handleRenameBlur}
            onClick={(event) => event.stopPropagation()}
            onMouseDown={(event) => event.stopPropagation()}
          />
        ) : (
          <span className="sft-node-name">{node.name}</span>
        )}
      </div>

      {contextMenu && portalTarget
        ? createPortal(
            <div
              className="sft-context-menu"
              style={{ top: contextMenu.y, left: contextMenu.x }}
            >
              <div className="sft-context-menu-item" onClick={handleNewFile}>
                <span>{labels.newFile}</span>
              </div>
              <div className="sft-context-menu-item" onClick={handleNewFolder}>
                <span>{labels.newFolder}</span>
              </div>
              <div className="sft-context-menu-separator" />
              <div className="sft-context-menu-item" onClick={handleCut}>
                <span>{labels.cut}</span>
                <span className="sft-context-menu-shortcut">
                  {getShortcutLabel("cut", platform)}
                </span>
              </div>
              <div className="sft-context-menu-item" onClick={handleCopy}>
                <span>{labels.copy}</span>
                <span className="sft-context-menu-shortcut">
                  {getShortcutLabel("copy", platform)}
                </span>
              </div>
              <div
                className={cx(
                  "sft-context-menu-item",
                  !clipboardSnapshot && "sft-disabled",
                )}
                onClick={(event) => {
                  if (!clipboardSnapshot) {
                    return;
                  }
                  void handlePaste(event);
                }}
              >
                <span>{labels.paste}</span>
                <span className="sft-context-menu-shortcut">
                  {getShortcutLabel("paste", platform)}
                </span>
              </div>
              <div className="sft-context-menu-separator" />
              <div className="sft-context-menu-item" onClick={startRename}>
                <span>{labels.rename}</span>
                <span className="sft-context-menu-shortcut">F2</span>
              </div>
              <div className="sft-context-menu-separator" />
              <div
                className="sft-context-menu-item sft-danger"
                onClick={() => {
                  void handleDeleteMenuClick();
                }}
              >
                <span>{labels.delete}</span>
                <span className="sft-context-menu-shortcut">
                  {getShortcutLabel("delete", platform)}
                </span>
              </div>
            </div>,
            portalTarget,
          )
        : null}

      {expanded && node.type === "directory" ? (
        <div
          className="sft-tree-children"
          onDragEnter={handleChildrenDragEnter}
          onDragOver={handleChildrenDragOver}
          onDragLeave={handleChildrenDragLeave}
          onDrop={handleChildrenDrop}
        >
          {isCreatingHere && creatingItem?.type === "folder" ? (
            <InlineCreateInput
              type={creatingItem.type}
              depth={depth + 1}
              hasFolders={hasChildFolders}
              indentPx={indentPx}
              labels={labels}
              monacoSelector={monacoSelector}
              onSubmit={handleInlineCreate}
              onCancel={() => onSetCreating(null)}
            />
          ) : null}
          {children
            .filter((child) => child.type === "directory")
            .map((child) => (
              <FileTreeNodeComponent
                key={child.path}
                fs={fs}
                node={child}
                depth={depth + 1}
                indentPx={indentPx}
                platform={platform}
                labels={labels}
                activeFilePath={activeFilePath}
                onFileClick={onFileClick}
                onRefresh={loadChildren}
                creatingItem={creatingItem}
                onSetCreating={onSetCreating}
                selectedNode={selectedNode}
                onSelectNode={onSelectNode}
                onFileOpened={onFileOpened}
                onFileDeleted={onFileDeleted}
                onFileRenamed={onFileRenamed}
                onFileCreated={onFileCreated}
                onFolderCreated={onFolderCreated}
                onFileCopied={onFileCopied}
                onFileMoved={onFileMoved}
                refreshTrigger={refreshTrigger}
                renderIcon={renderIcon}
                clipboardSnapshot={clipboardSnapshot}
                monacoSelector={monacoSelector}
                portalContainer={portalContainer}
                reportError={reportError}
              />
            ))}
          {isCreatingHere && creatingItem?.type === "file" ? (
            <InlineCreateInput
              type={creatingItem.type}
              depth={depth + 1}
              hasFolders={hasChildFolders}
              indentPx={indentPx}
              labels={labels}
              monacoSelector={monacoSelector}
              onSubmit={handleInlineCreate}
              onCancel={() => onSetCreating(null)}
            />
          ) : null}
          {children
            .filter((child) => child.type !== "directory")
            .map((child) => (
              <FileTreeNodeComponent
                key={child.path}
                fs={fs}
                node={child}
                depth={depth + 1}
                indentPx={indentPx}
                platform={platform}
                labels={labels}
                activeFilePath={activeFilePath}
                onFileClick={onFileClick}
                onRefresh={loadChildren}
                creatingItem={creatingItem}
                onSetCreating={onSetCreating}
                selectedNode={selectedNode}
                onSelectNode={onSelectNode}
                onFileOpened={onFileOpened}
                onFileDeleted={onFileDeleted}
                onFileRenamed={onFileRenamed}
                onFileCreated={onFileCreated}
                onFolderCreated={onFolderCreated}
                onFileCopied={onFileCopied}
                onFileMoved={onFileMoved}
                refreshTrigger={refreshTrigger}
                renderIcon={renderIcon}
                clipboardSnapshot={clipboardSnapshot}
                monacoSelector={monacoSelector}
                portalContainer={portalContainer}
                reportError={reportError}
              />
            ))}
        </div>
      ) : null}
    </div>
  );
}

const FileTree = React.memo(function FileTree({
  fs,
  workspaceRoot,
  onOpenFolder,
  onFileClick,
  activeFilePath,
  onFileOpened,
  newFileTrigger,
  newFolderTrigger,
  onFileDeleted,
  onFileRenamed,
  onFileCreated,
  onFolderCreated,
  onFileCopied,
  onFileMoved,
  refreshTrigger,
  className,
  style,
  headerTitle,
  emptyState,
  renderIcon,
  labels,
  platform = "auto",
  portalContainer,
  enableUndoHotkeys = true,
  monacoSelector = ".monaco-editor",
  onSelectionChange,
  onError,
}: FileTreeProps) {
  const [rootNodes, setRootNodes] = useState<FileTreeNode[]>([]);
  const [creatingItem, setCreatingItem] = useState<CreatingItem | null>(null);
  const [selectedNode, setSelectedNode] = useState<FileTreeSelection | null>(
    workspaceRoot ? { path: workspaceRoot, type: "directory" } : null,
  );
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [clipboardSnapshot, setClipboardSnapshot] = useState<FileTreeClipboardItem | null>(
    () => getFileTreeClipboard(),
  );
  const resolvedPlatform = resolvePlatform(platform);
  const indentPx = resolvedPlatform === "windows" ? 16 : 28;
  const resolvedLabels = { ...defaultFileTreeLabels, ...labels };
  const portalTarget = getPortalTarget(portalContainer);

  const reportError = useCallback(
    (details: FileTreeError) => {
      onError?.(details);
      console.error("[jack-file-tree]", details.action, details.error);
    },
    [onError],
  );

  useEffect(() => {
    ensureInteractionTracking();
  }, []);

  useEffect(() => {
    return subscribeFileTreeClipboard(() => {
      setClipboardSnapshot(getFileTreeClipboard());
    });
  }, []);

  useEffect(() => {
    if (!enableUndoHotkeys) {
      return;
    }

    return attachFileTreeUndoHotkeys({ monacoSelector });
  }, [enableUndoHotkeys, monacoSelector]);

  useEffect(() => {
    setSelectedNode(workspaceRoot ? { path: workspaceRoot, type: "directory" } : null);
  }, [workspaceRoot]);

  useEffect(() => {
    if (activeFilePath) {
      setSelectedNode({ path: activeFilePath, type: "file" });
    }
  }, [activeFilePath]);

  useEffect(() => {
    if (workspaceRoot && !selectedNode) {
      setSelectedNode({ path: workspaceRoot, type: "directory" });
    }
  }, [selectedNode, workspaceRoot]);

  useEffect(() => {
    onSelectionChange?.(selectedNode);
  }, [onSelectionChange, selectedNode]);

  const loadRoot = useCallback(async () => {
    if (!workspaceRoot) {
      return;
    }

    try {
      const items = await fs.readDirectory(workspaceRoot);
      setRootNodes(dedupeNodes(items));
    } catch (error) {
      reportError({
        action: "load-root",
        error,
        sourcePath: workspaceRoot,
      });
    }
  }, [fs, reportError, workspaceRoot]);

  useEffect(() => {
    void loadRoot();
  }, [loadRoot]);

  useEffect(() => {
    if (typeof refreshTrigger === "number" && refreshTrigger > 0) {
      void loadRoot();
      setCreatingItem((current) => (current ? current : null));
    }
  }, [loadRoot, refreshTrigger]);

  useEffect(() => {
    if (!newFileTrigger || !workspaceRoot) {
      return;
    }

    setTimeout(() => {
      setCreatingItem({
        type: "file",
        parentPath: getSelectedContainerPath(selectedNode, workspaceRoot),
      });
    }, 0);
  }, [newFileTrigger, selectedNode, workspaceRoot]);

  useEffect(() => {
    if (!newFolderTrigger || !workspaceRoot) {
      return;
    }

    setTimeout(() => {
      setCreatingItem({
        type: "folder",
        parentPath: getSelectedContainerPath(selectedNode, workspaceRoot),
      });
    }, 0);
  }, [newFolderTrigger, selectedNode, workspaceRoot]);

  useEffect(() => {
    if (contextMenu) {
      const handler = (event: Event) => {
        const target = event.target instanceof HTMLElement ? event.target : null;
        if (target?.closest(".sft-context-menu")) {
          return;
        }
        setContextMenu(null);
      };

      const blurHandler = () => setContextMenu(null);
      const closeHandler = () => setContextMenu(null);

      window.addEventListener("mousedown", handler);
      window.addEventListener("blur", blurHandler);
      document.addEventListener(CLOSE_CONTEXT_MENUS_EVENT, closeHandler);

      return () => {
        window.removeEventListener("mousedown", handler);
        window.removeEventListener("blur", blurHandler);
        document.removeEventListener(CLOSE_CONTEXT_MENUS_EVENT, closeHandler);
      };
    }
  }, [contextMenu]);

  const handleSetCreating = (item: CreatingItem | null) => {
    setCreatingItem(item);
  };

  const handleRootPaste = async () => {
    setContextMenu(null);

    const clipboard = getFileTreeClipboard();
    if (!clipboard || !workspaceRoot) {
      return;
    }

    const newPath = joinTreePath(normalizePath(workspaceRoot), getBaseName(clipboard.path));

    if (clipboard.action === "cut" && isSamePath(newPath, clipboard.path)) {
      clearFileTreeClipboard();
      return;
    }

    try {
      if (clipboard.action === "cut") {
        onFileDeleted?.(clipboard.path, clipboard.type, true);

        let finalPath = newPath;
        try {
          const result = await fs.renameItem(clipboard.path, newPath);
          if (result) {
            finalPath = normalizePath(result);
          }
        } catch (error) {
          reportError({
            action: "paste-item",
            error,
            sourcePath: clipboard.path,
            targetPath: newPath,
          });
          return;
        }

        onFileRenamed?.(clipboard.path, finalPath);
        clearFileTreeClipboard();
        onFileMoved?.();
      } else {
        let finalPath = newPath;
        try {
          const result = await fs.copyItem(clipboard.path, newPath);
          if (result) {
            finalPath = normalizePath(result);
          }
        } catch (error) {
          reportError({
            action: "paste-item",
            error,
            sourcePath: clipboard.path,
            targetPath: newPath,
          });
          return;
        }

        onFileCopied?.(finalPath, clipboard.type);
        onFileMoved?.();
      }

      await loadRoot();
    } catch (error) {
      reportError({
        action: "paste-item",
        error,
        sourcePath: clipboard.path,
        targetPath: newPath,
      });
    }
  };

  const handleRootDrop = async (event: React.DragEvent) => {
    event.preventDefault();

    const data = event.dataTransfer.getData(DRAG_PAYLOAD_TYPE);
    if (!data || !workspaceRoot) {
      return;
    }

    try {
      const source = JSON.parse(data) as { path: string; type: FileTreeItemType };
      const newPath = joinTreePath(normalizePath(workspaceRoot), getBaseName(source.path));

      if (isSamePath(newPath, source.path)) {
        return;
      }

      onFileDeleted?.(source.path, source.type, true);

      let finalPath = newPath;
      try {
        const result = await fs.renameItem(source.path, newPath);
        if (result) {
          finalPath = normalizePath(result);
        }
      } catch (error) {
        reportError({
          action: "move-item",
          error,
          sourcePath: source.path,
          targetPath: newPath,
        });
        return;
      }

      onFileRenamed?.(source.path, finalPath);
      await loadRoot();
      onFileMoved?.();
    } catch (error) {
      reportError({
        action: "move-item",
        error,
      });
    }
  };

  const hasRootFolders = rootNodes.some((node) => node.type === "directory");
  const resolvedHeaderTitle =
    headerTitle || (workspaceRoot ? getBaseName(workspaceRoot) : resolvedLabels.explorer);

  if (!workspaceRoot) {
    return (
      <div
        className={cx(
          "sft-file-tree-panel",
          resolvedPlatform === "windows" && "sft-platform-windows",
          className,
        )}
        style={style}
      >
        <div className="sft-tree-header">
          <span className="sft-tree-header-title">{resolvedLabels.explorer}</span>
          <div className="sft-tree-actions" />
        </div>
        {emptyState ? (
          emptyState
        ) : (
          <div className="sft-empty-folder-container">
            <p className="sft-empty-folder-text">{resolvedLabels.noFolderOpened}</p>
            {onOpenFolder ? (
              <div className="sft-empty-folder-actions">
                <button
                  type="button"
                  onClick={onOpenFolder}
                  className="sft-empty-folder-btn"
                >
                  {resolvedLabels.openFolder}
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cx(
        "sft-file-tree-panel",
        resolvedPlatform === "windows" && "sft-platform-windows",
        className,
      )}
      style={style}
      onClick={() => setSelectedNode({ path: workspaceRoot, type: "directory" })}
      onDragEnter={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onDragOver={(event) => {
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = "move";
      }}
      onDrop={(event) => {
        void handleRootDrop(event);
      }}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key.toLowerCase() === "v" && (event.metaKey || event.ctrlKey)) {
          if ((event.target as HTMLElement).closest(".sft-tree-node")) {
            return;
          }
          event.preventDefault();
          void handleRootPaste();
        }
      }}
      onContextMenu={(event) => {
        if ((event.target as HTMLElement).closest(".sft-tree-node")) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        document.dispatchEvent(new CustomEvent(CLOSE_CONTEXT_MENUS_EVENT));
        setContextMenu({ x: event.clientX, y: event.clientY });
        setSelectedNode({ path: workspaceRoot, type: "directory" });
      }}
    >
      <div className="sft-tree-header" title={workspaceRoot}>
        <span className="sft-tree-header-title">{resolvedHeaderTitle}</span>
        <div className="sft-tree-actions">
          <button
            type="button"
            className="sft-tree-action-btn"
            title={resolvedLabels.newFile}
            onClick={(event) => {
              event.stopPropagation();
              setTimeout(() => {
                setCreatingItem({
                  type: "file",
                  parentPath: getSelectedContainerPath(selectedNode, workspaceRoot),
                });
              }, 0);
            }}
          >
            <FilePlus2 size={18} />
          </button>
          <button
            type="button"
            className="sft-tree-action-btn"
            title={resolvedLabels.newFolder}
            onClick={(event) => {
              event.stopPropagation();
              setTimeout(() => {
                setCreatingItem({
                  type: "folder",
                  parentPath: getSelectedContainerPath(selectedNode, workspaceRoot),
                });
              }, 0);
            }}
          >
            <FolderPlus size={18} />
          </button>
        </div>
      </div>

      <div className="sft-tree-content">
        {creatingItem &&
        isSamePath(creatingItem.parentPath, workspaceRoot) &&
        creatingItem.type === "folder" ? (
          <InlineCreateInput
            type={creatingItem.type}
            depth={0}
            hasFolders={hasRootFolders}
            indentPx={indentPx}
            labels={resolvedLabels}
            monacoSelector={monacoSelector}
            onSubmit={async (name) => {
              const fullPath = joinTreePath(normalizePath(workspaceRoot), name);
              setCreatingItem(null);

              try {
                await fs.createFolder(fullPath);
                await loadRoot();
                onFolderCreated?.(fullPath);
              } catch (error) {
                reportError({
                  action: "create-folder",
                  error,
                  targetPath: fullPath,
                });
                await loadRoot();
              }
            }}
            onCancel={() => setCreatingItem(null)}
          />
        ) : null}

        {rootNodes
          .filter((node) => node.type === "directory")
          .map((node) => (
            <FileTreeNodeComponent
              key={node.path}
              fs={fs}
              node={node}
              depth={0}
              indentPx={indentPx}
              platform={resolvedPlatform}
              labels={resolvedLabels}
              activeFilePath={activeFilePath}
              onFileClick={onFileClick}
              onRefresh={loadRoot}
              creatingItem={creatingItem}
              onSetCreating={handleSetCreating}
              selectedNode={selectedNode}
              onSelectNode={setSelectedNode}
              onFileOpened={onFileOpened}
              onFileDeleted={onFileDeleted}
              onFileRenamed={onFileRenamed}
              onFileCreated={onFileCreated}
              onFolderCreated={onFolderCreated}
              onFileCopied={onFileCopied}
              onFileMoved={onFileMoved}
              refreshTrigger={refreshTrigger}
              renderIcon={renderIcon}
              clipboardSnapshot={clipboardSnapshot}
              monacoSelector={monacoSelector}
              portalContainer={portalContainer}
              reportError={reportError}
            />
          ))}

        {creatingItem &&
        isSamePath(creatingItem.parentPath, workspaceRoot) &&
        creatingItem.type === "file" ? (
          <InlineCreateInput
            type={creatingItem.type}
            depth={0}
            hasFolders={hasRootFolders}
            indentPx={indentPx}
            labels={resolvedLabels}
            monacoSelector={monacoSelector}
            onSubmit={async (name) => {
              const fullPath = joinTreePath(normalizePath(workspaceRoot), name);
              setCreatingItem(null);

              try {
                await fs.createFile(fullPath);
                await loadRoot();
                onFileCreated?.(fullPath, name);
                onFileOpened?.(fullPath, name, false);
              } catch (error) {
                reportError({
                  action: "create-file",
                  error,
                  targetPath: fullPath,
                });
                await loadRoot();
              }
            }}
            onCancel={() => setCreatingItem(null)}
          />
        ) : null}

        {rootNodes
          .filter((node) => node.type !== "directory")
          .map((node) => (
            <FileTreeNodeComponent
              key={node.path}
              fs={fs}
              node={node}
              depth={0}
              indentPx={indentPx}
              platform={resolvedPlatform}
              labels={resolvedLabels}
              activeFilePath={activeFilePath}
              onFileClick={onFileClick}
              onRefresh={loadRoot}
              creatingItem={creatingItem}
              onSetCreating={handleSetCreating}
              selectedNode={selectedNode}
              onSelectNode={setSelectedNode}
              onFileOpened={onFileOpened}
              onFileDeleted={onFileDeleted}
              onFileRenamed={onFileRenamed}
              onFileCreated={onFileCreated}
              onFolderCreated={onFolderCreated}
              onFileCopied={onFileCopied}
              onFileMoved={onFileMoved}
              refreshTrigger={refreshTrigger}
              renderIcon={renderIcon}
              clipboardSnapshot={clipboardSnapshot}
              monacoSelector={monacoSelector}
              portalContainer={portalContainer}
              reportError={reportError}
            />
          ))}
      </div>

      {contextMenu && portalTarget
        ? createPortal(
            <div
              className="sft-context-menu"
              style={{ top: contextMenu.y, left: contextMenu.x }}
            >
              <div
                className="sft-context-menu-item"
                onClick={() => {
                  setTimeout(
                    () =>
                      setCreatingItem({
                        type: "file",
                        parentPath: workspaceRoot,
                      }),
                    0,
                  );
                  setContextMenu(null);
                }}
              >
                <span>{resolvedLabels.newFile}</span>
              </div>
              <div
                className="sft-context-menu-item"
                onClick={() => {
                  setTimeout(
                    () =>
                      setCreatingItem({
                        type: "folder",
                        parentPath: workspaceRoot,
                      }),
                    0,
                  );
                  setContextMenu(null);
                }}
              >
                <span>{resolvedLabels.newFolder}</span>
              </div>
              <div className="sft-context-menu-separator" />
              <div
                className={cx(
                  "sft-context-menu-item",
                  !clipboardSnapshot && "sft-disabled",
                )}
                onClick={() => {
                  if (!clipboardSnapshot) {
                    return;
                  }
                  void handleRootPaste();
                }}
              >
                <span>{resolvedLabels.paste}</span>
                <span className="sft-context-menu-shortcut">
                  {getShortcutLabel("paste", resolvedPlatform)}
                </span>
              </div>
            </div>,
            portalTarget,
          )
        : null}
    </div>
  );
});

export default FileTree;
