/**
 * Header Component for Legends Road Rally Website
 *
 * This component provides a fixed navigation header that appears at the top of all pages.
 * It includes a dropdown menu with all main navigation links and uses the brand&apos;s
 * forest green background with gold accents. The header stays fixed when scrolling
 * for easy access to navigation from anywhere on the page.
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

export default function Header() {
  // State to track if dropdown menu is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[var(--legends-dark-black)] via-[var(--legends-black)] to-[var(--legends-light-black)] shadow-lg border-b-2 border-[var(--legends-gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex items-center gap-3">
            <Image
              src="/legendsroadlogo.PNG"
              alt="Legends Road Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <h1
              className="text-[1.79rem] leading-none font-bold text-[var(--legends-gold)] font-mono [font-variation-settings:normal] inline-block translate-y-[2px]"
              style={{
                fontFamily:
                  "var(--font-brice), ui-sans-serif, system-ui, -apple-system",
              }}
            >
              LEGENDS ROAD LLC
            </h1>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Move primary CTA to the beginning and vertically center all items */}
            <a
              href="#reserve"
              className="inline-flex items-center h-10 bg-[var(--legends-gold)] text-[var(--legends-dark-black)] px-4 rounded-lg font-bold hover:bg-[var(--legends-cream)] transition-colors duration-200"
            >
              Reserve Your Spot Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center h-10 px-2 text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#trip-dates"
              className="inline-flex items-center h-10 px-2 text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium"
            >
              Next Trip Dates
            </a>

            <a
              href="#faq"
              className="inline-flex items-center h-10 px-2 text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="inline-flex items-center h-10 px-2 text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Dropdown Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label={isDropdownOpen ? "Close menu" : "Open menu"}
              className="flex items-center justify-center w-10 h-10 text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200"
            >
              {isDropdownOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="md:hidden bg-gradient-to-r from-[var(--legends-black)] to-[var(--legends-light-black)] border-t border-[var(--legends-gold)] py-4">
            <nav className="flex flex-col space-y-3">
              {/* Move primary CTA to the top of the mobile list as well */}
              <a
                href="#reserve"
                className="bg-[var(--legends-gold)] text-[var(--legends-dark-black)] px-4 py-2 rounded-lg font-bold hover:bg-[var(--legends-cream)] transition-colors duration-200 text-center mx-4"
                onClick={() => setIsDropdownOpen(false)}
              >
                Reserve Your Spot Now
              </a>
              <a
                href="#about"
                className="text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium py-2"
                onClick={() => setIsDropdownOpen(false)}
              >
                About
              </a>
              <a
                href="#trip-dates"
                className="text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium py-2"
                onClick={() => setIsDropdownOpen(false)}
              >
                Next Trip Dates
              </a>

              <a
                href="#faq"
                className="text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium py-2"
                onClick={() => setIsDropdownOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium py-2"
                onClick={() => setIsDropdownOpen(false)}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
