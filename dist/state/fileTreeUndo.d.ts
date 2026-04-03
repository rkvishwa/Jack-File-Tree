import type { FileTreeItemType } from "../types";
export interface FileTreeUndoEntry {
    originalPath: string;
    trashPath: string;
    type: FileTreeItemType;
    restore: () => Promise<void>;
}
interface FileTreeUndoHotkeyOptions {
    monacoSelector?: string;
    isEditableTarget?: (target: EventTarget | null) => boolean;
}
export declare function getFileTreeUndoCount(): number;
export declare function clearFileTreeUndoStack(): void;
export declare function pushFileTreeUndoEntry(entry: FileTreeUndoEntry): void;
export declare function restoreLastFileTreeDeletion(): Promise<boolean>;
export declare function attachFileTreeUndoHotkeys(options?: FileTreeUndoHotkeyOptions): () => void;
export {};
