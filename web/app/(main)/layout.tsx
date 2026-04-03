import { AppShell } from "@/components/app-shell";
import { getNotifications } from "@/lib/data";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const unread = getNotifications().filter((n) => !n.read).length;
  return <AppShell unreadCount={unread}>{children}</AppShell>;
}
