/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LogIn, PhoneCall, ChevronRight, User, Shield, LogOut, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenTrial?: () => void;
}

export function Navbar({ onOpenTrial }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // User session state
  const [user, setUser] = useState<{ name: string; email: string; role?: string } | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch logged-in user info
  useEffect(() => {
    async function fetchUserSession() {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data && data.user) {
            setUser(data.user);
          }
        }
      } catch (err) {
        console.error("Not authenticated");
      }
    }
    fetchUserSession();

    // Close dropdown on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      setDropdownOpen(false);
      router.push("/");
      router.refresh();
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["about", "services", "membership"];
    let animationFrame = 0;

    const updateActiveSection = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const activationLine = 120;
        const currentSection = [...sectionIds].reverse().find((id) => {
          const section = document.getElementById(id);
          return section && section.getBoundingClientRect().top <= activationLine;
        });

        setActiveSection(currentSection ?? "home");
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/", sectionId: "home" },
    { name: "About", href: "/about", sectionId: "about" },
    { name: "Services", href: "/#services", sectionId: "services" },
    { name: "Memberships", href: "/#membership", sectionId: "membership" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (link: (typeof navLinks)[number]) => {
    if (pathname === "/" && link.sectionId) {
      return activeSection === link.sectionId;
    }
    if (link.href.startsWith("/#")) return false;
    if (link.href === "/") return pathname === "/";
    return pathname === link.href || pathname.startsWith(`${link.href}/`);
  };

  // Helper to check if logged-in user is admin (adjust email or add role check based on your database schema)
  const isAdmin = user && (user.email === "saklanigaurav326@gmail.com" || user.role === "admin");

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
                aria-current={isActive(link) ? "page" : undefined}
                className={`border border-transparent px-3 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 ${
                  isActive(link)
                    ? "text-red-300 bg-red-600/20 border-red-500/30 hover:bg-red-600/30"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-800/60 hover:border-zinc-700/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                {/* User Profile Pill Button */}
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2.5 rounded-full border border-zinc-700 bg-zinc-900/90 px-4 py-1.5 text-xs font-semibold text-white hover:border-red-500/50 transition shadow-md cursor-pointer"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white font-bold text-[10px]">
                    <User className="h-3.5 w-3.5" />
                  </div>
                  <span className="max-w-[130px] truncate">{user.name}</span>
                  <ChevronDown className={`h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Card */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-zinc-800 bg-zinc-950 p-2.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
                    <div className="border-b border-zinc-800/80 px-3 py-2.5">
                      <p className="text-xs font-bold text-white truncate">{user.name}</p>
                      <p className="text-[11px] text-zinc-400 truncate mt-0.5">{user.email}</p>
                    </div>

                    <div className="pt-1.5 space-y-1">
                      {isAdmin && (
                        <Link
                          href="/admin"
                          className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-900 hover:text-white transition"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <Shield className="h-4 w-4 text-red-500" />
                          <span>Admin Dashboard</span>
                        </Link>
                      )}

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-500/10 transition text-left cursor-pointer"
                      >
                        <LogOut className="h-4 w-4 text-red-400" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-xs font-semibold text-zinc-300 hover:text-white hover:border-red-500/50 hover:bg-red-950/20 transition group"
              >
                <LogIn className="h-3.5 w-3.5 text-red-500 group-hover:scale-110 transition" />
                <span>Login</span>
              </Link>
            )}

            {/* Free Trial / CTA */}
            {onOpenTrial ? (
              <button
                onClick={onOpenTrial}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/50 transition transform hover:-translate-y-0.5 cursor-pointer"
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
            {user ? (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-xs font-semibold text-white"
              >
                <User className="h-3.5 w-3.5 text-red-500" />
                <span className="max-w-[90px] truncate">{user.name}</span>
              </button>
            ) : (
              <Link
                href="/login"
                className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-red-500 hover:bg-zinc-800"
                title="Login"
              >
                <LogIn className="h-4 w-4" />
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-4 py-5 space-y-4">
          {user && (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-3">
              <p className="text-xs font-bold text-white truncate">{user.name}</p>
              <p className="text-[11px] text-zinc-400 truncate">{user.email}</p>
            </div>
          )}

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(link) ? "page" : undefined}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive(link)
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
            {user ? (
              <>
                {isAdmin && (
                  <Link
                    href="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-xs font-bold text-white hover:bg-zinc-800 transition"
                  >
                    <Shield className="h-4 w-4 text-red-500" />
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-red-500/30 bg-red-950/20 text-xs font-bold text-red-400 hover:bg-red-950/40 transition cursor-pointer"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-red-500/30 bg-red-950/20 text-xs font-bold text-red-400 hover:bg-red-950/40 transition"
              >
                <LogIn className="h-4 w-4" />
                Login to Account
              </Link>
            )}

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