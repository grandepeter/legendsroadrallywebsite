import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { brice } from "./fonts";
import AOSProvider from "./components/AOSProvider";
import Script from "next/script";
import PerformanceMonitor from "./components/PerformanceMonitor";

// Optimize font loading with display swap for better performance
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves loading performance
  preload: true, // Preload critical fonts
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Improves loading performance
  preload: true, // Preload critical fonts
});

export const metadata: Metadata = {
  // Primary title and description for search engines
  title: "Legends Road Rally - LDS Youth Church History Tours | Ages 14-25",
  description:
    "Join the ultimate 10-day church history adventure! Travel from Niagara Falls to Nauvoo with peers ages 14-25. Visit Sacred Grove, Kirtland Temple, Carthage Jail & more. Tours June 16-25 & July 7-16, 2026. Only $1,875 - Reserve your spot today!",

  // Additional SEO metadata
  keywords: [
    "LDS youth tours",
    "church history road trip",
    "Sacred Grove tour",
    "Kirtland Temple visit",
    "Nauvoo youth trip",
    "Carthage Jail tour",
    "LDS youth ages 14-25",
    "church history adventure",
    "Niagara Falls to Nauvoo",
    "Legends Road Rally",
    "Mormon youth tours",
    "church history sites",
    "youth road trip",
    "LDS summer camp",
    "church history pilgrimage",
  ],

  // Open Graph tags for social media sharing (Facebook, Twitter, LinkedIn, etc.)
  openGraph: {
    title: "Legends Road Rally - LDS Youth Church History Tours",
    description:
      "Join the ultimate 10-day church history adventure! Travel from Niagara Falls to Nauvoo with peers ages 14-25. Visit Sacred Grove, Kirtland Temple, Carthage Jail & more.",
    url: "https://legends-road.com",
    siteName: "Legends Road Rally",
    images: [
      {
        url: "/Legends Top 10/IMG_8420.jpg",
        width: 1200,
        height: 630,
        alt: "LDS youth group on Legends Road Rally church history tour",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card metadata for better Twitter sharing
  twitter: {
    card: "summary_large_image",
    title: "Legends Road Rally - LDS Youth Church History Tours",
    description:
      "Join the ultimate 10-day church history adventure! Travel from Niagara Falls to Nauvoo with peers ages 14-25.",
    images: ["/Legends Top 10/IMG_8420.jpg"],
    creator: "@legendsroadrally",
  },

  // Additional metadata for better search engine understanding
  authors: [{ name: "Legends Road LLC" }],
  creator: "Legends Road LLC",
  publisher: "Legends Road LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Canonical URL to prevent duplicate content issues
  alternates: {
    canonical: "https://legends-road.com",
  },

  // Robots meta for search engine crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification tags (you'll need to add these when you get them from Google Search Console)
  verification: {
    google: "your-google-verification-code", // Replace with actual code from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={brice.variable}>
      <head>
        {/* Preload critical resources for faster loading */}
        <link
          rel="preload"
          href="/fonts/brice-black-condensed.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Critical CSS inline for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for immediate rendering */
              body { margin: 0; font-family: var(--font-geist-sans), system-ui, sans-serif; }
              .antialiased { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
              /* Prevent layout shift during font loading */
              .font-loading { visibility: hidden; }
              .font-loaded { visibility: visible; }
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Critical content loads immediately */}
        <AOSProvider>{children}</AOSProvider>

        {/* Performance monitoring component */}
        <PerformanceMonitor />

        {/* Defer non-critical scripts to improve initial page load */}
        <Script
          id="performance-monitoring"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring script (deferred)
              if (typeof window !== 'undefined' && 'performance' in window) {
                window.addEventListener('load', function() {
                  // Measure Core Web Vitals
                  const navigation = performance.getEntriesByType('navigation')[0];
                  const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                  
                  // Log performance metrics (only in development)
                  if (process.env.NODE_ENV === 'development') {
                    console.log('Page Load Time:', loadTime + 'ms');
                    console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart + 'ms');
                  }
                  
                  // Send to analytics in production (implement as needed)
                  if (process.env.NODE_ENV === 'production' && loadTime > 3000) {
                    // Alert if page takes longer than 3 seconds
                    console.warn('Page load time exceeded 3 seconds:', loadTime + 'ms');
                  }
                });
              }
            `,
          }}
        />

        {/* Defer AOS initialization until after page load */}
        <Script
          id="aos-deferred-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Defer AOS initialization for better performance
              if (typeof window !== 'undefined') {
                // Wait for page to be fully loaded before initializing AOS
                if (document.readyState === 'complete') {
                  // AOS will be initialized by AOSProvider component
                } else {
                  window.addEventListener('load', function() {
                    // Small delay to ensure smooth animations
                    setTimeout(function() {
                      if (window.AOS) {
                        window.AOS.refresh();
                      }
                    }, 100);
                  });
                }
              }
            `,
          }}
        />

        {/* Resource hints for better performance */}
        <Script
          id="resource-hints"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Preload next likely resources after page load
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  // Preload images that are likely to be viewed next
                  const imageUrls = [
                    '/Legends Top 10/IMG_8421.jpg',
                    '/Legends Top 10/20250711_121806.jpg',
                    '/Legends Top 10/20250711_222045.jpg'
                  ];
                  
                  imageUrls.forEach(function(url) {
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.as = 'image';
                    link.href = url;
                    document.head.appendChild(link);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
