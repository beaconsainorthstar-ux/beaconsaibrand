"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CREATOR_FILTER_OPTIONS, PLATFORM_LABELS } from "@/lib/constants";
import type { Creator, Platform } from "@/lib/types";

export function CreatorFilterBar({
  creators,
  onFiltered,
}: {
  creators: Creator[];
  onFiltered: (filtered: Creator[]) => void;
}) {
  const [q, setQ] = useState("");
  const [platform, setPlatform] = useState<string>("all");
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    const ql = q.trim().toLowerCase();
    const next = creators.filter((c) => {
      const matchQ =
        !ql ||
        c.displayName.toLowerCase().includes(ql) ||
        c.handle.toLowerCase().includes(ql) ||
        c.location.toLowerCase().includes(ql);
      const matchP =
        platform === "all" || c.platforms.some((p) => p.platform === platform);
      const matchCat =
        category === "all" || c.categories.includes(category);
      return matchQ && matchP && matchCat;
    });
    onFiltered(next);
  }, [q, platform, category, creators, onFiltered]);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Input
        placeholder="Search name, handle, location…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="max-w-md"
      />
      <Select value={platform} onValueChange={setPlatform}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All platforms</SelectItem>
          {CREATOR_FILTER_OPTIONS.platforms.map((p) => (
            <SelectItem key={p} value={p}>
              {PLATFORM_LABELS[p as Platform]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All categories</SelectItem>
          {CREATOR_FILTER_OPTIONS.categories.map((c) => (
            <SelectItem key={c} value={c}>
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
