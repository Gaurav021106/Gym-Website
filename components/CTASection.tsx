import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-red-950/20 -z-10" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">
          Ready to Become Unstoppable?
        </h2>
        <p className="text-neutral-300 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Start your transformation today. Reach out to Coach Eddy or visit our nearest club in Rishikesh or Dehradun.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto px-8 py-6 bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-xs tracking-wider rounded-xl shadow-xl shadow-red-600/30"
          >
            <a
              href="https://wa.me/918410411868?text=JOIN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Eddy Fitness Club on WhatsApp to start training"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp: DM &quot;JOIN&quot;</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 py-6 bg-neutral-900 hover:bg-neutral-800 text-white border-neutral-700 font-bold uppercase text-xs tracking-wider rounded-xl"
          >
            <a 
              href="tel:8410411868" 
              aria-label="Call Eddy Fitness Club at 8410411868"
              className="inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-400" aria-hidden="true" />
              <span>Call 8410411868</span>
            </a>
          </Button>
        </div>

        <p className="mt-6 text-xs text-neutral-300 inline-flex items-center gap-1.5 font-medium">
          <svg
            className="w-4 h-4 text-neutral-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/eddyfitnessclub/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Eddy Fitness Club on Instagram @eddyfitnessclub"
            className="text-white underline hover:text-red-400 font-semibold"
          >
            @eddyfitnessclub
          </a>
        </p>
      </div>
    </section>
  );
};