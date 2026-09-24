import React from "react";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { BRANCHES_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-28">
      {/* Page Header */}
      <section className="py-16 bg-neutral-900/40 border-b border-neutral-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Badge variant="outline" className="text-red-500 border-red-900/50 uppercase font-extrabold tracking-widest text-[11px] mb-3">
            About Eddy Fitness Club
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black uppercase text-white mt-3">
            Where Ordinary Bodies Become Unstoppable
          </h1>
          <p className="mt-4 text-neutral-400 text-base max-w-2xl mx-auto">
            Certified Fitness & Nutrition Coaching across Rishikesh & Dehradun.
          </p>
        </div>
      </section>

      {/* Main Core About component */}
      <AboutSection />

      {/* 5 Branches Summary Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-white text-center mb-12">
          Our 5 Locations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCHES_DATA.map((b) => (
            <Card key={b.id} className="bg-neutral-900/40 border-neutral-800 rounded-2xl">
              <CardHeader className="p-6 pb-2">
                <Badge className="bg-red-600/20 text-red-500 hover:bg-red-600/20 border-0 font-bold uppercase text-xs w-fit">
                  {b.city}
                </Badge>
                <CardTitle className="text-xl font-bold uppercase text-white mt-3">{b.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-sm text-neutral-400 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  {b.address}
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-neutral-400 flex justify-between items-center">
                  <span className="inline-flex items-center gap-1">
                    Rating: <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <strong className="text-amber-400">{b.rating}</strong> ({b.reviewsCount})
                  </span>
                  <span>{b.hours}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}