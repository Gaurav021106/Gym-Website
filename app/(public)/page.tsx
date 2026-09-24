import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BranchTrainersSection } from "@/components/BranchTrainersSection";
import { MembershipSection } from "@/components/MembershipSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BranchTrainersSection />
      <MembershipSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}