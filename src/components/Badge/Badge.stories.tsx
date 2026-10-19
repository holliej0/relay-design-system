import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  args: { children: "In progress", tone: "info", dot: true },
  parameters: {
    docs: {
      description: {
        component:
          "Short status labels. Every tone pairs color with a word, so the status reads the same for people with color vision differences and in grayscale print.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
export const Tones: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Badge tone="neutral" dot>New</Badge>
      <Badge tone="info" dot>In progress</Badge>
      <Badge tone="success" dot>Resolved</Badge>
      <Badge tone="warning" dot>Due in 45 min</Badge>
      <Badge tone="danger" dot>SLA breached</Badge>
    </div>
  ),
};
