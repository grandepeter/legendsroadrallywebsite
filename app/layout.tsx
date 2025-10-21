import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { brice } from "./fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        url: "/legendsroadlogo.PNG",
        width: 1200,
        height: 630,
        alt: "Legends Road Rally Logo - LDS Youth Church History Tours",
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
    images: ["/legendsroadlogo.PNG"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
