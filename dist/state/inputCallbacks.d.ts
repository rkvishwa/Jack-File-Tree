export declare const FILE_TREE_RENAME_INPUT_CLASS = "sft-rename-input";
export declare const FILE_TREE_INLINE_CREATE_INPUT_CLASS = "sft-inline-create-input";
export declare const fileTreeInputCallbacks: WeakMap<HTMLElement, {
    onSubmit: () => void;
    onCancel: () => void;
}>;
export declare function isFileTreeManagedInput(element: EventTarget | null): element is HTMLInputElement;
