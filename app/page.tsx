import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { Intro } from "@/components/home/Intro";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { WebDevShowcase } from "@/components/home/WebDevShowcase";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { MotionPreview } from "@/components/home/MotionPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FinalCta } from "@/components/home/FinalCta";
import { siteConfig, canonicalFor } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} — We build what's next` },
  description: siteConfig.description,
  alternates: canonicalFor("/"),
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedWork />
      <WebDevShowcase />
      <ServicesGrid />
      <MotionPreview />
      <ProcessSection />
      <FinalCta />
    </>
  );
}
