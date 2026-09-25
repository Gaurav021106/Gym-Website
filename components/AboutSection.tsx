import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AboutSectionProps {
  showBanner?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ showBanner = false }) => {
  return (
    <section id="about" className="bg-neutral-950 border-b border-neutral-800">
      {/* 1. Optional Banner (Used only on /about page) */}
      {showBanner && (
        <div className="relative min-h-[380px] sm:min-h-[460px] flex items-center justify-center overflow-hidden border-b border-neutral-800">
          <div className="absolute inset-0 z-0">
            <Image
              src="/about.png"
              alt="About Eddy Fitness Club"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/25" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
            <Badge
              variant="outline"
              className="text-red-400 border-red-800/80 bg-black/60 uppercase font-extrabold tracking-widest text-[11px] mb-4 px-3.5 py-1 backdrop-blur-md shadow-md"
            >
              About Eddy Fitness Club
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight [text-shadow:_0_2px_12px_rgb(0_0_0_/_80%)]">
              Where Ordinary Bodies Become Unstoppable
            </h1>
            <p className="mt-4 text-neutral-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">
              Certified Fitness &amp; Nutrition Coaching across Rishikesh &amp; Dehradun.
            </p>
          </div>
        </div>
      )}

      {/* 2. Main Content & 4 Stat Cards */}
      <div className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge
              variant="outline"
              className="text-red-400 border-red-800 uppercase font-extrabold tracking-widest text-[11px] mb-3"
            >
              Our Philosophy
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white leading-tight">
              A Chain Built On Science, Grit, and Community.
            </h2>
            <p className="mt-6 text-neutral-300 leading-relaxed text-sm sm:text-base">
              Eddy Fitness Club is a premier fitness center network operating across 5 strategically connected locations in Rishikesh and Dehradun. Led by qualified fitness and sports nutrition coaches, we specialize in eliminating guesswork through tailored nutrition blueprints, biomechanically sound workout plans, and dedicated personal training.
            </p>

            <div className="mt-8 border-l-2 border-red-600 pl-4 py-2 bg-neutral-900/40 rounded-r-lg">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-100">
                Our Vision
              </h3>
              <p className="text-sm text-neutral-300 mt-1">
                To transform Uttarakhand into an active, healthy, and high-performance community by delivering world-class equipment, qualified mentorship, and zero-compromise training environments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
              <CardContent className="p-6">
                <span className="text-4xl font-black text-red-500 block">5</span>
                <h3 className="text-white font-bold text-base mt-2">Active Branches</h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Amitgram, Inter College, Dudhli Rd, Jolly Grant &amp; Doiwala.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
              <CardContent className="p-6">
                <span className="text-4xl font-black text-red-500 block">300+</span>
                <h3 className="text-white font-bold text-base mt-2">Verified Reviews</h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Rated 4.8 to 5.0 stars across Google Maps.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
              <CardContent className="p-6">
                <span className="text-4xl font-black text-red-500 block">24/7</span>
                <h3 className="text-white font-bold text-base mt-2">Round-the-Clock</h3>
                <p className="text-xs text-neutral-300 mt-1">
                  24-hour access available at Dobhal Complex branch.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
              <CardContent className="p-6">
                <span className="text-4xl font-black text-red-500 block">100%</span>
                <h3 className="text-white font-bold text-base mt-2">Custom Guidance</h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Individualized calorie goals, macro plans &amp; lift forms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};