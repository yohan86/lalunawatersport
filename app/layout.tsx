import type { Metadata } from "next";
import { Poppins, Permanent_Marker, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import NextTopLoader from "nextjs-toploader";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import WhatsAppButton from "@/components/WhatsappButton";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  weight: ["400"],
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lalunawatersportscenter.com"),
  title: "Water Sports Bentota & Sri Lanka | LaLuna Water Sports Center",
  description:
    "Experience top-rated water sports in Bentota & Aluthgama, Sri Lanka. Jet skiing, banana boating, tube rides & river safaris near Mirissa. Book your adventure!",
   // ... your other metadata properties
  verification: {
    google: "ZXLcP5IAt8zB6ntK4h270cYSFb-zztTjESIjcyPhOf4",
  },
  keywords: [
    "water sports center",
    "water sports bentota",
    "water sports sri lanka",
    "water sports aluthgama",
    "water sports mirissa",
    "jet ski bentota",
    "bentota river safari",
    "Bentota adventure sports",
    "banana boat rides",
    "tube rides",
    "river safaris",
    "water sports packages",
    "water sports activities",
    "water sports experiences",
    "water sports adventures",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "LaLuna Water Sports Center - Bentota, Sri Lanka",
    description:
      "The premier water sports adventure center on Bentota River & Beach. Jet skis, banana boats, wakeboarding, and coastal safaris.",
    url: "https://lalunawatersportscenter.com",
    siteName: "LaLuna Water Sports Center",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `/og-image.jpeg`,
        secureUrl:`/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: "LaLuna Water Sports Center Bentota Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Sports Bentota | LaLuna Water Sports Center",
    description:
      "Experience top-rated water sports in Bentota, Sri Lanka.",
    images: [`/og-image.jpeg`],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${permanentMarker.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <NextTopLoader
          color="#059669" // Match your brand green (#site-green)
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false} // Keeps it clean without intrusive spinners
          easing="ease"
          speed={200}
        />
        <SmoothScroll>
        <Header />
        {children}
        <Footer />
        </SmoothScroll>
        
        
        <WhatsAppButton />
        <GoogleAnalytics gaId="G-2G71T8M55M" />
      </body>
    </html>
  );

}
