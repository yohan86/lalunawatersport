import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaClock, FaBolt, FaArrowLeft, FaWhatsapp, FaQuestionCircle } from "react-icons/fa";
import { prefix } from "@/utils/prefix";
import { SERVICES_DATA } from "@/data/services";
import { Metadata } from "next";

const baseUrl = "https://lalunawatersportscenter.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Helper to format full image URLs for OpenGraph and Structured Data
function getFullImageUrl(imagePath?: string): string {
  const rawPath = imagePath || "/og-image.jpeg";
  if (rawPath.startsWith("http")) return rawPath;
  return `${baseUrl}${rawPath.startsWith("/") ? "" : "/"}${rawPath}`;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = SERVICES_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Water Sports Activities | Bentota and Aluthgama, Sri Lanka",
      description:
        "LaLuna Water Sports Center, Bentota - Explore our range of water sports activities including jet skiing, banana boat rides, river safaris, and more. Book your adventure today!",
    };
  }

  const title = `${post.metaTitle || post.title} | LaLuna Water Sports Center, Bentota`;
  const postUrl = `${baseUrl}/services/${resolvedParams.slug}/`;
  const fullImageUrl = getFullImageUrl(post.image);

  return {
    title,
    description:
      post.metaDescription ||
      post.description ||
      "LaLuna Water Sports Center, Bentota - Explore our range of water sports activities including jet skiing, banana boat rides, river safaris, and more.",
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title,
      description: post.metaDescription || post.description,
      url: postUrl,
      type: "website",
      images: [
        {
          url: fullImageUrl,
          secureUrl: fullImageUrl,
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: post.imageAlt ||  post.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const pageUrl = `${baseUrl}/services/${slug}/`;
  const rawImagePath = service.detailimage || service.image || "/og-image.jpeg";
  const fullImageUrl = getFullImageUrl(rawImagePath);

  const whatsappNumber = "94765504541";
  const whatsappMessage = encodeURIComponent(
    `Hi LaLuna! I am interested in booking '${service.title}'. Could you please provide the direct rate and availability?`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${baseUrl}/services/`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": pageUrl,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      "url": pageUrl,
      "name": `${service.title} | LaLuna Water Sports, Bentota & Aluthgama, Sri Lanka`,      
      "description": service.metaDescription || service.description,
      "isPartOf": {
        "@id": `${baseUrl}/#website`,
      },
      "about": {
        "@id": `${pageUrl}#service`,
      },
      "breadcrumb": {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      "name": service.title,
      "description": service.fullDescription || service.description,
      "provider": {
        "@type": "SportsActivityLocation",
        "@id": `${baseUrl}/#organization`,
      },
      "image": fullImageUrl,
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Bentota, Sri Lanka",
        },
        {
          "@type": "AdministrativeArea",
          "name": "Aluthgama, Sri Lanka",
        },
        {
          "@type": "Country",
          "name": "Sri Lanka",
        },
      ],
    },
    ...(service.faqs && service.faqs.length > 0
      ? [
          {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            "mainEntity": service.faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          },
        ]
      : []),
  ],
};

  return (
    <main className="w-full min-h-screen bg-gray-50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black font-medium transition-colors"
        >
          <FaArrowLeft className="text-sm" /> Back to Adventures
        </Link>
      </div>

      <section className="max-w-5xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative w-full h-[350px] md:h-full min-h-[400px] bg-gray-200">
            <Image
              src={`${prefix}${rawImagePath}`}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border bg-teal-50 text-teal-700 border-teal-100">
                {service.intensity} Intensity
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {service.title}
              </h1>
              <p className="leading-relaxed text-gray-600">
                {service.fullDescription || service.description}
              </p>

              {service.highlights && service.highlights.length > 0 && (
                <div className="pt-4 space-y-2">
                  <h3 className="font-semibold text-gray-800">Highlights</h3>
                  <ul className="text-sm space-y-1 list-disc pl-5 text-gray-600">
                    {service.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="border-t border-b border-gray-100 py-4 flex items-center justify-around text-gray-700">
              <div className="flex items-center gap-2">
                <FaClock className="text-teal-500 text-lg" />
                <div>
                  <div className="text-xs text-gray-400 font-normal">Duration</div>
                  <div className="font-semibold text-sm md:text-base">
                    {service.duration}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 border-l pl-6 border-gray-100">
                <FaBolt className="text-teal-500 text-lg" />
                <div>
                  <div className="text-xs text-gray-400 font-normal">Booking</div>
                  <div className="font-semibold text-teal-600 text-sm md:text-base">
                    Instant
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary-button w-full flex text-center justify-center items-center shadow-md !bg-emerald-600 gap-2 text-[14px] md:text-[16px] hover:!bg-emerald-700 transition-colors text-base"
              >
                <FaWhatsapp className="text-xl" /> Get Rate via WhatsApp
              </a>
              <Link
                href={`/contact?title=${encodeURIComponent(
                  `Booking inquiry: ${service.title}`
                )}`}
                className="btn primary-button w-full block text-center justify-center items-center shadow-md"
              >
                Confirm & Book This Activity
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Book {service.title} Directly with LaLuna?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Bentota is Sri Lanka’s premier destination for water sports, boasting calm, safe waters along the river lagoon and open ocean waves along the coast.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When you book your {service.title.toLowerCase()} with LaLuna Water Sports Center, you are partnering directly with licensed equipment operators and certified safety marshals. We ensure top-tier safety gear, daily maintained watercrafts, and instant confirmation whether you book online, via WhatsApp, or through your local travel guide.
            </p>
          </div>

          {service.faqs && service.faqs.length > 0 && (
            <div className="pt-6 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaQuestionCircle className="text-teal-500" /> Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                  >
                    <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}