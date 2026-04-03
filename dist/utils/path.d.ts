import type { FileTreeNode } from "../types";
export declare function normalizePath(path: string): string;
export declare function normalizeComparablePath(path: string): string;
export declare function getBaseName(path: string): string;
export declare function getParentPath(path: string): string;
export declare function joinTreePath(parentPath: string, name: string): string;
export declare function dedupeNodes(nodes: FileTreeNode[]): FileTreeNode[];
export declare function isSamePath(left: string, right: string): boolean;
export declare function isPathInside(parentPath: string, targetPath: string): boolean;
