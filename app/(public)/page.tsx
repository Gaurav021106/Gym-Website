import React from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";

// Reusable lightweight skeleton for below-the-fold dynamic imports
const SectionSkeleton = () => (
  <div className="w-full min-h-[350px] animate-pulse bg-zinc-950/60" />
);

const FreeTrialSection = dynamic(
  () => import("@/components/FreeTrialModal").then((mod) => mod.FreeTrialSection),
  {
    ssr: true,
    loading: () => <SectionSkeleton />,
  }
);

const BranchTrainersSection = dynamic(
  () =>
    import("@/components/BranchTrainersSection").then(
      (mod) => mod.BranchTrainersSection
    ),
  {
    ssr: true,
    loading: () => <SectionSkeleton />,
  }
);

const MembershipSection = dynamic(
  () => import("@/components/MembershipSection").then((mod) => mod.MembershipSection),
  {
    ssr: true,
    loading: () => <SectionSkeleton />,
  }
);

const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection").then((mod) => mod.TestimonialsSection),
  {
    ssr: true,
    loading: () => <SectionSkeleton />,
  }
);

const CTASection = dynamic(
  () => import("@/components/CTASection").then((mod) => mod.CTASection),
  {
    ssr: true,
    loading: () => <SectionSkeleton />,
  }
);

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      {/* Critical First Contentful Paint & Largest Contentful Paint Section */}
      <HeroSection />

      {/* Immediate Content */}
      <div className="section-deferred">
        <AboutSection showBanner={false} />
      </div>

      <div className="section-deferred">
        <ServicesSection />
      </div>

      {/* Deferred Below-The-Fold Sections */}
      <div className="section-deferred">
        <FreeTrialSection />
      </div>

      <div className="section-deferred">
        <BranchTrainersSection />
      </div>

      <div className="section-deferred">
        <MembershipSection />
      </div>

      <div className="section-deferred">
        <TestimonialsSection />
      </div>

      <div className="section-deferred">
        <CTASection />
      </div>
    </main>
  );
}