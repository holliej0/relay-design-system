import type { Preview } from "@storybook/react";
import "../src/styles/base.css";
import "../src/components/components.css";

const preview: Preview = {
  tags: ["autodocs"],
  globalTypes: {
    theme: {
      description: "Color mode",
      toolbar: { title: "Theme", icon: "mirror", items: ["light", "dark"], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: "light" },
  decorators: [
    (Story, context) => (
      <div className="rds-root" data-theme={context.globals.theme} style={{ padding: 24, minHeight: "100%" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    a11y: { test: "error" },
    controls: { matchers: { color: /(background|color)$/i } },
  },
};
export default preview;
