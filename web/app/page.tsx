import type { Metadata } from "next";
import { BrandsLanding } from "@/components/marketing/brands-landing";

export const metadata: Metadata = {
  title: "Creator Marketing Platform for Brands | Beacons",
  description:
    "Replace creator marketing chaos with a single, clean system. Manage creator relationships, scale results, and measure real business impact.",
};

export default function HomePage() {
  return <BrandsLanding />;
}
