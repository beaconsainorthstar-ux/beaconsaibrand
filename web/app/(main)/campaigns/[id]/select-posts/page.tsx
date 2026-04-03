import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  getCampaignById,
  getReportByCampaignId,
  getReportById,
} from "@/lib/data";
import { SelectPostsClient } from "./select-posts-client";

export default async function SelectPostsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const campaign = getCampaignById(id);
  if (!campaign) notFound();

  const report = campaign.reportId
    ? getReportById(campaign.reportId)
    : getReportByCampaignId(campaign.id);
  const posts = report?.topPosts ?? [];

  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: "Campaigns", href: "/campaigns" },
          { label: campaign.name, href: `/campaigns/${campaign.id}` },
          { label: "Select posts" },
        ]}
        title="Select posts for report"
        description="Curate which pieces appear in the client-facing report — matches the mobile-style selection pattern from references."
        actions={
          <Button variant="outline" asChild>
            <Link href={report ? `/reports/${report.id}` : "/reports"}>
              Back to report
            </Link>
          </Button>
        }
      />

      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No sample posts for this campaign — link a report with top posts in data.
        </p>
      ) : (
        <SelectPostsClient
          campaignId={campaign.id}
          reportId={report?.id ?? null}
          posts={posts}
        />
      )}
    </div>
  );
}
