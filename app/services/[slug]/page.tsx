import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaClock, FaDollarSign, FaBolt, FaArrowLeft } from "react-icons/fa";
import { prefix } from "@/utils/prefix";
import { SERVICES_DATA } from "@/data/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. TELL NEXT.JS ALL POSSIBLE PAGES AHEAD OF TIME (Required for Static Export / GitHub Pages)
export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // 2. Find the individual service that matches the URL slug
  const service = SERVICES_DATA.find((item) => item.slug === slug);

  // If the service doesn't exist, trigger a 404
  if (!service) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-gray-50 pb-20">
      {/* Back Navigation Bar */}
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
          
          {/* Left Side: Product Image Layout */}
          <div className="relative h-[350px] md:h-full min-h-[400px] bg-gray-200">
            <Image
              src={`${prefix}${service.image}`}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side: Detailed Info Workspace */}
          <div className="p-8 md:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border bg-teal-50 text-teal-700 border-teal-100">
                {service.intensity} Intensity
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {service.title}
              </h1>
              <p className="leading-relaxed">
                {service.fullDescription || service.description}
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
            <div className="border-t border-b border-gray-100 py-4 flex items-center justify-between text-gray-700">
              <div className="flex items-center gap-2">
                <FaClock className="text-teal-500 text-lg" />
                <div>
                  <div className="text-xs text-gray-400 font-normal">Duration</div>
                  <div className="font-semibold text-sm md:text-base">{service.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 border-l pl-6 border-gray-100">
                <FaDollarSign className="text-teal-500 text-lg" />
                <div>
                  <div className="text-xs text-gray-400 font-normal">Base Rate</div>
                  <div className="font-semibold text-sm md:text-base">{service.price}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 border-l pl-6 border-gray-100">
                <FaBolt className="text-teal-500 text-lg" />
                <div>
                  <div className="text-xs text-gray-400 font-normal">Booking</div>
                  <div className="font-semibold text-teal-600 text-sm md:text-base">Instant</div>
                </div>
              </div>
            </div>

            {/* Direct Booking Route Button */}
            <div>
              <Link 
                href="/contact" 
                className="w-full block text-center bg-black hover:bg-neutral-800 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 shadow-md"
              >
                Confirm & Book This Activity
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}