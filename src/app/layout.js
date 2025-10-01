import localFont from "next/font/local";
import "./globals.scss";

// Helvetica Neue - Main brand font
const helveticaNeue = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});

// Photograph Signature - Decorative font
const photographSignature = localFont({
  src: "../../public/fonts/Photograph-Signature.ttf",
  variable: "--font-photograph",
  weight: "400",
  display: "swap",
});

// Mohave - Supporting font
const mohave = localFont({
  src: [
    {
      path: "../../public/fonts/mohave-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/mohave-italic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-mohave",
  display: "swap",
});

export const metadata = {
  title: "UniSpirits",
  description: "A modern single-page website built with Next.js and SCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.variable} ${photographSignature.variable} ${mohave.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
