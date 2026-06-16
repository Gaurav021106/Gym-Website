"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-300

      ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex justify-between items-center">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-4">
            <div className="relative h-14 w-14">
              <Image
                src="/logo.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>

            <div>
              <h1 className="text-white font-black text-xl">EDDY</h1>

              <p className="text-red-500 text-xs tracking-[0.3em]">
                FITNESS CLUB
              </p>
            </div>
          </Link>

          {/* Desktop Links */}

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                text-white
                font-medium
                relative
                group
                "
              >
                {link.name}

                <span
                  className="
                absolute

                left-0

                -bottom-1

                h-[2px]

                w-0

                bg-red-500

                transition-all

                duration-300

                group-hover:w-full
                "
                />
              </Link>
            ))}
          </div>

          {/* CTA */}

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="
            px-7

            py-3

            rounded-full

            bg-red-600

            hover:bg-red-700

            text-white

            font-bold

            shadow-lg

            shadow-red-600/30

            transition

            hover:scale-105
            "
            >
              Join Now
            </Link>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
          md:hidden

          text-white
          "
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            className="
        md:hidden

        bg-black/95

        backdrop-blur-xl

        border-t

        border-white/10
        "
          >
            <div className="flex flex-col px-6 py-8 gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                text-white

                text-xl

                font-semibold

                hover:text-red-500

                transition
                "
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                className="
            mt-4

            bg-red-600

            py-4

            rounded-full

            text-center

            font-bold

            text-white
            "
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
