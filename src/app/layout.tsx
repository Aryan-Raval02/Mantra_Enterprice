import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mantra Enterprise | Premium ISO 9001 & CE Certified LED & Solar Lighting Manufacturer",
  description:
    "Mantra Enterprise (Est. 2011, Surat, Gujarat) is a premier ISO 9001:2008 & CE Certified manufacturer of LED COB lights, IP65 outdoor landscape bollards, linear magnetic track lights, and solar luminaires.",
  keywords: [
    "Mantra Enterprise",
    "LED Lighting Manufacturer Surat",
    "Solar Luminaire India",
    "IP65 Outdoor Bollard Light",
    "LED High Bay Light",
    "Magnetic Track Light",
    "ISO 9001:2008 Certified LED",
    "CE Certified Lighting",
  ],
  authors: [{ name: "Mantra Enterprise" }],
  openGraph: {
    title: "Mantra Enterprise | Sustainable LED & Solar Lighting",
    description:
      "ISO & CE Certified manufacturers of premium LED and Solar solutions since 2011 in Surat, Gujarat. Tailormade for industrial, commercial, and landscape architecture.",
    url: "https://www.mantraled.in/",
    siteName: "Mantra Enterprise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#07080a] text-slate-100 antialiased selection:bg-[#e2ff54] selection:text-zinc-950">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
