"use client";

import React from "react";
import { MEMBERSHIP_PLANS } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

export const MembershipSection: React.FC = () => {
  return (
    <section id="membership" className="py-16 md:py-24 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <Badge
            variant="outline"
            className="text-red-400 border-red-900/50 uppercase font-extrabold tracking-widest text-[10px] sm:text-[11px] mb-3 px-3 py-1"
          >
            Membership Tiers
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight leading-tight">
            Invest In Your Health
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-md mx-auto">
            Transparent pricing with multi-branch access options across Rishikesh &amp; Dehradun.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan, i) => (
            <Card
              key={i}
              className={`relative rounded-2xl sm:rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "bg-neutral-900/90 border-2 border-red-600 shadow-2xl shadow-red-950/40 lg:-translate-y-2 order-first md:order-none"
                  : "bg-neutral-900/30 border-neutral-800/80 hover:border-neutral-700"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-red-600 text-white text-[10px] uppercase font-black px-3.5 py-1 rounded-full tracking-widest shadow-md">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div>
                <CardHeader className="p-6 sm:p-8 pb-4">
                  <CardTitle className="text-lg sm:text-xl font-black uppercase text-white tracking-wide">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-neutral-300 uppercase font-medium">
                      / {plan.duration}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">Starting from {plan.startingFrom}</p>
                </CardHeader>

                <CardContent className="p-6 sm:p-8 pt-2">
                  <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-neutral-200">
                    {plan.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-red-600/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-red-400 stroke-[3]" aria-hidden="true" />
                        </div>
                        <span className="leading-relaxed">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>

              <CardFooter className="p-6 sm:p-8 pt-2">
                <Button
                  asChild
                  className={`w-full py-5 sm:py-6 rounded-xl font-bold uppercase text-xs tracking-wider transition-all group ${
                    plan.isPopular
                      ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20"
                      : "bg-neutral-800 hover:bg-neutral-700 text-neutral-200"
                  }`}
                >
                  <a
                    href={`https://wa.me/918410411868?text=I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(
                      plan.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enroll in the ${plan.name} membership plan via WhatsApp`}
                    className="inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Enroll In {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};