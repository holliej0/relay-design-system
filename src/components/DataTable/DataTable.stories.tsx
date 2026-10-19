import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DataTable, type Column } from "./DataTable";
import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";

interface Row {
  id: string;
  issue: string;
  severity: "Critical" | "High" | "Medium";
  minutesLeft: number;
}

const rows: Row[] = [
  { id: "SHP-10482", issue: "Temperature excursion", severity: "Critical", minutesLeft: 22 },
  { id: "SHP-10477", issue: "Missed pickup", severity: "High", minutesLeft: 95 },
  { id: "SHP-10469", issue: "Address unverified", severity: "Medium", minutesLeft: 240 },
  { id: "SHP-10455", issue: "Customs hold", severity: "High", minutesLeft: -15 },
];

const tone = { Critical: "danger", High: "warning", Medium: "info" } as const;
const rank = { Critical: 0, High: 1, Medium: 2 };

const columns: Column<Row>[] = [
  { key: "id", header: "Shipment", sortValue: (r) => r.id },
  { key: "issue", header: "Issue" },
  { key: "severity", header: "Severity", sortValue: (r) => rank[r.severity], render: (r) => <Badge tone={tone[r.severity]} dot>{r.severity}</Badge> },
  {
    key: "minutesLeft",
    header: "SLA",
    numeric: true,
    sortValue: (r) => r.minutesLeft,
    render: (r) => (r.minutesLeft < 0 ? `${-r.minutesLeft} min over` : `${r.minutesLeft} min left`),
  },
];

const meta: Meta = {
  title: "Components/DataTable",
  parameters: {
    docs: {
      description: {
        component:
          "Sortable headers use real buttons and `aria-sort`. Rows can be opened with Enter or Space. Loading, empty and populated states are part of the component so every screen handles them the same way.",
      },
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    return (
      <DataTable
        caption="Exception queue"
        columns={columns}
        rows={rows}
        rowKey={(r) => r.id}
        onRowClick={(r) => setSelected(r.id)}
        selectedKey={selected}
        initialSort={{ key: "minutesLeft", direction: "ascending" }}
      />
    );
  },
};

export const Loading: StoryObj = {
  render: () => <DataTable caption="Exception queue" columns={columns} rows={[]} rowKey={(r) => r.id} loading />,
};

export const Empty: StoryObj = {
  render: () => (
    <DataTable
      caption="Exception queue"
      columns={columns}
      rows={[]}
      rowKey={(r) => r.id}
      emptyState={
        <div style={{ display: "grid", gap: 8, justifyItems: "center" }}>
          <strong>No exceptions match these filters</strong>
          <span>Try a different severity, or clear filters to see the full queue.</span>
          <Button size="sm" variant="secondary">Clear filters</Button>
        </div>
      }
    />
  ),
};
