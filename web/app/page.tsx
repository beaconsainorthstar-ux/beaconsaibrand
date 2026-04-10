import type { Metadata } from "next";
import { BrandsLanding } from "@/components/marketing/brands-landing";

export const metadata: Metadata = {
  title: "Creator Marketing Platform for Brands | Beacons",
  description:
    "Discover creators, manage campaigns, and track performance in one place. Beacons helps brands run influencer marketing that converts.",
};

export default function HomePage() {
  return <BrandsLanding />;
}
