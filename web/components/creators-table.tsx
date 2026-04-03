import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { CreatorAvatar } from "@/components/creator-avatar";
import { CreatorStatusBadge } from "@/components/status-badge";
import { formatCompact, formatPercent } from "@/lib/formatters";
import type { Creator } from "@/lib/types";

export function CreatorsTable({ creators }: { creators: Creator[] }) {
  return (
    <div className="rounded-xl border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <Checkbox disabled aria-label="Select all" />
            </TableHead>
            <TableHead>Creator</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Reach</TableHead>
            <TableHead className="text-right">Engagement</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {creators.map((c) => {
            const p0 = c.platforms[0];
            return (
              <TableRow key={c.id} className="cursor-pointer">
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <Checkbox aria-label={`Select ${c.displayName}`} />
                </TableCell>
                <TableCell>
                  <Link
                    href={`/creators/${c.id}`}
                    className="flex items-center gap-3 font-medium hover:underline"
                  >
                    <CreatorAvatar name={c.displayName} src={c.avatarUrl} size="sm" />
                    <span>{c.displayName}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <CreatorStatusBadge status={c.status} />
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  {formatCompact(c.reach)}
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  {p0 ? formatPercent(p0.engagementRate) : "—"}
                </TableCell>
                <TableCell className="text-muted-foreground">{c.location}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {c.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
