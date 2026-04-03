import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeliverableStatusBadge } from "@/components/status-badge";
import { formatDate } from "@/lib/formatters";
import { PLATFORM_LABELS } from "@/lib/constants";
import type { Deliverable } from "@/lib/types";
import { getCreatorById } from "@/lib/data";

export function DeliverableTable({
  rows,
}: {
  rows: Deliverable[];
}) {
  return (
    <div className="rounded-xl border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Deliverable</TableHead>
            <TableHead>Creator</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>Submitted</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((d) => {
            const creator = getCreatorById(d.creatorId);
            return (
              <TableRow key={d.id}>
                <TableCell className="font-medium">{d.title}</TableCell>
                <TableCell>
                  {creator ? (
                    <Link
                      href={`/creators/${creator.id}`}
                      className="text-primary hover:underline"
                    >
                      {creator.displayName}
                    </Link>
                  ) : (
                    d.creatorId
                  )}
                </TableCell>
                <TableCell>{PLATFORM_LABELS[d.platform]}</TableCell>
                <TableCell>
                  <DeliverableStatusBadge status={d.status} />
                </TableCell>
                <TableCell>{formatDate(d.dueDate)}</TableCell>
                <TableCell>
                  {d.submittedAt ? formatDate(d.submittedAt) : "—"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
