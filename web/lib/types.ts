export type Platform =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "twitter"
  | "facebook";

export type CreatorStatus = "active" | "contacted" | "pending" | "inactive";

export type CampaignStatus = "draft" | "active" | "completed" | "archived";

export type DeliverableStatus =
  | "pending"
  | "submitted"
  | "approved"
  | "live"
  | "rejected";

export type DeliverableType = "post" | "story" | "reel" | "video" | "link";

export interface CreatorPlatformStats {
  platform: Platform;
  handle: string;
  followers: number;
  engagementRate: number;
  avgViews?: number;
}

export interface AudienceDemographics {
  ageRanges: { label: string; percent: number }[];
  gender: { label: string; percent: number }[];
  topLocations?: { country: string; percent: number }[];
}

export interface TopContentItem {
  id: string;
  title: string;
  platform: Platform;
  thumbnailUrl?: string;
  url?: string;
}

export interface Creator {
  id: string;
  displayName: string;
  handle: string;
  avatarUrl?: string;
  bio: string;
  location: string;
  categories: string[];
  tags: string[];
  status: CreatorStatus;
  reach: number;
  platforms: CreatorPlatformStats[];
  audience: AudienceDemographics;
  pricingRange?: { min: number; max: number; currency: string };
  previousBrands?: string[];
  topContent?: TopContentItem[];
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  primaryColor?: string;
}

export interface Shortlist {
  id: string;
  name: string;
  brandId: string;
  creatorIds: string[];
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export interface CampaignCreator {
  creatorId: string;
  role?: string;
  agreedRate?: number;
}

export interface Deliverable {
  id: string;
  campaignId: string;
  creatorId: string;
  type: DeliverableType;
  platform: Platform;
  title: string;
  dueDate: string;
  submittedAt?: string;
  status: DeliverableStatus;
  liveUrl?: string;
}

export interface Campaign {
  id: string;
  name: string;
  brandId: string;
  status: CampaignStatus;
  objective: string;
  budgetMin: number;
  budgetMax: number;
  currency: string;
  startDate: string;
  endDate: string;
  creatorIds: string[];
  deliverableIds: string[];
  platforms: Platform[];
  reportId?: string | null;
}

export interface ReportMetric {
  label: string;
  value: number;
  changePercent?: number;
  format: "number" | "compact" | "percent" | "currency";
}

export interface TimeSeriesPoint {
  date: string;
  reach: number;
  engagement: number;
}

export interface TopPost {
  id: string;
  creatorId: string;
  platform: Platform;
  thumbnailUrl?: string;
  caption: string;
  impressions: number;
  engagementRate: number;
  postedAt: string;
}

export interface Report {
  id: string;
  campaignId: string;
  name: string;
  status: "draft" | "live" | "shared";
  createdAt: string;
  summaryMetrics: ReportMetric[];
  reachOverTime: TimeSeriesPoint[];
  ageBreakdown: { label: string; percent: number }[];
  platformShare: { platform: Platform; percent: number }[];
  creatorBreakdown: { creatorId: string; reach: number; engagement: number }[];
  topPosts: TopPost[];
  selectedPostIds?: string[];
}

export interface MessageThread {
  id: string;
  campaignId?: string;
  title: string;
  participantIds: string[];
  lastMessageAt: string;
  preview: string;
}

export interface Notification {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  read: boolean;
  href?: string;
}
