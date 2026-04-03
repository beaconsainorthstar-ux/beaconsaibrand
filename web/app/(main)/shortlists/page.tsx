import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ShortlistCard } from "@/components/shortlist-card";
import { Button } from "@/components/ui/button";
import { getShortlists } from "@/lib/data";

export default function ShortlistsPage() {
  const shortlists = getShortlists();

  return (
    <div>
      <PageHeader
        title="Shortlists"
        description="Compare creators side-by-side and spin up campaigns or pitch decks."
        actions={
          <Button variant="outline" asChild>
            <Link href="/creators">Add creators</Link>
          </Button>
        }
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
        {shortlists.map((s) => (
          <ShortlistCard key={s.id} shortlist={s} />
        ))}
      </div>
    </div>
  );
}
