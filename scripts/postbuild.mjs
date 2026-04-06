import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve(process.cwd(), "dist");
const styleFile = resolve(distDir, "styles.css");
const esmFile = resolve(distDir, "index.js");
const cjsFile = resolve(distDir, "index.cjs");
const marker = "jack-file-tree-styles";

const cssText = await readFile(styleFile, "utf8");

function createInjector(sourceType) {
  const cssLiteral = JSON.stringify(cssText);
  const declaration =
    sourceType === "esm"
      ? `const __jackFileTreeCss = ${cssLiteral};`
      : `const __jackFileTreeCss = ${cssLiteral};`;

  return `${declaration}
(function injectJackFileTreeStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("${marker}")) return;
  const styleElement = document.createElement("style");
  styleElement.id = "${marker}";
  styleElement.setAttribute("data-jack-file-tree", "true");
  styleElement.textContent = __jackFileTreeCss;
  if (document.head) {
    document.head.appendChild(styleElement);
    return;
  }
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      if (!document.getElementById("${marker}")) {
        document.head?.appendChild(styleElement);
      }
    },
    { once: true },
  );
})();
`;
}

async function prependInjector(filePath, sourceType) {
  const original = await readFile(filePath, "utf8");
  if (original.includes(marker)) {
    return;
  }

  await writeFile(filePath, `${createInjector(sourceType)}${original}`);
}

await prependInjector(esmFile, "esm");
await prependInjector(cjsFile, "cjs");
