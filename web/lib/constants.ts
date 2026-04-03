import type { Platform } from "./types";

export const APP_NAME = "Beacons Brand";

export const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: "LayoutDashboard" as const },
  { href: "/creators", label: "Creators", icon: "Users" as const },
  { href: "/shortlists", label: "Shortlists", icon: "Bookmark" as const },
  { href: "/campaigns", label: "Campaigns", icon: "Megaphone" as const },
  { href: "/reports", label: "Reports", icon: "BarChart3" as const },
  { href: "/settings", label: "Settings", icon: "Settings" as const },
] as const;

export const PLATFORM_LABELS: Record<Platform, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
  twitter: "X / Twitter",
  facebook: "Facebook",
};

export const CREATOR_FILTER_OPTIONS = {
  platforms: ["instagram", "tiktok", "youtube", "twitter"] as Platform[],
  categories: [
    "Travel",
    "Fashion",
    "Beauty",
    "Tech",
    "Gaming",
    "Fitness",
    "Food",
    "Lifestyle",
  ],
};
