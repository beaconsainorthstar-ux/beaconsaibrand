import type { CampaignStatus, CreatorStatus, DeliverableStatus } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

const creatorMap: Record<
  CreatorStatus,
  { label: string; variant: "success" | "warning" | "muted" | "secondary" }
> = {
  active: { label: "Active", variant: "success" },
  contacted: { label: "Contacted", variant: "warning" },
  pending: { label: "Pending", variant: "warning" },
  inactive: { label: "Inactive", variant: "muted" },
};

const campaignMap: Record<
  CampaignStatus,
  { label: string; variant: "success" | "warning" | "muted" | "secondary" }
> = {
  draft: { label: "Draft", variant: "secondary" },
  active: { label: "Active", variant: "success" },
  completed: { label: "Completed", variant: "muted" },
  archived: { label: "Archived", variant: "muted" },
};

const deliverableMap: Record<
  DeliverableStatus,
  {
    label: string;
    variant: "success" | "warning" | "muted" | "secondary" | "destructive";
  }
> = {
  pending: { label: "Pending", variant: "warning" },
  submitted: { label: "Submitted", variant: "secondary" },
  approved: { label: "Approved", variant: "success" },
  live: { label: "Live", variant: "success" },
  rejected: { label: "Rejected", variant: "destructive" },
};

export function CreatorStatusBadge({ status }: { status: CreatorStatus }) {
  const c = creatorMap[status];
  return <Badge variant={c.variant}>{c.label}</Badge>;
}

export function CampaignStatusBadge({ status }: { status: CampaignStatus }) {
  const c = campaignMap[status];
  return <Badge variant={c.variant}>{c.label}</Badge>;
}

export function DeliverableStatusBadge({
  status,
}: {
  status: DeliverableStatus;
}) {
  const c = deliverableMap[status];
  return <Badge variant={c.variant}>{c.label}</Badge>;
}
