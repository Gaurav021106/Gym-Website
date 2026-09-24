"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BRANCHES_DATA } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Clock, Sparkles } from "lucide-react";

export const BranchTrainersSection: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(BRANCHES_DATA[0].id);

  const activeBranch =
    BRANCHES_DATA.find((branch) => branch.id === selectedBranchId) || BRANCHES_DATA[0];

  return (
    <section id="branches" className="py-16 md:py-24 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <Badge
            variant="outline"
            className="text-red-500 border-red-900/50 uppercase font-extrabold tracking-widest text-[10px] sm:text-[11px] mb-3 px-3 py-1"
          >
            5 Locations & Coaching Staff
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white mt-1 leading-tight">
            Select Your Branch &amp; Meet The Coaches
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl mx-auto">
            Choose a location below to view branch hours, Google ratings, amenities, and assigned certified trainers.
          </p>
        </div>

        {/* Mobile Horizontal-Scrollable Tabs (No Overlapping) */}
        <div className="w-full mb-8 md:mb-10">
          <Tabs value={selectedBranchId} onValueChange={setSelectedBranchId} className="w-full">
            <div className="w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <TabsList className="inline-flex sm:flex sm:flex-wrap h-auto bg-neutral-900/90 border border-neutral-800 p-1.5 rounded-2xl justify-start sm:justify-center gap-1.5 min-w-max sm:min-w-0">
                {BRANCHES_DATA.map((branch) => (
                  <TabsTrigger
                    key={branch.id}
                    value={branch.id}
                    className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-neutral-400 font-bold uppercase text-[11px] sm:text-xs md:text-sm px-3.5 py-2.5 rounded-xl whitespace-nowrap shrink-0 transition-all"
                  >
                    {branch.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </div>

        {/* Active Branch Overview Card */}
        <Card className="bg-neutral-900/40 border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 mb-8 shadow-xl">
          
          {/* Branch Info Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge className="bg-red-600/20 text-red-500 hover:bg-red-600/20 border-0 font-bold uppercase text-[10px] sm:text-xs">
                  {activeBranch.city}
                </Badge>
                <span className="text-amber-400 font-bold text-xs sm:text-sm inline-flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {activeBranch.rating.toFixed(1)} ({activeBranch.reviewsCount} Google Reviews)
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-wide">
                {activeBranch.name}
              </h3>

              <p className="text-neutral-400 text-xs sm:text-sm flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{activeBranch.address}</span>
              </p>
            </div>

            {/* Quick Badges: Hours & Feature */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2.5 pt-2 md:pt-0">
              <div className="bg-neutral-900 border border-neutral-800 px-3.5 py-2.5 rounded-xl flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                <div>
                  <span className="text-neutral-500 uppercase block font-semibold text-[9px] sm:text-[10px]">Hours</span>
                  <span className="text-neutral-200 font-bold text-xs sm:text-sm whitespace-nowrap">{activeBranch.hours}</span>
                </div>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 px-3.5 py-2.5 rounded-xl flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-red-500 shrink-0" />
                <div>
                  <span className="text-neutral-500 uppercase block font-semibold text-[9px] sm:text-[10px]">Highlight</span>
                  <span className="text-red-400 font-bold text-xs sm:text-sm whitespace-nowrap">{activeBranch.features[0]}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-neutral-800 my-4 sm:my-6" />

          {/* Trainers Roster */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4 sm:mb-6">
              Assigned Trainers ({activeBranch.name}):
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {activeBranch.trainers.map((trainer, index) => (
                <Card
                  key={index}
                  className="bg-neutral-950 border-neutral-800/80 rounded-xl sm:rounded-2xl hover:border-neutral-700 transition-all overflow-hidden"
                >
                  <CardContent className="p-4 sm:p-5 flex flex-row items-center sm:items-start gap-4">
                    {/* Trainer Avatar */}
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-neutral-800 shrink-0">
                      <Image
                        src={trainer.image}
                        alt={trainer.name}
                        fill
                        sizes="(max-width: 640px) 80px, 112px"
                        className="object-cover"
                      />
                    </div>

                    {/* Trainer Meta */}
                    <div className="text-left flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h5 className="font-extrabold text-white text-base sm:text-lg truncate">
                          {trainer.name}
                        </h5>
                        <Badge
                          variant="secondary"
                          className="bg-red-600/20 text-red-400 hover:bg-red-600/20 font-bold text-[10px] sm:text-xs w-fit px-2 py-0.5"
                        >
                          {trainer.experience}
                        </Badge>
                      </div>

                      <p className="text-[11px] sm:text-xs text-red-500 font-semibold uppercase mt-0.5">
                        {trainer.role}
                      </p>

                      <p className="text-xs text-neutral-300 mt-2 font-medium line-clamp-2">
                        <span className="text-neutral-500">Specialty:</span> {trainer.specialty}
                      </p>

                      <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 line-clamp-1">
                        <span className="text-neutral-500">Cert:</span> {trainer.certification}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </Card>
      </div>
    </section>
  );
};