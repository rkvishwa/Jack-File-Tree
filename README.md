# Jack File Tree

Reusable React file tree sidebar extracted from Sonar Code Editor. It ships as a ready-made explorer panel out of the box, but also exposes the hooks you need to restyle or replace the shell pieces in Electron apps, web sandboxes, IDEs, or any host that can implement the file operations.

## Features

- Ready-to-use sidebar container with header, empty state, and tree content
- Left/right sidebar placement styling with sensible defaults
- Configurable panel width, min width, and max width
- Top full-width open-folder CTA out of the box
- Bring-your-own open-folder button and empty-state UI hooks
- Bring-your-own header and footer UI hooks
- Theme tokens for colors, fonts, borders, and top/titlebar offsets
- Built-in context menus with per-action enable/disable controls
- Bring-your-own context menu renderer
- Nested file and folder explorer
- Inline create and rename
- Drag and drop move
- Cut, copy, and paste
- Soft delete with undo (`Cmd/Ctrl+Z`)
- Monaco-safe input shield for rename/create inputs
- TypeScript types and library build config ready for npm publishing

## Install

```bash
npm install @knurdz/jack-file-tree
```

Peer dependencies:

- `react`
- `react-dom`

## Basic usage

```tsx
import "@knurdz/jack-file-tree/keyboard-shield";

import { FileTree, type FileTreeFsAdapter } from "@knurdz/jack-file-tree";

const fsAdapter: FileTreeFsAdapter = window.electronAPI.fs;

export function Explorer() {
  return (
    <FileTree
      fs={fsAdapter}
      workspaceRoot={workspaceRoot}
      sidebarPosition="left"
      width={300}
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

`@knurdz/jack-file-tree` now auto-injects its built-in styles when you import the package entry, so the extra stylesheet import is optional. If you want explicit stylesheet control for ordering or overrides, you can still import `@knurdz/jack-file-tree/styles.css` manually.

## Customization

The default component is a full sidebar panel, but you can still swap in your own UI for key pieces while keeping the built-in tree behavior.

```tsx
<FileTree
  fs={fsAdapter}
  workspaceRoot={workspaceRoot}
  onOpenFolder={openFolder}
  onFileClick={openFile}
  sidebarPosition="right"
  width={320}
  theme={{
    backgroundSecondary: "#0f172a",
    backgroundHover: "rgba(56, 189, 248, 0.12)",
    accent: "#38bdf8",
    panelTopPadding: 12,
  }}
  renderHeader={({ title, defaultActions, className, titleClassName, actionsClassName }) => (
    <div className={className}>
      <span className={titleClassName}>{title}</span>
      <div className={actionsClassName}>{defaultActions}</div>
    </div>
  )}
  footer={<div>Project Explorer</div>}
  renderOpenFolderButton={({ className, label, onClick }) => (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  )}
  contextMenu={{
    actions: {
      cut: false,
      delete: false,
    },
  }}
/>
```

Useful props:

- `sidebarPosition`: `"left"` or `"right"` styling for the built-in sidebar shell
- `width`, `minWidth`, `maxWidth`: size the built-in sidebar without extra wrapper CSS
- `showHeader`: toggle the built-in header row
- `showHeaderActions`: toggle the built-in create-file/create-folder action buttons
- `renderHeader`: replace the built-in header while still receiving default actions and labels
- `contentClassName`, `contentStyle`: style the scrollable tree content area
- `footer` / `renderFooter`: append a built-in footer area at the bottom of the sidebar
- `showOpenFolderButton`: toggle the built-in open-folder CTA
- `openFolderButtonPosition`: `"top"` or `"center"` in the empty state
- `renderOpenFolderButton`: render your own open-folder button while keeping library behavior
- `renderEmptyState`: replace the full empty-state UI
- `theme`: set colors, fonts, borders, and inset offsets without overriding the stylesheet
- `contextMenu.enabled`: enable or disable library context menus
- `contextMenu.actions`: hide individual built-in menu actions
- `contextMenu.renderMenu`: render your own context menu UI

Useful CSS variables:

- `--sft-bg-primary`, `--sft-bg-secondary`, `--sft-bg-hover`
- `--sft-text-primary`, `--sft-text-secondary`, `--sft-text-muted`
- `--sft-accent`, `--sft-accent-transparent`, `--sft-danger`
- `--sft-sidebar-border`
- `--sft-panel-top-padding`: adds top inset for custom titlebar layouts
- `--sft-header-title-offset-y`: nudges the header title vertically
- `--sft-header-actions-offset-y`: nudges the header action buttons vertically
- `--sft-open-folder-btn-bg`, `--sft-open-folder-btn-text`, `--sft-open-folder-btn-border`: style the built-in open-folder CTA
- `--sft-menu-bg`, `--sft-menu-border`, `--sft-menu-hover`, `--sft-menu-text`: style the built-in context menu

The `theme` prop writes those same CSS variables for you, so hosts can choose between inline theme tokens or plain stylesheet overrides.

## Monaco integration

If your host app uses Monaco, import `jack-file-tree/keyboard-shield` before Monaco is loaded. This prevents Monaco capture listeners from swallowing keystrokes in the tree's inline rename/create inputs.

```ts
import "@knurdz/jack-file-tree/keyboard-shield";
import "monaco-editor";
```

If you do not use Monaco, you can skip that import.

## Filesystem adapter

The component is intentionally decoupled from Electron. Provide an adapter that matches this shape:

```ts
interface FileTreeFsAdapter {
  readDirectory(path: string): Promise<FileTreeNode[]>;
  readFile?(path: string): Promise<string>;
  createFile(path: string): Promise<string | void>;
  createFolder(path: string): Promise<string | void>;
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
