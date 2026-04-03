import type { FileTreeClipboardItem } from "../types";
import { normalizeComparablePath, normalizePath } from "../utils/path";

const clipboardListeners = new Set<() => void>();
let fileTreeClipboard: FileTreeClipboardItem | null = null;

function emitClipboardChanged(): void {
  clipboardListeners.forEach((listener) => listener());

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("jack-file-tree:clipboard-updated"));
  }
}

export function getFileTreeClipboard(): FileTreeClipboardItem | null {
  return fileTreeClipboard;
}

export function subscribeFileTreeClipboard(
  listener: () => void,
): () => void {
  clipboardListeners.add(listener);
  return () => clipboardListeners.delete(listener);
}

export function setFileTreeClipboard(
  item: FileTreeClipboardItem | null,
): void {
  fileTreeClipboard = item
    ? {
        ...item,
        path: normalizePath(item.path),
      }
    : null;

  emitClipboardChanged();
}

export function clearFileTreeClipboard(): void {
  if (!fileTreeClipboard) {
    return;
  }

  fileTreeClipboard = null;
  emitClipboardChanged();
}

export function updateFileTreeClipboardPath(
  oldPath: string,
  newPath: string,
): void {
  if (!fileTreeClipboard) {
    return;
  }

  const clipboardPath = normalizePath(fileTreeClipboard.path);
  const normalizedOldPath = normalizePath(oldPath);
  const normalizedNewPath = normalizePath(newPath);
  const comparableClipboardPath = normalizeComparablePath(clipboardPath);
  const comparableOldPath = normalizeComparablePath(normalizedOldPath);

  if (comparableClipboardPath === comparableOldPath) {
    fileTreeClipboard = {
      ...fileTreeClipboard,
      path: normalizedNewPath,
    };
    emitClipboardChanged();
    return;
  }

  if (comparableClipboardPath.startsWith(`${comparableOldPath}/`)) {
    const suffix = clipboardPath.slice(normalizedOldPath.length);
    fileTreeClipboard = {
      ...fileTreeClipboard,
      path: `${normalizedNewPath}${suffix}`,
    };
    emitClipboardChanged();
  }
}
