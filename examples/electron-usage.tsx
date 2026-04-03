import "../src/styles.css";
import "../src/keyboard-shield";

import { FileTree, type FileTreeFsAdapter } from "../src";

declare global {
  interface Window {
    electronAPI: {
      fs: FileTreeFsAdapter;
    };
  }
}

interface ExplorerProps {
  workspaceRoot: string | null;
  activeFilePath: string | null;
  refreshTrigger: number;
  newFileTrigger: number;
  openFolder: () => void;
  openFile: (path: string, name: string) => void;
  handleFileDeleted: (path: string, type: "file" | "directory", skipBroadcast?: boolean) => void;
  handleFileRenamed: (oldPath: string, newPath: string) => void;
  handleFileCreated: (path: string, name: string, savedContent?: string, isUndo?: boolean) => void;
  handleFolderCreated: (path: string, isUndo?: boolean) => void;
  handleFileCopied: (newPath: string, type: "file" | "directory") => void;
  handleFileMoved: () => void;
}

export function Explorer(props: ExplorerProps) {
  return (
    <FileTree
      fs={window.electronAPI.fs}
      workspaceRoot={props.workspaceRoot}
      activeFilePath={props.activeFilePath}
      onOpenFolder={props.openFolder}
      onFileClick={props.openFile}
      onFileOpened={props.openFile}
      onFileDeleted={props.handleFileDeleted}
      onFileRenamed={props.handleFileRenamed}
      onFileCreated={props.handleFileCreated}
      onFolderCreated={props.handleFolderCreated}
      onFileCopied={props.handleFileCopied}
      onFileMoved={props.handleFileMoved}
      refreshTrigger={props.refreshTrigger}
      newFileTrigger={props.newFileTrigger}
    />
  );
}
