import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/data/blog";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

const posts = blogData && Array.isArray(blogData) ? blogData : [];
const baseUrl = "https://lalunawatersportscenter.com";
// 1. Static Params Generation for Build
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. SEO & Social Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "LaLuna Water Sports Center | Bentota, Sri Lanka",
      description: "LaLuna Water Sports Center, Bentota - Explore our range of water sports activities including jet skiing, banana boat rides, river safaris, and more. Book your adventure today!",
    };
  }

  const title = `${post.title} | LaLuna Water Sports Center`;
  const postUrl = `${baseUrl}/blog/${resolvedParams.slug}/`;

  // Resolve dynamic post image to absolute URL
  const rawImagePath = post.image || "/og-image.jpeg";
  const fullImageUrl = rawImagePath.startsWith("http")
    ? rawImagePath
    : `${baseUrl}${rawImagePath.startsWith("/") ? "" : "/"}${rawImagePath}`;

  return {
    title,
    description: post.description || "LaLuna Water Sports Center, Bentota - Explore our range of water sports activities including jet skiing, banana boat rides, river safaris, and more. Book your adventure today!",
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: title,
      description: post.description,
      url: postUrl,
      type: "article",
      images: [
        {
          url: fullImageUrl,
          secureUrl: fullImageUrl, // Crucial for HTTPS WhatsApp previews
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: post.title,
        },
      ],
    },
  };
}

// 3. Dynamic Page Component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${baseUrl}/blog/${resolvedParams.slug}/`;
  const rawImagePath = post.image || "/og-image.jpeg";
  const fullImageUrl = rawImagePath.startsWith("http")
    ? rawImagePath
    : `${baseUrl}${rawImagePath.startsWith("/") ? "" : "/"}${rawImagePath}`;

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": postUrl,
        },
        headline: post.title,
        description: post.description,
        image: fullImageUrl,
        url: postUrl,
        datePublished: post.date || "2026-08-01",
        dateModified: post.date || "2026-08-01",
        author: {
          "@type": "Organization",
          name: "LaLuna Water Sports Team",
          url: `${baseUrl}/`,
        },
        publisher: {
          "@type": "Organization",
          name: "LaLuna Water Sports Center",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/og-image.jpeg`,
          },
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
    ],
  };


  // Format the text message sent to WhatsApp
  const shareText = `Check out this blog post: *${post.title}*\n\n${postUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  return (
    <article className="max-w-4xl mx-auto min-h-screen bg-white pb-16 px-4">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Header Section */}
      <header className="max-w-4xl mx-auto pt-12 pb-8 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-wider mb-3">
          <span>{post.category || "Bentota Travel Guide"}</span>
          <span>•</span>
          <span>{post.readTime || "5 min read"}</span>
        </div>

        <h1 className="sm:text-4xl text-2xl font-sans font-bold leading-tight mb-6 text-gray-900">
          {post.title}
        </h1>

        {/* Author / Date Info */}
        <div className="flex items-center justify-center space-x-3 text-sm text-gray-600">
          <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
            LL
          </div>
          <div className="text-left">
            <p className="font-semibold text-gray-900">La Luna Team</p>
            <p className="text-xs text-gray-500">Updated {post.date || "2026"}</p>
          </div>
        </div>
      </header>

      {/* 2. Featured Hero Image */}
      <div className="mx-auto mb-12">
        <div className="relative aspect-video w-full h-auto rounded-2xl overflow-hidden shadow-lg bg-gray-100">
          <Image
            src={post.image || "/og-image.jpeg"}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* 3. Main Reading Content Container */}
      <div className="mx-auto leading-relaxed text-lg text-gray-800 space-y-6">
        {/* Intro Description */}
        <p className="leading-relaxed">
          {post.description}
        </p>

        {/* Markdown Renderer */}
        <ReactMarkdown
          components={{
            hr: () => <div className="my-8" />,
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold text-site-green! border-b pb-2 mt-10 mb-4">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-medium text-[#2b538e] mt-6 mb-2">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="my-4">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-2 my-4 pl-2">
                {children}
              </ul>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-cyan-500 bg-cyan-50 p-4 rounded-r-xl italic my-6 text-slate-700">
                {children}
              </blockquote>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left text-sm border-collapse border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-cyan-900 text-white font-semibold">
                {children}
              </thead>
            ),
            th: ({ children }) => (
              <th className="p-3 border border-gray-300">{children}</th>
            ),
            td: ({ children }) => (
              <td className="p-3 border border-gray-200">{children}</td>
            ),
            a: ({ href, children }) => {
              const isInternal = href && (href.startsWith("/") || href.startsWith(baseUrl));
              if (isInternal) {
                return (
                  <Link href={href} className="text-site-green">
                    {children}
                  </Link>
                );
              }
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-site-green"
                >
                  {children}
                </a>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>

        {/* 4. Embedded Booking / Call-To-Action Box */}
        <div className="my-10 p-6 bg-gradient-to-r from-cyan-900 to-blue-900 rounded-2xl text-white shadow-md">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Special Activity Offer
          </span>
          <h3 className="text-2xl font-bold mt-1 mb-2">
            Ready to experience Bentota waters?
          </h3>
          <p className="text-cyan-100 text-sm mb-6">
            Book your Jet Ski or Water Sports Combo package directly with La Luna Center for instant confirmation and certified instructors.
          </p>
          <Link
            href="/packages/"
            className="inline-block bg-cyan-400 text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-cyan-300 transition-colors shadow"
          >
            Check Packages
          </Link>
        </div>
      </div>

      {/* 5. Article Footer / Share Links */}
      <footer className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Enjoyed this guide? Share it with your travel partners:
          </p>
          <div className="flex space-x-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              Share on WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}