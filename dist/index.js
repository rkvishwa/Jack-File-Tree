const __jackFileTreeCss = ".sft-file-tree-panel{--_sft-bg-primary: var(--sft-bg-primary, var(--bg-primary, #000000));--_sft-bg-secondary: var(--sft-bg-secondary, var(--bg-secondary, #0a0a0a));--_sft-bg-hover: var(--sft-bg-hover, var(--bg-hover, rgba(59, 130, 246, .1)));--_sft-text-primary: var(--sft-text-primary, var(--text-primary, #fafafa));--_sft-text-secondary: var(--sft-text-secondary, var(--text-secondary, #a1a1aa));--_sft-text-muted: var(--sft-text-muted, var(--text-muted, #52525b));--_sft-accent: var(--sft-accent, var(--accent, #3b82f6));--_sft-accent-transparent: var( --sft-accent-transparent, var(--accent-transparent, rgba(59, 130, 246, .15)) );--_sft-danger: var(--sft-danger, var(--danger, #ef4444));--_sft-menu-bg: var(--sft-menu-bg, var(--menu-bg, #252526));--_sft-menu-border: var(--sft-menu-border, var(--menu-border, #454545));--_sft-menu-hover: var(--sft-menu-hover, var(--menu-hover, #04395e));--_sft-menu-text: var(--sft-menu-text, var(--menu-text, #cccccc));--_sft-sidebar-border: var( --sft-sidebar-border, var(--border, rgba(255, 255, 255, .08)) );--_sft-open-folder-btn-bg: var( --sft-open-folder-btn-bg, var(--sft-accent, var(--accent, #3b82f6)) );--_sft-open-folder-btn-bg-hover: var( --sft-open-folder-btn-bg-hover, color-mix(in srgb, var(--_sft-open-folder-btn-bg) 88%, white) );--_sft-open-folder-btn-text: var(--sft-open-folder-btn-text, #ffffff);--_sft-open-folder-btn-border: var( --sft-open-folder-btn-border, color-mix(in srgb, var(--_sft-open-folder-btn-bg) 70%, black) );--_sft-font: var( --sft-font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif );--_sft-top-padding: var(--sft-panel-top-padding, 0px);--_sft-header-title-offset-y: var(--sft-header-title-offset-y, 0px);--_sft-header-actions-offset-y: var(--sft-header-actions-offset-y, 0px);background:var(--_sft-bg-secondary);height:100%;min-height:0;display:flex;flex-direction:column;color:var(--_sft-text-secondary);padding-top:var(--_sft-top-padding);container-type:inline-size;font-family:var(--_sft-font);-webkit-user-select:none;user-select:none}.sft-file-tree-panel.sft-sidebar-left{border-right:1px solid var(--_sft-sidebar-border)}.sft-file-tree-panel.sft-sidebar-right{border-left:1px solid var(--_sft-sidebar-border)}.sft-platform-windows.sft-file-tree-panel{font-family:var( --sft-font-family-windows, \"Segoe WPC\", \"Segoe UI\", system-ui, sans-serif )}.sft-tree-header{padding:8px 16px;display:flex;align-items:center;justify-content:space-between;text-transform:uppercase;font-size:11px;font-weight:600;letter-spacing:.5px;cursor:pointer;border-bottom:1px solid var(--_sft-sidebar-border);min-height:38px}@container (max-width: 180px){.sft-tree-header{padding:12px 8px;justify-content:center}}.sft-tree-header:hover{color:var(--_sft-text-primary)}.sft-tree-actions{display:flex;gap:8px;min-height:22px;transform:translateY(var(--_sft-header-actions-offset-y))}.sft-tree-action-btn{background:none;border:none;color:var(--_sft-text-muted);cursor:pointer;padding:3px;border-radius:4px;display:flex;align-items:center;justify-content:center;transition:all .2s}.sft-tree-action-btn:hover{background:var(--_sft-bg-hover);color:var(--_sft-text-primary)}.sft-tree-content{flex:1;display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;padding:4px 0;min-height:0}.sft-platform-windows .sft-tree-content{padding:2px 0}.sft-tree-node-wrapper{position:relative}.sft-tree-node{display:flex;align-items:center;gap:6px;padding:3px 12px;cursor:pointer;-webkit-user-select:none;user-select:none;font-size:13px;transition:background .1s;color:var(--_sft-text-secondary);min-height:26px;outline:none}.sft-tree-node:focus-visible{box-shadow:inset 0 0 0 1px var(--_sft-accent)}.sft-platform-windows .sft-tree-node{gap:4px;padding:1px 8px;min-height:22px}.sft-tree-node:hover{background:var(--_sft-bg-hover);color:var(--_sft-text-primary)}.sft-tree-node.sft-active{background:var(--_sft-accent-transparent);color:var(--_sft-accent)}.sft-tree-node.sft-drag-over{background:var(--_sft-bg-hover)!important;border:1px dashed var(--_sft-accent)}.sft-tree-node.sft-selected-folder{background:var(--_sft-bg-hover);border-right:2px solid var(--_sft-accent)}.sft-sidebar-right .sft-tree-node.sft-selected-folder{border-right:none;border-left:2px solid var(--_sft-accent)}.sft-tree-node.sft-cut-node{opacity:.4;font-style:italic}.sft-expand-icon{width:16px;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--_sft-text-muted);flex-shrink:0}.sft-expand-icon-empty{width:4px}.sft-file-icon{width:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.sft-file-icon svg{width:16px;height:16px}.sft-node-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0}.sft-rename-input,.sft-inline-create-input{background:var(--_sft-bg-primary);color:var(--_sft-text-primary);border:1px solid var(--_sft-accent);border-radius:4px;padding:2px 6px;font-size:13px;width:100%;margin-left:-6px;user-select:text;-webkit-user-select:text;pointer-events:auto;font:inherit}.sft-inline-create{align-items:flex-start}.sft-inline-create .sft-expand-icon,.sft-inline-create .sft-file-icon{margin-top:5px}.sft-inline-create-field{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}.sft-inline-create-input-error{border-color:var(--_sft-danger);box-shadow:0 0 0 1px color-mix(in srgb,var(--_sft-danger) 32%,transparent)}.sft-inline-create-error{color:var(--_sft-danger);font-size:11px;line-height:1.3;margin-left:-6px}.sft-rename-input:focus,.sft-inline-create-input:focus{outline:none;box-shadow:0 0 0 2px var(--_sft-accent-transparent)}.sft-inline-create-input-error:focus{box-shadow:0 0 0 2px color-mix(in srgb,var(--_sft-danger) 20%,transparent)}.sft-context-menu-layer{position:fixed;z-index:999999}.sft-context-menu{position:relative;background:var(--sft-menu-bg, var(--menu-bg, #252526));border:1px solid var(--sft-menu-border, var(--menu-border, #454545));box-shadow:0 16px 42px #0000006b;border-radius:4px;padding:4px 0;min-width:250px;overflow:hidden;font-family:var( --sft-font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif );color:var(--sft-menu-text, var(--menu-text, #cccccc));backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}.sft-context-menu-item{padding:6px 20px 6px 30px;cursor:default;font-size:13px;display:flex;align-items:center;justify-content:space-between;-webkit-user-select:none;user-select:none}.sft-context-menu-item:hover{background:var(--sft-menu-hover, var(--menu-hover, #04395e));color:#fff}.sft-context-menu-item.sft-disabled{opacity:.5;pointer-events:none}.sft-context-menu-item.sft-danger:hover{background:var(--_sft-danger);color:#fff}.sft-context-menu-separator{height:1px;background-color:var(--sft-menu-border, var(--menu-border, #454545));margin:4px 0}.sft-context-menu-shortcut{color:var(--sft-text-muted, var(--text-muted, #71717a))}.sft-tree-header-title{display:flex;align-items:center;align-self:stretch;height:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:8px;line-height:1;position:relative;top:var(--_sft-header-title-offset-y)}.sft-empty-folder-container{flex:1;min-height:0;display:flex;flex-direction:column;gap:16px;padding:16px;color:var(--_sft-text-muted)}.sft-empty-folder-container.sft-open-folder-center{justify-content:center}.sft-empty-folder-open-slot{width:100%}.sft-empty-folder-body{flex:1;min-height:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center}.sft-open-folder-top .sft-empty-folder-body{padding-bottom:24px}.sft-empty-folder-text{margin:0}.sft-empty-folder-actions{display:flex;width:100%;gap:8px}.sft-empty-folder-btn,.sft-open-folder-btn{width:100%;padding:10px 14px;background:var(--_sft-open-folder-btn-bg);color:var(--_sft-open-folder-btn-text);border-radius:8px;cursor:pointer;border:1px solid var(--_sft-open-folder-btn-border);font:inherit;font-weight:600;box-shadow:0 10px 24px #0003;transition:transform .15s ease,filter .15s ease,box-shadow .15s ease}.sft-empty-folder-btn:hover,.sft-open-folder-btn:hover{background:var(--_sft-open-folder-btn-bg-hover);box-shadow:0 14px 28px #0000003d}.sft-empty-folder-btn:active,.sft-open-folder-btn:active{transform:translateY(1px)}.sft-empty-folder-btn:disabled,.sft-open-folder-btn:disabled{opacity:.6;cursor:not-allowed;box-shadow:none}.sft-tree-footer{padding:10px 16px;border-top:1px solid var(--_sft-sidebar-border);color:var(--_sft-text-muted);font-size:12px}\n";
(function injectJackFileTreeStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("jack-file-tree-styles")) return;
  const styleElement = document.createElement("style");
  styleElement.id = "jack-file-tree-styles";
  styleElement.setAttribute("data-jack-file-tree", "true");
  styleElement.textContent = __jackFileTreeCss;
  if (document.head) {
    document.head.appendChild(styleElement);
    return;
  }
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      if (!document.getElementById("jack-file-tree-styles")) {
        document.head?.appendChild(styleElement);
      }
    },
    { once: true },
  );
})();
import { jsx as s, jsxs as R, Fragment as He } from "react/jsx-runtime";
import Ee, { forwardRef as Le, createElement as Pe, useState as Z, useCallback as dt, useEffect as E, useRef as J } from "react";
import { createPortal as ke } from "react-dom";
import { f as oe, F as Ie, a as Ve } from "./installFileTreeInputShield-CAwi1K8A.js";
import { i as Gr } from "./installFileTreeInputShield-CAwi1K8A.js";
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = (...e) => e.filter((t, a, i) => !!t && t.trim() !== "" && i.indexOf(t) === a).join(" ").trim();
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, i) => i ? i.toUpperCase() : a.toLowerCase()
);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = (e) => {
  const t = Se(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ue = {
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
const Ke = (e) => {
  for (const t in e)
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
const qe = Le(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: i,
    className: k = "",
    children: u,
    iconNode: w,
    ...z
  }, X) => Pe(
    "svg",
    {
      ref: X,
      ...Ue,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: i ? Number(a) * 24 / Number(t) : a,
      className: De("lucide", k),
      ...!u && !Ke(z) && { "aria-hidden": "true" },
      ...z
    },
    [
      ...w.map(([L, p]) => Pe(L, p)),
      ...Array.isArray(u) ? u : [u]
    ]
  )
);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I = (e, t) => {
  const a = Le(
    ({ className: i, ...k }, u) => Pe(qe, {
      ref: u,
      iconNode: t,
      className: De(
        `lucide-${Me(Te(e))}`,
        `lucide-${e}`,
        i
      ),
      ...k
    })
  );
  return a.displayName = Te(e), a;
};
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = [
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
], Xe = I("braces", We);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ge = I("chevron-down", Ye);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ze = I("chevron-right", Je);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
], Oe = I("code-xml", Qe);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], Fe = I("database", Re);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = [
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
], er = I("file-braces", tr);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = [
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
], ar = I("file-code-corner", rr);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = [
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
], sr = I("file-image", nr);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = [
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
], lr = I("file-plus-corner", cr);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = [
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
], ur = I("file-text", ir);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], _e = I("file", or);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = [
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], pr = I("folder-plus", fr);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], ze = I("folder", hr);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
], yr = I("git-branch", dr);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mr = [
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
], gr = I("palette", mr);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
], br = I("shield-alert", wr);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = [
  ["path", { d: "M12 19h8", key: "baeox8" }],
  ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
], vr = I("terminal", Pr);
function m(e) {
  return e.replace(/\\/g, "/");
}
function kt(e) {
  return m(e).toLowerCase();
}
function st(e) {
  const t = m(e), a = t.lastIndexOf("/");
  return a >= 0 ? t.slice(a + 1) : t;
}
function Lt(e) {
  const t = m(e), a = t.lastIndexOf("/");
  return a <= 0 ? a === 0 ? "/" : "" : t.slice(0, a);
}
function at(e, t) {
  const a = m(e).replace(/\/+$/g, "");
  return a ? `${a}/${t}` : t;
}
function Ae(e) {
  const t = /* @__PURE__ */ new Set();
  return e.filter((a) => {
    const i = kt(a.path);
    return t.has(i) ? !1 : (t.add(i), !0);
  });
}
function et(e, t) {
  return kt(e) === kt(t);
}
function Nr(e, t) {
  const a = kt(e), i = kt(t);
  return i === a || i.startsWith(`${a}/`);
}
const ve = /* @__PURE__ */ new Set();
let nt = null;
function fe() {
  ve.forEach((e) => e()), typeof window < "u" && window.dispatchEvent(new CustomEvent("jack-file-tree:clipboard-updated"));
}
function le() {
  return nt;
}
function Tr(e) {
  return ve.add(e), () => ve.delete(e);
}
function xe(e) {
  nt = e ? {
    ...e,
    path: m(e.path)
  } : null, fe();
}
function pe() {
  nt && (nt = null, fe());
}
function Ur(e, t) {
  if (!nt)
    return;
  const a = m(nt.path), i = m(e), k = m(t), u = kt(a), w = kt(i);
  if (u === w) {
    nt = {
      ...nt,
      path: k
    }, fe();
    return;
  }
  if (u.startsWith(`${w}/`)) {
    const z = a.slice(i.length);
    nt = {
      ...nt,
      path: `${k}${z}`
    }, fe();
  }
}
const Yt = [];
let se = 0, Wt = null, ie = {};
function xr(e) {
  if (ie.isEditableTarget)
    return ie.isEditableTarget(e);
  if (!(e instanceof HTMLElement))
    return !1;
  const t = ie.monacoSelector ?? ".monaco-editor";
  return e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable || !!e.closest(t);
}
function Kr() {
  return Yt.length;
}
function qr() {
  Yt.length = 0;
}
function Cr(e) {
  Yt.push(e);
}
async function Er() {
  const e = Yt.pop();
  if (!e)
    return !1;
  try {
    return await e.restore(), !0;
  } catch (t) {
    throw Yt.push(e), t;
  }
}
function Lr(e = {}) {
  if (ie = e, typeof window > "u")
    return () => {
    };
  if (se += 1, !Wt) {
    const t = async (a) => {
      if (!(!(a.ctrlKey || a.metaKey) || a.key.toLowerCase() !== "z") && !xr(a.target))
        try {
          await Er() && a.preventDefault();
        } catch (i) {
          console.error("Failed to restore deleted file tree item:", i);
        }
    };
    window.addEventListener("keydown", t), Wt = () => {
      window.removeEventListener("keydown", t);
    };
  }
  return () => {
    se -= 1, se <= 0 && Wt && (Wt(), Wt = null, se = 0);
  };
}
const kr = {
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
}, jt = "jack-file-tree:close-context-menus", ue = "application/x-jack-file-tree-item";
let Ce = !1, Bt = !1;
function Dr() {
  Ce || typeof window > "u" || (Ce = !0, window.addEventListener(
    "mousedown",
    () => {
      Bt = !0;
    },
    !0
  ), window.addEventListener(
    "mouseup",
    () => {
      setTimeout(() => {
        Bt = !1;
      }, 0);
    },
    !0
  ), window.addEventListener(
    "keydown",
    () => {
      Bt = !0;
    },
    !0
  ), window.addEventListener(
    "keyup",
    () => {
      setTimeout(() => {
        Bt = !1;
      }, 0);
    },
    !0
  ));
}
function _r(e) {
  if (e && e !== "auto")
    return e;
  if (typeof navigator > "u")
    return "mac";
  const t = navigator.userAgent.toLowerCase();
  return t.includes("win") ? "windows" : t.includes("mac") ? "mac" : "linux";
}
function zr(e) {
  const a = (e instanceof Error ? e.message : typeof e == "string" ? e : "Unable to create item").replace(/^Error invoking remote method ['"`].*?['"`]:\s*/i, "").replace(/^Error:\s*/i, "").replace(/^Failed to create (file|folder):\s*/i, "").replace(/^Error:\s*/i, "").trim();
  return /item with this name already exists/i.test(a) ? "An item with this name already exists" : a || "Unable to create item";
}
function Xt(e, t) {
  return e === "delete" ? t === "mac" ? "⌘⌫" : "Del" : `${t === "mac" ? "⌘" : "Ctrl+"}${e === "cut" ? "X" : e === "copy" ? "C" : "V"}`;
}
function ht(...e) {
  return e.filter(Boolean).join(" ");
}
function Ne(e) {
  return (e == null ? void 0 : e.enabled) !== !1;
}
function O(e, t) {
  var a;
  return Ne(e) ? ((a = e == null ? void 0 : e.actions) == null ? void 0 : a[t]) !== !1 : !1;
}
function $e(e) {
  return e.map(
    (t) => t.filter(
      (a) => a !== null
    )
  ).filter((t) => t.length > 0);
}
function Be({
  groups: e,
  scope: t,
  closeMenu: a
}) {
  return /* @__PURE__ */ s("div", { className: "sft-context-menu", "data-scope": t, children: e.map((i, k) => /* @__PURE__ */ R(Ee.Fragment, { children: [
    i.map((u) => /* @__PURE__ */ R(
      "div",
      {
        className: ht(
          "sft-context-menu-item",
          u.disabled && "sft-disabled",
          u.danger && "sft-danger"
        ),
        onClick: () => {
          u.disabled || (a(), u.onSelect());
        },
        children: [
          /* @__PURE__ */ s("span", { children: u.label }),
          u.shortcut ? /* @__PURE__ */ s("span", { className: "sft-context-menu-shortcut", children: u.shortcut }) : null
        ]
      },
      u.id
    )),
    k < e.length - 1 ? /* @__PURE__ */ s("div", { className: "sft-context-menu-separator" }) : null
  ] }, `group-${k}`)) });
}
function Ar(e) {
  if (e.extension)
    return e.extension.toLowerCase();
  const t = e.name.toLowerCase(), a = t.lastIndexOf(".");
  return a === -1 ? "" : t.slice(a + 1);
}
function $r(e) {
  return e === ".env" || e.startsWith(".env.") || e.endsWith(".env") || e.includes(".env.");
}
function Br(e) {
  return e === ".gitignore" || e === ".gitattributes" || e === ".gitmodules" || e === ".gitkeep" || e.startsWith(".git");
}
function jr(e) {
  if (e.type === "directory")
    return /* @__PURE__ */ s(ze, { size: 14, color: "var(--sft-accent, var(--accent, #3b82f6))" });
  const t = e.name.toLowerCase(), a = Ar(e);
  if (Br(t))
    return /* @__PURE__ */ s(yr, { size: 14, color: "#f97316" });
  if ($r(t))
    return /* @__PURE__ */ s(br, { size: 14, color: "#eab308" });
  switch (a) {
    case "js":
    case "jsx":
    case "mjs":
    case "cjs":
    case "ts":
    case "tsx":
    case "mts":
    case "cts":
      return /* @__PURE__ */ s(Xe, { size: 14, color: "#eab308" });
    case "json":
      return /* @__PURE__ */ s(er, { size: 14, color: "#22c55e" });
    case "html":
      return /* @__PURE__ */ s(Oe, { size: 14, color: "#ef4444" });
    case "css":
    case "scss":
    case "less":
      return /* @__PURE__ */ s(gr, { size: 14, color: "var(--sft-accent, var(--accent, #3b82f6))" });
    case "md":
    case "markdown":
    case "mdx":
      return /* @__PURE__ */ s(ur, { size: 14, color: "#a1a1aa" });
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
    case "webp":
      return /* @__PURE__ */ s(sr, { size: 14, color: "#8b5cf6" });
    case "sh":
    case "bash":
    case "zsh":
      return /* @__PURE__ */ s(vr, { size: 14, color: "#10b981" });
    case "php":
      return /* @__PURE__ */ s(ar, { size: 14, color: "#7b7fb5" });
    case "sql":
      return /* @__PURE__ */ s(Fe, { size: 14, color: "#f97316" });
    default:
      return /* @__PURE__ */ s(_e, { size: 14, color: "var(--sft-text-muted, var(--text-muted, #71717a))" });
  }
}
function ce(e, t) {
  return e ? e.type === "directory" ? m(e.path) : Lt(e.path) : m(t);
}
function je(e) {
  return e || (typeof document > "u" ? null : document.getElementById("root") ?? document.body);
}
function we(e) {
  return e instanceof Element && !!e.closest(".sft-tree-node-wrapper");
}
function be(e) {
  if (e !== void 0)
    return typeof e == "number" ? `${e}px` : e;
}
function v(e, t, a) {
  a !== void 0 && (e[t] = a);
}
function Hr(e) {
  const t = {};
  return e && (v(t, "--sft-bg-primary", e.backgroundPrimary), v(t, "--sft-bg-secondary", e.backgroundSecondary), v(t, "--sft-bg-hover", e.backgroundHover), v(t, "--sft-text-primary", e.textPrimary), v(t, "--sft-text-secondary", e.textSecondary), v(t, "--sft-text-muted", e.textMuted), v(t, "--sft-accent", e.accent), v(t, "--sft-accent-transparent", e.accentTransparent), v(t, "--sft-danger", e.danger), v(t, "--sft-menu-bg", e.menuBackground), v(t, "--sft-menu-border", e.menuBorder), v(t, "--sft-menu-hover", e.menuHover), v(t, "--sft-menu-text", e.menuText), v(t, "--sft-sidebar-border", e.sidebarBorder), v(
    t,
    "--sft-open-folder-btn-bg",
    e.openFolderButtonBackground
  ), v(
    t,
    "--sft-open-folder-btn-bg-hover",
    e.openFolderButtonBackgroundHover
  ), v(
    t,
    "--sft-open-folder-btn-text",
    e.openFolderButtonText
  ), v(
    t,
    "--sft-open-folder-btn-border",
    e.openFolderButtonBorder
  ), v(t, "--sft-font-family", e.fontFamily), v(t, "--sft-font-family-windows", e.fontFamilyWindows), v(
    t,
    "--sft-panel-top-padding",
    be(e.panelTopPadding)
  ), v(
    t,
    "--sft-header-title-offset-y",
    be(e.headerTitleOffsetY)
  ), v(
    t,
    "--sft-header-actions-offset-y",
    be(e.headerActionsOffsetY)
  )), t;
}
function he({
  type: e,
  depth: t,
  hasFolders: a,
  indentPx: i,
  labels: k,
  monacoSelector: u,
  onSubmit: w,
  onCancel: z
}) {
  const [X, L] = Z(""), [p, A] = Z(null), P = J(null), V = J(!1), h = J(null), N = J(Date.now()), D = J(w), U = J(z);
  D.current = w, U.current = z, E(() => {
    const g = P.current;
    g && g.focus();
    const S = requestAnimationFrame(() => {
      var _;
      return (_ = P.current) == null ? void 0 : _.focus();
    });
    return () => cancelAnimationFrame(S);
  }, []), E(() => {
    const g = P.current;
    if (g)
      return oe.set(g, {
        onSubmit: () => {
          h.current && (clearTimeout(h.current), h.current = null), K();
        },
        onCancel: () => {
          h.current && (clearTimeout(h.current), h.current = null), U.current();
        }
      }), () => {
        oe.delete(g);
      };
  }), E(() => () => {
    h.current && clearTimeout(h.current);
  }, []);
  const K = dt(async () => {
    if (V.current)
      return;
    const g = X.trim();
    if (!g) {
      U.current();
      return;
    }
    V.current = !0, A(null);
    try {
      await D.current(g);
    } catch (S) {
      V.current = !1, A(zr(S)), requestAnimationFrame(() => {
        var _;
        return (_ = P.current) == null ? void 0 : _.focus();
      });
    }
  }, [X]), ct = dt(
    (g) => {
      const S = g.relatedTarget, _ = Bt, H = S && !!S.closest(u), F = S === document.body || !S, Pt = Date.now() - N.current < 500;
      h.current && clearTimeout(h.current), h.current = setTimeout(() => {
        var x;
        if (document.activeElement !== P.current) {
          if (Pt || !_ && (H || F)) {
            (x = P.current) == null || x.focus();
            return;
          }
          K();
        }
      }, 300);
    },
    [K, u]
  ), $ = dt(() => {
    h.current && (clearTimeout(h.current), h.current = null);
  }, []);
  return /* @__PURE__ */ R(
    "div",
    {
      className: "sft-tree-node sft-inline-create",
      style: { paddingLeft: `${t * i + 8}px` },
      onClick: (g) => g.stopPropagation(),
      onMouseDown: (g) => g.stopPropagation(),
      children: [
        a ? /* @__PURE__ */ s("span", { className: "sft-expand-icon" }) : /* @__PURE__ */ s("span", { className: "sft-expand-icon sft-expand-icon-empty" }),
        /* @__PURE__ */ s("span", { className: "sft-file-icon", children: e === "folder" ? /* @__PURE__ */ s(ze, { size: 14, color: "var(--sft-accent, var(--accent, #3b82f6))" }) : /* @__PURE__ */ s(_e, { size: 14 }) }),
        /* @__PURE__ */ R("div", { className: "sft-inline-create-field", children: [
          /* @__PURE__ */ s(
            "input",
            {
              ref: P,
              className: `${Ie}${p ? " sft-inline-create-input-error" : ""}`,
              title: e === "folder" ? k.newFolder : k.newFile,
              value: X,
              placeholder: e === "folder" ? k.createFolderPlaceholder : k.createFilePlaceholder,
              onChange: (g) => {
                L(g.target.value), p && A(null);
              },
              onBlur: ct,
              onFocus: $,
              onClick: (g) => g.stopPropagation(),
              onMouseDown: (g) => g.stopPropagation(),
              "aria-invalid": p ? !0 : void 0
            }
          ),
          p ? /* @__PURE__ */ s("span", { className: "sft-inline-create-error", role: "alert", children: p }) : null
        ] })
      ]
    }
  );
}
function de({
  fs: e,
  node: t,
  depth: a,
  indentPx: i,
  hasDirectoriesAtLevel: k,
  platform: u,
  labels: w,
  activeFilePath: z,
  onFileClick: X,
  onRefresh: L,
  creatingItem: p,
  onSetCreating: A,
  selectedNode: P,
  onSelectNode: V,
  onFileOpened: h,
  onFileDeleted: N,
  onFileRenamed: D,
  onFileCreated: U,
  onFolderCreated: K,
  onFileCopied: ct,
  onFileMoved: $,
  refreshTrigger: g,
  renderIcon: S,
  clipboardSnapshot: _,
  contextMenuOptions: H,
  monacoSelector: F,
  portalContainer: Pt,
  reportError: x
}) {
  const [Q, Ht] = Z(!1), [It, Gt] = Z(t.children || []), [lt, yt] = Z(null), [Jt, it] = Z(!1), [mt, Vt] = Z(!1), [gt, Mt] = Z(t.name), vt = J(null), M = J(null), Zt = J(null), Dt = J(null), wt = J(!1), B = J(0), ut = J(0), Nt = It.some((r) => r.type === "directory"), ot = je(Pt), ft = p && et(p.parentPath, t.path) && t.type === "directory", _t = (_ == null ? void 0 : _.action) === "cut" && et(_.path, t.path), Tt = Ne(H) && [
    "new-file",
    "new-folder",
    "cut",
    "copy",
    "paste",
    "rename",
    "delete"
  ].some(
    (r) => O(
      H,
      r
    )
  ), q = dt(async () => {
    if (t.type === "directory")
      try {
        const r = await e.readDirectory(t.path);
        Gt(Ae(r));
      } catch (r) {
        x({
          action: "load-children",
          error: r,
          node: t,
          sourcePath: t.path
        });
      }
  }, [e, t, x]);
  E(() => {
    ft && !Q && (Ht(!0), q());
  }, [Q, ft, q]), E(() => {
    Q && typeof g == "number" && g > 0 && q();
  }, [Q, q, g]), E(() => {
    z !== Zt.current && (Zt.current = z ?? null, t.type === "directory" && z && Nr(t.path, z) && (Q || (Ht(!0), q())));
  }, [z, Q, q, t.path, t.type]), E(() => {
    if (lt) {
      const r = (f) => {
        const o = f.target instanceof HTMLElement ? f.target : null;
        o != null && o.closest(".sft-context-menu") || yt(null);
      }, c = () => yt(null), d = () => yt(null);
      return window.addEventListener("mousedown", r), window.addEventListener("blur", c), document.addEventListener(jt, d), () => {
        window.removeEventListener("mousedown", r), window.removeEventListener("blur", c), document.removeEventListener(jt, d);
      };
    }
  }, [lt]), E(() => {
    if (mt) {
      const r = vt.current;
      return r && oe.set(r, {
        onSubmit: () => {
          M.current && (clearTimeout(M.current), M.current = null), Et();
        },
        onCancel: () => {
          M.current && (clearTimeout(M.current), M.current = null), Vt(!1);
        }
      }), () => {
        M.current && clearTimeout(M.current), r && oe.delete(r);
      };
    }
  }, [gt, t.name, t.path, mt]), E(() => {
    (P == null ? void 0 : P.type) === "file" && et(P.path, t.path) && setTimeout(() => {
      var r;
      (r = Dt.current) == null || r.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 50);
  }, [t.path, P]);
  const Y = async () => {
    t.type === "directory" && (Q || await q(), Ht((r) => !r));
  }, T = () => yt(null), j = (r, c) => {
    Tt && (document.dispatchEvent(new CustomEvent(jt)), yt({ x: r, y: c }));
  }, rt = (r) => {
    r.preventDefault(), r.stopPropagation(), j(r.clientX, r.clientY);
  }, pt = (r) => {
    r.button === 2 && (V({ path: t.path, type: t.type }), Tt && rt(r));
  }, tt = (r) => {
    r.button === 2 && r.stopPropagation();
  }, zt = (r) => {
    Tt && (V({ path: t.path, type: t.type }), rt(r));
  }, ye = () => {
    T();
    const r = t.type === "directory" ? m(t.path) : Lt(t.path);
    setTimeout(() => A({ type: "file", parentPath: r }), 0);
  }, bt = () => {
    T();
    const r = t.type === "directory" ? m(t.path) : Lt(t.path);
    setTimeout(() => A({ type: "folder", parentPath: r }), 0);
  }, xt = async (r) => {
    if (!p)
      return;
    const c = m(p.parentPath), d = at(c, r), f = p.type;
    try {
      if (f === "file") {
        const o = await e.createFile(d), n = o ? m(o) : d;
        await q(), A(null), U == null || U(n, st(n)), h == null || h(n, st(n), !1);
      } else {
        const o = await e.createFolder(d), n = o ? m(o) : d;
        await q(), A(null), K == null || K(n);
      }
    } catch (o) {
      throw x({
        action: f === "file" ? "create-file" : "create-folder",
        error: o,
        node: t,
        targetPath: d
      }), await q().catch(() => {
      }), o;
    }
  }, C = async () => {
    T();
    try {
      document.activeElement instanceof HTMLElement && document.activeElement.blur();
      const r = Lt(t.path), c = at(r, `.trash_${Date.now()}_${t.name}`);
      let d;
      if (t.type === "file" && e.readFile)
        try {
          d = await e.readFile(t.path);
        } catch (f) {
          x({
            action: "delete-item",
            error: f,
            node: t,
            sourcePath: t.path
          });
        }
      await e.renameItem(t.path, c), Cr({
        originalPath: t.path,
        trashPath: c,
        type: t.type,
        restore: async () => {
          await e.renameItem(c, t.path), t.type === "file" ? U == null || U(t.path, t.name, d, !0) : K == null || K(t.path, !0), L();
        }
      }), N == null || N(t.path, t.type), L();
    } catch (r) {
      x({
        action: "delete-item",
        error: r,
        node: t,
        sourcePath: t.path
      });
    }
  }, St = (r) => {
    T(), xe({ path: t.path, type: t.type, action: "cut" });
  }, Qt = (r) => {
    T(), xe({ path: t.path, type: t.type, action: "copy" });
  }, Ut = async (r) => {
    T();
    const c = le();
    if (!c)
      return;
    const d = t.type === "directory" ? m(t.path) : Lt(t.path), f = st(c.path), o = at(d, f);
    if (c.action === "cut" && et(o, c.path)) {
      pe();
      return;
    }
    try {
      if (c.action === "cut") {
        N == null || N(c.path, c.type, !0);
        let n = o;
        try {
          const l = await e.renameItem(c.path, o);
          l && (n = m(l));
        } catch (l) {
          x({
            action: "paste-item",
            error: l,
            node: t,
            sourcePath: c.path,
            targetPath: o
          });
          return;
        }
        D == null || D(c.path, n), pe(), $ == null || $();
      } else {
        let n = o;
        try {
          const l = await e.copyItem(c.path, o);
          l && (n = m(l));
        } catch (l) {
          x({
            action: "paste-item",
            error: l,
            node: t,
            sourcePath: c.path,
            targetPath: o
          });
          return;
        }
        ct == null || ct(n, c.type), $ == null || $();
      }
      L();
    } catch (n) {
      x({
        action: "paste-item",
        error: n,
        node: t,
        sourcePath: c.path,
        targetPath: o
      });
    }
  }, G = (r) => {
    r.stopPropagation(), r.dataTransfer.setData(
      ue,
      JSON.stringify({ path: t.path, type: t.type })
    ), r.dataTransfer.effectAllowed = "move";
  }, W = (r) => {
    t.type === "directory" && (r.preventDefault(), r.stopPropagation(), B.current += 1, B.current === 1 && it(!0));
  }, Ot = (r) => {
    r.preventDefault(), t.type === "directory" && r.stopPropagation(), r.dataTransfer.dropEffect = "move";
  }, Rt = (r) => {
    t.type === "directory" && (r.preventDefault(), r.stopPropagation(), B.current -= 1, B.current === 0 && it(!1));
  }, Ft = async (r) => {
    r.preventDefault(), r.stopPropagation(), B.current = 0, it(!1);
    const c = r.dataTransfer.getData(ue);
    if (!c)
      return;
    const d = t.type === "directory" ? m(t.path) : Lt(t.path);
    try {
      const f = JSON.parse(c), o = at(d, st(f.path));
      if (et(o, f.path))
        return;
      N == null || N(f.path, f.type, !0);
      let n = o;
      try {
        const l = await e.renameItem(f.path, o);
        l && (n = m(l));
      } catch (l) {
        x({
          action: "move-item",
          error: l,
          node: t,
          sourcePath: f.path,
          targetPath: o
        });
        return;
      }
      D == null || D(f.path, n), L(), $ == null || $();
    } catch (f) {
      x({
        action: "move-item",
        error: f,
        node: t
      });
    }
  }, me = (r) => {
    r.preventDefault(), r.stopPropagation(), ut.current += 1, ut.current === 1 && it(!0);
  }, At = (r) => {
    r.preventDefault(), r.stopPropagation(), r.dataTransfer.dropEffect = "move";
  }, te = (r) => {
    r.preventDefault(), r.stopPropagation(), ut.current -= 1, ut.current === 0 && it(!1);
  }, Ct = async (r) => {
    r.preventDefault(), r.stopPropagation(), ut.current = 0, B.current = 0, it(!1);
    const c = r.dataTransfer.getData(ue);
    if (c)
      try {
        const d = JSON.parse(c), f = at(t.path, st(d.path));
        if (et(f, d.path))
          return;
        N == null || N(d.path, d.type, !0);
        let o = f;
        try {
          const n = await e.renameItem(d.path, f);
          n && (o = m(n));
        } catch (n) {
          x({
            action: "move-item",
            error: n,
            node: t,
            sourcePath: d.path,
            targetPath: f
          });
          return;
        }
        D == null || D(d.path, o), L(), $ == null || $();
      } catch (d) {
        x({
          action: "move-item",
          error: d,
          node: t
        });
      }
  }, ee = () => {
    T(), Mt(t.name), Vt(!0), wt.current = !1;
  }, Et = async () => {
    if (wt.current)
      return;
    wt.current = !0, Vt(!1);
    const r = gt.trim();
    if (!r || r === t.name) {
      wt.current = !1;
      return;
    }
    const c = at(Lt(t.path), r);
    let d = c;
    try {
      const f = await e.renameItem(t.path, c);
      f && (d = m(f));
    } catch (f) {
      wt.current = !1, x({
        action: "rename-item",
        error: f,
        node: t,
        sourcePath: t.path,
        targetPath: c
      }), L();
      return;
    }
    D == null || D(t.path, d), L(), wt.current = !1;
  }, ge = dt(
    (r) => {
      const c = r.relatedTarget, d = Bt, f = c && !!c.closest(F), o = c === document.body || !c;
      M.current && clearTimeout(M.current), M.current = setTimeout(() => {
        var n;
        if (document.activeElement !== vt.current) {
          if (!d && (f || o)) {
            (n = vt.current) == null || n.focus();
            return;
          }
          Et();
        }
      }, 300);
    },
    [F, gt, t.name, t.path]
  ), Kt = lt ? $e([
    [
      O(H, "new-file") ? {
        id: "new-file",
        label: w.newFile,
        onSelect: ye
      } : null,
      O(H, "new-folder") ? {
        id: "new-folder",
        label: w.newFolder,
        onSelect: bt
      } : null
    ],
    [
      O(H, "cut") ? {
        id: "cut",
        label: w.cut,
        shortcut: Xt("cut", u),
        onSelect: () => St()
      } : null,
      O(H, "copy") ? {
        id: "copy",
        label: w.copy,
        shortcut: Xt("copy", u),
        onSelect: () => Qt()
      } : null,
      O(H, "paste") ? {
        id: "paste",
        label: w.paste,
        shortcut: Xt("paste", u),
        disabled: !_,
        onSelect: () => Ut()
      } : null
    ],
    [
      O(H, "rename") ? {
        id: "rename",
        label: w.rename,
        shortcut: "F2",
        onSelect: ee
      } : null
    ],
    [
      O(H, "delete") ? {
        id: "delete",
        label: w.delete,
        shortcut: Xt("delete", u),
        danger: !0,
        onSelect: C
      } : null
    ]
  ]) : [], re = P ? et(P.path, t.path) : !1, qt = re && t.type === "file", ae = re && t.type === "directory";
  return /* @__PURE__ */ R("div", { className: "sft-tree-node-wrapper", ref: Dt, children: [
    /* @__PURE__ */ R(
      "div",
      {
        className: ht(
          "sft-tree-node",
          qt && "sft-active",
          ae && "sft-selected-folder",
          Jt && t.type === "directory" && "sft-drag-over",
          _t && "sft-cut-node"
        ),
        style: { paddingLeft: `${a * i + 8}px` },
        draggable: !mt,
        onDragStart: G,
        ...t.type === "directory" ? {
          onDragEnter: W,
          onDragOver: Ot,
          onDragLeave: Rt,
          onDrop: Ft
        } : {
          onDragOver: (r) => {
            r.preventDefault(), r.dataTransfer.dropEffect = "move";
          }
        },
        onKeyDown: (r) => {
          if (!mt) {
            if (r.key.toLowerCase() === "x" && (r.metaKey || r.ctrlKey)) {
              r.preventDefault(), r.stopPropagation(), St();
              return;
            }
            if (r.key.toLowerCase() === "c" && (r.metaKey || r.ctrlKey)) {
              r.preventDefault(), r.stopPropagation(), Qt();
              return;
            }
            if (r.key.toLowerCase() === "v" && (r.metaKey || r.ctrlKey)) {
              r.preventDefault(), r.stopPropagation(), Ut();
              return;
            }
            if (r.key === "F2") {
              r.preventDefault(), r.stopPropagation(), ee();
              return;
            }
            if (r.key === "Delete" || r.key === "Del" || r.metaKey && r.key === "Backspace") {
              r.preventDefault(), r.stopPropagation(), C();
              return;
            }
            r.key === "Enter" && (r.preventDefault(), r.stopPropagation(), V({ path: t.path, type: t.type }), t.type === "file" ? X(t.path, t.name) : Y());
          }
        },
        tabIndex: 0,
        onMouseDownCapture: tt,
        onContextMenuCapture: zt,
        onClick: (r) => {
          r.stopPropagation(), r.currentTarget.focus(), V({ path: t.path, type: t.type }), t.type === "file" ? X(t.path, t.name) : Y();
        },
        onMouseDown: pt,
        children: [
          k || t.type === "directory" ? t.type === "directory" ? /* @__PURE__ */ s("span", { className: "sft-expand-icon", children: Q ? /* @__PURE__ */ s(Ge, { size: 14 }) : /* @__PURE__ */ s(Ze, { size: 14 }) }) : /* @__PURE__ */ s("span", { className: "sft-expand-icon" }) : /* @__PURE__ */ s("span", { className: "sft-expand-icon sft-expand-icon-empty" }),
          /* @__PURE__ */ s("span", { className: "sft-file-icon", children: S ? S(t) : jr(t) }),
          mt ? /* @__PURE__ */ s(
            "input",
            {
              ref: vt,
              autoFocus: !0,
              className: Ve,
              title: w.rename,
              value: gt,
              onChange: (r) => Mt(r.target.value),
              onFocus: (r) => {
                M.current && (clearTimeout(M.current), M.current = null), r.target.select();
              },
              onBlur: ge,
              onClick: (r) => r.stopPropagation(),
              onMouseDown: (r) => r.stopPropagation()
            }
          ) : /* @__PURE__ */ s("span", { className: "sft-node-name", children: t.name })
        ]
      }
    ),
    lt && ot && Kt.length > 0 ? ke(
      /* @__PURE__ */ s(
        "div",
        {
          className: "sft-context-menu-layer",
          style: { top: lt.y, left: lt.x },
          children: H != null && H.renderMenu ? H.renderMenu({
            scope: "node",
            node: t,
            position: lt,
            groups: Kt,
            closeMenu: T,
            clipboard: _,
            labels: w,
            platform: u
          }) : Be({
            scope: "node",
            groups: Kt,
            closeMenu: T
          })
        }
      ),
      ot
    ) : null,
    Q && t.type === "directory" ? /* @__PURE__ */ R(
      "div",
      {
        className: "sft-tree-children",
        onDragEnter: me,
        onDragOver: At,
        onDragLeave: te,
        onDrop: Ct,
        children: [
          ft && (p == null ? void 0 : p.type) === "folder" ? /* @__PURE__ */ s(
            he,
            {
              type: p.type,
              depth: a + 1,
              hasFolders: Nt,
              indentPx: i,
              labels: w,
              monacoSelector: F,
              onSubmit: xt,
              onCancel: () => A(null)
            }
          ) : null,
          It.filter((r) => r.type === "directory").map((r) => /* @__PURE__ */ s(
            de,
            {
              fs: e,
              node: r,
              depth: a + 1,
              indentPx: i,
              hasDirectoriesAtLevel: Nt,
              platform: u,
              labels: w,
              activeFilePath: z,
              onFileClick: X,
              onRefresh: q,
              creatingItem: p,
              onSetCreating: A,
              selectedNode: P,
              onSelectNode: V,
              onFileOpened: h,
              onFileDeleted: N,
              onFileRenamed: D,
              onFileCreated: U,
              onFolderCreated: K,
              onFileCopied: ct,
              onFileMoved: $,
              refreshTrigger: g,
              renderIcon: S,
              clipboardSnapshot: _,
              monacoSelector: F,
              portalContainer: Pt,
              reportError: x
            },
            r.path
          )),
          ft && (p == null ? void 0 : p.type) === "file" ? /* @__PURE__ */ s(
            he,
            {
              type: p.type,
              depth: a + 1,
              hasFolders: Nt,
              indentPx: i,
              labels: w,
              monacoSelector: F,
              onSubmit: xt,
              onCancel: () => A(null)
            }
          ) : null,
          It.filter((r) => r.type !== "directory").map((r) => /* @__PURE__ */ s(
            de,
            {
              fs: e,
              node: r,
              depth: a + 1,
              indentPx: i,
              hasDirectoriesAtLevel: Nt,
              platform: u,
              labels: w,
              activeFilePath: z,
              onFileClick: X,
              onRefresh: q,
              creatingItem: p,
              onSetCreating: A,
              selectedNode: P,
              onSelectNode: V,
              onFileOpened: h,
              onFileDeleted: N,
              onFileRenamed: D,
              onFileCreated: U,
              onFolderCreated: K,
              onFileCopied: ct,
              onFileMoved: $,
              refreshTrigger: g,
              renderIcon: S,
              clipboardSnapshot: _,
              monacoSelector: F,
              portalContainer: Pt,
              reportError: x
            },
            r.path
          ))
        ]
      }
    ) : null
  ] });
}
const Wr = Ee.memo(function({
  fs: t,
  workspaceRoot: a,
  onOpenFolder: i,
  onFileClick: k,
  activeFilePath: u,
  onFileOpened: w,
  newFileTrigger: z,
  newFolderTrigger: X,
  onFileDeleted: L,
  onFileRenamed: p,
  onFileCreated: A,
  onFolderCreated: P,
  onFileCopied: V,
  onFileMoved: h,
  refreshTrigger: N,
  className: D,
  style: U,
  width: K,
  minWidth: ct,
  maxWidth: $,
  headerTitle: g,
  showHeader: S = !0,
  showHeaderActions: _ = !0,
  headerClassName: H,
  headerStyle: F,
  headerActionsClassName: Pt,
  headerActionsStyle: x,
  renderHeader: Q,
  contentClassName: Ht,
  contentStyle: It,
  footer: Gt,
  footerClassName: lt,
  footerStyle: yt,
  renderFooter: Jt,
  emptyState: it,
  renderEmptyState: mt,
  showOpenFolderButton: Vt = !0,
  openFolderButtonPosition: gt = "top",
  renderOpenFolderButton: Mt,
  renderIcon: vt,
  labels: M,
  platform: Zt = "auto",
  sidebarPosition: Dt = "left",
  theme: wt,
  contextMenu: B,
  portalContainer: ut,
  enableUndoHotkeys: Nt = !0,
  monacoSelector: ot = ".monaco-editor",
  onSelectionChange: ft,
  onError: _t
}) {
  const [Tt, q] = Z([]), [Y, T] = Z(null), [j, rt] = Z(
    a ? { path: a, type: "directory" } : null
  ), [pt, tt] = Z(null), [zt, ye] = Z(
    () => le()
  ), bt = _r(Zt), xt = bt === "windows" ? 16 : 28, C = { ...kr, ...M }, St = je(ut), Qt = {
    ...Hr(wt),
    width: K,
    minWidth: ct,
    maxWidth: $,
    ...U
  }, Ut = Ne(B) && ["new-file", "new-folder", "paste"].some(
    (n) => O(
      B,
      n
    )
  ), G = dt(
    (n) => {
      _t == null || _t(n), console.error("[jack-file-tree]", n.action, n.error);
    },
    [_t]
  );
  E(() => {
    Dr();
  }, []), E(() => Tr(() => {
    ye(le());
  }), []), E(() => {
    if (Nt)
      return Lr({ monacoSelector: ot });
  }, [Nt, ot]), E(() => {
    rt(a ? { path: a, type: "directory" } : null);
  }, [a]), E(() => {
    u && rt({ path: u, type: "file" });
  }, [u]), E(() => {
    a && !j && rt({ path: a, type: "directory" });
  }, [j, a]), E(() => {
    ft == null || ft(j);
  }, [ft, j]);
  const W = dt(async () => {
    if (a)
      try {
        const n = await t.readDirectory(a);
        q(Ae(n));
      } catch (n) {
        G({
          action: "load-root",
          error: n,
          sourcePath: a
        });
      }
  }, [t, G, a]);
  E(() => {
    W();
  }, [W]), E(() => {
    typeof N == "number" && N > 0 && (W(), T((n) => n || null));
  }, [W, N]), E(() => {
    !z || !a || setTimeout(() => {
      T({
        type: "file",
        parentPath: ce(j, a)
      });
    }, 0);
  }, [z, j, a]), E(() => {
    !X || !a || setTimeout(() => {
      T({
        type: "folder",
        parentPath: ce(j, a)
      });
    }, 0);
  }, [X, j, a]), E(() => {
    if (pt) {
      const n = (b) => {
        const $t = b.target instanceof HTMLElement ? b.target : null;
        $t != null && $t.closest(".sft-context-menu") || tt(null);
      }, l = () => tt(null), y = () => tt(null);
      return window.addEventListener("mousedown", n), window.addEventListener("blur", l), document.addEventListener(jt, y), () => {
        window.removeEventListener("mousedown", n), window.removeEventListener("blur", l), document.removeEventListener(jt, y);
      };
    }
  }, [pt]);
  const Ot = (n) => {
    T(n);
  }, Rt = (n, l) => {
    a && (document.dispatchEvent(new CustomEvent(jt)), tt({ x: n, y: l }), rt({ path: a, type: "directory" }));
  }, Ft = async () => {
    tt(null);
    const n = le();
    if (!n || !a)
      return;
    const l = at(m(a), st(n.path));
    if (n.action === "cut" && et(l, n.path)) {
      pe();
      return;
    }
    try {
      if (n.action === "cut") {
        L == null || L(n.path, n.type, !0);
        let y = l;
        try {
          const b = await t.renameItem(n.path, l);
          b && (y = m(b));
        } catch (b) {
          G({
            action: "paste-item",
            error: b,
            sourcePath: n.path,
            targetPath: l
          });
          return;
        }
        p == null || p(n.path, y), pe(), h == null || h();
      } else {
        let y = l;
        try {
          const b = await t.copyItem(n.path, l);
          b && (y = m(b));
        } catch (b) {
          G({
            action: "paste-item",
            error: b,
            sourcePath: n.path,
            targetPath: l
          });
          return;
        }
        V == null || V(y, n.type), h == null || h();
      }
      await W();
    } catch (y) {
      G({
        action: "paste-item",
        error: y,
        sourcePath: n.path,
        targetPath: l
      });
    }
  }, me = async (n) => {
    n.preventDefault();
    const l = n.dataTransfer.getData(ue);
    if (!(!l || !a))
      try {
        const y = JSON.parse(l), b = at(m(a), st(y.path));
        if (et(b, y.path))
          return;
        L == null || L(y.path, y.type, !0);
        let $t = b;
        try {
          const ne = await t.renameItem(y.path, b);
          ne && ($t = m(ne));
        } catch (ne) {
          G({
            action: "move-item",
            error: ne,
            sourcePath: y.path,
            targetPath: b
          });
          return;
        }
        p == null || p(y.path, $t), await W(), h == null || h();
      } catch (y) {
        G({
          action: "move-item",
          error: y
        });
      }
  }, At = Tt.some((n) => n.type === "directory"), te = g || (a ? st(a) : C.explorer), Ct = {
    label: C.openFolder,
    onClick: i,
    disabled: !i,
    className: "sft-open-folder-btn",
    style: void 0
  }, ee = {
    labels: C,
    onOpenFolder: i,
    openFolderButton: Ct
  }, Et = Vt ? Mt ? Mt(Ct) : /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      onClick: i,
      className: ht(
        "sft-empty-folder-btn",
        Ct.className
      ),
      disabled: Ct.disabled,
      children: Ct.label
    }
  ) : null, ge = mt ? mt(ee) : it || /* @__PURE__ */ R(
    "div",
    {
      className: ht(
        "sft-empty-folder-container",
        gt === "top" ? "sft-open-folder-top" : "sft-open-folder-center"
      ),
      children: [
        gt === "top" && Et ? /* @__PURE__ */ s("div", { className: "sft-empty-folder-open-slot", children: Et }) : null,
        /* @__PURE__ */ R("div", { className: "sft-empty-folder-body", children: [
          /* @__PURE__ */ s("p", { className: "sft-empty-folder-text", children: C.noFolderOpened }),
          gt === "center" && Et ? /* @__PURE__ */ s("div", { className: "sft-empty-folder-actions", children: Et }) : null
        ] })
      ]
    }
  ), Kt = dt(() => {
    a && setTimeout(() => {
      T({
        type: "file",
        parentPath: ce(j, a)
      });
    }, 0);
  }, [j, a]), re = dt(() => {
    a && setTimeout(() => {
      T({
        type: "folder",
        parentPath: ce(j, a)
      });
    }, 0);
  }, [j, a]), qt = a ? [
    {
      id: "new-file",
      label: C.newFile,
      title: C.newFile,
      className: "sft-tree-action-btn",
      icon: /* @__PURE__ */ s(lr, { size: 18 }),
      onClick: Kt
    },
    {
      id: "new-folder",
      label: C.newFolder,
      title: C.newFolder,
      className: "sft-tree-action-btn",
      icon: /* @__PURE__ */ s(pr, { size: 18 }),
      onClick: re
    }
  ] : [], ae = _ && qt.length > 0 ? qt.map((n) => /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      className: n.className,
      title: n.title,
      onClick: (l) => {
        l.stopPropagation(), n.onClick();
      },
      children: n.icon
    },
    n.id
  )) : null, r = {
    workspaceRoot: a,
    title: te,
    labels: C,
    selection: j,
    sidebarPosition: Dt,
    className: ht("sft-tree-header", H),
    style: F,
    titleClassName: "sft-tree-header-title",
    actionsClassName: ht("sft-tree-actions", Pt),
    actionsStyle: x,
    actions: qt,
    defaultActions: ae
  }, c = {
    workspaceRoot: a,
    labels: C,
    selection: j,
    sidebarPosition: Dt,
    className: ht("sft-tree-footer", lt),
    style: yt
  }, d = S ? Q ? Q(r) : /* @__PURE__ */ R(
    "div",
    {
      className: r.className,
      style: F,
      title: a ?? te,
      children: [
        /* @__PURE__ */ s("span", { className: r.titleClassName, children: r.title }),
        _ ? /* @__PURE__ */ s(
          "div",
          {
            className: r.actionsClassName,
            style: x,
            children: ae
          }
        ) : null
      ]
    }
  ) : null, f = Jt ? Jt(c) : Gt ? /* @__PURE__ */ s("div", { className: c.className, style: yt, children: Gt }) : null, o = pt ? $e([
    [
      O(B, "new-file") ? {
        id: "new-file",
        label: C.newFile,
        onSelect: () => {
          setTimeout(
            () => T({
              type: "file",
              parentPath: a
            }),
            0
          ), tt(null);
        }
      } : null,
      O(B, "new-folder") ? {
        id: "new-folder",
        label: C.newFolder,
        onSelect: () => {
          setTimeout(
            () => T({
              type: "folder",
              parentPath: a
            }),
            0
          ), tt(null);
        }
      } : null
    ],
    [
      O(B, "paste") ? {
        id: "paste",
        label: C.paste,
        shortcut: Xt("paste", bt),
        disabled: !zt,
        onSelect: Ft
      } : null
    ]
  ]) : [];
  return /* @__PURE__ */ R(
    "div",
    {
      className: ht(
        "sft-file-tree-panel",
        Dt === "right" ? "sft-sidebar-right" : "sft-sidebar-left",
        bt === "windows" && "sft-platform-windows",
        D
      ),
      style: Qt,
      onClick: a ? () => rt({ path: a, type: "directory" }) : void 0,
      onDragEnter: a ? (n) => {
        n.preventDefault(), n.stopPropagation();
      } : void 0,
      onDragOver: a ? (n) => {
        n.preventDefault(), n.stopPropagation(), n.dataTransfer.dropEffect = "move";
      } : void 0,
      onDrop: a ? (n) => {
        me(n);
      } : void 0,
      tabIndex: a ? 0 : void 0,
      onKeyDown: (n) => {
        if (a && n.key.toLowerCase() === "v" && (n.metaKey || n.ctrlKey)) {
          if (we(n.target))
            return;
          n.preventDefault(), Ft();
        }
      },
      onMouseDown: (n) => {
        a && n.button === 2 && (we(n.target) || Ut && (n.preventDefault(), n.stopPropagation(), Rt(n.clientX, n.clientY)));
      },
      onContextMenu: (n) => {
        a && (we(n.target) || Ut && (n.preventDefault(), n.stopPropagation(), Rt(n.clientX, n.clientY)));
      },
      children: [
        d,
        /* @__PURE__ */ s("div", { className: ht("sft-tree-content", Ht), style: It, children: a ? /* @__PURE__ */ R(He, { children: [
          Y && et(Y.parentPath, a) && Y.type === "folder" ? /* @__PURE__ */ s(
            he,
            {
              type: Y.type,
              depth: 0,
              hasFolders: At,
              indentPx: xt,
              labels: C,
              monacoSelector: ot,
              onSubmit: async (n) => {
                const l = at(m(a), n);
                try {
                  const y = await t.createFolder(l), b = y ? m(y) : l;
                  await W(), T(null), P == null || P(b);
                } catch (y) {
                  throw G({
                    action: "create-folder",
                    error: y,
                    targetPath: l
                  }), await W(), y;
                }
              },
              onCancel: () => T(null)
            }
          ) : null,
          Tt.filter((n) => n.type === "directory").map((n) => /* @__PURE__ */ s(
            de,
            {
              fs: t,
              node: n,
              depth: 0,
              indentPx: xt,
              hasDirectoriesAtLevel: At,
              platform: bt,
              labels: C,
              activeFilePath: u,
              onFileClick: k,
              onRefresh: W,
              creatingItem: Y,
              onSetCreating: Ot,
              selectedNode: j,
              onSelectNode: rt,
              onFileOpened: w,
              onFileDeleted: L,
              onFileRenamed: p,
              onFileCreated: A,
              onFolderCreated: P,
              onFileCopied: V,
              onFileMoved: h,
              refreshTrigger: N,
              renderIcon: vt,
              clipboardSnapshot: zt,
              contextMenuOptions: B,
              monacoSelector: ot,
              portalContainer: ut,
              reportError: G
            },
            n.path
          )),
          Y && et(Y.parentPath, a) && Y.type === "file" ? /* @__PURE__ */ s(
            he,
            {
              type: Y.type,
              depth: 0,
              hasFolders: At,
              indentPx: xt,
              labels: C,
              monacoSelector: ot,
              onSubmit: async (n) => {
                const l = at(m(a), n);
                try {
                  const y = await t.createFile(l), b = y ? m(y) : l;
                  await W(), T(null), A == null || A(b, st(b)), w == null || w(b, st(b), !1);
                } catch (y) {
                  throw G({
                    action: "create-file",
                    error: y,
                    targetPath: l
                  }), await W(), y;
                }
              },
              onCancel: () => T(null)
            }
          ) : null,
          Tt.filter((n) => n.type !== "directory").map((n) => /* @__PURE__ */ s(
            de,
            {
              fs: t,
              node: n,
              depth: 0,
              indentPx: xt,
              hasDirectoriesAtLevel: At,
              platform: bt,
              labels: C,
              activeFilePath: u,
              onFileClick: k,
              onRefresh: W,
              creatingItem: Y,
              onSetCreating: Ot,
              selectedNode: j,
              onSelectNode: rt,
              onFileOpened: w,
              onFileDeleted: L,
              onFileRenamed: p,
              onFileCreated: A,
              onFolderCreated: P,
              onFileCopied: V,
              onFileMoved: h,
              refreshTrigger: N,
              renderIcon: vt,
              clipboardSnapshot: zt,
              contextMenuOptions: B,
              monacoSelector: ot,
              portalContainer: ut,
              reportError: G
            },
            n.path
          ))
        ] }) : ge }),
        f,
        a && pt && St && o.length > 0 ? ke(
          /* @__PURE__ */ s(
            "div",
            {
              className: "sft-context-menu-layer",
              style: { top: pt.y, left: pt.x },
              children: B != null && B.renderMenu ? B.renderMenu({
                scope: "root",
                position: pt,
                groups: o,
                closeMenu: () => tt(null),
                clipboard: zt,
                labels: C,
                platform: bt
              }) : Be({
                scope: "root",
                groups: o,
                closeMenu: () => tt(null)
              })
            }
          ),
          St
        ) : null
      ]
    }
  );
});
export {
  Wr as FileTree,
  Lr as attachFileTreeUndoHotkeys,
  pe as clearFileTreeClipboard,
  qr as clearFileTreeUndoStack,
  kr as defaultFileTreeLabels,
  le as getFileTreeClipboard,
  Kr as getFileTreeUndoCount,
  Gr as installFileTreeInputShield,
  Er as restoreLastFileTreeDeletion,
  xe as setFileTreeClipboard,
  Tr as subscribeFileTreeClipboard,
  Ur as updateFileTreeClipboardPath
};
