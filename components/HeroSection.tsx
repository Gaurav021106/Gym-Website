import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-black border-b border-neutral-800/80">
      
      {/* 1. Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Eddy Fitness Club Athlete"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center opacity-85 contrast-110 brightness-95"
        />

        {/* Directional gradient: darker on the left & bottom to protect text readability, translucent on the right where the physique is */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        
        {/* Subtle red accent backlighting behind the athlete */}
        <div className="absolute top-1/4 right-10 md:right-1/4 w-[420px] h-[420px] bg-red-600/20 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge
          variant="outline"
          className="px-4 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border-red-500/40 text-red-500 text-xs font-semibold uppercase tracking-wider mb-6 inline-flex items-center gap-2 shadow-lg shadow-black/60"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          5 Branches in Rishikesh &amp; Dehradun
        </Badge>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white max-w-4xl mx-auto leading-[0.95] drop-shadow-2xl">
          Where Ordinary Bodies Become{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-orange-500">
            Unstoppable.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
          Certified Fitness &amp; Nutrition Coaching • Customized Diet &amp; Workout Regimes • Personal Training (PT) • HYROX &amp; Community Challenges.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-6 rounded-xl shadow-xl shadow-red-600/30 hover:scale-[1.02] transition-all"
          >
            <a
              href="https://wa.me/918410411868?text=JOIN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>DM &quot;JOIN&quot; on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-neutral-900/80 backdrop-blur-md hover:bg-neutral-800/90 text-neutral-100 border-neutral-700/80 font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-6 rounded-xl hover:border-neutral-500 transition-all"
          >
            <Link href="#branches" className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Select Branch &amp; Trainers</span>
            </Link>
          </Button>
        </div>

        {/* Trust Points */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-neutral-300 text-xs sm:text-sm font-medium">
          <span className="inline-flex items-center gap-1.5 drop-shadow">
            <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" /> 24/7 Access (Amitgram)
          </span>
          <span className="text-neutral-600 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5 drop-shadow">
            <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" /> Certified Nutritionists
          </span>
          <span className="text-neutral-600 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5 drop-shadow">
            <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" /> 4.9★ Average Google Rating
          </span>
        </div>
      </div>
    </section>
  );
};