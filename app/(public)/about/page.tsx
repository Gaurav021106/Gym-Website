import React from "react";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { BRANCHES_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-20">
      {/* Banner enabled on the dedicated about page */}
      <AboutSection showBanner={true} />

      {/* 5 Branches Footprint */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-red-400 border-red-800 uppercase font-extrabold tracking-widest text-[11px] mb-3">
            Our Footprint
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white">
            5 Locations Across Uttarakhand
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCHES_DATA.map((b) => (
            <Card key={b.id} className="bg-neutral-900/40 border-neutral-800 rounded-2xl">
              <CardHeader className="p-6 pb-2">
                <Badge className="bg-red-600/20 text-red-400 hover:bg-red-600/20 border-0 font-bold uppercase text-xs w-fit">
                  {b.city}
                </Badge>
                <CardTitle className="text-xl font-bold uppercase text-white mt-3">{b.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-sm text-neutral-300 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                  {b.address}
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-neutral-300 flex justify-between items-center">
                  <span className="inline-flex items-center gap-1">
                    Rating: <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
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