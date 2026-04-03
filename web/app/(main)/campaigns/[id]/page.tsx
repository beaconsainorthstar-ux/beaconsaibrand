import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CampaignStatusBadge } from "@/components/status-badge";
import { CreatorAvatar } from "@/components/creator-avatar";
import { DeliverableTable } from "@/components/deliverable-table";
import {
  getCampaignById,
  getCreatorsByIds,
  getDeliverablesByCampaign,
  getBrand,
  getReportById,
  getReportByCampaignId,
} from "@/lib/data";
import {
  formatCurrency,
  formatDateRange,
} from "@/lib/formatters";
import { PLATFORM_LABELS } from "@/lib/constants";
import Image from "next/image";

export default async function CampaignDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const campaign = getCampaignById(id);
  if (!campaign) notFound();

  const brand = getBrand();
  const creators = getCreatorsByIds(campaign.creatorIds);
  const deliverables = getDeliverablesByCampaign(campaign.id);
  const linkedReport = campaign.reportId
    ? getReportById(campaign.reportId)
    : getReportByCampaignId(campaign.id);

  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: "Campaigns", href: "/campaigns" },
          { label: campaign.name },
        ]}
        title={campaign.name}
        description={campaign.objective}
        actions={
          <>
            <Button variant="outline" asChild>
              <Link href={`/campaigns/${campaign.id}/setup`}>Edit setup</Link>
            </Button>
            <Button asChild>
              <Link href={`/campaigns/${campaign.id}/deliverables`}>
                Deliverables
              </Link>
            </Button>
          </>
        }
      />

      <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card>
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle className="text-lg">Campaign overview</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                {brand.name} · {formatDateRange(campaign.startDate, campaign.endDate)}
              </p>
            </div>
            <CampaignStatusBadge status={campaign.status} />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {campaign.platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-muted px-3 py-1 text-xs"
                >
                  {PLATFORM_LABELS[p]}
                </span>
              ))}
            </div>
            <Separator />
            <div className="grid gap-2 text-sm sm:grid-cols-2">
              <div>
                <p className="text-muted-foreground">Budget range</p>
                <p className="font-medium">
                  {formatCurrency(campaign.budgetMin, campaign.currency)} –{" "}
                  {formatCurrency(campaign.budgetMax, campaign.currency)}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Creators</p>
                <p className="font-medium">{creators.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-base">Pitch deck preview</CardTitle>
            <p className="text-sm text-muted-foreground">
              Card layout inspired by pitch deck selection screens.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 rounded-lg border border-border p-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-md bg-muted">
                <Image
                  src="/assets/brand-logos/away.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <div className="min-w-0">
                <p className="truncate font-semibold">{brand.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {campaign.name}
                </p>
              </div>
            </div>
            <div className="flex -space-x-2">
              {creators.slice(0, 5).map((c) => (
                <CreatorAvatar
                  key={c.id}
                  name={c.displayName}
                  src={c.avatarUrl}
                  className="ring-2 ring-card"
                  size="sm"
                />
              ))}
            </div>
            <Button className="w-full" variant="secondary" asChild>
              <Link href={`/campaigns/${campaign.id}/setup`}>
                Open full setup
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="creators" className="w-full">
        <TabsList>
          <TabsTrigger value="creators">Creators</TabsTrigger>
          <TabsTrigger value="deliverables">Deliverables</TabsTrigger>
          <TabsTrigger value="approvals">Approvals</TabsTrigger>
          <TabsTrigger value="report">Report</TabsTrigger>
        </TabsList>
        <TabsContent value="creators" className="mt-4 space-y-3">
          {creators.map((c) => (
            <Link
              key={c.id}
              href={`/creators/${c.id}`}
              className="flex items-center justify-between rounded-xl border border-border bg-muted/15 px-4 py-3 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-center gap-3">
                <CreatorAvatar name={c.displayName} src={c.avatarUrl} />
                <div>
                  <p className="font-medium">{c.displayName}</p>
                  <p className="text-sm text-muted-foreground">{c.handle}</p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                View media kit
              </Button>
            </Link>
          ))}
        </TabsContent>
        <TabsContent value="deliverables" className="mt-4">
          {deliverables.length ? (
            <DeliverableTable rows={deliverables} />
          ) : (
            <p className="text-sm text-muted-foreground">
              No deliverables yet for this campaign.
            </p>
          )}
          <div className="mt-4">
            <Button variant="outline" asChild>
              <Link href={`/campaigns/${campaign.id}/deliverables`}>
                Full deliverables view
              </Link>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="approvals" className="mt-4">
          <Card>
            <CardContent className="p-6 text-sm text-muted-foreground">
              {/* TODO: approval inbox + comment threads per asset. */}
              Mock approvals — connect to messaging thread and asset review when backend ships.
              <Button className="mt-4" variant="outline" asChild>
                <Link href="/dashboard">View notifications</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="report" className="mt-4">
          <Card>
            <CardContent className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium">Campaign performance report</p>
                <p className="text-sm text-muted-foreground">
                  {linkedReport
                    ? `Linked: ${linkedReport.name}`
                    : campaign.reportId
                      ? `Report id ${campaign.reportId} (see Reports)`
                      : "No report linked yet."}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href={`/campaigns/${campaign.id}/select-posts`}>
                    Select posts
                  </Link>
                </Button>
                <Button asChild>
                  <Link
                    href={
                      linkedReport
                        ? `/reports/${linkedReport.id}`
                        : `/reports`
                    }
                  >
                    Open report
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
