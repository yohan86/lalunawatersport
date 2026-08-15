import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogData, BlogPost } from "../../data/blog";

const baseUrl = "https://lalunawatersportscenter.com"
export const metadata: Metadata = {
  title: "Bentota Water Sports & Travel Blog | LaLuna Water Sports",
  description:
    "Explore ultimate guides on water sports in Bentota, river safari tips, best seasonal timing, and day trip itineraries from Mirissa, Galle & Aluthgama.",
  keywords: [
    "bentota travel blog",
    "water sports bentota guide",
    "bentota river safari cost",
    "things to do in bentota",
    "mirissa day trip to bentota",
  ],
  alternates: {
    canonical: `${baseUrl}/blog/`,
  },
  openGraph: {
    title: "Bentota Water Sports & Sri Lanka Travel Blog",
    description:
      "Guides, safety tips, and itineraries for water sports adventures on Bentota River & Golden Coast.",
    url: `${baseUrl}/blog/`,
    siteName: "LaLuna Water Sports Center",
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
};

const posts = blogData && Array.isArray(blogData) ? blogData : [];

export default function BlogListingPage() {
  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  // Structured Data (JSON-LD) for Blog Page
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${baseUrl}/blog/#blog`,
        name: "LaLuna Water Sports & Travel Blog",
        description: "Guides, safety tips, and itineraries for water sports adventures in Bentota.",
        publisher: {
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#organization`,
          name: "LaLuna Water Sports Center",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${baseUrl}/blog/`,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
            LaLuna Travel Journal
          </span>
          <h1 className="text-[26px] sm:text-5xl md:text-4xl  mt-3 font-medium font-sans!">
            Bentota Water Sports & Travel Blog
          </h1>
          <p className="text-lg mt-4 leading-relaxed">
            Tips, seasonal guides, safety guidelines, and adventure itineraries for exploring Bentota River and Sri Lanka’s southern coast.
          </p>
        </div>

        {/* 1. Featured Hero Article Card */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            {featuredPosts.map((item:BlogPost)=> (
              <div key={item.slug} className="bg-white rounded-3xl mb-10 overflow-hidden shadow-lg border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-0 transition hover:shadow-xl">
              <div className="relative min-h-[280px] lg:min-h-[400px] lg:col-span-7">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8 sm:p-10 lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-3">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span className="text-slate-400">{item.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-site-green! mb-4 hover:text-[#02ae97] transition-colors duration-300">
                    <Link href={`/blog/${item.slug}/`}>
                      {item.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div>
                  <Link
                    href={`/blog/${item.slug}/`}
                    className="inline-flex items-center font-bold text-cyan-600 hover:text-cyan-800 transition-colors group"
                  >
                    Read Full Article 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            ))}
            
          </section>
        )}

        {/* 2. Grid of Regular Posts */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-3">
            Latest Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-2">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span className="text-slate-400">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-site-green mb-2 leading-snug hover:text-[#02ae97] transition-colors duration-300">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="text-sm font-bold text-cyan-600 hover:text-cyan-800 transition-colors"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}