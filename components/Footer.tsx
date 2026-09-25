"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { BRANCHES_DATA } from "@/lib/data";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1 */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-zinc-950 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Eddy Fitness Club Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white leading-none tracking-tight">
                  EDDY
                </h2>
                <p className="text-red-400 tracking-[0.3em] text-xs font-bold mt-1">
                  FITNESS CLUB
                </p>
              </div>
            </Link>

            <p className="text-neutral-300 text-sm leading-relaxed">
              Where Ordinary Bodies Become Unstoppable. Certified Fitness &amp; Nutrition Coaching across Rishikesh &amp; Dehradun.
            </p>

            <Button
              asChild
              variant="link"
              className="text-red-400 hover:text-red-300 p-0 h-auto font-semibold inline-flex items-center gap-2 group text-sm"
            >
              <a
                href="https://www.instagram.com/eddyfitnessclub/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Eddy Fitness Club on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow On Instagram</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-white text-base font-bold mb-6 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-red-400 transition-colors">
                  About &amp; Vision
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-neutral-300 hover:text-red-400 transition-colors">
                  Training Services
                </Link>
              </li>
              <li>
                <Link href="/#branches" className="text-neutral-300 hover:text-red-400 transition-colors">
                  Branches &amp; Trainers
                </Link>
              </li>
              <li>
                <Link href="/#membership" className="text-neutral-300 hover:text-red-400 transition-colors">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-red-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: 5 Branches */}
          <div>
            <h3 className="text-white text-base font-bold mb-6 tracking-wide uppercase">
              Our 5 Branches
            </h3>
            <ul className="space-y-3.5 text-sm">
              {BRANCHES_DATA.map((branch) => (
                <li key={branch.id}>
                  <Link
                    href="/#branches"
                    className="group block text-neutral-300 hover:text-white transition-colors"
                  >
                    <span className="font-medium text-neutral-200 group-hover:text-red-400 transition-colors block">
                      {branch.name}
                    </span>
                    <span className="text-xs text-neutral-300 block line-clamp-1 mt-0.5">
                      {branch.city} • ★ {branch.rating.toFixed(1)} ({branch.reviewsCount})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-white text-base font-bold mb-6 tracking-wide uppercase">
              Connect Directly
            </h3>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="text-red-400 w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-neutral-300 text-xs">Call / WhatsApp</p>
                  <a
                    href="tel:8410411868"
                    className="text-white font-semibold hover:text-red-400 transition-colors"
                  >
                    +91 8410411868
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-red-400 w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-neutral-300 text-xs">Headquarters</p>
                  <p className="text-white font-semibold">
                    Dobhal Complex, Amitgram, Rishikesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <InstagramIcon className="text-red-400 w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="text-neutral-300 text-xs">Direct Support</p>
                  <p className="text-white font-semibold">DM &quot;JOIN&quot; on Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-neutral-800 mt-16 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-300">
          <p>© {new Date().getFullYear()} Eddy Fitness Club. All Rights Reserved.</p>
          <p>Rishikesh &amp; Dehradun • Uttarakhand</p>
        </div>
      </div>
    </footer>
  );
}