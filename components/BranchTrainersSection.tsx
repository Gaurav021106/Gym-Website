"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BRANCHES_DATA } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Sparkles, Navigation, ExternalLink } from "lucide-react";

export const BranchTrainersSection: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(BRANCHES_DATA[0].id);
  const [showInteractiveMap, setShowInteractiveMap] = useState<boolean>(false);

  const activeBranch =
    BRANCHES_DATA.find((branch) => branch.id === selectedBranchId) || BRANCHES_DATA[0];

  return (
    <section id="branches" className="py-16 md:py-24 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <Badge
            variant="outline"
            className="text-red-400 border-red-900/50 uppercase font-extrabold tracking-widest text-[10px] sm:text-[11px] mb-3 px-3 py-1"
          >
            5 Locations &amp; Coaching Staff
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white mt-1 leading-tight">
            Select Your Branch &amp; Meet The Coaches
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-xl mx-auto">
            Choose a location below to view hours, verified Google ratings, amenities, assigned coaches, and directions.
          </p>
        </div>

        {/* Mobile Horizontal-Scrollable Tabs */}
        <div className="w-full mb-8 md:mb-10">
          <Tabs value={selectedBranchId} onValueChange={(val) => { setSelectedBranchId(val); setShowInteractiveMap(false); }} className="w-full">
            <div className="w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <TabsList className="inline-flex sm:flex sm:flex-wrap h-auto bg-neutral-900/90 border border-neutral-800 p-1.5 rounded-2xl justify-start sm:justify-center gap-1.5 min-w-max sm:min-w-0">
                {BRANCHES_DATA.map((branch) => (
                  <TabsTrigger
                    key={branch.id}
                    value={branch.id}
                    className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-neutral-300 font-bold uppercase text-[11px] sm:text-xs md:text-sm px-3.5 py-2.5 rounded-xl whitespace-nowrap shrink-0 transition-all"
                  >
                    {branch.name.replace("Eddy Fitness Club – ", "")}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </div>

        {/* Active Branch Overview Card */}
        <Card className="bg-neutral-900/40 border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge className="bg-red-600/20 text-red-400 border-0 font-bold uppercase text-[10px] sm:text-xs">
                  {activeBranch.city}
                </Badge>
                <span className="text-amber-400 font-bold text-xs sm:text-sm inline-flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  {activeBranch.rating.toFixed(1)} ({activeBranch.reviewsCount} Google Reviews)
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-wide">
                {activeBranch.name}
              </h3>

              <p className="text-neutral-300 text-xs sm:text-sm flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{activeBranch.address}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2.5 pt-2 md:pt-0">
              <div className="bg-neutral-900 border border-neutral-800 px-3.5 py-2.5 rounded-xl flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-neutral-300 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-neutral-400 uppercase block font-semibold text-[9px] sm:text-[10px]">Hours</span>
                  <span className="text-neutral-100 font-bold text-xs sm:text-sm whitespace-nowrap">{activeBranch.hours}</span>
                </div>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 px-3.5 py-2.5 rounded-xl flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-red-400 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-neutral-400 uppercase block font-semibold text-[9px] sm:text-[10px]">Feature</span>
                  <span className="text-red-400 font-bold text-xs sm:text-sm whitespace-nowrap">{activeBranch.features[0]}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-neutral-800 my-4 sm:my-6" />

          {/* Assigned Trainers */}
          <div className="mb-8">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-300 mb-4 sm:mb-6">
              Assigned Trainers &amp; Nutritionists:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {activeBranch.trainers.map((trainer, index) => (
                <Card
                  key={index}
                  className="bg-neutral-950 border-neutral-800/80 rounded-xl sm:rounded-2xl hover:border-neutral-700 transition-all overflow-hidden"
                >
                  <CardContent className="p-4 sm:p-5 flex flex-row items-center sm:items-start gap-4">
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-neutral-800 shrink-0">
                      <Image
                        src={trainer.image}
                        alt={`${trainer.name} - ${trainer.role}`}
                        fill
                        sizes="(max-width: 640px) 80px, 112px"
                        className="object-cover"
                      />
                    </div>

                    <div className="text-left flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h5 className="font-extrabold text-white text-base sm:text-lg truncate">
                          {trainer.name}
                        </h5>
                        <Badge
                          variant="secondary"
                          className="bg-red-600/20 text-red-300 font-bold text-[10px] sm:text-xs w-fit px-2 py-0.5"
                        >
                          {trainer.experience}
                        </Badge>
                      </div>

                      <p className="text-[11px] sm:text-xs text-red-400 font-semibold uppercase mt-0.5">
                        {trainer.role}
                      </p>

                      <p className="text-xs text-neutral-300 mt-2 font-medium line-clamp-2">
                        <span className="text-neutral-400">Specialty:</span> {trainer.specialty}
                      </p>

                      <p className="text-[11px] sm:text-xs text-neutral-300 mt-1 line-clamp-1">
                        <span className="text-neutral-400">Cert:</span> {trainer.certification}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* On-Demand Lazy Loaded Google Map Facade */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-red-500" aria-hidden="true" />
                Live Location &amp; Directions
              </h4>
              <a
                href={`https://maps.google.com/?q=${activeBranch.geo.latitude},${activeBranch.geo.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open directions for ${activeBranch.name} in Google Maps`}
                className="text-xs text-red-400 hover:text-red-300 font-bold uppercase inline-flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 relative">
              {showInteractiveMap ? (
                <iframe
                  title={`Google Map showing ${activeBranch.name}`}
                  src={activeBranch.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-900/90">
                  <MapPin className="w-8 h-8 text-red-500 mb-2" aria-hidden="true" />
                  <p className="text-white font-bold text-sm mb-1">{activeBranch.name}</p>
                  <p className="text-xs text-neutral-300 max-w-sm mb-4">{activeBranch.address}</p>
                  <Button
                    onClick={() => setShowInteractiveMap(true)}
                    variant="outline"
                    size="sm"
                    className="bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700 text-xs uppercase tracking-wider font-bold"
                  >
                    Load Interactive Map
                  </Button>
                </div>
              )}
            </div>
          </div>

        </Card>
      </div>
    </section>
  );
};