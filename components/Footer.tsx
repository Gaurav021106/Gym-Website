"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const InstagramIcon = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">

      {/* Glow */}
      <div className="absolute left-0 top-0 w-[350px] h-[350px] bg-red-600/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-4">

              <div className="relative w-16 h-16">

                <Image
                  src="/logo.png"
                  alt="Eddy Fitness"
                  fill
                  className="object-contain"
                />

              </div>

              <div>

                <h2 className="text-2xl font-black text-white">
                  EDDY
                </h2>

                <p className="text-red-500 tracking-[0.3em] text-sm">
                  FITNESS CLUB
                </p>

              </div>

            </div>

            <p className="text-gray-400 mt-8 leading-loose max-w-sm">
              Transform your body.
              Build discipline.
              Become the strongest version of yourself with Eddy Fitness Club.
            </p>

            <Link
              href="https://instagram.com/eddyfitnessclub"
              className="
              mt-8
              inline-flex
              items-center
              gap-3
              text-red-500
              font-semibold
              hover:gap-5
              transition-all
              "
            >

              <InstagramIcon className="w-5 h-5" />

              Follow On Instagram

              <ArrowUpRight className="w-5 h-5" />

            </Link>

          </div>



          {/* Quick Links */}

          <div>

            <h3 className="text-white text-2xl font-bold mb-8">

              Quick Links

            </h3>

            <div className="space-y-5">

              <Link
                href="/"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                Home
              </Link>

              <Link
                href="#about"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                About
              </Link>

              <Link
                href="#services"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                Services
              </Link>

              <Link
                href="#testimonials"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                Testimonials
              </Link>

              <Link
                href="/contact"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                Contact
              </Link>

            </div>

          </div>



          {/* Contact */}

          <div>

            <h3 className="text-white text-2xl font-bold mb-8">

              Contact

            </h3>

            <div className="space-y-8">

              <div className="flex gap-4">

                <Phone className="text-red-500 shrink-0" />

                <div>

                  <p className="text-gray-500 text-sm">

                    Call Us

                  </p>

                  <p className="text-white font-semibold">

                    +91 8410411868

                  </p>

                </div>

              </div>



              <div className="flex gap-4">

                <MapPin className="text-red-500 shrink-0" />

                <div>

                  <p className="text-gray-500 text-sm">

                    Location

                  </p>

                  <p className="text-white font-semibold">

                    Eddy Fitness Club

                  </p>

                </div>

              </div>



              <div className="flex gap-4">

                <InstagramIcon className="text-red-500 w-6 h-6 shrink-0" />

                <div>

                  <p className="text-gray-500 text-sm">

                    Instagram

                  </p>

                  <p className="text-white font-semibold">

                    @eddyfitnessclub

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* Bottom */}

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">

            © 2026 Eddy Fitness Club. All Rights Reserved.

          </p>

          <p className="text-gray-500 text-sm">

            Designed by

            <span className="text-red-500 font-semibold ml-2">

              NextPeak

            </span>

          </p>

        </div>

      </div>

    </footer>
  );
}