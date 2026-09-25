import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-black border-b border-neutral-800">
      
      {/* 1. Mobile-Optimized LCP Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Eddy Fitness Club gym floor and equipment"
          fill
          priority
          fetchPriority="high"
          quality={65}
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 2. Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge
          variant="outline"
          className="px-4 py-1.5 rounded-full bg-neutral-900/90 border-red-500/50 text-red-400 text-xs font-semibold uppercase tracking-wider mb-6 inline-flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          5 Branches in Rishikesh &amp; Dehradun
        </Badge>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white max-w-4xl mx-auto leading-[0.95] drop-shadow-lg">
          Where Ordinary Bodies Become{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Unstoppable.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
          Certified Fitness &amp; Nutrition Coaching • Customized Diet &amp; Workout Regimes • Personal Training (PT) • HYROX &amp; Community Challenges.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-6 rounded-xl shadow-xl shadow-red-600/30"
          >
            <a
              href="https://wa.me/918410411868?text=JOIN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send message on WhatsApp to join Eddy Fitness Club"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>DM &quot;JOIN&quot; on WhatsApp</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-neutral-900/80 hover:bg-neutral-800 text-neutral-100 border-neutral-700 font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-6 rounded-xl"
          >
            <Link href="#branches" className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" aria-hidden="true" />
              <span>Select Branch &amp; Trainers</span>
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-neutral-200 text-xs sm:text-sm font-medium drop-shadow">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" aria-hidden="true" /> 24/7 Access (Amitgram)
          </span>
          <span className="text-neutral-500 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" aria-hidden="true" /> Certified Nutritionists
          </span>
          <span className="text-neutral-500 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" aria-hidden="true" /> 4.9★ Average Google Rating
          </span>
        </div>
      </div>
    </section>
  );
};