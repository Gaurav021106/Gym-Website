"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldAlert, PhoneCall, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenTrial?: () => void;
}

export function Navbar({ onOpenTrial }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Memberships", href: "/#memberships" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 rounded-lg overflow-hidden border border-red-500/30 bg-red-950/20 p-1 flex items-center justify-center transition group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Eddy Fitness Club"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-base font-black tracking-wider uppercase text-white group-hover:text-red-500 transition">
                Eddy Fitness Club
              </span>
              <span className="block text-[10px] text-zinc-400 font-semibold tracking-widest uppercase">
                Rishikesh • Dehradun • Haridwar
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/60 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition ${
                  isActive(link.href)
                    ? "text-white bg-red-600/20 text-red-400 border border-red-500/30"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-800/60"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Access to Admin Dashboard */}
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-xs font-semibold text-zinc-300 hover:text-white hover:border-red-500/50 hover:bg-red-950/20 transition group"
            >
              <ShieldAlert className="h-3.5 w-3.5 text-red-500 group-hover:scale-110 transition" />
              <span>Admin Portal</span>
            </Link>

            {/* Free Trial / CTA */}
            {onOpenTrial ? (
              <button
                onClick={onOpenTrial}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/50 transition transform hover:-translate-y-0.5"
              >
                Free Day Pass
              </button>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/50 transition transform hover:-translate-y-0.5"
              >
                Join Now
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/admin"
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-red-500 hover:bg-zinc-800"
              title="Admin Portal"
            >
              <ShieldAlert className="h-4 w-4" />
            </Link>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-4 py-5 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-red-600/10 text-red-400 font-semibold"
                    : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="h-4 w-4 opacity-40" />
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-red-500/30 bg-red-950/20 text-xs font-bold text-red-400 hover:bg-red-950/40 transition"
            >
              <ShieldAlert className="h-4 w-4" />
              Admin Portal Dashboard
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-red-600 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-red-700 transition"
            >
              <PhoneCall className="h-4 w-4" />
              Claim Free Day Pass
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
