# Sonar File Tree

Reusable React file tree component extracted from the Sonar Code Editor. It keeps the same behavior as the in-app explorer, but exposes a clean filesystem adapter so you can reuse it in Electron, web sandboxes, or any host that can implement the file operations.

## Features

- Nested file and folder explorer
- Inline create and rename
- Context menus
- Drag and drop move
- Cut, copy, and paste
- Soft delete with undo (`Cmd/Ctrl+Z`)
- Monaco-safe input shield for rename/create inputs
- TypeScript types and library build config ready for npm publishing

## Install

```bash
npm install jack-file-tree
```

Peer dependencies:

- `react`
- `react-dom`

## Basic usage

```tsx
import "jack-file-tree/styles.css";
import "jack-file-tree/keyboard-shield";

import { FileTree, type FileTreeFsAdapter } from "jack-file-tree";

const fsAdapter: FileTreeFsAdapter = window.electronAPI.fs;

export function Explorer() {
  return (
    <FileTree
      fs={fsAdapter}
      workspaceRoot={workspaceRoot}
      activeFilePath={activeFilePath}
      onOpenFolder={openFolder}
      onFileClick={(path, name) => openFile(path, name)}
      onFileOpened={(path, name) => openFile(path, name)}
      onFileDeleted={handleFileDeleted}
      onFileRenamed={handleFileRenamed}
      onFileCreated={handleFileCreated}
      onFolderCreated={handleFolderCreated}
      onFileCopied={handleFileCopied}
      onFileMoved={handleFileMoved}
      refreshTrigger={refreshKey}
      newFileTrigger={newFileTrigger}
    />
  );
}
```

## Monaco integration

If your host app uses Monaco, import `jack-file-tree/keyboard-shield` before Monaco is loaded. This prevents Monaco capture listeners from swallowing keystrokes in the tree's inline rename/create inputs.

```ts
import "jack-file-tree/keyboard-shield";
import "monaco-editor";
```

If you do not use Monaco, you can skip that import.

## Filesystem adapter

The component is intentionally decoupled from Electron. Provide an adapter that matches this shape:

```ts
interface FileTreeFsAdapter {
  readDirectory(path: string): Promise<FileTreeNode[]>;
  readFile?(path: string): Promise<string>;
  createFile(path: string): Promise<void>;
  createFolder(path: string): Promise<void>;
  renameItem(oldPath: string, newPath: string): Promise<string | void>;
  copyItem(oldPath: string, newPath: string): Promise<string | void>;
}
```

## Publishing checklist

1. Move the `file-tree/` folder into its own repository.
2. Update the package `name`, `repository`, and `author` fields if needed.
3. Run `npm install`.
4. Run `npm run build`.
5. Publish with `npm publish`.

An Electron wiring example is included in [examples/electron-usage.tsx](./examples/electron-usage.tsx).
