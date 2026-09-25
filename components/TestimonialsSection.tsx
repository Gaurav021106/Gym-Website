import React from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-24 bg-neutral-900/30 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="text-red-400 border-red-800 uppercase font-extrabold tracking-widest text-[11px] mb-3">
            Real People. Real Results.
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">
            Google Verified Feedback
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <Card
              key={idx}
              className="bg-neutral-950 border-neutral-800 rounded-2xl flex flex-col justify-between"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    <span className="sr-only">Rated {item.rating} out of 5 stars</span>
                    {Array.from({ length: item.rating }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-200 italic leading-relaxed">
                    &quot;{item.quote}&quot;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800">
                  <h3 className="text-xs font-bold text-white uppercase">{item.name}</h3>
                  <p className="text-xs text-red-400 font-medium mt-0.5">{item.branch}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};