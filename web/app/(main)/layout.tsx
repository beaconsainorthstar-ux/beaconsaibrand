import { AppShell } from "@/components/app-shell";
import { getNotifications } from "@/lib/data";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const unread = getNotifications().filter((n) => !n.read).length;
  return (
    <div className="dark min-h-screen bg-background">
      <AppShell unreadCount={unread}>{children}</AppShell>
    </div>
  );
}
