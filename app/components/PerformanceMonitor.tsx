"use client";

/**
 * Performance Monitor Component
 *
 * This component monitors Core Web Vitals and page performance metrics
 * to help ensure the website meets the sub-3-second load time target.
 * It tracks metrics like LCP, FID, CLS, and overall page load times.
 *
 * Features:
 * - Monitors Core Web Vitals (LCP, FID, CLS)
 * - Tracks page load performance
 * - Reports performance issues
 * - Provides development insights
 */

import { useEffect } from "react";

interface PerformanceMetrics {
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  loadTime?: number; // Page load time
  domContentLoaded?: number; // DOM content loaded time
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return;

    const metrics: PerformanceMetrics = {};

    // Function to measure Core Web Vitals
    const measureCoreWebVitals = () => {
      // Measure Largest Contentful Paint (LCP)
      if ("PerformanceObserver" in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.lcp = lastEntry.startTime;

          if (process.env.NODE_ENV === "development") {
            console.log("LCP (Largest Contentful Paint):", metrics.lcp + "ms");
          }
        });

        try {
          lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
        } catch {
          // LCP not supported in this browser
        }
      }

      // Measure First Input Delay (FID)
      if ("PerformanceObserver" in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEntry & {
              processingStart: number;
            };
            metrics.fid = fidEntry.processingStart - fidEntry.startTime;

            if (process.env.NODE_ENV === "development") {
              console.log("FID (First Input Delay):", metrics.fid + "ms");
            }
          });
        });

        try {
          fidObserver.observe({ entryTypes: ["first-input"] });
        } catch {
          // FID not supported in this browser
        }
      }

      // Measure Cumulative Layout Shift (CLS)
      if ("PerformanceObserver" in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const clsEntry = entry as PerformanceEntry & {
              hadRecentInput: boolean;
              value: number;
            };
            if (!clsEntry.hadRecentInput) {
              clsValue += clsEntry.value;
            }
          });
          metrics.cls = clsValue;

          if (process.env.NODE_ENV === "development") {
            console.log("CLS (Cumulative Layout Shift):", metrics.cls);
          }
        });

        try {
          clsObserver.observe({ entryTypes: ["layout-shift"] });
        } catch {
          // CLS not supported in this browser
        }
      }
    };

    // Function to measure page load performance
    const measurePageLoadPerformance = () => {
      window.addEventListener("load", () => {
        const navigation = performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;

        if (navigation) {
          metrics.loadTime =
            navigation.loadEventEnd - navigation.loadEventStart;
          metrics.domContentLoaded =
            navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart;

          if (process.env.NODE_ENV === "development") {
            console.log("Page Load Time:", metrics.loadTime + "ms");
            console.log("DOM Content Loaded:", metrics.domContentLoaded + "ms");
            console.log(
              "Time to First Byte:",
              navigation.responseStart - navigation.requestStart + "ms"
            );
            console.log(
              "DOM Interactive:",
              navigation.domInteractive - navigation.fetchStart + "ms"
            );
          }

          // Check if page load time exceeds 3 seconds
          if (metrics.loadTime && metrics.loadTime > 3000) {
            console.warn(
              "⚠️ Page load time exceeded 3 seconds:",
              metrics.loadTime + "ms"
            );

            // In production, you might want to send this to analytics
            if (process.env.NODE_ENV === "production") {
              // Example: Send to analytics service
              // analytics.track('performance_issue', { loadTime: metrics.loadTime });
            }
          }

          // Check Core Web Vitals thresholds
          if (metrics.lcp && metrics.lcp > 2500) {
            console.warn("⚠️ LCP exceeds 2.5s:", metrics.lcp + "ms");
          }

          if (metrics.fid && metrics.fid > 100) {
            console.warn("⚠️ FID exceeds 100ms:", metrics.fid + "ms");
          }

          if (metrics.cls && metrics.cls > 0.1) {
            console.warn("⚠️ CLS exceeds 0.1:", metrics.cls);
          }
        }
      });
    };

    // Function to measure resource loading performance
    const measureResourcePerformance = () => {
      if ("PerformanceObserver" in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
            // Log slow resources (over 1 second)
            if (entry.duration > 1000) {
              if (process.env.NODE_ENV === "development") {
                console.warn(
                  "Slow resource:",
                  entry.name,
                  entry.duration + "ms"
                );
              }
            }
          });
        });

        try {
          resourceObserver.observe({ entryTypes: ["resource"] });
        } catch {
          // Resource timing not supported
        }
      }
    };

    // Initialize performance monitoring
    measureCoreWebVitals();
    measurePageLoadPerformance();
    measureResourcePerformance();

    // Cleanup function
    return () => {
      // Cleanup any observers if needed
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}
