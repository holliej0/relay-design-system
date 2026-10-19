import type { Meta, StoryObj } from "@storybook/react";
import { Select, TextArea, TextField } from "./Field";

const meta: Meta<typeof TextField> = {
  title: "Components/Fields",
  component: TextField,
  parameters: {
    docs: {
      description: {
        component:
          "Every field has a visible label, optional hint, and an error message tied to the input with `aria-describedby`. Errors say what to do next, not just what went wrong.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = { args: { label: "Shipment ID", placeholder: "SHP-10482" } };
export const WithHint: Story = { args: { label: "Carrier reference", hint: "Found on the carrier's pickup receipt." } };
export const WithError: Story = {
  args: { label: "Resolution note", required: true, error: "Add a short note so the next person knows what changed." },
};
export const Disabled: Story = { args: { label: "Facility", value: "Newark DC", disabled: true, readOnly: true } };

export const SelectField: StoryObj<typeof Select> = {
  render: () => (
    <Select
      label="Severity"
      options={[
        { value: "all", label: "All severities" },
        { value: "critical", label: "Critical" },
        { value: "high", label: "High" },
        { value: "medium", label: "Medium" },
      ]}
    />
  ),
};

export const TextAreaField: StoryObj<typeof TextArea> = {
  render: () => <TextArea label="Escalation note" required hint="Who needs to act, and by when?" />,
};
