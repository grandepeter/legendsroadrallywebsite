"use client";

/**
 * HeroCarousel Component
 *
 * This client-side component renders a simple, auto-rotating image carousel
 * for the hero section. It cycles through a provided list of image paths
 * (served from `/public`) and fades between them on a timer. The container
 * preserves a square aspect ratio to match the existing design and keeps
 * the rounded/gold frame aesthetic from the placeholder.
 */

import { useEffect, useState } from "react";
import Image from "next/image";

type HeroCarouselProps = {
  images: string[];
  /**
   * Time in milliseconds each image is shown before transitioning
   */
  intervalMs?: number;
};

export default function HeroCarousel({
  images,
  intervalMs = 4000,
}: HeroCarouselProps) {
  // Guard against empty lists to avoid errors
  const safeImages = images && images.length > 0 ? images : ["/niagara1.jpg"];

  // Track the currently visible image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slide on an interval
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % safeImages.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, safeImages.length]);

  return (
    <div className="bg-gradient-to-r from-[var(--legends-gold)] to-[var(--legends-cream)] rounded-2xl p-2 sm:p-3 md:p-4 aspect-square shadow-2xl overflow-hidden w-full">
      {/*
        The inner container holds absolutely positioned images stacked on top of
        each other. We fade between them by toggling opacity. We use `Image` with
        `fill` and `object-cover` so each image fills the square nicely.
      */}
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        {safeImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Legends Road Rally hero image"
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* Small progress dots for context (accessible, non-interactive) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-[rgba(0,0,0,0.35)] px-3 py-1 rounded-full">
          {safeImages.map((_, index) => (
            <span
              key={index}
              aria-hidden
              className={`block w-2.5 h-2.5 rounded-full ${
                index === currentIndex
                  ? "bg-[var(--legends-gold)]"
                  : "bg-[rgba(255,255,255,0.6)]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
