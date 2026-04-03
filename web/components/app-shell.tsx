"use client";

import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarNav } from "@/components/sidebar-nav";

export function AppShell({
  children,
  unreadCount = 0,
}: {
  children: React.ReactNode;
  unreadCount?: number;
}) {
  const unread = unreadCount;

  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur">
          <div className="relative max-w-md flex-1">
            <Search className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search creators, campaigns, reports…"
              className="pl-9"
              readOnly
            />
          </div>
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <Link href="/dashboard">
              <Bell className="h-4 w-4" />
              {unread > 0 ? (
                <span className="rounded-full bg-primary px-1.5 text-[10px] text-primary-foreground">
                  {unread}
                </span>
              ) : null}
            </Link>
          </Button>
        </header>
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
