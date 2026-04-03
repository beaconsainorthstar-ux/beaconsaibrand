import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getReports, getCampaignById } from "@/lib/data";
import { formatDate, formatReportMetric } from "@/lib/formatters";

export default function ReportsPage() {
  const reports = getReports();

  return (
    <div>
      <PageHeader
        title="Reports"
        description="Campaign performance, demographics, and post-level breakdowns."
        actions={
          <Button asChild>
            <Link href="/campaigns/campaign-1">Open July campaign</Link>
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((r) => {
          const campaign = getCampaignById(r.campaignId);
          return (
            <Link key={r.id} href={`/reports/${r.id}`}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
                  <div className="min-w-0">
                    <CardTitle className="text-base leading-snug">{r.name}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {campaign?.name ?? "Campaign"} ·{" "}
                      {formatDate(r.createdAt)}
                    </p>
                  </div>
                  <Badge variant={r.status === "live" ? "success" : "secondary"}>
                    {r.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {r.summaryMetrics.slice(0, 4).map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg bg-muted/40 px-3 py-2"
                      >
                        <p className="text-xs text-muted-foreground">{m.label}</p>
                        <p className="font-semibold tabular-nums">
                          {formatReportMetric(m)}
                          {m.changePercent != null ? (
                            <span className="ml-1 text-xs text-emerald-500">
                              +{m.changePercent}%
                            </span>
                          ) : null}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
