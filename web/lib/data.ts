import type {
  Brand,
  Campaign,
  Creator,
  Deliverable,
  MessageThread,
  Notification,
  Report,
  Shortlist,
} from "./types";
import brandJson from "@/data/brands/brand-1.json";
import creatorsJson from "@/data/creators.json";
import campaignsJson from "@/data/campaigns.json";
import deliverablesJson from "@/data/deliverables.json";
import reportsJson from "@/data/reports.json";
import shortlistsJson from "@/data/shortlists.json";
import threadJson from "@/data/messages/thread-1.json";
import notificationsJson from "@/data/notifications.json";

const brand = brandJson as Brand;
const creators = creatorsJson as Creator[];
const campaigns = campaignsJson as Campaign[];
const deliverables = deliverablesJson as Deliverable[];
const reports = reportsJson as Report[];
const shortlists = shortlistsJson as Shortlist[];
const threads = [threadJson as MessageThread];
const notifications = notificationsJson as Notification[];

const creatorById = new Map(creators.map((c) => [c.id, c]));
const campaignById = new Map(campaigns.map((c) => [c.id, c]));
const deliverableById = new Map(deliverables.map((d) => [d.id, d]));
const reportById = new Map(reports.map((r) => [r.id, r]));
const shortlistById = new Map(shortlists.map((s) => [s.id, s]));

export function getBrand(): Brand {
  return brand;
}

export function getCreators(): Creator[] {
  return creators;
}

export function getCreatorById(id: string): Creator | undefined {
  return creatorById.get(id);
}

export function getCampaigns(): Campaign[] {
  return campaigns;
}

export function getCampaignById(id: string): Campaign | undefined {
  return campaignById.get(id);
}

export function getDeliverables(): Deliverable[] {
  return deliverables;
}

export function getDeliverablesByCampaign(campaignId: string): Deliverable[] {
  return deliverables.filter((d) => d.campaignId === campaignId);
}

export function getDeliverableById(id: string): Deliverable | undefined {
  return deliverableById.get(id);
}

export function getReports(): Report[] {
  return reports;
}

export function getReportById(id: string): Report | undefined {
  return reportById.get(id);
}

export function getReportByCampaignId(
  campaignId: string,
): Report | undefined {
  return reports.find((r) => r.campaignId === campaignId);
}

export function getShortlists(): Shortlist[] {
  return shortlists;
}

export function getShortlistById(id: string): Shortlist | undefined {
  return shortlistById.get(id);
}

export function getThreads(): MessageThread[] {
  return threads;
}

export function getNotifications(): Notification[] {
  return notifications;
}

export function getCreatorsByIds(ids: string[]): Creator[] {
  return ids
    .map((id) => creatorById.get(id))
    .filter((c): c is Creator => Boolean(c));
}

/**
 * Future backend: replace implementations above with Supabase queries
 * or fetch() calls while keeping the same function signatures.
 */
