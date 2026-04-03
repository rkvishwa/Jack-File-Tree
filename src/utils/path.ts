import type { FileTreeNode } from "../types";

export function normalizePath(path: string): string {
  return path.replace(/\\/g, "/");
}

export function normalizeComparablePath(path: string): string {
  return normalizePath(path).toLowerCase();
}

export function getBaseName(path: string): string {
  const normalized = normalizePath(path);
  const lastSlash = normalized.lastIndexOf("/");
  return lastSlash >= 0 ? normalized.slice(lastSlash + 1) : normalized;
}

export function getParentPath(path: string): string {
  const normalized = normalizePath(path);
  const lastSlash = normalized.lastIndexOf("/");

  if (lastSlash <= 0) {
    return lastSlash === 0 ? "/" : "";
  }

  return normalized.slice(0, lastSlash);
}

export function joinTreePath(parentPath: string, name: string): string {
  const normalizedParent = normalizePath(parentPath).replace(/\/+$/g, "");
  return normalizedParent ? `${normalizedParent}/${name}` : name;
}

export function dedupeNodes(nodes: FileTreeNode[]): FileTreeNode[] {
  const seen = new Set<string>();

  return nodes.filter((node) => {
    const normalizedPath = normalizeComparablePath(node.path);
    if (seen.has(normalizedPath)) {
      return false;
    }

    seen.add(normalizedPath);
    return true;
  });
}

export function isSamePath(left: string, right: string): boolean {
  return normalizeComparablePath(left) === normalizeComparablePath(right);
}

export function isPathInside(parentPath: string, targetPath: string): boolean {
  const normalizedParent = normalizeComparablePath(parentPath);
  const normalizedTarget = normalizeComparablePath(targetPath);

  return (
    normalizedTarget === normalizedParent ||
    normalizedTarget.startsWith(`${normalizedParent}/`)
  );
}
