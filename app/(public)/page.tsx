import React from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";

const FreeTrialSection = dynamic(
  () => import("@/components/FreeTrialModal").then((mod) => mod.FreeTrialSection),
  { ssr: true }
);

const BranchTrainersSection = dynamic(
  () => import("@/components/BranchTrainersSection").then((mod) => mod.BranchTrainersSection),
  { ssr: true }
);

const MembershipSection = dynamic(
  () => import("@/components/MembershipSection").then((mod) => mod.MembershipSection),
  { ssr: true }
);

const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection").then((mod) => mod.TestimonialsSection),
  { ssr: true }
);

const CTASection = dynamic(
  () => import("@/components/CTASection").then((mod) => mod.CTASection),
  { ssr: true }
);

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      <HeroSection />
      <div className="section-deferred">
        <AboutSection showBanner={false} />
      </div>
      <div className="section-deferred">
        <ServicesSection />
      </div>
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