import Image from "next/image";
import Link from "next/link";
import { FaClock, FaDollarSign, FaBolt } from "react-icons/fa";
import { prefix } from "@/utils/prefix";
import { SERVICES_DATA } from "@/data/services";
import Button from "@/components/Button";
// 2. The Services Dataset (matches your public folder directory structure)
const SERVICES = SERVICES_DATA;
export default function ServicesPage() {
  
  // Helper to color-code intensity badges dynamically
  const getIntensityColor = (intensity: string) => {
    switch(intensity) {
      case "Extreme": return "bg-red-100 text-red-700 border-red-200";
      case "Moderate": return "bg-amber-100 text-amber-700 border-amber-200";
      default: return "bg-green-100 text-green-700 border-green-200";
    }
  };

  return (
    <main className="w-full min-h-screen bg-gray-50 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-black">
        <Image
          src={`${prefix}/images/packages/diving-pack.jpg`} // Ensure this image path exists in your public folder
          alt="La Luna Ocean Adventures"
          fill
          className="object-cover opacity-60 object-center"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h3 className="text-white font-bold">Adrenaline on Demand</h3>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md !font-cursive">
            Our Aquatic Adventures
          </h1>
          <p className="text-teal-200 mt-2 text-sm md:text-lg max-w-xl mx-auto font-medium">
            Choose your thrill level. From family-friendly excursions to high-speed extreme motorsports, we own the coast.
          </p>
        </div>
      </section>

      {/* --- SERVICES GRID DISPLAY --- */}
      <section className="max-w-7xl mx-auto px-4 mt-12 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Header */}
              <div className="relative w-full h-64 md:h-72 bg-gray-200 overflow-hidden">
                <Image
                  src={`${prefix}${service.image}`} // Uses our prefix for perfect GitHub Pages asset links
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Dynamic Intensity Badge */}
                <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border shadow-sm ${getIntensityColor(service.intensity)}`}>
                  {service.intensity}
                </span>
              </div>

              {/* Card Body Text & Metrics */}
              <div className="p-6 md:p-6 flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-site-green transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Info Bar Strip */}
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-gray-100 text-gray-700 text-xs md:text-sm font-medium">
                  <div className="flex items-center gap-1.5 justify-center text-center">
                    <FaClock className="text-teal-500 shrink-0" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center text-center border-l border-r border-gray-100">
                    <FaDollarSign className="text-teal-500 shrink-0" />
                    <span>From {service.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center text-center text-site-green">
                    <FaBolt className="text-teal-500 shrink-0" />
                    <span>Instant Book</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button href={`/services/${service.slug}`} fullWidth>
                  View Details
                </Button>
                
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* --- RENTAL REQUIREMENT CALLOUT BANNER --- */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Custom Group Packages Available</h3>
            <p className="text-gray-600 text-sm max-w-xl">
              Planning a corporate getaway, birthday party, or resort family gathering? Contact us to unlock bulk discounts and private beach setups.
            </p>
          </div>
          <Link 
            href="/Packages" 
            className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold px-6 py-3.5 rounded-xl transition-colors shadow-sm whitespace-nowrap"
          >
            View Packages
          </Link>
        </div>
      </section>

    </main>
  );
}