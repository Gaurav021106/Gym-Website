import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="text-red-500 border-red-900/50 uppercase font-extrabold tracking-widest text-[11px] mb-3">
              About Eddy Fitness Club
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white leading-tight">
              A Chain Built On Science, Grit, and Community.
            </h2>
            <p className="mt-6 text-neutral-400 leading-relaxed text-sm sm:text-base">
              Eddy Fitness Club is a premier fitness center network operating across 5 strategically connected locations in Rishikesh and Dehradun. Led by qualified fitness and sports nutrition coaches, we specialize in eliminating guesswork through tailored nutrition blueprints, biomechanically sound workout plans, and dedicated personal training.
            </p>

            <div className="mt-8 border-l-2 border-red-600 pl-4 py-2 bg-neutral-900/30 rounded-r-lg">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-200">Our Vision</h3>
              <p className="text-sm text-neutral-400 mt-1">
                To transform Uttarakhand into an active, healthy, and high-performance community by delivering world-class equipment, qualified mentorship, and zero-compromise training environments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
              <CardContent className="p-6">
                <span className="text-4xl font-black text-red-500 block">5</span>
                <h4 className="text-white font-bold mt-2">Active Branches</h4>
                <p className="text-xs text-neutral-400 mt-1">Amitgram, Inter College, Dudhli Rd, Jolly Grant & Doiwala.</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
              <CardContent className="p-6">
                <span className="text-4xl font-black text-red-500 block">300+</span>
                <h4 className="text-white font-bold mt-2">Verified Reviews</h4>
                <p className="text-xs text-neutral-400 mt-1">Rated 4.8 to 5.0 stars across Google Maps.</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
              <CardContent className="p-6">
                <span className="text-4xl font-black text-red-500 block">24/7</span>
                <h4 className="text-white font-bold mt-2">Round-the-Clock</h4>
                <p className="text-xs text-neutral-400 mt-1">24-hour access available at Dobhal Complex branch.</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
              <CardContent className="p-6">
                <span className="text-4xl font-black text-red-500 block">100%</span>
                <h4 className="text-white font-bold mt-2">Custom Guidance</h4>
                <p className="text-xs text-neutral-400 mt-1">Individualized calorie goals, macro plans & lift forms.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};