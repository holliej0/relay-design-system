import type { Meta, StoryObj } from "@storybook/react";
import { semantic } from "../tokens";

const meta: Meta = {
  title: "Foundations/Color tokens",
  parameters: {
    docs: {
      description: {
        component: "Semantic color tokens, resolved for the current theme. Components use these names, never raw hex values.",
      },
    },
  },
};
export default meta;

const groups: Record<string, string[]> = {
  Surfaces: ["bg-canvas", "bg-surface", "bg-subtle", "bg-inverse"],
  Text: ["text-primary", "text-secondary", "text-disabled", "text-link"],
  "Borders and focus": ["border-default", "border-control", "border-strong", "focus-ring"],
  Accent: ["accent", "accent-hover", "accent-subtle"],
  Status: ["info-fg", "success-fg", "warning-fg", "danger-fg", "info-bg", "success-bg", "warning-bg", "danger-bg"],
};

export const Semantic: StoryObj = {
  render: (_, { globals }) => {
    const mode = (globals.theme === "dark" ? "dark" : "light") as keyof typeof semantic;
    return (
      <div style={{ display: "grid", gap: 24 }}>
        {Object.entries(groups).map(([group, names]) => (
          <section key={group}>
            <h3 style={{ margin: "0 0 8px", fontSize: 14 }}>{group}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
              {names.map((n) => (
                <div key={n} style={{ border: "1px solid var(--rds-border-default)", borderRadius: 8, overflow: "hidden", background: "var(--rds-bg-surface)" }}>
                  <div style={{ height: 48, background: `var(--rds-${n})` }} />
                  <div style={{ padding: 8, fontSize: 12 }}>
                    <code>--rds-{n}</code>
                    <div style={{ color: "var(--rds-text-secondary)" }}>{semantic[mode][n as keyof typeof semantic.light]}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  },
};
