/**
 * Header Component for Legends Road Rally Website
 *
 * This component provides a fixed navigation header that appears at the top of all pages.
 * It includes a dropdown menu with all main navigation links and uses the brand's
 * forest green background with gold accents. The header stays fixed when scrolling
 * for easy access to navigation from anywhere on the page.
 */

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  // State to track if dropdown menu is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--legends-dark-green)] shadow-lg border-b-2 border-[var(--legends-gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-[var(--legends-gold)] font-mono">
              LEGENDS ROAD RALLY
            </h1>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#trip-dates"
              className="text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium"
            >
              Next Trip Dates
            </a>
            <a
              href="#reserve"
              className="bg-[var(--legends-gold)] text-[var(--legends-dark-green)] px-4 py-2 rounded-lg font-bold hover:bg-[var(--legends-cream)] transition-colors duration-200"
            >
              Reserve Your Spot Now
            </a>
            <a
              href="#swag"
              className="text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium"
            >
              Buy Swag
            </a>
            <a
              href="#faq"
              className="text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Dropdown Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200"
            >
              <span className="font-medium">Menu</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="md:hidden bg-[var(--legends-forest-green)] border-t border-[var(--legends-gold)] py-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="#about"
                className="text-[var(--Legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium py-2"
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
                href="#reserve"
                className="bg-[var(--legends-gold)] text-[var(--legends-dark-green)] px-4 py-2 rounded-lg font-bold hover:bg-[var(--legends-cream)] transition-colors duration-200 text-center mx-4"
                onClick={() => setIsDropdownOpen(false)}
              >
                Reserve Your Spot Now
              </a>
              <a
                href="#swag"
                className="text-[var(--legends-cream)] hover:text-[var(--legends-gold)] transition-colors duration-200 font-medium py-2"
                onClick={() => setIsDropdownOpen(false)}
              >
                Buy Swag
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
