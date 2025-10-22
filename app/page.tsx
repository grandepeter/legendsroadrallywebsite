"use client";

/**
 * Legends Road Rally Landing Page
 *
 * This is the main landing page for the Legends Road Rally website. It features
 * all the key sections including hero, about, trip details, gallery, pricing,
 * and contact information. The page uses a forest green and gold color scheme
 * to create an adventurous and historical feel appropriate for a youth road trip
 * experience focused on church history and adventure.
 */

import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TourScheduleAccordion from "./components/TourScheduleAccordion";

export default function Home() {
  // State to track which FAQ dropdown is currently open
  // Only one dropdown can be open at a time (accordion behavior)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // State for parallax effect - tracks scroll position
  const [scrollY, setScrollY] = useState(0);

  // State to track if device is mobile (for performance optimization)
  const [isMobile, setIsMobile] = useState(false);

  // Structured data for search engines (JSON-LD format)
  // This helps Google understand what your business does and display rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Legends Road Rally",
    description:
      "Join the ultimate 10-day church history adventure! Travel from Niagara Falls to Nauvoo with peers ages 14-25. Visit Sacred Grove, Kirtland Temple, Carthage Jail & more.",
    url: "https://legends-road.com",
    image: "https://legends-road.com/legendsroadlogo.PNG",
    logo: "https://legends-road.com/legendsroadlogo.PNG",
    telephone: "+1-703-624-1947",
    email: "info@legends-road.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Legends Road Rally Tour 1",
        description: "10-day church history tour from Niagara Falls to Nauvoo",
        price: "1875",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        validFrom: "2026-06-16",
        validThrough: "2026-06-25",
        category: "Youth Church History Tour",
      },
      {
        "@type": "Offer",
        name: "Legends Road Rally Tour 2",
        description: "10-day church history tour from Niagara Falls to Nauvoo",
        price: "1875",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        validFrom: "2026-07-07",
        validThrough: "2026-07-16",
        category: "Youth Church History Tour",
      },
    ],
    touristType: "Youth (Ages 14-25)",
    isAccessibleForFree: false,
    publicAccess: false,
    slogan: "10-DAY, 9-NIGHT ADVENTURE THAT WILL CHANGE YOUR LIFE!",
  };

  // Function to handle FAQ dropdown clicks
  const toggleFaq = (index: number) => {
    // If clicking the same FAQ that's already open, close it
    // Otherwise, open the clicked FAQ and close any others
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Effect to detect mobile devices and set up parallax scrolling
  useEffect(() => {
    // Check if device is mobile based on screen width and user agent
    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(isMobileDevice);
    };

    // Initial check
    checkMobile();

    // Only set up parallax scrolling on desktop devices for performance
    if (!isMobile) {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      // Add scroll event listener with passive option for better performance
      window.addEventListener("scroll", handleScroll, { passive: true });

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile]);

  return (
    <div id="top" className="min-h-screen">
      {/* Structured Data for Search Engines */}
      {/* This JSON-LD script helps Google understand your business and display rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Fixed Header Component */}
      <Header />

      {/* Add padding to compensate for fixed header */}
      <div className="pt-8">
        {/* Hero Section - Full Width Background Image with Parallax */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Full-width background image with parallax effect */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 w-full h-[120%]"
              style={{
                transform: isMobile ? "none" : `translateY(${scrollY * 0.5}px)`,
                transition: isMobile ? "none" : "transform 0.1s ease-out",
              }}
            >
              <Image
                src="/Legends Top 10/IMG_8420.jpg"
                alt="LDS youth group on Legends Road Rally church history tour - visiting sacred sites and creating lasting memories"
                fill
                priority
                sizes="100vw"
                className="object-cover"
                quality={85}
              />
            </div>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            {/* Main Title */}
            <h1
              className="text-[3.25rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 leading-none"
              style={{
                fontFamily:
                  "var(--font-brice), ui-sans-serif, system-ui, -apple-system",
              }}
            >
              LEGENDS ROAD RALLY
            </h1>

            {/* Tagline */}
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-10 max-w-5xl mx-auto">
              <p
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight"
                style={{
                  fontFamily:
                    "var(--font-brice), ui-sans-serif, system-ui, -apple-system",
                }}
              >
                10-DAY, 9-NIGHT ADVENTURE
                <br />
                THAT WILL CHANGE
                <br />
                YOUR LIFE!
              </p>

              <p className="text-lg sm:text-xl text-[var(--legends-cream)] mb-8 opacity-95 leading-relaxed max-w-4xl mx-auto">
                From Niagara Falls to Sacred Grove, Kirtland Temple, Chicago,
                Nauvoo, Carthage & Liberty Jail. Discover the stories of early
                Saints and pioneers as you embark on an unforgettable journey
                across America with your peers.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center">
                <a
                  href="#reserve"
                  className="bg-[var(--legends-gold)] text-[var(--legends-dark-black)] px-8 py-4 rounded-xl font-bold text-xl hover:bg-[var(--legends-cream)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  RESERVE YOUR SPOT NOW!
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trip Dates Section */}
        <section
          id="trip-dates"
          className="py-16 px-4 bg-[var(--legends-cream)] scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-4xl font-bold text-[var(--legends-dark-black)] mb-12 text-center font-mono"
              style={{
                fontFamily:
                  "var(--font-brice), ui-sans-serif, system-ui, -apple-system",
              }}
            >
              NEXT TRIP DATES
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tour 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-[var(--legends-gold)]">
                <h3 className="text-2xl font-bold text-[var(--legends-dark-black)] mb-4 font-mono">
                  TOUR 1: JUNE 16-25, 2026
                </h3>
                <ul className="space-y-3 text-[var(--legends-dark-black)]">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Ages 14-25
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    First come - First served
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Arrive in Buffalo, NY
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Depart from Kansas City
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Travel in groups of 21
                  </li>
                </ul>
              </div>

              {/* Tour 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-[var(--legends-gold)]">
                <h3 className="text-2xl font-bold text-[var(--legends-dark-black)] mb-4 font-mono">
                  TOUR 2: JULY 7-16, 2026
                </h3>
                <ul className="space-y-3 text-[var(--legends-dark-black)]">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Ages 14-25
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    First come - First served
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Arrive in Buffalo, NY
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Depart from Kansas City
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Travel in groups of 21
                  </li>
                </ul>
              </div>
            </div>

            {/* Tour Schedule - Interactive Accordion Component */}
            <TourScheduleAccordion />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 px-4 bg-gradient-to-br from-[var(--legends-black)] via-[var(--legends-light-black)] to-[var(--legends-dark-black)] scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-4xl font-bold text-[var(--legends-gold)] mb-12 text-center font-mono"
              style={{
                fontFamily:
                  "var(--font-brice), ui-sans-serif, system-ui, -apple-system",
              }}
            >
              ABOUT THE EXPERIENCE
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center pb-12 sm:pb-0 md:pb-0">
              <div className="text-[var(--legends-cream)]">
                <p className="text-xl mb-6 leading-relaxed">
                  Experience the adventure of a lifetime as you trace the
                  footsteps of pioneers and early Saints across America. This
                  isn&apos;t just a road trip— it&apos;s a transformative
                  journey that will strengthen your faith, build lasting
                  friendships, and create memories that will last forever.
                </p>
                <p className="text-lg mb-6 leading-relaxed opacity-90">
                  Each day brings new discoveries, from the natural wonder of
                  Niagara Falls to the sacred sites where our church was
                  restored. Travel with your peers in comfortable vehicles, stay
                  in quality accommodations, and experience America&apos;s rich
                  history firsthand.
                </p>
                <p className="text-lg mb-6 leading-relaxed opacity-90">
                  Led by experienced guides who are passionate about church
                  history and youth ministry, this adventure combines spiritual
                  growth with pure fun and excitement.
                </p>
              </div>

              {/* Gallery with actual photos */}
              <div
                className="grid grid-cols-2 gap-4 pb-8 sm:pb-0 md:pb-0"
                style={{ minHeight: "fit-content" }}
              >
                <div className="bg-gradient-to-r from-[var(--legends-gold)] to-[var(--legends-cream)] rounded-xl p-2 aspect-square mb-2 sm:mb-0 md:mb-0">
                  <Image
                    src="/Legends Top 10/Picture26.png"
                    alt="LDS youth group visiting church history sites during Legends Road Rally tour"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <div className="bg-gradient-to-r from-[var(--legends-gold)] to-[var(--legends-cream)] rounded-xl p-2 aspect-square mb-2 sm:mb-0 md:mb-0">
                  <Image
                    src="/Legends Top 10/Picture5.png"
                    alt="Young adults exploring Sacred Grove and church history sites on Legends Road Rally"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <div className="bg-gradient-to-r from-[var(--legends-gold)] to-[var(--legends-cream)] rounded-xl p-2 aspect-square mb-2 sm:mb-0 md:mb-0">
                  <Image
                    src="/Legends Top 10/Picture22.png"
                    alt="Youth group at Kirtland Temple during church history road trip"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <div className="bg-gradient-to-r from-[var(--legends-gold)] to-[var(--legends-cream)] rounded-xl p-2 aspect-square mb-2 sm:mb-0 md:mb-0">
                  <Image
                    src="/Legends Top 10/IMG_8421.jpg"
                    alt="LDS youth visiting Nauvoo Temple and historic sites on Legends Road Rally"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 px-4 bg-[var(--legends-cream)]">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-4xl font-bold text-[var(--legends-dark-black)] mb-12 text-center font-mono"
              style={{
                fontFamily:
                  "var(--font-brice), ui-sans-serif, system-ui, -apple-system",
              }}
            >
              WHAT&apos;S INCLUDED
            </h2>

            <div className="bg-white rounded-2xl p-10 shadow-xl mx-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Transportation */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-[var(--legends-gold)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="text-[var(--legends-dark-black)] text-4xl">
                      🚌
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-black)] mb-4">
                    Transportation
                  </h3>
                  <p className="text-[var(--legends-dark-black)] mb-2">
                    Comfortable vehicles for the entire journey
                  </p>
                </div>

                {/* Lodging */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-[var(--legends-gold)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="text-[var(--legends-dark-black)] text-4xl">
                      🏠
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-black)] mb-4">
                    Lodging
                  </h3>
                  <p className="text-[var(--legends-dark-black)] mb-2">
                    Quality accommodations throughout the trip
                  </p>
                </div>

                {/* All Meals & Snacks */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-[var(--legends-gold)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="text-[var(--legends-dark-black)] text-4xl">
                      🍽️
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-black)] mb-4">
                    All Meals & Snacks
                  </h3>
                  <p className="text-[var(--legends-dark-black)] mb-2">
                    Delicious food to fuel your adventure
                  </p>
                </div>

                {/* Experienced Guides */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-[var(--legends-gold)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="text-[var(--legends-dark-black)] text-4xl">
                      👥
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-black)] mb-4">
                    Experienced Guides
                  </h3>
                  <p className="text-[var(--legends-dark-black)] mb-2">
                    Knowledgeable leaders passionate about the journey
                  </p>
                </div>

                {/* T-Shirts */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-[var(--legends-gold)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="text-[var(--legends-dark-black)] text-4xl">
                      👕
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-black)] mb-4">
                    T-Shirts
                  </h3>
                  <p className="text-[var(--legends-dark-black)] mb-2">
                    Commemorative gear to remember your trip
                  </p>
                </div>

                {/* Plenty of Entertainment */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-[var(--legends-gold)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="text-[var(--legends-dark-black)] text-4xl">
                      🎉
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-black)] mb-4">
                    Plenty of Entertainment
                  </h3>
                  <p className="text-[var(--legends-dark-black)] mb-2">
                    Fun activities and games throughout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="reserve"
          className="py-16 px-4 bg-gradient-to-r from-[var(--legends-dark-black)] via-[var(--legends-black)] to-[var(--legends-light-black)] scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2
              className="text-4xl font-bold text-[var(--legends-gold)] mb-8 font-mono"
              style={{
                fontFamily:
                  "var(--font-brice), ui-sans-serif, system-ui, -apple-system",
              }}
            >
              PRICE
            </h2>

            <div className="mb-12">
              <div className="text-8xl font-bold text-[var(--legends-cream)] mb-4">
                $1,875
              </div>
              <div className="text-xl text-[var(--legends-cream)] opacity-80">
                AIRFARE NOT INCLUDED
              </div>
              <div className="text-2xl font-bold text-[var(--legends-gold)] mt-6">
                $1,675 for returned missionaries who wish to help out as
                mentors.
              </div>
            </div>

            <div className="mb-12">
              <div className="text-2xl font-bold text-[var(--legends-gold)] mb-6">
                RESERVE YOUR SPOT NOW!
              </div>
              <div className="text-lg text-[var(--legends-cream)] opacity-90 mb-8">
                $100 NON-REFUNDABLE DEPOSIT REQUIRED
              </div>

              <a
                href="#contact"
                className="inline-block bg-[var(--legends-gold)] text-[var(--legends-dark-black)] px-10 py-5 rounded-xl font-bold text-xl hover:bg-[var(--legends-cream)] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                GET STARTED TODAY
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 px-4 bg-[var(--legends-cream)] scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-4xl font-bold text-[var(--legends-dark-black)] mb-12 text-center font-mono"
              style={{
                fontFamily:
                  "var(--font-brice), ui-sans-serif, system-ui, -apple-system",
              }}
            >
              CONTACT US
            </h2>

            <div className="bg-white rounded-2xl p-10 shadow-xl mx-4">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--legends-dark-black)] mb-6">
                    Get In Touch
                  </h3>
                  <p className="text-[var(--legends-dark-black)] mb-6 text-lg leading-relaxed">
                    Ready to embark on the adventure of a lifetime? Contact us
                    to reserve your spot or ask any questions about our upcoming
                    trips.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-[var(--legends-gold)] rounded-full flex items-center justify-center mr-4">
                        <span className="text-[var(--legends-dark-black)] text-sm">
                          📧
                        </span>
                      </span>
                      <span className="text-[var(--legends-dark-black)] font-semibold">
                        info@legends-road.com
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-[var(--legends-gold)] rounded-full flex items-center justify-center mr-4">
                        <span className="text-[var(--legends-dark-black)] text-sm">
                          📞
                        </span>
                      </span>
                      <span className="text-[var(--legends-dark-black)] font-semibold">
                        +1-703-624-1947
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-[var(--legends-gold)] rounded-full flex items-center justify-center mr-4">
                        <span className="text-[var(--legends-dark-black)] text-sm">
                          🏢
                        </span>
                      </span>
                      <span className="text-[var(--legends-dark-black)] font-semibold">
                        Legends Road LLC
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--legends-gold)] rounded-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-[var(--legends-dark-black)] rounded-full flex items-center justify-center p-2">
                      <Image
                        src="/legendsroadlogo.PNG"
                        alt="Legends Road Rally Logo - LDS Youth Church History Tours"
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[var(--legends-dark-black)] font-bold text-lg mb-2">
                      Ready to Contact Us?
                    </p>
                    <p className="text-[var(--legends-dark-black)] text-sm opacity-75">
                      Send us an email or give us a call today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-16 px-4 bg-gradient-to-br from-[var(--legends-dark-black)] via-[var(--legends-black)] to-[var(--legends-light-black)] scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-4xl font-bold text-[var(--legends-gold)] mb-12 text-center font-mono"
              style={{
                fontFamily:
                  "var(--font-brice), ui-sans-serif, system-ui, -apple-system",
              }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="bg-white rounded-2xl p-10 shadow-xl mx-4">
              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(0)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  >
                    <h3 className="text-xl font-bold text-[var(--legends-dark-black)]">
                      What age group can participate?
                    </h3>
                    <span
                      className={`text-xl font-bold transition-transform duration-200 ${
                        openFaqIndex === 0 ? "rotate-90" : ""
                      }`}
                    >
                      ›
                    </span>
                  </button>
                  {openFaqIndex === 0 && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-[var(--legends-dark-black)]">
                        Our trips are designed for youth ages 14-25 who are
                        members of The Church of Jesus Christ of Latter-day
                        Saints.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(1)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  >
                    <h3 className="text-xl font-bold text-[var(--legends-dark-black)]">
                      How many people are in each group?
                    </h3>
                    <span
                      className={`text-xl font-bold transition-transform duration-200 ${
                        openFaqIndex === 1 ? "rotate-90" : ""
                      }`}
                    >
                      ›
                    </span>
                  </button>
                  {openFaqIndex === 1 && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-[var(--legends-dark-black)]">
                        Each group consists of 21 participants, ensuring
                        personal attention and meaningful connections throughout
                        the journey.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 3 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  >
                    <h3 className="text-xl font-bold text-[var(--legends-dark-black)]">
                      What is included in the tour price?
                    </h3>
                    <span
                      className={`text-xl font-bold transition-transform duration-200 ${
                        openFaqIndex === 2 ? "rotate-90" : ""
                      }`}
                    >
                      ›
                    </span>
                  </button>
                  {openFaqIndex === 2 && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-[var(--legends-dark-black)]">
                        The $1,875 price includes transportation, lodging, all
                        meals and snacks, experienced guides, t-shirts, and
                        entertainment. Airfare to Buffalo, NY and from Kansas
                        City is not included.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 4 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(3)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  >
                    <h3 className="text-xl font-bold text-[var(--legends-dark-black)]">
                      How do I reserve my spot?
                    </h3>
                    <span
                      className={`text-xl font-bold transition-transform duration-200 ${
                        openFaqIndex === 3 ? "rotate-90" : ""
                      }`}
                    >
                      ›
                    </span>
                  </button>
                  {openFaqIndex === 3 && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-[var(--legends-dark-black)]">
                        Contact us at info@legends-road.com or call
                        +1-703-624-1947 to secure your place with a $100
                        non-refundable deposit.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 5 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(4)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  >
                    <h3 className="text-xl font-bold text-[var(--legends-dark-black)]">
                      Are there any special opportunities or discounts
                      available?
                    </h3>
                    <span
                      className={`text-xl font-bold transition-transform duration-200 ${
                        openFaqIndex === 4 ? "rotate-90" : ""
                      }`}
                    >
                      ›
                    </span>
                  </button>
                  {openFaqIndex === 4 && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-[var(--legends-dark-black)]">
                        Discounts available for returned missionaries who are
                        interested in helping as mentors. We have a few spots
                        open for drivers (over the age of 25) if interested.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-gradient-to-t from-[var(--legends-dark-black)] to-[var(--legends-black)] border-t-2 border-[var(--legends-gold)]">
          <div className="max-w-7xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/legendsroadlogo.PNG"
                alt="Legends Road Rally Logo - LDS Youth Church History Tours"
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-[var(--legends-gold)] font-mono">
                LEGENDS ROAD RALLY
              </h3>
            </div>
            <p className="text-[var(--legends-cream)] opacity-80 mb-4">
              © 2025 Legends Road LLC. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 text-[var(--legends-cream)]">
              <span>info@legends-road.com</span>
              <span>•</span>
              <span>+1-703-624-1947</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
