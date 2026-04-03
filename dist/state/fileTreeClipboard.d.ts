import type { FileTreeClipboardItem } from "../types";
export declare function getFileTreeClipboard(): FileTreeClipboardItem | null;
export declare function subscribeFileTreeClipboard(listener: () => void): () => void;
export declare function setFileTreeClipboard(item: FileTreeClipboardItem | null): void;
export declare function clearFileTreeClipboard(): void;
export declare function updateFileTreeClipboardPath(oldPath: string, newPath: string): void;
