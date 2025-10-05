/**
 * Font registry for the app
 *
 * Exposes the Brice Black Condensed font via Next.js localFont so that
 * components can import and apply it selectively.
 */

import localFont from "next/font/local";

export const brice = localFont({
  src: [
    {
      path: "../public/fonts/brice-black-condensed.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-brice",
});
