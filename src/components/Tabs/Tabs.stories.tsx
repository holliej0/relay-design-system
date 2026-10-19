import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  args: {
    label: "Queue views",
    items: [
      { id: "mine", label: "Assigned to me", count: 6, content: <p>Your 6 open exceptions.</p> },
      { id: "unassigned", label: "Unassigned", count: 11, content: <p>11 exceptions waiting for an owner.</p> },
      { id: "all", label: "All open", count: 38, content: <p>Everything open across facilities.</p> },
    ],
  },
};
export default meta;
export const Default: StoryObj<typeof Tabs> = {};
