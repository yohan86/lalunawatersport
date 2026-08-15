import { PACKAGES_DATA } from "@/data/packages";
import { prefix } from "@/utils/prefix";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaBolt, FaClock, FaDollarSign } from "react-icons/fa";

const baseUrl = "https://lalunawatersportscenter.com";

export async function generateStaticParams() {
  return PACKAGES_DATA.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {
    const resolvedParams = await params;
    const post = PACKAGES_DATA.find(p => p.slug === resolvedParams.slug);

    if (!post) {
        return {
            title: "LaLuna Water Sports Packages | Bentota, Sri Lanka",
            description: "LaLuna Water Sports Center, Bentota - Explore our range of water sports packages including jet skiing, banana boat rides, river safaris, and more. Book your adventure today!",
        }
    }

    const postUrl = `https://lalunawatersportscenter.com/packages/${resolvedParams.slug}/`;
      // Resolve dynamic post image to absolute URL
  const rawImagePath = post.image || "/og-image.jpeg";
  const fullImageUrl = rawImagePath.startsWith("http")
    ? rawImagePath
    : `${baseUrl}${rawImagePath.startsWith("/") ? "" : "/"}${rawImagePath}`;


    return {
        title: post.metaTitle,
        description: post.metaDescription,
        alternates: {
            canonical: postUrl,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            url: postUrl,
            type: "website",
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


const PackageDetails = async ({params}:{params: Promise<{slug:string}>}) => {
    const {slug} = await params;
    const post = PACKAGES_DATA.find(p=> p.slug === slug);

    if(!post){
        notFound();
    }

    const relativeImagePath = `${prefix}${post.image || "/og-image.jpeg"}`;
    const absoluteImageUrl = relativeImagePath.startsWith("http")
    ? relativeImagePath
    : `${baseUrl}${relativeImagePath.startsWith("/") ? "" : "/"}${relativeImagePath}`;

  // Package Schema (Tour / TouristTrip)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Tour",
    name: post.title,
    description: post.description || post.content,
    image: absoluteImageUrl,
    provider: {
      "@type": "TravelAgency",
      name: "LaLuna Water Sports Center",
      url: baseUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bentota",
        addressCountry: "LK",
      },
    },
    touristType: ["Adventure Tourists", "Water Sports Enthusiasts"],
    // Optional itinerary mapping if your package has included activities array
    ...(post.activities && {
      itinerary: {
        "@type": "ItemList",
        numberOfItems: post.activities.length,
        itemListElement: post.activities.map((activity: string, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          name: activity,
        })),
      },
    }),
  };


  return (
    <main className="w-full min-h-screen bg-gray-50 pb-20">
      {/* Inject Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Link 
          href="/packages" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black font-medium transition-colors"
        >
          <FaArrowLeft className="text-sm" /> Back to Packages
        </Link>
      </div>

      <section className="max-w-5xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-0">
          
          {/* Left Side: Product Image Layout */}
          <div className="relative h-75 md:h-100 bg-gray-200">
            <Image
              src={`${prefix}${post.image}`}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side: Detailed Info Workspace */}
          <div className="p-8 md:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border bg-teal-50 text-teal-700 border-teal-100">
                 Intensity
              </span>
              <h1 className="text-xl md:text-4xl font-bold text-gray-900 font-sans!">
                {post.title}
              </h1>
              <p className="leading-relaxed">
                {post.content || post.description}
              </p>
              
              <div className="pt-4 space-y-2">
                <h3 className="font-semibold text-gray-800">What&apos;s Included:</h3>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Premium top-tier safety gear & life vest</li>
                  <li>Pre-activity safety orientation by expert guides</li>
                  <li>Complimentary bottled water</li>
                </ul>
              </div>
            </div>

            {/* Price Matrix Strip */}
            <div className="border-t border-b border-gray-100 py-4 flex items-center justify-around text-gray-700">
              <div className="flex items-center gap-2">
                <FaClock className="text-teal-500 text-lg" />
                <div>
                  <div className="text-xs text-gray-400 font-normal">Duration</div>
                  <div className="font-semibold text-sm md:text-base">{post.duration}</div>
                </div>
              </div>
               {/*<div className="flex items-center gap-2 border-l pl-6 border-gray-100">
                <FaDollarSign className="text-teal-500 text-lg" />
                <div>
                  <div className="text-xs text-gray-400 font-normal">Base Rate</div>
                  <div className="font-semibold text-sm md:text-base">{post.price}</div>
                </div> 
              </div>*/}
              <div className="flex items-center gap-2 border-l pl-6 border-gray-100">
                <FaBolt className="text-teal-500 text-lg" />
                <div>
                  <div className="text-xs text-gray-400 font-normal">Booking</div>
                  <div className="font-semibold text-teal-600 text-sm md:text-base">Instant</div>
                </div>
              </div>
            </div>

            {/* Direct Booking Route Button */}
            <div className="flex">
              <Link
                href={`/contact?title=Booking+inquiry:+${encodeURIComponent(post.title)}`}
                className="btn primary-button w-full items-center justify-center"
              >
                Confirm & Book This Activity
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default PackageDetails