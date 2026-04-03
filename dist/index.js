import { jsxs as C, jsx as c } from "react/jsx-runtime";
import de, { forwardRef as Qt, createElement as Bt, useState as Z, useCallback as ft, useEffect as v, useRef as J } from "react";
import { createPortal as Rt } from "react-dom";
import { f as Dt, F as we, a as Pe } from "./installFileTreeInputShield-CAwi1K8A.mjs";
import { i as Na } from "./installFileTreeInputShield-CAwi1K8A.mjs";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ft = (...a) => a.filter((t, n, u) => !!t && t.trim() !== "" && u.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ge = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, u) => u ? u.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = (a) => {
  const t = xe(a);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ne = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = (a) => {
  for (const t in a)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = Qt(
  ({
    color: a = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: u,
    className: T = "",
    children: l,
    iconNode: b,
    ...V
  }, $) => Bt(
    "svg",
    {
      ref: $,
      ...Ne,
      width: t,
      height: t,
      stroke: a,
      strokeWidth: u ? Number(n) * 24 / Number(t) : n,
      className: Ft("lucide", T),
      ...!l && !Te(V) && { "aria-hidden": "true" },
      ...V
    },
    [
      ...b.map(([y, P]) => Bt(y, P)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j = (a, t) => {
  const n = Qt(
    ({ className: u, ...T }, l) => Bt(be, {
      ref: l,
      iconNode: t,
      className: Ft(
        `lucide-${ge(Yt(a))}`,
        `lucide-${a}`,
        u
      ),
      ...T
    })
  );
  return n.displayName = Yt(a), n;
};
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = [
  [
    "path",
    { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" }
  ],
  [
    "path",
    {
      d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
      key: "e1hn23"
    }
  ]
], ke = j("braces", ve);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ee = j("chevron-down", Le);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], _e = j("chevron-right", Ce);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
], De = j("code-xml", ze);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], $e = j("database", Ae);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
], Ie = j("file-braces", He);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = [
  [
    "path",
    {
      d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
      key: "1wthlu"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m5 16-3 3 3 3", key: "331omg" }],
  ["path", { d: "m9 22 3-3-3-3", key: "lsp7cz" }]
], Ve = j("file-code-corner", je);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }],
  ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22", key: "wt3hpn" }]
], Me = j("file-image", Be);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = [
  [
    "path",
    {
      d: "M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35",
      key: "17jvcc"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M14 19h6", key: "bvotb8" }],
  ["path", { d: "M17 16v6", key: "18yu1i" }]
], Oe = j("file-plus-corner", Ke);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], qe = j("file-text", Ue);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], te = j("file", Se);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = [
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], Je = j("folder-plus", Xe);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], ee = j("folder", We);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
], Ze = j("palette", Ye);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
], Qe = j("shield-alert", Ge);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = [
  ["path", { d: "M12 19h8", key: "baeox8" }],
  ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
], Fe = j("terminal", Re);
function m(a) {
  return a.replace(/\\/g, "/");
}
function ht(a) {
  return m(a).toLowerCase();
}
function wt(a) {
  const t = m(a), n = t.lastIndexOf("/");
  return n >= 0 ? t.slice(n + 1) : t;
}
function pt(a) {
  const t = m(a), n = t.lastIndexOf("/");
  return n <= 0 ? n === 0 ? "/" : "" : t.slice(0, n);
}
function et(a, t) {
  const n = m(a).replace(/\/+$/g, "");
  return n ? `${n}/${t}` : t;
}
function ae(a) {
  const t = /* @__PURE__ */ new Set();
  return a.filter((n) => {
    const u = ht(n.path);
    return t.has(u) ? !1 : (t.add(u), !0);
  });
}
function tt(a, t) {
  return ht(a) === ht(t);
}
function ta(a, t) {
  const n = ht(a), u = ht(t);
  return u === n || u.startsWith(`${n}/`);
}
const Mt = /* @__PURE__ */ new Set();
let at = null;
function At() {
  Mt.forEach((a) => a()), typeof window < "u" && window.dispatchEvent(new CustomEvent("jack-file-tree:clipboard-updated"));
}
function Ct() {
  return at;
}
function ea(a) {
  return Mt.add(a), () => Mt.delete(a);
}
function Zt(a) {
  at = a ? {
    ...a,
    path: m(a.path)
  } : null, At();
}
function $t() {
  at && (at = null, At());
}
function ma(a, t) {
  if (!at)
    return;
  const n = m(at.path), u = m(a), T = m(t), l = ht(n), b = ht(u);
  if (l === b) {
    at = {
      ...at,
      path: T
    }, At();
    return;
  }
  if (l.startsWith(`${b}/`)) {
    const V = n.slice(u.length);
    at = {
      ...at,
      path: `${T}${V}`
    }, At();
  }
}
const bt = [];
let Lt = 0, xt = null, _t = {};
function aa(a) {
  if (_t.isEditableTarget)
    return _t.isEditableTarget(a);
  if (!(a instanceof HTMLElement))
    return !1;
  const t = _t.monacoSelector ?? ".monaco-editor";
  return a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.isContentEditable || !!a.closest(t);
}
function da() {
  return bt.length;
}
function wa() {
  bt.length = 0;
}
function ra(a) {
  bt.push(a);
}
async function na() {
  const a = bt.pop();
  if (!a)
    return !1;
  try {
    return await a.restore(), !0;
  } catch (t) {
    throw bt.push(a), t;
  }
}
function ca(a = {}) {
  if (_t = a, typeof window > "u")
    return () => {
    };
  if (Lt += 1, !xt) {
    const t = async (n) => {
      if (!(!(n.ctrlKey || n.metaKey) || n.key.toLowerCase() !== "z") && !aa(n.target))
        try {
          await na() && n.preventDefault();
        } catch (u) {
          console.error("Failed to restore deleted file tree item:", u);
        }
    };
    window.addEventListener("keydown", t), xt = () => {
      window.removeEventListener("keydown", t);
    };
  }
  return () => {
    Lt -= 1, Lt <= 0 && xt && (xt(), xt = null, Lt = 0);
  };
}
const sa = {
  explorer: "Explorer",
  openFolder: "Open Folder",
  noFolderOpened: "No folder opened",
  newFile: "New File",
  newFolder: "New Folder",
  cut: "Cut",
  copy: "Copy",
  paste: "Paste",
  rename: "Rename",
  delete: "Delete",
  createFilePlaceholder: "File name",
  createFolderPlaceholder: "Folder name"
}, Pt = "jack-file-tree:close-context-menus", zt = "application/x-jack-file-tree-item";
let Gt = !1, dt = !1;
function ia() {
  Gt || typeof window > "u" || (Gt = !0, window.addEventListener(
    "mousedown",
    () => {
      dt = !0;
    },
    !0
  ), window.addEventListener(
    "mouseup",
    () => {
      setTimeout(() => {
        dt = !1;
      }, 0);
    },
    !0
  ), window.addEventListener(
    "keydown",
    () => {
      dt = !0;
    },
    !0
  ), window.addEventListener(
    "keyup",
    () => {
      setTimeout(() => {
        dt = !1;
      }, 0);
    },
    !0
  ));
}
function ua(a) {
  if (a && a !== "auto")
    return a;
  if (typeof navigator > "u")
    return "mac";
  const t = navigator.userAgent.toLowerCase();
  return t.includes("win") ? "windows" : t.includes("mac") ? "mac" : "linux";
}
function Nt(a, t) {
  return a === "delete" ? t === "mac" ? "⌘⌫" : "Del" : `${t === "mac" ? "⌘" : "Ctrl+"}${a === "cut" ? "X" : a === "copy" ? "C" : "V"}`;
}
function Tt(...a) {
  return a.filter(Boolean).join(" ");
}
function oa(a) {
  if (a.extension)
    return a.extension.toLowerCase();
  const t = a.name.toLowerCase(), n = t.lastIndexOf(".");
  return n === -1 ? "" : t.slice(n + 1);
}
function la(a) {
  if (a.type === "directory")
    return /* @__PURE__ */ c(ee, { size: 14, color: "var(--sft-accent, var(--accent, #3b82f6))" });
  switch (oa(a)) {
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
      return /* @__PURE__ */ c(ke, { size: 14, color: "#eab308" });
    case "json":
      return /* @__PURE__ */ c(Ie, { size: 14, color: "#22c55e" });
    case "html":
      return /* @__PURE__ */ c(De, { size: 14, color: "#ef4444" });
    case "css":
    case "scss":
    case "less":
      return /* @__PURE__ */ c(Ze, { size: 14, color: "var(--sft-accent, var(--accent, #3b82f6))" });
    case "md":
      return /* @__PURE__ */ c(qe, { size: 14, color: "#a1a1aa" });
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
    case "webp":
      return /* @__PURE__ */ c(Me, { size: 14, color: "#8b5cf6" });
    case "sh":
    case "bash":
    case "zsh":
      return /* @__PURE__ */ c(Fe, { size: 14, color: "#10b981" });
    case "php":
      return /* @__PURE__ */ c(Ve, { size: 14, color: "#7b7fb5" });
    case "sql":
      return /* @__PURE__ */ c($e, { size: 14, color: "#f97316" });
    case "env":
      return /* @__PURE__ */ c(Qe, { size: 14, color: "#eab308" });
    default:
      return /* @__PURE__ */ c(te, { size: 14, color: "var(--sft-text-muted, var(--text-muted, #71717a))" });
  }
}
function Et(a, t) {
  return a ? a.type === "directory" ? m(a.path) : pt(a.path) : m(t);
}
function re(a) {
  return a || (typeof document > "u" ? null : document.body);
}
function Ht({
  type: a,
  depth: t,
  hasFolders: n,
  indentPx: u,
  labels: T,
  monacoSelector: l,
  onSubmit: b,
  onCancel: V
}) {
  const [$, y] = Z(""), P = J(null), _ = J(!1), d = J(null), S = J(Date.now()), h = J(b), x = J(V);
  h.current = b, x.current = V, v(() => {
    const s = P.current;
    s && s.focus();
    const M = requestAnimationFrame(() => {
      var G;
      return (G = P.current) == null ? void 0 : G.focus();
    });
    return () => cancelAnimationFrame(M);
  }, []), v(() => {
    const s = P.current;
    if (s)
      return Dt.set(s, {
        onSubmit: () => {
          d.current && (clearTimeout(d.current), d.current = null), B();
        },
        onCancel: () => {
          d.current && (clearTimeout(d.current), d.current = null), x.current();
        }
      }), () => {
        Dt.delete(s);
      };
  }), v(() => () => {
    d.current && clearTimeout(d.current);
  }, []);
  const B = ft(() => {
    if (_.current)
      return;
    const s = $.trim();
    if (!s) {
      x.current();
      return;
    }
    _.current = !0, h.current(s);
  }, [$]), X = ft(
    (s) => {
      const M = s.relatedTarget, G = dt, W = M && !!M.closest(l), Y = M === document.body || !M, ct = Date.now() - S.current < 500;
      d.current && clearTimeout(d.current), d.current = setTimeout(() => {
        var g;
        if (document.activeElement !== P.current) {
          if (ct || !G && (W || Y)) {
            (g = P.current) == null || g.focus();
            return;
          }
          B();
        }
      }, 300);
    },
    [B, l]
  ), rt = ft(() => {
    d.current && (clearTimeout(d.current), d.current = null);
  }, []);
  return /* @__PURE__ */ C(
    "div",
    {
      className: "sft-tree-node sft-inline-create",
      style: { paddingLeft: `${t * u + 8}px` },
      onClick: (s) => s.stopPropagation(),
      onMouseDown: (s) => s.stopPropagation(),
      children: [
        n ? /* @__PURE__ */ c("span", { className: "sft-expand-icon" }) : /* @__PURE__ */ c("span", { className: "sft-expand-icon sft-expand-icon-empty" }),
        /* @__PURE__ */ c("span", { className: "sft-file-icon", children: a === "folder" ? /* @__PURE__ */ c(ee, { size: 14, color: "var(--sft-accent, var(--accent, #3b82f6))" }) : /* @__PURE__ */ c(te, { size: 14 }) }),
        /* @__PURE__ */ c(
          "input",
          {
            ref: P,
            className: we,
            title: a === "folder" ? T.newFolder : T.newFile,
            value: $,
            placeholder: a === "folder" ? T.createFolderPlaceholder : T.createFilePlaceholder,
            onChange: (s) => y(s.target.value),
            onBlur: X,
            onFocus: rt,
            onClick: (s) => s.stopPropagation(),
            onMouseDown: (s) => s.stopPropagation()
          }
        )
      ]
    }
  );
}
function It({
  fs: a,
  node: t,
  depth: n,
  indentPx: u,
  platform: T,
  labels: l,
  activeFilePath: b,
  onFileClick: V,
  onRefresh: $,
  creatingItem: y,
  onSetCreating: P,
  selectedNode: _,
  onSelectNode: d,
  onFileOpened: S,
  onFileDeleted: h,
  onFileRenamed: x,
  onFileCreated: B,
  onFolderCreated: X,
  onFileCopied: rt,
  onFileMoved: s,
  refreshTrigger: M,
  renderIcon: G,
  clipboardSnapshot: W,
  monacoSelector: Y,
  portalContainer: ct,
  reportError: g
}) {
  const [K, st] = Z(!1), [ot, jt] = Z(t.children || []), [H, z] = Z(null), [O, U] = Z(!1), [Q, R] = Z(!1), [nt, vt] = Z(t.name), F = J(null), k = J(null), I = J(null), gt = J(null), D = J(!1), L = J(0), it = J(0), yt = ot.some((e) => e.type === "directory"), kt = re(ct), lt = y && tt(y.parentPath, t.path) && t.type === "directory", Vt = (W == null ? void 0 : W.action) === "cut" && tt(W.path, t.path), r = ft(async () => {
    if (t.type === "directory")
      try {
        const e = await a.readDirectory(t.path);
        jt(ae(e));
      } catch (e) {
        g({
          action: "load-children",
          error: e,
          node: t,
          sourcePath: t.path
        });
      }
  }, [a, t, g]);
  v(() => {
    lt && !K && (st(!0), r());
  }, [K, lt, r]), v(() => {
    K && typeof M == "number" && M > 0 && r();
  }, [K, r, M]), v(() => {
    b !== I.current && (I.current = b ?? null, t.type === "directory" && b && ta(t.path, b) && (K || (st(!0), r())));
  }, [b, K, r, t.path, t.type]), v(() => {
    if (H) {
      const e = (f) => {
        const N = f.target instanceof HTMLElement ? f.target : null;
        N != null && N.closest(".sft-context-menu") || z(null);
      }, i = () => z(null), p = () => z(null);
      return window.addEventListener("mousedown", e), window.addEventListener("blur", i), document.addEventListener(Pt, p), () => {
        window.removeEventListener("mousedown", e), window.removeEventListener("blur", i), document.removeEventListener(Pt, p);
      };
    }
  }, [H]), v(() => {
    if (Q) {
      const e = F.current;
      return e && Dt.set(e, {
        onSubmit: () => {
          k.current && (clearTimeout(k.current), k.current = null), Jt();
        },
        onCancel: () => {
          k.current && (clearTimeout(k.current), k.current = null), R(!1);
        }
      }), () => {
        k.current && clearTimeout(k.current), e && Dt.delete(e);
      };
    }
  }, [nt, t.name, t.path, Q]), v(() => {
    (_ == null ? void 0 : _.type) === "file" && tt(_.path, t.path) && setTimeout(() => {
      var e;
      (e = gt.current) == null || e.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 50);
  }, [t.path, _]);
  const w = async () => {
    t.type === "directory" && (K || await r(), st((e) => !e));
  }, o = () => z(null), E = (e) => {
    e.preventDefault(), e.stopPropagation(), document.dispatchEvent(new CustomEvent(Pt)), z({ x: e.clientX, y: e.clientY });
  }, ut = () => {
    o();
    const e = t.type === "directory" ? m(t.path) : pt(t.path);
    setTimeout(() => P({ type: "file", parentPath: e }), 0);
  }, mt = () => {
    o();
    const e = t.type === "directory" ? m(t.path) : pt(t.path);
    setTimeout(() => P({ type: "folder", parentPath: e }), 0);
  }, Kt = async (e) => {
    if (!y)
      return;
    const i = m(y.parentPath), p = et(i, e), f = y.type;
    P(null);
    try {
      f === "file" ? (await a.createFile(p), await r(), B == null || B(p, e), S == null || S(p, e, !1)) : (await a.createFolder(p), await r(), X == null || X(p));
    } catch (N) {
      g({
        action: f === "file" ? "create-file" : "create-folder",
        error: N,
        node: t,
        targetPath: p
      }), await r().catch(() => {
      });
    }
  }, Ot = async () => {
    o();
    try {
      document.activeElement instanceof HTMLElement && document.activeElement.blur();
      const e = pt(t.path), i = et(e, `.trash_${Date.now()}_${t.name}`);
      let p;
      if (t.type === "file" && a.readFile)
        try {
          p = await a.readFile(t.path);
        } catch (f) {
          g({
            action: "delete-item",
            error: f,
            node: t,
            sourcePath: t.path
          });
        }
      await a.renameItem(t.path, i), ra({
        originalPath: t.path,
        trashPath: i,
        type: t.type,
        restore: async () => {
          await a.renameItem(i, t.path), t.type === "file" ? B == null || B(t.path, t.name, p, !0) : X == null || X(t.path, !0), $();
        }
      }), h == null || h(t.path, t.type), $();
    } catch (e) {
      g({
        action: "delete-item",
        error: e,
        node: t,
        sourcePath: t.path
      });
    }
  }, Ut = (e) => {
    e == null || e.stopPropagation(), o(), Zt({ path: t.path, type: t.type, action: "cut" });
  }, qt = (e) => {
    e == null || e.stopPropagation(), o(), Zt({ path: t.path, type: t.type, action: "copy" });
  }, St = async (e) => {
    e == null || e.stopPropagation(), o();
    const i = Ct();
    if (!i)
      return;
    const p = t.type === "directory" ? m(t.path) : pt(t.path), f = wt(i.path), N = et(p, f);
    if (i.action === "cut" && tt(N, i.path)) {
      $t();
      return;
    }
    try {
      if (i.action === "cut") {
        h == null || h(i.path, i.type, !0);
        let A = N;
        try {
          const q = await a.renameItem(i.path, N);
          q && (A = m(q));
        } catch (q) {
          g({
            action: "paste-item",
            error: q,
            node: t,
            sourcePath: i.path,
            targetPath: N
          });
          return;
        }
        x == null || x(i.path, A), $t(), s == null || s();
      } else {
        let A = N;
        try {
          const q = await a.copyItem(i.path, N);
          q && (A = m(q));
        } catch (q) {
          g({
            action: "paste-item",
            error: q,
            node: t,
            sourcePath: i.path,
            targetPath: N
          });
          return;
        }
        rt == null || rt(A, i.type), s == null || s();
      }
      $();
    } catch (A) {
      g({
        action: "paste-item",
        error: A,
        node: t,
        sourcePath: i.path,
        targetPath: N
      });
    }
  }, ne = (e) => {
    e.stopPropagation(), e.dataTransfer.setData(
      zt,
      JSON.stringify({ path: t.path, type: t.type })
    ), e.dataTransfer.effectAllowed = "move";
  }, ce = (e) => {
    t.type === "directory" && (e.preventDefault(), e.stopPropagation(), L.current += 1, L.current === 1 && U(!0));
  }, se = (e) => {
    e.preventDefault(), t.type === "directory" && e.stopPropagation(), e.dataTransfer.dropEffect = "move";
  }, ie = (e) => {
    t.type === "directory" && (e.preventDefault(), e.stopPropagation(), L.current -= 1, L.current === 0 && U(!1));
  }, ue = async (e) => {
    e.preventDefault(), e.stopPropagation(), L.current = 0, U(!1);
    const i = e.dataTransfer.getData(zt);
    if (!i)
      return;
    const p = t.type === "directory" ? m(t.path) : pt(t.path);
    try {
      const f = JSON.parse(i), N = et(p, wt(f.path));
      if (tt(N, f.path))
        return;
      h == null || h(f.path, f.type, !0);
      let A = N;
      try {
        const q = await a.renameItem(f.path, N);
        q && (A = m(q));
      } catch (q) {
        g({
          action: "move-item",
          error: q,
          node: t,
          sourcePath: f.path,
          targetPath: N
        });
        return;
      }
      x == null || x(f.path, A), $(), s == null || s();
    } catch (f) {
      g({
        action: "move-item",
        error: f,
        node: t
      });
    }
  }, oe = (e) => {
    e.preventDefault(), e.stopPropagation(), it.current += 1, it.current === 1 && U(!0);
  }, le = (e) => {
    e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "move";
  }, pe = (e) => {
    e.preventDefault(), e.stopPropagation(), it.current -= 1, it.current === 0 && U(!1);
  }, fe = async (e) => {
    e.preventDefault(), e.stopPropagation(), it.current = 0, L.current = 0, U(!1);
    const i = e.dataTransfer.getData(zt);
    if (i)
      try {
        const p = JSON.parse(i), f = et(t.path, wt(p.path));
        if (tt(f, p.path))
          return;
        h == null || h(p.path, p.type, !0);
        let N = f;
        try {
          const A = await a.renameItem(p.path, f);
          A && (N = m(A));
        } catch (A) {
          g({
            action: "move-item",
            error: A,
            node: t,
            sourcePath: p.path,
            targetPath: f
          });
          return;
        }
        x == null || x(p.path, N), $(), s == null || s();
      } catch (p) {
        g({
          action: "move-item",
          error: p,
          node: t
        });
      }
  }, Xt = () => {
    o(), vt(t.name), R(!0), D.current = !1;
  }, Jt = async () => {
    if (D.current)
      return;
    D.current = !0, R(!1);
    const e = nt.trim();
    if (!e || e === t.name) {
      D.current = !1;
      return;
    }
    const i = et(pt(t.path), e);
    let p = i;
    try {
      const f = await a.renameItem(t.path, i);
      f && (p = m(f));
    } catch (f) {
      D.current = !1, g({
        action: "rename-item",
        error: f,
        node: t,
        sourcePath: t.path,
        targetPath: i
      }), $();
      return;
    }
    x == null || x(t.path, p), $(), D.current = !1;
  }, he = ft(
    (e) => {
      const i = e.relatedTarget, p = dt, f = i && !!i.closest(Y), N = i === document.body || !i;
      k.current && clearTimeout(k.current), k.current = setTimeout(() => {
        var A;
        if (document.activeElement !== F.current) {
          if (!p && (f || N)) {
            (A = F.current) == null || A.focus();
            return;
          }
          Jt();
        }
      }, 300);
    },
    [Y, nt, t.name, t.path]
  ), Wt = _ ? tt(_.path, t.path) : !1, ye = Wt && t.type === "file", me = Wt && t.type === "directory";
  return /* @__PURE__ */ C("div", { className: "sft-tree-node-wrapper", ref: gt, children: [
    /* @__PURE__ */ C(
      "div",
      {
        className: Tt(
          "sft-tree-node",
          ye && "sft-active",
          me && "sft-selected-folder",
          O && t.type === "directory" && "sft-drag-over",
          Vt && "sft-cut-node"
        ),
        style: { paddingLeft: `${n * u + 8}px` },
        draggable: !Q,
        onDragStart: ne,
        ...t.type === "directory" ? {
          onDragEnter: ce,
          onDragOver: se,
          onDragLeave: ie,
          onDrop: ue
        } : {
          onDragOver: (e) => {
            e.preventDefault(), e.dataTransfer.dropEffect = "move";
          }
        },
        onKeyDown: (e) => {
          if (!Q) {
            if (e.key.toLowerCase() === "x" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault(), e.stopPropagation(), Ut();
              return;
            }
            if (e.key.toLowerCase() === "c" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault(), e.stopPropagation(), qt();
              return;
            }
            if (e.key.toLowerCase() === "v" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault(), e.stopPropagation(), St();
              return;
            }
            if (e.key === "F2") {
              e.preventDefault(), e.stopPropagation(), Xt();
              return;
            }
            if (e.key === "Delete" || e.key === "Del" || e.metaKey && e.key === "Backspace") {
              e.preventDefault(), e.stopPropagation(), Ot();
              return;
            }
            e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), d({ path: t.path, type: t.type }), t.type === "file" ? V(t.path, t.name) : w());
          }
        },
        tabIndex: 0,
        onClick: (e) => {
          e.stopPropagation(), e.currentTarget.focus(), d({ path: t.path, type: t.type }), t.type === "file" ? V(t.path, t.name) : w();
        },
        onContextMenu: (e) => {
          d({ path: t.path, type: t.type }), E(e);
        },
        children: [
          yt || t.type === "directory" ? t.type === "directory" ? /* @__PURE__ */ c("span", { className: "sft-expand-icon", children: K ? /* @__PURE__ */ c(Ee, { size: 14 }) : /* @__PURE__ */ c(_e, { size: 14 }) }) : /* @__PURE__ */ c("span", { className: "sft-expand-icon" }) : /* @__PURE__ */ c("span", { className: "sft-expand-icon sft-expand-icon-empty" }),
          /* @__PURE__ */ c("span", { className: "sft-file-icon", children: G ? G(t) : la(t) }),
          Q ? /* @__PURE__ */ c(
            "input",
            {
              ref: F,
              autoFocus: !0,
              className: Pe,
              title: l.rename,
              value: nt,
              onChange: (e) => vt(e.target.value),
              onFocus: (e) => {
                k.current && (clearTimeout(k.current), k.current = null), e.target.select();
              },
              onBlur: he,
              onClick: (e) => e.stopPropagation(),
              onMouseDown: (e) => e.stopPropagation()
            }
          ) : /* @__PURE__ */ c("span", { className: "sft-node-name", children: t.name })
        ]
      }
    ),
    H && kt ? Rt(
      /* @__PURE__ */ C(
        "div",
        {
          className: "sft-context-menu",
          style: { top: H.y, left: H.x },
          children: [
            /* @__PURE__ */ c("div", { className: "sft-context-menu-item", onClick: ut, children: /* @__PURE__ */ c("span", { children: l.newFile }) }),
            /* @__PURE__ */ c("div", { className: "sft-context-menu-item", onClick: mt, children: /* @__PURE__ */ c("span", { children: l.newFolder }) }),
            /* @__PURE__ */ c("div", { className: "sft-context-menu-separator" }),
            /* @__PURE__ */ C("div", { className: "sft-context-menu-item", onClick: Ut, children: [
              /* @__PURE__ */ c("span", { children: l.cut }),
              /* @__PURE__ */ c("span", { className: "sft-context-menu-shortcut", children: Nt("cut", T) })
            ] }),
            /* @__PURE__ */ C("div", { className: "sft-context-menu-item", onClick: qt, children: [
              /* @__PURE__ */ c("span", { children: l.copy }),
              /* @__PURE__ */ c("span", { className: "sft-context-menu-shortcut", children: Nt("copy", T) })
            ] }),
            /* @__PURE__ */ C(
              "div",
              {
                className: Tt(
                  "sft-context-menu-item",
                  !W && "sft-disabled"
                ),
                onClick: (e) => {
                  W && St(e);
                },
                children: [
                  /* @__PURE__ */ c("span", { children: l.paste }),
                  /* @__PURE__ */ c("span", { className: "sft-context-menu-shortcut", children: Nt("paste", T) })
                ]
              }
            ),
            /* @__PURE__ */ c("div", { className: "sft-context-menu-separator" }),
            /* @__PURE__ */ C("div", { className: "sft-context-menu-item", onClick: Xt, children: [
              /* @__PURE__ */ c("span", { children: l.rename }),
              /* @__PURE__ */ c("span", { className: "sft-context-menu-shortcut", children: "F2" })
            ] }),
            /* @__PURE__ */ c("div", { className: "sft-context-menu-separator" }),
            /* @__PURE__ */ C(
              "div",
              {
                className: "sft-context-menu-item sft-danger",
                onClick: () => {
                  Ot();
                },
                children: [
                  /* @__PURE__ */ c("span", { children: l.delete }),
                  /* @__PURE__ */ c("span", { className: "sft-context-menu-shortcut", children: Nt("delete", T) })
                ]
              }
            )
          ]
        }
      ),
      kt
    ) : null,
    K && t.type === "directory" ? /* @__PURE__ */ C(
      "div",
      {
        className: "sft-tree-children",
        onDragEnter: oe,
        onDragOver: le,
        onDragLeave: pe,
        onDrop: fe,
        children: [
          lt && (y == null ? void 0 : y.type) === "folder" ? /* @__PURE__ */ c(
            Ht,
            {
              type: y.type,
              depth: n + 1,
              hasFolders: yt,
              indentPx: u,
              labels: l,
              monacoSelector: Y,
              onSubmit: Kt,
              onCancel: () => P(null)
            }
          ) : null,
          ot.filter((e) => e.type === "directory").map((e) => /* @__PURE__ */ c(
            It,
            {
              fs: a,
              node: e,
              depth: n + 1,
              indentPx: u,
              platform: T,
              labels: l,
              activeFilePath: b,
              onFileClick: V,
              onRefresh: r,
              creatingItem: y,
              onSetCreating: P,
              selectedNode: _,
              onSelectNode: d,
              onFileOpened: S,
              onFileDeleted: h,
              onFileRenamed: x,
              onFileCreated: B,
              onFolderCreated: X,
              onFileCopied: rt,
              onFileMoved: s,
              refreshTrigger: M,
              renderIcon: G,
              clipboardSnapshot: W,
              monacoSelector: Y,
              portalContainer: ct,
              reportError: g
            },
            e.path
          )),
          lt && (y == null ? void 0 : y.type) === "file" ? /* @__PURE__ */ c(
            Ht,
            {
              type: y.type,
              depth: n + 1,
              hasFolders: yt,
              indentPx: u,
              labels: l,
              monacoSelector: Y,
              onSubmit: Kt,
              onCancel: () => P(null)
            }
          ) : null,
          ot.filter((e) => e.type !== "directory").map((e) => /* @__PURE__ */ c(
            It,
            {
              fs: a,
              node: e,
              depth: n + 1,
              indentPx: u,
              platform: T,
              labels: l,
              activeFilePath: b,
              onFileClick: V,
              onRefresh: r,
              creatingItem: y,
              onSetCreating: P,
              selectedNode: _,
              onSelectNode: d,
              onFileOpened: S,
              onFileDeleted: h,
              onFileRenamed: x,
              onFileCreated: B,
              onFolderCreated: X,
              onFileCopied: rt,
              onFileMoved: s,
              refreshTrigger: M,
              renderIcon: G,
              clipboardSnapshot: W,
              monacoSelector: Y,
              portalContainer: ct,
              reportError: g
            },
            e.path
          ))
        ]
      }
    ) : null
  ] });
}
const Pa = de.memo(function({
  fs: t,
  workspaceRoot: n,
  onOpenFolder: u,
  onFileClick: T,
  activeFilePath: l,
  onFileOpened: b,
  newFileTrigger: V,
  newFolderTrigger: $,
  onFileDeleted: y,
  onFileRenamed: P,
  onFileCreated: _,
  onFolderCreated: d,
  onFileCopied: S,
  onFileMoved: h,
  refreshTrigger: x,
  className: B,
  style: X,
  headerTitle: rt,
  emptyState: s,
  renderIcon: M,
  labels: G,
  platform: W = "auto",
  portalContainer: Y,
  enableUndoHotkeys: ct = !0,
  monacoSelector: g = ".monaco-editor",
  onSelectionChange: K,
  onError: st
}) {
  const [ot, jt] = Z([]), [H, z] = Z(null), [O, U] = Z(
    n ? { path: n, type: "directory" } : null
  ), [Q, R] = Z(null), [nt, vt] = Z(
    () => Ct()
  ), F = ua(W), k = F === "windows" ? 16 : 28, I = { ...sa, ...G }, gt = re(Y), D = ft(
    (r) => {
      st == null || st(r), console.error("[jack-file-tree]", r.action, r.error);
    },
    [st]
  );
  v(() => {
    ia();
  }, []), v(() => ea(() => {
    vt(Ct());
  }), []), v(() => {
    if (ct)
      return ca({ monacoSelector: g });
  }, [ct, g]), v(() => {
    U(n ? { path: n, type: "directory" } : null);
  }, [n]), v(() => {
    l && U({ path: l, type: "file" });
  }, [l]), v(() => {
    n && !O && U({ path: n, type: "directory" });
  }, [O, n]), v(() => {
    K == null || K(O);
  }, [K, O]);
  const L = ft(async () => {
    if (n)
      try {
        const r = await t.readDirectory(n);
        jt(ae(r));
      } catch (r) {
        D({
          action: "load-root",
          error: r,
          sourcePath: n
        });
      }
  }, [t, D, n]);
  v(() => {
    L();
  }, [L]), v(() => {
    typeof x == "number" && x > 0 && (L(), z((r) => r || null));
  }, [L, x]), v(() => {
    !V || !n || setTimeout(() => {
      z({
        type: "file",
        parentPath: Et(O, n)
      });
    }, 0);
  }, [V, O, n]), v(() => {
    !$ || !n || setTimeout(() => {
      z({
        type: "folder",
        parentPath: Et(O, n)
      });
    }, 0);
  }, [$, O, n]), v(() => {
    if (Q) {
      const r = (E) => {
        const ut = E.target instanceof HTMLElement ? E.target : null;
        ut != null && ut.closest(".sft-context-menu") || R(null);
      }, w = () => R(null), o = () => R(null);
      return window.addEventListener("mousedown", r), window.addEventListener("blur", w), document.addEventListener(Pt, o), () => {
        window.removeEventListener("mousedown", r), window.removeEventListener("blur", w), document.removeEventListener(Pt, o);
      };
    }
  }, [Q]);
  const it = (r) => {
    z(r);
  }, yt = async () => {
    R(null);
    const r = Ct();
    if (!r || !n)
      return;
    const w = et(m(n), wt(r.path));
    if (r.action === "cut" && tt(w, r.path)) {
      $t();
      return;
    }
    try {
      if (r.action === "cut") {
        y == null || y(r.path, r.type, !0);
        let o = w;
        try {
          const E = await t.renameItem(r.path, w);
          E && (o = m(E));
        } catch (E) {
          D({
            action: "paste-item",
            error: E,
            sourcePath: r.path,
            targetPath: w
          });
          return;
        }
        P == null || P(r.path, o), $t(), h == null || h();
      } else {
        let o = w;
        try {
          const E = await t.copyItem(r.path, w);
          E && (o = m(E));
        } catch (E) {
          D({
            action: "paste-item",
            error: E,
            sourcePath: r.path,
            targetPath: w
          });
          return;
        }
        S == null || S(o, r.type), h == null || h();
      }
      await L();
    } catch (o) {
      D({
        action: "paste-item",
        error: o,
        sourcePath: r.path,
        targetPath: w
      });
    }
  }, kt = async (r) => {
    r.preventDefault();
    const w = r.dataTransfer.getData(zt);
    if (!(!w || !n))
      try {
        const o = JSON.parse(w), E = et(m(n), wt(o.path));
        if (tt(E, o.path))
          return;
        y == null || y(o.path, o.type, !0);
        let ut = E;
        try {
          const mt = await t.renameItem(o.path, E);
          mt && (ut = m(mt));
        } catch (mt) {
          D({
            action: "move-item",
            error: mt,
            sourcePath: o.path,
            targetPath: E
          });
          return;
        }
        P == null || P(o.path, ut), await L(), h == null || h();
      } catch (o) {
        D({
          action: "move-item",
          error: o
        });
      }
  }, lt = ot.some((r) => r.type === "directory"), Vt = rt || (n ? wt(n) : I.explorer);
  return n ? /* @__PURE__ */ C(
    "div",
    {
      className: Tt(
        "sft-file-tree-panel",
        F === "windows" && "sft-platform-windows",
        B
      ),
      style: X,
      onClick: () => U({ path: n, type: "directory" }),
      onDragEnter: (r) => {
        r.preventDefault(), r.stopPropagation();
      },
      onDragOver: (r) => {
        r.preventDefault(), r.stopPropagation(), r.dataTransfer.dropEffect = "move";
      },
      onDrop: (r) => {
        kt(r);
      },
      tabIndex: 0,
      onKeyDown: (r) => {
        if (r.key.toLowerCase() === "v" && (r.metaKey || r.ctrlKey)) {
          if (r.target.closest(".sft-tree-node"))
            return;
          r.preventDefault(), yt();
        }
      },
      onContextMenu: (r) => {
        r.target.closest(".sft-tree-node") || (r.preventDefault(), r.stopPropagation(), document.dispatchEvent(new CustomEvent(Pt)), R({ x: r.clientX, y: r.clientY }), U({ path: n, type: "directory" }));
      },
      children: [
        /* @__PURE__ */ C("div", { className: "sft-tree-header", title: n, children: [
          /* @__PURE__ */ c("span", { className: "sft-tree-header-title", children: Vt }),
          /* @__PURE__ */ C("div", { className: "sft-tree-actions", children: [
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                className: "sft-tree-action-btn",
                title: I.newFile,
                onClick: (r) => {
                  r.stopPropagation(), setTimeout(() => {
                    z({
                      type: "file",
                      parentPath: Et(O, n)
                    });
                  }, 0);
                },
                children: /* @__PURE__ */ c(Oe, { size: 18 })
              }
            ),
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                className: "sft-tree-action-btn",
                title: I.newFolder,
                onClick: (r) => {
                  r.stopPropagation(), setTimeout(() => {
                    z({
                      type: "folder",
                      parentPath: Et(O, n)
                    });
                  }, 0);
                },
                children: /* @__PURE__ */ c(Je, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ C("div", { className: "sft-tree-content", children: [
          H && tt(H.parentPath, n) && H.type === "folder" ? /* @__PURE__ */ c(
            Ht,
            {
              type: H.type,
              depth: 0,
              hasFolders: lt,
              indentPx: k,
              labels: I,
              monacoSelector: g,
              onSubmit: async (r) => {
                const w = et(m(n), r);
                z(null);
                try {
                  await t.createFolder(w), await L(), d == null || d(w);
                } catch (o) {
                  D({
                    action: "create-folder",
                    error: o,
                    targetPath: w
                  }), await L();
                }
              },
              onCancel: () => z(null)
            }
          ) : null,
          ot.filter((r) => r.type === "directory").map((r) => /* @__PURE__ */ c(
            It,
            {
              fs: t,
              node: r,
              depth: 0,
              indentPx: k,
              platform: F,
              labels: I,
              activeFilePath: l,
              onFileClick: T,
              onRefresh: L,
              creatingItem: H,
              onSetCreating: it,
              selectedNode: O,
              onSelectNode: U,
              onFileOpened: b,
              onFileDeleted: y,
              onFileRenamed: P,
              onFileCreated: _,
              onFolderCreated: d,
              onFileCopied: S,
              onFileMoved: h,
              refreshTrigger: x,
              renderIcon: M,
              clipboardSnapshot: nt,
              monacoSelector: g,
              portalContainer: Y,
              reportError: D
            },
            r.path
          )),
          H && tt(H.parentPath, n) && H.type === "file" ? /* @__PURE__ */ c(
            Ht,
            {
              type: H.type,
              depth: 0,
              hasFolders: lt,
              indentPx: k,
              labels: I,
              monacoSelector: g,
              onSubmit: async (r) => {
                const w = et(m(n), r);
                z(null);
                try {
                  await t.createFile(w), await L(), _ == null || _(w, r), b == null || b(w, r, !1);
                } catch (o) {
                  D({
                    action: "create-file",
                    error: o,
                    targetPath: w
                  }), await L();
                }
              },
              onCancel: () => z(null)
            }
          ) : null,
          ot.filter((r) => r.type !== "directory").map((r) => /* @__PURE__ */ c(
            It,
            {
              fs: t,
              node: r,
              depth: 0,
              indentPx: k,
              platform: F,
              labels: I,
              activeFilePath: l,
              onFileClick: T,
              onRefresh: L,
              creatingItem: H,
              onSetCreating: it,
              selectedNode: O,
              onSelectNode: U,
              onFileOpened: b,
              onFileDeleted: y,
              onFileRenamed: P,
              onFileCreated: _,
              onFolderCreated: d,
              onFileCopied: S,
              onFileMoved: h,
              refreshTrigger: x,
              renderIcon: M,
              clipboardSnapshot: nt,
              monacoSelector: g,
              portalContainer: Y,
              reportError: D
            },
            r.path
          ))
        ] }),
        Q && gt ? Rt(
          /* @__PURE__ */ C(
            "div",
            {
              className: "sft-context-menu",
              style: { top: Q.y, left: Q.x },
              children: [
                /* @__PURE__ */ c(
                  "div",
                  {
                    className: "sft-context-menu-item",
                    onClick: () => {
                      setTimeout(
                        () => z({
                          type: "file",
                          parentPath: n
                        }),
                        0
                      ), R(null);
                    },
                    children: /* @__PURE__ */ c("span", { children: I.newFile })
                  }
                ),
                /* @__PURE__ */ c(
                  "div",
                  {
                    className: "sft-context-menu-item",
                    onClick: () => {
                      setTimeout(
                        () => z({
                          type: "folder",
                          parentPath: n
                        }),
                        0
                      ), R(null);
                    },
                    children: /* @__PURE__ */ c("span", { children: I.newFolder })
                  }
                ),
                /* @__PURE__ */ c("div", { className: "sft-context-menu-separator" }),
                /* @__PURE__ */ C(
                  "div",
                  {
                    className: Tt(
                      "sft-context-menu-item",
                      !nt && "sft-disabled"
                    ),
                    onClick: () => {
                      nt && yt();
                    },
                    children: [
                      /* @__PURE__ */ c("span", { children: I.paste }),
                      /* @__PURE__ */ c("span", { className: "sft-context-menu-shortcut", children: Nt("paste", F) })
                    ]
                  }
                )
              ]
            }
          ),
          gt
        ) : null
      ]
    }
  ) : /* @__PURE__ */ C(
    "div",
    {
      className: Tt(
        "sft-file-tree-panel",
        F === "windows" && "sft-platform-windows",
        B
      ),
      style: X,
      children: [
        /* @__PURE__ */ C("div", { className: "sft-tree-header", children: [
          /* @__PURE__ */ c("span", { className: "sft-tree-header-title", children: I.explorer }),
          /* @__PURE__ */ c("div", { className: "sft-tree-actions" })
        ] }),
        s || /* @__PURE__ */ C("div", { className: "sft-empty-folder-container", children: [
          /* @__PURE__ */ c("p", { className: "sft-empty-folder-text", children: I.noFolderOpened }),
          u ? /* @__PURE__ */ c("div", { className: "sft-empty-folder-actions", children: /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: u,
              className: "sft-empty-folder-btn",
              children: I.openFolder
            }
          ) }) : null
        ] })
      ]
    }
  );
});
export {
  Pa as FileTree,
  ca as attachFileTreeUndoHotkeys,
  $t as clearFileTreeClipboard,
  wa as clearFileTreeUndoStack,
  sa as defaultFileTreeLabels,
  Ct as getFileTreeClipboard,
  da as getFileTreeUndoCount,
  Na as installFileTreeInputShield,
  na as restoreLastFileTreeDeletion,
  Zt as setFileTreeClipboard,
  ea as subscribeFileTreeClipboard,
  ma as updateFileTreeClipboardPath
};
