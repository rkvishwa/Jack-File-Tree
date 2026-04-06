import type { CSSProperties, ReactNode } from "react";

export type FileTreeItemType = "file" | "directory";

export interface FileTreeNode {
  name: string;
  type: FileTreeItemType;
  path: string;
  children?: FileTreeNode[];
  extension?: string;
}

export interface FileTreeSelection {
  path: string;
  type: FileTreeItemType;
}

export interface FileTreeClipboardItem {
  path: string;
  type: FileTreeItemType;
  action: "cut" | "copy";
}

export type FileTreeSidebarPosition = "left" | "right";

export type FileTreeContextMenuScope = "root" | "node";

export type FileTreeContextMenuActionId =
  | "new-file"
  | "new-folder"
  | "cut"
  | "copy"
  | "paste"
  | "rename"
  | "delete";

export interface FileTreeOpenFolderButtonRenderProps {
  label: string;
  onClick?: () => void;
  disabled: boolean;
  className: string;
  style?: CSSProperties;
}

export interface FileTreeEmptyStateRenderProps {
  labels: FileTreeLabels;
  onOpenFolder?: () => void;
  openFolderButton: FileTreeOpenFolderButtonRenderProps;
}

export interface FileTreeTheme {
  backgroundPrimary?: string;
  backgroundSecondary?: string;
  backgroundHover?: string;
  textPrimary?: string;
  textSecondary?: string;
  textMuted?: string;
  accent?: string;
  accentTransparent?: string;
  danger?: string;
  menuBackground?: string;
  menuBorder?: string;
  menuHover?: string;
  menuText?: string;
  sidebarBorder?: string;
  openFolderButtonBackground?: string;
  openFolderButtonBackgroundHover?: string;
  openFolderButtonText?: string;
  openFolderButtonBorder?: string;
  fontFamily?: string;
  fontFamilyWindows?: string;
  panelTopPadding?: string | number;
  headerTitleOffsetY?: string | number;
  headerActionsOffsetY?: string | number;
}

export interface FileTreeHeaderActionRenderProps {
  id: "new-file" | "new-folder";
  label: string;
  title: string;
  className: string;
  icon: ReactNode;
  onClick: () => void;
}

export interface FileTreeHeaderRenderProps {
  workspaceRoot: string | null;
  title: string;
  labels: FileTreeLabels;
  selection: FileTreeSelection | null;
  sidebarPosition: FileTreeSidebarPosition;
  className: string;
  style?: CSSProperties;
  titleClassName: string;
  actionsClassName: string;
  actionsStyle?: CSSProperties;
  actions: FileTreeHeaderActionRenderProps[];
  defaultActions: ReactNode;
}

export interface FileTreeFooterRenderProps {
  workspaceRoot: string | null;
  labels: FileTreeLabels;
  selection: FileTreeSelection | null;
  sidebarPosition: FileTreeSidebarPosition;
  className: string;
  style?: CSSProperties;
}

export interface FileTreeContextMenuActionItem {
  id: FileTreeContextMenuActionId;
  label: string;
  shortcut?: string;
  danger?: boolean;
  disabled?: boolean;
  onSelect: () => void | Promise<void>;
}

export interface FileTreeContextMenuRenderProps {
  scope: FileTreeContextMenuScope;
  node?: FileTreeNode;
  position: { x: number; y: number };
  groups: FileTreeContextMenuActionItem[][];
  closeMenu: () => void;
  clipboard: FileTreeClipboardItem | null;
  labels: FileTreeLabels;
  platform: "windows" | "mac" | "linux";
}

export interface FileTreeContextMenuOptions {
  enabled?: boolean;
  actions?: Partial<Record<FileTreeContextMenuActionId, boolean>>;
  renderMenu?: (props: FileTreeContextMenuRenderProps) => ReactNode;
}

export interface FileTreeFsAdapter {
  readDirectory: (path: string) => Promise<FileTreeNode[]>;
  readFile?: (path: string) => Promise<string>;
  createFile: (path: string) => Promise<string | void>;
  createFolder: (path: string) => Promise<string | void>;
  renameItem: (oldPath: string, newPath: string) => Promise<string | void>;
  copyItem: (oldPath: string, newPath: string) => Promise<string | void>;
}

export interface FileTreeLabels {
  explorer: string;
  openFolder: string;
  noFolderOpened: string;
  newFile: string;
  newFolder: string;
  cut: string;
  copy: string;
  paste: string;
  rename: string;
  delete: string;
  createFilePlaceholder: string;
  createFolderPlaceholder: string;
}

export const defaultFileTreeLabels: FileTreeLabels = {
  explorer: "Explorer",
  openFolder: "Open Folder",
  noFolderOpened: "No folder opened",
  newFile: "New File",
  newFolder: "New Folder",
  cut: "Cut",
  copy: "Copy",
  paste: "Paste",
  rename: "Rename",
  delete: "Delete",
  createFilePlaceholder: "File name",
  createFolderPlaceholder: "Folder name",
};

export type FileTreePlatform = "auto" | "windows" | "mac" | "linux";

export type FileTreeAction =
  | "create-file"
  | "create-folder"
  | "delete-item"
  | "load-children"
  | "load-root"
  | "move-item"
  | "paste-item"
  | "rename-item"
  | "restore-item";

export interface FileTreeError {
  action: FileTreeAction;
  error: unknown;
  node?: FileTreeNode;
  sourcePath?: string;
  targetPath?: string;
}

export interface FileTreeProps {
  fs: FileTreeFsAdapter;
  workspaceRoot: string | null;
  onOpenFolder?: () => void;
  onFileClick: (path: string, name: string) => void;
  activeFilePath?: string | null;
  onFileOpened?: (path: string, name: string, isPreview?: boolean) => void;
  newFileTrigger?: number;
  newFolderTrigger?: number;
  onFileDeleted?: (path: string, type: FileTreeItemType, skipBroadcast?: boolean) => void;
  onFileRenamed?: (oldPath: string, newPath: string) => void;
  onFileCreated?: (path: string, name: string, savedContent?: string, isUndo?: boolean) => void;
  onFolderCreated?: (path: string, isUndo?: boolean) => void;
  onFileCopied?: (newPath: string, type: FileTreeItemType) => void;
  onFileMoved?: () => void;
  refreshTrigger?: number;
  className?: string;
  style?: CSSProperties;
  width?: CSSProperties["width"];
  minWidth?: CSSProperties["minWidth"];
  maxWidth?: CSSProperties["maxWidth"];
  headerTitle?: string;
  showHeader?: boolean;
  showHeaderActions?: boolean;
  headerClassName?: string;
  headerStyle?: CSSProperties;
  headerActionsClassName?: string;
  headerActionsStyle?: CSSProperties;
  renderHeader?: (props: FileTreeHeaderRenderProps) => ReactNode;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  footer?: ReactNode;
  footerClassName?: string;
  footerStyle?: CSSProperties;
  renderFooter?: (props: FileTreeFooterRenderProps) => ReactNode;
  emptyState?: ReactNode;
  renderEmptyState?: (props: FileTreeEmptyStateRenderProps) => ReactNode;
  showOpenFolderButton?: boolean;
  openFolderButtonPosition?: "top" | "center";
  renderOpenFolderButton?: (
    props: FileTreeOpenFolderButtonRenderProps,
  ) => ReactNode;
  renderIcon?: (node: FileTreeNode) => ReactNode;
  labels?: Partial<FileTreeLabels>;
  platform?: FileTreePlatform;
  sidebarPosition?: FileTreeSidebarPosition;
  theme?: FileTreeTheme;
  contextMenu?: FileTreeContextMenuOptions;
  portalContainer?: Element | null;
  enableUndoHotkeys?: boolean;
  monacoSelector?: string;
  onSelectionChange?: (selection: FileTreeSelection | null) => void;
  onError?: (details: FileTreeError) => void;
}
