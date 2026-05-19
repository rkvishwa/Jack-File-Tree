import React from "react";

import type { FileTreeNode } from "../types";
import {
  materialIconDataUrls,
  materialIconDefaults,
  materialIconFileExtensions,
  materialIconFileNames,
  materialIconLanguageIds,
  materialIconFolderNames,
  materialIconFolderNamesExpanded,
} from "./materialIconData.generated";

interface MaterialFileTreeIconOptions {
  expanded?: boolean;
}

const extensionLanguageIds: Record<string, string> = {
  cjs: "javascript",
  cts: "typescript",
  htm: "html",
  html: "html",
  js: "javascript",
  jsx: "javascriptreact",
  mjs: "javascript",
  mts: "typescript",
  php: "php",
  ts: "typescript",
  tsx: "typescriptreact",
  vue: "vue",
};

function normalizeIconKey(value: string): string {
  return value.replace(/\\/g, "/").toLowerCase();
}

function resolveFileIconName(node: FileTreeNode): string {
  const normalizedPath = normalizeIconKey(node.path);
  const normalizedName = normalizeIconKey(node.name);

  const exactNameIcon =
    materialIconFileNames[normalizedName as keyof typeof materialIconFileNames];

  if (exactNameIcon) {
    return exactNameIcon;
  }

  for (const [fileName, iconName] of Object.entries(materialIconFileNames)) {
    if (fileName.includes("/") && normalizedPath.endsWith(fileName)) {
      return iconName;
    }
  }

  const extensionParts = normalizedName.split(".").slice(1);
  const candidates = [
    normalizedName,
    ...extensionParts.map((_, index, parts) => parts.slice(index).join(".")),
    node.extension?.replace(/^\.+/, "").toLowerCase() ?? "",
  ].filter((candidate, index, all) => candidate && all.indexOf(candidate) === index);

  for (const candidate of candidates) {
    const iconName =
      materialIconFileExtensions[
        candidate as keyof typeof materialIconFileExtensions
      ];

    if (iconName) {
      return iconName;
    }

    const languageId = extensionLanguageIds[candidate];
    if (languageId) {
      const languageIcon = materialIconLanguageIds[languageId];

      if (languageIcon) {
        return languageIcon;
      }
    }
  }

  return materialIconDefaults.file;
}

function resolveFolderIconName(
  node: FileTreeNode,
  { expanded }: MaterialFileTreeIconOptions,
): string {
  const normalizedName = normalizeIconKey(node.name);
  const folderMap = expanded
    ? materialIconFolderNamesExpanded
    : materialIconFolderNames;
  const specificIcon = folderMap[normalizedName as keyof typeof folderMap];

  if (specificIcon) {
    return specificIcon;
  }

  return expanded ? materialIconDefaults.folderExpanded : materialIconDefaults.folder;
}

export function resolveMaterialFileTreeIconName(
  node: FileTreeNode,
  options: MaterialFileTreeIconOptions = {},
): string {
  if (node.type === "directory") {
    return resolveFolderIconName(node, options);
  }

  return resolveFileIconName(node);
}

export function renderMaterialFileTreeIcon(
  node: FileTreeNode,
  options: MaterialFileTreeIconOptions = {},
): React.ReactNode {
  const iconName = resolveMaterialFileTreeIconName(node, options);
  const src =
    materialIconDataUrls[iconName as keyof typeof materialIconDataUrls] ??
    materialIconDataUrls[materialIconDefaults.file];

  return (
    <img
      className="sft-material-icon"
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  );
}
