import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { DeliverableTable } from "@/components/deliverable-table";
import { getCampaignById, getDeliverablesByCampaign } from "@/lib/data";

export default async function CampaignDeliverablesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const campaign = getCampaignById(id);
  if (!campaign) notFound();

  const rows = getDeliverablesByCampaign(campaign.id);

  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: "Campaigns", href: "/campaigns" },
          { label: campaign.name, href: `/campaigns/${campaign.id}` },
          { label: "Deliverables" },
        ]}
        title="Deliverables"
        description="Track posts, stories, and videos across creators — statuses are mock data."
        actions={
          <Button variant="outline" asChild>
            <Link href={`/campaigns/${campaign.id}`}>Campaign overview</Link>
          </Button>
        }
      />

      {rows.length ? (
        <DeliverableTable rows={rows} />
      ) : (
        <p className="text-sm text-muted-foreground">No deliverables yet.</p>
      )}
    </div>
  );
}
