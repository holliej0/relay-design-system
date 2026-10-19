import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import { Button } from "../Button/Button";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  args: { tone: "info", title: "Carrier data refreshes every 5 minutes", children: "Last update 9:42 AM." },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {};
export const Success: Story = { args: { tone: "success", title: "Exception resolved", children: "SHP-10482 moved to Resolved." } };
export const Warning: Story = {
  args: { tone: "warning", title: "3 exceptions breach SLA within 1 hour", children: "Sort by SLA to see them first." },
};
export const DangerWithAction: Story = {
  args: {
    tone: "danger",
    title: "Couldn't load the exception queue",
    children: "Your filters are saved. Try again, or check the status page if this keeps happening.",
    action: <Button size="sm" variant="secondary">Try again</Button>,
  },
};
