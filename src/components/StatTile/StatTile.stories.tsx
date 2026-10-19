import type { Meta, StoryObj } from "@storybook/react";
import { StatTile } from "./StatTile";

const meta: Meta<typeof StatTile> = {
  title: "Components/StatTile",
  component: StatTile,
  args: { label: "Open exceptions", value: 38, delta: "+6 since 8 AM", trend: "bad" },
  parameters: {
    docs: {
      description: {
        component:
          "A single number with context. `trend` describes whether the change is good or bad for the user, because for queues and errors, going up is bad. The meaning is also spelled out for screen readers.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof StatTile>;

export const Default: Story = {};
export const Danger: Story = { args: { label: "SLA breached", value: 4, delta: "+2 in the last hour", trend: "bad", emphasis: "danger" } };
export const Good: Story = { args: { label: "Resolved today", value: 61, delta: "+12 vs. yesterday", trend: "good" } };
export const Row: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
      <StatTile label="Open exceptions" value={38} delta="+6 since 8 AM" trend="bad" />
      <StatTile label="Due within 1 hour" value={7} delta="3 unassigned" emphasis="warning" />
      <StatTile label="SLA breached" value={4} delta="+2 in the last hour" trend="bad" emphasis="danger" />
      <StatTile label="Resolved today" value={61} delta="+12 vs. yesterday" trend="good" />
    </div>
  ),
};
