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

const undoStack: FileTreeUndoEntry[] = [];

let activeUndoHotkeyUsers = 0;
let cleanupUndoHotkeys: (() => void) | null = null;
let undoHotkeyOptions: FileTreeUndoHotkeyOptions = {};

function isEditableTarget(target: EventTarget | null): boolean {
  if (undoHotkeyOptions.isEditableTarget) {
    return undoHotkeyOptions.isEditableTarget(target);
  }

  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const monacoSelector = undoHotkeyOptions.monacoSelector ?? ".monaco-editor";
  return (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable ||
    !!target.closest(monacoSelector)
  );
}

export function getFileTreeUndoCount(): number {
  return undoStack.length;
}

export function clearFileTreeUndoStack(): void {
  undoStack.length = 0;
}

export function pushFileTreeUndoEntry(entry: FileTreeUndoEntry): void {
  undoStack.push(entry);
}

export async function restoreLastFileTreeDeletion(): Promise<boolean> {
  const lastOperation = undoStack.pop();

  if (!lastOperation) {
    return false;
  }

  try {
    await lastOperation.restore();
    return true;
  } catch (error) {
    undoStack.push(lastOperation);
    throw error;
  }
}

export function attachFileTreeUndoHotkeys(
  options: FileTreeUndoHotkeyOptions = {},
): () => void {
  undoHotkeyOptions = options;

  if (typeof window === "undefined") {
    return () => undefined;
  }

  activeUndoHotkeyUsers += 1;

  if (!cleanupUndoHotkeys) {
    const handler = async (event: KeyboardEvent) => {
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== "z") {
        return;
      }

      if (isEditableTarget(event.target)) {
        return;
      }

      try {
        const restored = await restoreLastFileTreeDeletion();
        if (restored) {
          event.preventDefault();
        }
      } catch (error) {
        console.error("Failed to restore deleted file tree item:", error);
      }
    };

    window.addEventListener("keydown", handler);
    cleanupUndoHotkeys = () => {
      window.removeEventListener("keydown", handler);
    };
  }

  return () => {
    activeUndoHotkeyUsers -= 1;

    if (activeUndoHotkeyUsers <= 0 && cleanupUndoHotkeys) {
      cleanupUndoHotkeys();
      cleanupUndoHotkeys = null;
      activeUndoHotkeyUsers = 0;
    }
  };
}
