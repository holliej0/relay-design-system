import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: { children: "Assign to me" },
  parameters: {
    docs: {
      description: {
        component:
          "Use **primary** for the one main action in a view, **secondary** for alternatives, **ghost** for low-emphasis actions in dense areas, and **danger** only for destructive or hard-to-undo actions. Labels are verbs that say what happens.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary", children: "Escalate" } };
export const Ghost: Story = { args: { variant: "ghost", children: "Clear filters" } };
export const Danger: Story = { args: { variant: "danger", children: "Cancel shipment" } };
export const Loading: Story = { args: { loading: true, children: "Saving" } };
export const Disabled: Story = { args: { disabled: true } };
export const Small: Story = { args: { size: "sm", variant: "secondary", children: "Export CSV" } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};
