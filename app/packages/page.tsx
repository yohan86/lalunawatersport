import Image from "next/image";
import Link from "next/link";
import { FaWater, FaShieldAlt, FaAward, FaUsers } from "react-icons/fa";
import { prefix } from "@/utils/prefix";

export default function PackagePage() {
  
  const stats = [
    { icon: <FaUsers size={24} />, value: "125+", label: "Happy Adventurers" },
    { icon: <FaShieldAlt size={24} />, value: "100%", label: "Safety Record" },
    { icon: <FaAward size={24} />, value: "5+", label: "Years Experience" },
    { icon: <FaWater size={24} />, value: "15+", label: "Water Activities" },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-50">
      
      {/* --- HERO BANNER --- */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-black">
        <Image
          src={`${prefix}/images/sports/sport-3.jpg`} // Ensure this image path exists in your public folder
          alt="La Luna Ocean Adventures"
          fill
          className="object-cover opacity-60 object-center"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md !font-cursive">
            Our Packages
          </h1>
          <p className="text-teal-200 mt-2 text-sm md:text-lg max-w-xl mx-auto font-medium">
            Discover the passion behind the ultimate ocean playground at La Luna Water Sports.
          </p>
        </div>
      </section>

      {/* --- OUR MISSION & VISION --- */}
      <section className="mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-3 justify-center text-center">
            <h3 className="text-site-green font-bold font-cursive block text-[32px]">
              Welcome to La Luna
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              The page is currently under construction. 
            </h2>
            <p>Please check back soon for our exciting packages and offerings!</p>
            
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
          <h2 className="text-3xl font-bold text-gray-900">Why Choose La Luna?</h2>
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