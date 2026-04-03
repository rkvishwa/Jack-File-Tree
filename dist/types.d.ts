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
export interface FileTreeFsAdapter {
    readDirectory: (path: string) => Promise<FileTreeNode[]>;
    readFile?: (path: string) => Promise<string>;
    createFile: (path: string) => Promise<void>;
    createFolder: (path: string) => Promise<void>;
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
export declare const defaultFileTreeLabels: FileTreeLabels;
export type FileTreePlatform = "auto" | "windows" | "mac" | "linux";
export type FileTreeAction = "create-file" | "create-folder" | "delete-item" | "load-children" | "load-root" | "move-item" | "paste-item" | "rename-item" | "restore-item";
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
    headerTitle?: string;
    emptyState?: ReactNode;
    renderIcon?: (node: FileTreeNode) => ReactNode;
    labels?: Partial<FileTreeLabels>;
    platform?: FileTreePlatform;
    portalContainer?: Element | null;
    enableUndoHotkeys?: boolean;
    monacoSelector?: string;
    onSelectionChange?: (selection: FileTreeSelection | null) => void;
    onError?: (details: FileTreeError) => void;
}
