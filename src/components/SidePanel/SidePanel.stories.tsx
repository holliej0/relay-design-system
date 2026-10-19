import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SidePanel } from "./SidePanel";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

const meta: Meta = { title: "Components/SidePanel" };
export default meta;

export const Default: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open SHP-10482</Button>
        <SidePanel
          open={open}
          onClose={() => setOpen(false)}
          title="Temperature excursion"
          subtitle={<Badge tone="danger" dot>Critical · 22 min left</Badge>}
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>Escalate</Button>
              <Button onClick={() => setOpen(false)}>Assign to me</Button>
            </>
          }
        >
          <p style={{ margin: 0 }}>Reefer unit logged 9.4°C for 18 minutes. Product allows 2 to 8°C.</p>
        </SidePanel>
      </>
    );
  },
};
