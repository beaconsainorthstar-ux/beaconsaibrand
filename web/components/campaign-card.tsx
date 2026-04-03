import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CampaignStatusBadge } from "@/components/status-badge";
import { formatCurrency, formatDateRange } from "@/lib/formatters";
import type { Campaign } from "@/lib/types";

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <Link href={`/campaigns/${campaign.id}`}>
      <Card className="transition-shadow hover:shadow-md">
        <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0 pb-2">
          <div className="min-w-0">
            <CardTitle className="text-base font-semibold leading-tight">
              {campaign.name}
            </CardTitle>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {campaign.objective}
            </p>
          </div>
          <CampaignStatusBadge status={campaign.status} />
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>
              {formatCurrency(campaign.budgetMin, campaign.currency)} –{" "}
              {formatCurrency(campaign.budgetMax, campaign.currency)}
            </span>
            <span>{formatDateRange(campaign.startDate, campaign.endDate)}</span>
          </div>
          <p className="mt-2 text-xs">
            {campaign.creatorIds.length} creators · {campaign.deliverableIds.length}{" "}
            deliverables
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
