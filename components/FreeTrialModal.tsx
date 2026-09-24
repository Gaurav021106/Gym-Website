"use client";

import React, { useState } from "react";
import { BRANCHES_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, CheckCircle2, Dumbbell } from "lucide-react";

export const FreeTrialSection: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState(BRANCHES_DATA[0].name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*FREE TRIAL SESSION REQUEST - EDDY FITNESS CLUB*
---------------------------------------
👤 *Name:* ${name.trim()}
📞 *Phone:* ${phone.trim()}
📍 *Preferred Branch:* ${branch}
🎁 *Offer:* Claim 1-Day Free Workout Pass + Body Composition Check
---------------------------------------
_Sent via Eddy Fitness Website_`;

    window.open(`https://wa.me/918410411868?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-16 md:py-20 bg-neutral-900/50 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Card className="bg-neutral-950 border-2 border-red-600/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-8">
            <Badge className="bg-red-600 text-white text-[10px] uppercase font-black px-3 py-1 mb-3">
              Limited Availability
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide flex items-center justify-center gap-2">
              <Dumbbell className="w-6 h-6 text-red-500" aria-hidden="true" />
              Book a Free Trial Session
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2">
              Experience the equipment, meet our coaches, and receive a complimentary body composition analysis.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="freetrial-name" className="block text-xs uppercase font-bold text-neutral-200 mb-1.5">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                id="freetrial-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Gaurav Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="freetrial-phone" className="block text-xs uppercase font-bold text-neutral-200 mb-1.5">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                id="freetrial-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="freetrial-branch" className="block text-xs uppercase font-bold text-neutral-200 mb-1.5">
                Select Branch <span className="text-red-400">*</span>
              </label>
              <select
                id="freetrial-branch"
                name="branch"
                aria-label="Select preferred gym branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full px-3 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:border-red-500 focus:outline-none cursor-pointer"
              >
                {BRANCHES_DATA.map((b) => (
                  <option key={b.id} value={b.name} className="bg-neutral-950 text-white">
                    {b.name.replace("Eddy Fitness Club – ", "")} ({b.city})
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-3 mt-2">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-xs sm:text-sm tracking-wider py-6 rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Claim Free Trial via WhatsApp</span>
              </Button>
              <p className="text-[11px] text-neutral-400 text-center flex items-center justify-center gap-1.5 mt-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500" aria-hidden="true" />
                Direct verification by Eddy Fitness Club management. Zero spam.
              </p>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};