const o = "sft-rename-input", u = "sft-inline-create-input", r = /* @__PURE__ */ new WeakMap();
function e(t) {
  return t instanceof HTMLElement && t.tagName === "INPUT" && (t.classList.contains(o) || t.classList.contains(u));
}
let s = !1;
function d() {
  s || typeof window > "u" || (s = !0, window.addEventListener(
    "keydown",
    (t) => {
      var a, i;
      if (!e(t.target))
        return;
      const n = t.target;
      if (t.stopImmediatePropagation(), t.key === "Enter") {
        t.preventDefault(), (a = r.get(n)) == null || a.onSubmit();
        return;
      }
      t.key === "Escape" && (t.preventDefault(), (i = r.get(n)) == null || i.onCancel());
    },
    !0
  ), window.addEventListener(
    "keypress",
    (t) => {
      e(t.target) && t.stopImmediatePropagation();
    },
    !0
  ), window.addEventListener(
    "beforeinput",
    (t) => {
      e(t.target) && t.stopImmediatePropagation();
    },
    !0
  ));
}
export {
  u as F,
  o as a,
  r as f,
  d as i
};
