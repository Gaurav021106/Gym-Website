"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Eddy Fitness Logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-lg bg-red-600 object-cover shadow-lg shadow-red-600/30"
          />
          <div>
            <span className="text-lg sm:text-xl font-extrabold tracking-wider uppercase text-white block leading-none">
              Eddy Fitness
            </span>
            <span className="text-[10px] sm:text-xs text-red-500 font-semibold tracking-widest uppercase">
              Rishikesh & Dehradun
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <Link href="/about" className="hover:text-white transition">
            About & Vision
          </Link>
          <Link href="/#services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/#branches" className="hover:text-white transition">
            Branches & Trainers
          </Link>
          <Link href="/#membership" className="hover:text-white transition">
            Memberships
          </Link>
          <Link href="/#reviews" className="hover:text-white transition">
            Reviews
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-full shadow-md shadow-red-600/20"
          >
            <a
              href="https://wa.me/918410411868?text=JOIN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>DM &quot;JOIN&quot;</span>
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-400 hover:text-white hover:bg-neutral-900"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-6 space-y-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-white">
            About & Vision
          </Link>
          <Link href="/#services" onClick={() => setIsOpen(false)} className="block hover:text-white">
            Services
          </Link>
          <Link href="/#branches" onClick={() => setIsOpen(false)} className="block hover:text-white">
            Branches & Trainers
          </Link>
          <Link href="/#membership" onClick={() => setIsOpen(false)} className="block hover:text-white">
            Memberships
          </Link>
          <Link href="/#reviews" onClick={() => setIsOpen(false)} className="block hover:text-white">
            Reviews
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-white">
            Contact
          </Link>
          <Button
            asChild
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-3 rounded-xl uppercase"
          >
            <a
              href="https://wa.me/918410411868?text=JOIN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>DM &quot;JOIN&quot; ON WHATSAPP</span>
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};