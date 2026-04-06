import "./styles.css";

export { default as FileTree } from "./components/FileTree";
export { installFileTreeInputShield } from "./installFileTreeInputShield";
export {
  clearFileTreeClipboard,
  getFileTreeClipboard,
  setFileTreeClipboard,
  subscribeFileTreeClipboard,
  updateFileTreeClipboardPath,
} from "./state/fileTreeClipboard";
export {
  attachFileTreeUndoHotkeys,
  clearFileTreeUndoStack,
  getFileTreeUndoCount,
  restoreLastFileTreeDeletion,
} from "./state/fileTreeUndo";
export {
  defaultFileTreeLabels,
  type FileTreeAction,
  type FileTreeContextMenuActionId,
  type FileTreeContextMenuActionItem,
  type FileTreeContextMenuOptions,
  type FileTreeContextMenuRenderProps,
  type FileTreeContextMenuScope,
  type FileTreeClipboardItem,
  type FileTreeError,
  type FileTreeEmptyStateRenderProps,
  type FileTreeFsAdapter,
  type FileTreeFooterRenderProps,
  type FileTreeHeaderActionRenderProps,
  type FileTreeHeaderRenderProps,
  type FileTreeItemType,
  type FileTreeLabels,
  type FileTreeNode,
  type FileTreeOpenFolderButtonRenderProps,
  type FileTreePlatform,
  type FileTreeProps,
  type FileTreeSelection,
  type FileTreeSidebarPosition,
  type FileTreeTheme,
} from "./types";
