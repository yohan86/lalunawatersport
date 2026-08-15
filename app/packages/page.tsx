import { Metadata } from "next";
import { PACKAGES_DATA } from "@/data/packages";
import PackageCard from "@/components/PackageCard";

const baseUrl = "https://lalunawatersportscenter.com";
export const metadata: Metadata = {
  title: "Bentota Water Sports Packages & Deals | LaLuna Bentota, Sri Lanka",
  description:
    "Explore top-rated water sports combo packages in Bentota, Sri Lanka. Enjoy Jet Skiing, Banana Boat, Tube Rides & Speedboats — Book Online Now!",
  keywords: [
    "Bentota water sports Services",
    "Jet ski rental Bentota",
    "Bentota river safari booking",
    "Banana boat ride Sri Lanka",
    "Wakeboarding Bentota",
    "Water activities Aluthgama",
    "LaLuna activity rates",
    "Fishing trips Bentota",
    "Bentota water sports packages",
    "Water sports combo deals Sri Lanka",
    "Water Sports price in Bentota",
  ],
  alternates: {
    canonical: `${baseUrl}/packages/`,
  },
  openGraph: {
    title: "Water Sports Packages in Bentota | LaLuna Water Sports",
    description:
      "Explore top-rated water sports combo deals in Bentota, Sri Lanka.",
    url: `${baseUrl}/packages/`,
    siteName: "La Luna Water Sports Center",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpeg`,
        secureUrl: `${baseUrl}/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: "LaLuna Water Sports Center Services and Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bentota Water Sports Packages & Deals | LaLuna Bentota",
    description:
      "Explore top-rated water sports combo packages in Bentota, Sri Lanka. Jet Skiing, Banana Boat, Tube Rides & Speedboats.",
    images: [`${baseUrl}/og-image.jpeg`],
  },
};

export default function PackagesPage() {

  // Generate ItemList JSON-LD Schema dynamically from PACKAGES_DATA
  const packageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Bentota Water Sports Combo Packages",
    "description": "Top-rated water sports combo packages and activity deals offered by LaLuna Water Sports Center in Bentota, Sri Lanka.",
    "itemListElement": PACKAGES_DATA.map((pkg, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": pkg.title,
        "description": pkg.description,
        "url": `${baseUrl}/packages/${pkg.slug}/`,
        "image": pkg.image.startsWith("http")
        ? pkg.image
        : `${baseUrl}${pkg.image.startsWith("/") ? "" : "/"}${pkg.image}`,
        "brand": {
          "@type": "Brand",
          "name": "La Luna Water Sports Center"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "LKR",
          "price": pkg.price ? String(pkg.price) : undefined,
          "availability": "https://schema.org/InStock",
          "url": `${baseUrl}/packages/${pkg.slug}/`
        }
      }
    }))
  };

  return (
    <main className="min-h-screen bg-slate-50/50 py-12 md:py-20">
      {/* Inject JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packageSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-site-green font-bold text-sm uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
            Best Value Bundles
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Bentota Water Sports Packages
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Combine your favorite water activities into high-value adventure packages. 
            Enjoy maximum thrills, certified safety equipment, and unbeatable prices at La Luna Water Sports.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES_DATA.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>

      </div>
    </main>
  );
}