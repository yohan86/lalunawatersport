import AboutIntro from "@/components/AboutIntro";
import HeroSlider from "@/components/HeroSlider";
import HomeFaq from "@/components/HomeFaq";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const OurServices = dynamic(() => import("@/components/OurServices"));
const Packages = dynamic(()=> import("@/components/Packages"));
const StaticCTA = dynamic(()=> import("@/components/StaticCTA"));

const baseUrl = "https://lalunawatersportscenter.com";

export const metadata: Metadata = {
  title: "Water Sports Bentota | Jet Ski, Banana Boat & River Safari | LaLuna",
  description:
    "Experience top-rated water sports in Bentota, Sri Lanka. Certified jet ski rentals, calm river safaris, banana boat rides, wakeboarding, and custom family adventure packages on the Bentota River & Ocean.",
  keywords: [
    "Water sports Bentota",
    "LaLuna Water Sports Center",
    "Jet ski Bentota Sri Lanka",
    "Bentota river safari",
    "Water sports packages Sri Lanka",
    "Things to do in Bentota",
    "Bentota water sports center",
    "Water Sports Price in Bentota",
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Water Sports Bentota | LaLuna Water Sports Center",
    description:
      "The ultimate water sports hub on the Bentota River and Indian Ocean. Book certified jet skiing, river safaris, and activity packages with La Luna team.",
    url: baseUrl,
    siteName: "LaLuna Water Sports Center",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpeg`,
        secureUrl:`${baseUrl}/og-image.jpeg`,
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
    images: [`${baseUrl}/og-image.jpeg`],
  },
};


export default function Home() {

  // Homepage Graph JSON-LD Structured Data
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "LaLuna Water Sports Center",
        "description": "Premier Water Sports Center in Bentota, Sri Lanka",
        "publisher": {
          "@id": `${baseUrl}/#organization`,
        },
      },
      {
        "@type": "SportsActivityLocation",
        "@id": `${baseUrl}/#organization`,
        "name": "LaLuna Water Sports Center",
        "url": baseUrl,
        "image": `${baseUrl}/og-image.jpeg`,
        "telephone": "+94765504541",
        "priceRange": "$$",
        "description": "Premier water sports center in Bentota, Sri Lanka offering Jet Skiing, Banana Boat rides, River Safaris, Speedboats, and custom adventure packages.",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61591600229584"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 06, Kaluwamodara, Aluthgama",
          "addressLocality": "Bentota",
          "addressRegion": "Southern Province",
          "postalCode": "80500",
          "addressCountry": "LK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 6.4366495,
          "longitude": 79.995577
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        "url": baseUrl,
        "name": "Water Sports Bentota | Jet Ski, Banana Boat & River Safari | LaLuna",
        "description":
          "Experience top-rated water sports in Bentota, Sri Lanka. Certified jet ski rentals, calm river safaris, banana boat rides, wakeboarding, and custom family adventure packages on the Bentota River & Ocean.",
        "isPartOf": {
          "@id": `${baseUrl}/#website`,
        },
        "about": {
          "@id": `${baseUrl}/#organization`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What water sports activities are available in Bentota?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "At LaLuna Water Sports Center, we offer Jet Skiing, Banana Boat rides, Tube/Sofa rides, Water Skiing, Wakeboarding, Speedboat rides, Yacht Cruise Tours, Bentota River Safaris, and more than 15 water sports activities listed on our services page.",
            },
          },
          {
            "@type": "Question",
            "name": "Do I need swimming experience for water sports in Bentota?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "No prior swimming experience is required for most activities. We provide certified life jackets and expert instructors to ensure complete safety for all guests.",
            },
          },
          {
            "@type": "Question",
            "name": "Is hotel pick-up available for water sports packages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we arrange complimentary or organized hotel transfers for guests staying in Bentota, Beruwala, and Aluthgama.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the best season for water sports in Bentota, Sri Lanka?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The prime season for ocean water sports on the West Coast is from October to April. Bentota River activities are operational and suitable year-round.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <HeroSlider />
      <div className="wrapper-container">
          <AboutIntro />
          <OurServices />
          <Packages />
          <HomeFaq />
          <StaticCTA />
          <Testimonials />
      </div>
    </>
  );
}
