// Checks WCAG 2.2 contrast for every text/background pairing the components use,
// in light and dark mode. Exits with code 1 if any pair fails, so CI catches it.
// Run: npm run contrast
import { readFileSync } from "node:fs";

const t = JSON.parse(readFileSync(new URL("../tokens/tokens.json", import.meta.url)));
const hex = (mode, name) => {
  const [scale, step] = t.semantic[mode][name].split(".");
  return t.primitive.color[scale][step];
};
const lum = (h) => {
  const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

// [foreground, background, minimum ratio, what it is]
const pairs = [
  ["text-primary", "bg-surface", 4.5, "Body text"],
  ["text-primary", "bg-canvas", 4.5, "Body text on page"],
  ["text-secondary", "bg-surface", 4.5, "Secondary text"],
  ["text-secondary", "bg-subtle", 4.5, "Secondary text on subtle rows"],
  ["text-link", "bg-surface", 4.5, "Links"],
  ["text-on-accent", "accent", 4.5, "Primary button label"],
  ["text-on-accent", "accent-hover", 4.5, "Primary button label, hover"],
  ["text-on-accent", "danger-solid", 4.5, "Danger button label"],
  ["accent", "bg-surface", 3, "Accent as UI (icons, selected tab)"],
  ["border-control", "bg-surface", 3, "Form control border (WCAG 1.4.11)"],
  ["focus-ring", "bg-surface", 3, "Focus indicator"],
  ["focus-ring", "bg-canvas", 3, "Focus indicator on page"],
  ["info-fg", "info-bg", 4.5, "Info badge / alert"],
  ["success-fg", "success-bg", 4.5, "Success badge / alert"],
  ["warning-fg", "warning-bg", 4.5, "Warning badge / alert"],
  ["danger-fg", "danger-bg", 4.5, "Danger badge / alert"],
  ["danger-fg", "bg-surface", 4.5, "Error message text"],
  ["text-inverse", "bg-inverse", 4.5, "Toast / tooltip"],
];

let failed = 0;
for (const mode of ["light", "dark"]) {
  console.log(`\n${mode.toUpperCase()}`);
  for (const [fg, bg, min, label] of pairs) {
    const r = ratio(hex(mode, fg), hex(mode, bg));
    const ok = r >= min;
    if (!ok) failed++;
    console.log(`${ok ? "pass" : "FAIL"}  ${r.toFixed(2).padStart(5)}:1  (needs ${min})  ${label}  [${fg} on ${bg}]`);
  }
}
console.log(failed ? `\n${failed} pair(s) below WCAG minimums.` : "\nAll pairs meet WCAG 2.2 AA.");
process.exit(failed ? 1 : 0);
