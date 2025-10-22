"use client";

/**
 * AOS Provider Component
 *
 * This component initializes the AOS (Animate On Scroll) library for the entire application.
 * It wraps all children components and provides smooth scroll-triggered animations throughout
 * the website. The configuration is optimized for performance with lightweight animations
 * that enhance user experience without impacting site speed.
 *
 * Performance optimizations:
 * - Lazy loads AOS library only when needed
 * - Defers initialization until after critical content loads
 * - Uses passive event listeners for better performance
 * - Disables animations on mobile for better performance
 */

import { useEffect } from "react";

interface AOSProviderProps {
  children: React.ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    // Check if user prefers reduced motion for accessibility
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check if device is mobile for performance optimization
    const isMobile =
      window.innerWidth < 768 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Skip AOS initialization if user prefers reduced motion or on mobile
    if (prefersReducedMotion || isMobile) {
      return;
    }

    // Dynamically import AOS library only when needed
    import("aos").then((AOS) => {
      // Initialize AOS with optimized settings for performance
      AOS.default.init({
        // Animation duration - kept short for snappy feel
        duration: 600,

        // Animation easing - smooth and natural
        easing: "ease-out-cubic",

        // Delay before animation starts (in milliseconds)
        delay: 0,

        // Animation offset from trigger point
        offset: 100,

        // Animation anchor placement
        anchorPlacement: "top-bottom",

        // Disable animations on mobile for better performance
        disable: "mobile",

        // Only animate once (don't repeat on scroll back up)
        once: true,

        // Mirror animations for elements coming from different directions
        mirror: false,

        // Start animations after page is fully loaded for better performance
        startEvent: "load",

        // Use passive event listeners for better performance
        useClassNames: false,

        // Disable animations for users who prefer reduced motion
        disableMutationObserver: false,

        // Custom debounced function for scroll events
        debounceDelay: 50,

        // Custom throttle function for scroll events
        throttleDelay: 99,
      });

      // Refresh AOS when window is resized (with throttling for performance)
      let resizeTimeout: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          AOS.default.refresh();
        }, 150); // Throttle resize events
      };

      window.addEventListener("resize", handleResize, { passive: true });

      // Cleanup function to remove event listeners
      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(resizeTimeout);
        AOS.default.refresh();
      };
    });
  }, []);

  return <>{children}</>;
}
