import FaqSection from '@/components/Faq'
import { Metadata } from 'next'

const baseUrl = "https://lalunawatersportscenter.com";
export const metadata: Metadata = {
  title: "Water Sports Bentota FAQ & Guidelines | LaLuna Water Sports Bentota",
  description:
    "Find answers to popular questions about water sports in Bentota, Aluthgama & Mirissa in Sri Lanka. Learn about jet ski safety, seasonal timing, group pricing, and non-swimmer activities.",
  keywords: [
    "bentota water sports price",
    "jet ski bentota rules",
    "best time for water sports bentota",
    "water sports sri lanka cost",
    "aluthgama water sports safety",
    "best time for water sports Mirissa",
    "LaLuna water sports center, Bentota",
  ],
  alternates: {
    canonical: `${baseUrl}/faq/`,
  },
  openGraph: {
    title: "Frequently Asked Questions | LaLuna Water Sports Center Bentota",
    description:
      "Everything you need to know about planning your water sports adventure on the Bentota River & ocean coast.",
    url: `${baseUrl}/faq/`,
    siteName: "LaLuna Water Sports Center",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpeg`,
        secureUrl: `${baseUrl}/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: "LaLuna Water Sports Center Bentota FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | LaLuna Water Sports Bentota",
    description:
      "Everything you need to know about jet skiing, banana boating, river safaris, safety, and pricing in Bentota.",
    images: [`${baseUrl}/og-image.jpeg`],
  },
};

const FaqPage = () => {

  // FAQ Schema JSON-LD for Google Rich Results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best time for water sports in Bentota?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best season for ocean water sports in Bentota is from October to April when sea conditions are calm. River activities such as jet skiing and mangrove safaris are available year-round."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to know how to swim to do water sports?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, non-swimmers can safely participate in most activities including jet skiing, banana boat rides, and river safaris. Life jackets and certified safety instructors are provided for all guests."
        }
      },
      {
        "@type": "Question",
        "name": "Where is LaLuna Water Sports Center located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are located at No.06 Kaluwamodara, Aluthgama, Bentota, Sri Lanka, right on the Bentota River bank with easy access to both the river and ocean."
        }
      },
      {
        "@type": "Question",
        "name": "Are group discounts available for water sports packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer customized family and group packages with special pricing. Contact us directly via phone or WhatsApp to arrange group bookings."
        }
      }
    ]
  };

  return (
      <main className="py-12 max-w-4xl mx-auto px-4">
        {/* Injecting JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 !font-sans">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-center mb-10">
          Everything you need to know about planning your water sports adventure on the Bentota River & ocean coast.
        </p>

        <div className="space-y-6">
          <FaqSection />
        </div>
      </main>
  )
}

export default FaqPage