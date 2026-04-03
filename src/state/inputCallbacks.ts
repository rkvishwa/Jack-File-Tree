export const FILE_TREE_RENAME_INPUT_CLASS = "sft-rename-input";
export const FILE_TREE_INLINE_CREATE_INPUT_CLASS = "sft-inline-create-input";

export const fileTreeInputCallbacks = new WeakMap<
  HTMLElement,
  { onSubmit: () => void; onCancel: () => void }
>();

export function isFileTreeManagedInput(
  element: EventTarget | null,
): element is HTMLInputElement {
  return (
    element instanceof HTMLElement &&
    element.tagName === "INPUT" &&
    (element.classList.contains(FILE_TREE_RENAME_INPUT_CLASS) ||
      element.classList.contains(FILE_TREE_INLINE_CREATE_INPUT_CLASS))
  );
}
