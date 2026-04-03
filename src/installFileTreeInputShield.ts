import {
  fileTreeInputCallbacks,
  isFileTreeManagedInput,
} from "./state/inputCallbacks";

let shieldInstalled = false;

export function installFileTreeInputShield(): void {
  if (shieldInstalled || typeof window === "undefined") {
    return;
  }

  shieldInstalled = true;

  window.addEventListener(
    "keydown",
    (event) => {
      if (!isFileTreeManagedInput(event.target)) {
        return;
      }

      const input = event.target as HTMLInputElement;
      event.stopImmediatePropagation();

      if (event.key === "Enter") {
        event.preventDefault();
        fileTreeInputCallbacks.get(input)?.onSubmit();
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        fileTreeInputCallbacks.get(input)?.onCancel();
      }
    },
    true,
  );

  window.addEventListener(
    "keypress",
    (event) => {
      if (!isFileTreeManagedInput(event.target)) {
        return;
      }

      event.stopImmediatePropagation();
    },
    true,
  );

  window.addEventListener(
    "beforeinput",
    (event) => {
      if (!isFileTreeManagedInput(event.target)) {
        return;
      }

      event.stopImmediatePropagation();
    },
    true,
  );
}
