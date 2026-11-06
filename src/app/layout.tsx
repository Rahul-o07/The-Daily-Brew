import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thedailybrew.example"),
  title: "The Daily Brew | Your Everyday Coffee Destination",
  description:
    "From freshly brewed coffee to delicious bites, discover your favourite spot to relax, recharge and reconnect at The Daily Brew.",
  keywords: [
    "The Daily Brew",
    "Café",
    "Coffee Shop",
    "Cappuccino",
    "Cold Coffee",
    "Sandwich",
    "Brownie",
    "Chennai Café",
  ],
  authors: [{ name: "The Daily Brew" }],
  openGraph: {
    title: "The Daily Brew | Your Everyday Coffee Destination",
    description:
      "From freshly brewed coffee to delicious bites, discover your favourite spot to relax, recharge and reconnect.",
    url: "https://thedailybrew.example",
    siteName: "The Daily Brew",
    images: [
      {
        url: "/images/01_hero_banner_clean.jpg",
        width: 768,
        height: 341,
        alt: "The Daily Brew - Your Everyday Coffee Destination",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/06_logo_clean.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#4B3025",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-darkText antialiased selection:bg-warmBeige selection:text-espresso">
        {children}
      </body>
    </html>
  );
}
