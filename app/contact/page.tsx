
import { FaWater, FaShieldAlt, FaAward, FaUsers } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import SocialMedia from "@/components/SocialMedia";
import GoogleMap from "@/components/GoogleMap";
import { Metadata } from "next";

const baseUrl = "https://lalunawatersportscenter.com";
// --- NEXT.JS METADATA ---
export const metadata: Metadata = {
  title: "Contact Us | LaLuna Water Sports Bentota",
  description:
    "Get in touch with LaLuna Water Sports in Bentota, Sri Lanka. Contact us for jet ski rentals, mangrove safaris, custom water sports packages, and bookings.",
  alternates: {
    canonical: `${baseUrl}/contact/`,
  },
  openGraph: {
    title: "Contact Us | LaLuna Water Sports Bentota",
    description:
      "Planning your ocean or river adventure in Bentota? Send us a message or call us directly to book your water sports experience.",
    url: `${baseUrl}/contact/`,
    siteName: "LaLuna Water Sports",
    images: [
      {
        url: `${baseUrl}/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: "LaLuna Water Sports Bentota",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | LaLuna Water Sports Bentota",
    description:
      "Get in touch with LaLuna Water Sports in Bentota, Sri Lanka for jet ski rides, mangrove safaris, and water sports packages.",
    images: [`${baseUrl}/og-image.jpeg`],
  },
};

export default function ContactPage() {
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Laluna+Water+Sports+Bentota";

  const stats = [
    { icon: <FaUsers size={24} />, value: "725K+", label: "Happy Adventurers" },
    { icon: <FaShieldAlt size={24} />, value: "100%", label: "Safety Record" },
    { icon: <FaAward size={24} />, value: "25+", label: "Years Experience" },
    { icon: <FaWater size={24} />, value: "15+", label: "Water Activities" },
  ];

  // Local Business Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Laluna Water Sports Center",
    "image": "https://lalunawatersportscenter.com/og-image.jpeg",
    "telephone": "+94765504541",
    "email": "info@lalunawatersportscenter.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.06 Kaluwamodara",
      "addressLocality": "Aluthgama, Bentota",
      "addressCountry": "LK"
    },
    "url": "https://lalunawatersportscenter.com/contact/",
    "hasMap": directionsUrl
  };

  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Local Business JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* --- HERO BANNER --- */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-black">
       <GoogleMap />
       
      </section>
      <div className="flex w-full bg-[#1f6367]">
        <div className="flex justify-between items-center my-2 w-75 mx-auto">

          <h3 className="font-bold text-white">Our Location</h3>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-site-green hover:bg-[#1f6367] text-white text-[15px] px-3 py-2 rounded-lg transition-all duration-300"
          >
            🚗 Get Directions
          </a>
        </div>
      </div>

      {/* --- OUR MISSION & VISION --- */}
      <section className="w-[95%] lg:w-[980px] mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-3">
            <div className=" justify-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold  drop-shadow-md !font-cursive mb-4">
                Contact Us
              </h1>
        
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Get in Touch with La Luna Water Sports
              </h2>
              <p>
                Ready for your next ocean or river adventure in Bentota? Whether you&apos;re planning a jet ski ride,
                a peaceful mangrove safari, or a custom water sports package for your family, 
                our team is here to help. Send us a message or reach out via WhatsApp, 
                and we&apos;ll get you set up for an unforgettable experience!
              </p>
            </div>
            <div className="flex flex-col md:flex-row w-[95%] lg:w-[980px] gap-2  m-auto">
              <div className="w-[95%] md:w-[50%]">
                <ContactForm />
              </div>
              <div className="w-[95%] md:w-[50%] mt-12 md:ml-12 md:pl-10 md:border-l-2 border-gray-200">
                <ul className="flex flex-col items-start">
                  <li className="font-semibold">Phone</li>
                  <li><a href="tel:+94765504541">+94 76 550 45 41</a></li>
                  <li className="font-semibold mt-4">Email</li>
                  <li><a href="mailto:info@lalunawatersportscenter.com">info@lalunawatersportscenter.com</a></li>
                  <li className="font-semibold mt-4">Address</li>
                  <li>Laluna Water Sports Center,<br/>
                    No.06 Kaluwamodara, Aluthgama <br/>Bentota, Sri Lanka</li>
                </ul>
                <SocialMedia />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- STATS ACCELERATOR COUNTER BANNER --- */}
      <section className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <div className="text-teal-400 mb-2 bg-neutral-800 p-4 rounded-full shadow-inner">
                {stat.icon}
              </div>
              <span className="text-3xl md:text-4xl font-extrabold text-white">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="w-full mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose LaLuna?</h2>
          <p className="text-gray-500 mt-2">We build our operational frameworks around uncompromising principles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-site-green bg-teal-50 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
              <FaShieldAlt size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Uncompromising Safety</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All excursions are closely supervised by certified coastal safety captains. High-grade life vests and safety kill-switches are mandatory on all hardware runs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-site-green bg-teal-50 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
              <FaWater size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Fleet</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We rotate our mechanical fleets regularly. Our watercraft and boards undergo rigorous daily standard diagnostics to guarantee zero mechanical interruptions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-site-green bg-teal-50 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
              <FaUsers size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Memorable Guides</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our professional aquatic instructors are expert coaches. They understand how to steady your balance, take great photos, and push your skill levels safely.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}