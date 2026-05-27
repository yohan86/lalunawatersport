"use client";
import { useState } from 'react';
import Image from 'next/image';
import { prefix } from '@/utils/prefix';


const SERVICES = [
  // 1. THRILLS (High Speed)
  { id: 1, name: 'Jet Ski', cat: 'thrill', img: `${prefix}/images/sports/jetski.jpg`, size: 'large' },
  { id: 2, name: 'Water Ski', cat: 'thrill', img: `${prefix}/images/sports/waterski.jpg`, size: 'small' },
  { id: 3, name: 'Fly Fish', cat: 'thrill', img: `${prefix}/images/sports/flyfish.jpg`, size: 'small' },
  { id: 4, name: 'Speed Boat Ride', cat: 'thrill', img: `${prefix}/images/sports/speedboat.jpg`, size: 'small' },
  { id: 5, name: 'Wave Surfing', cat: 'thrill', img: `${prefix}/images/sports/wavesurfing.jpg`, size: 'small' },

  // 2. TOWABLES (Fun Rides)
  { id: 6, name: 'Tube Riding', cat: 'towable', img: `${prefix}/images/sports/tuberide.jpg`, size: 'small' },
  { id: 7, name: 'Banana Boat Riding', cat: 'towable', img: `${prefix}/images/sports/bananaboat.jpg`, size: 'large' },
  { id: 8, name: 'Sofa Riding', cat: 'towable', img: `${prefix}/images/sports/sofaride.jpg`, size: 'small' },
  { id: 9, name: 'Lay Down Riding', cat: 'towable', img: `${prefix}/images/sports/laydown.jpg`, size: 'small' },

  // 3. PADDLES & TOURS (River & Ocean Safaris)
  { id: 10, name: 'Yacht Cruise Tours', cat: 'safari', img: `${prefix}/images/sports/yacht.jpg`, size: 'large' },
  { id: 11, name: 'Boat Trip', cat: 'safari', img: `${prefix}/images/sports/boattrip.jpg`, size: 'small' },
  { id: 12, name: 'Kayak', cat: 'safari', img: `${prefix}/images/sports/kayak.jpg`, size: 'small' },
  { id: 13, name: 'Canoeing', cat: 'safari', img: `${prefix}/images/sports/canoeing.jpg`, size: 'small' },
  { id: 14, name: 'Stand-up Paddling', cat: 'safari', img: `${prefix}/images/sports/sup.jpg`, size: 'small' },
  { id: 15, name: 'Fishing Trips', cat: 'safari', img: `${prefix}/images/sports/fishing.jpg`, size: 'small' },

  // 4. UNDERWATER & WINDS
  { id: 16, name: 'Deep Sea Diving', cat: 'underwater', img: `${prefix}/images/sports/diving.jpg`, size: 'large' },
  { id: 17, name: 'Snorkeling', cat: 'underwater', img: `${prefix}/images/sports/snorkeling.jpg`, size: 'small' },
  { id: 18, name: 'Wind Surfing', cat: 'underwater', img: `${prefix}/images/sports/windsurfing.jpg`, size: 'small' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Activities' },
  { id: 'thrill', label: 'Adrenaline Thrills' },
  { id: 'towable', label: 'Fun Towables' },
  { id: 'safari', label: 'River & Cruises' },
  { id: 'underwater', label: 'Deep Sea & Wind' }
];
export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('all');
  
  // 1. Add a state to manage whether the grid is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // 2. Filter services based on active tab first
  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.cat === activeTab);

  // 3. If "All" is active and not expanded, slice the array to show only 6 items
  const shouldLimit = activeTab === 'all' && !isExpanded;
  const displayedServices = shouldLimit 
    ? filteredServices.slice(0, 6) 
    : filteredServices;

  return (
    <section className="py-24 bg-slate-950 text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Area */}
        <div className="text-center mb-16">
            <h3 className="font-display text-[28px] text-site-green">Our Services</h3>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider mt-2">
            Choose Your Water Adventure
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
            From high-speed river rushes to pristine ocean exploration—discover 18 ultimate ways to experience Bentota.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setIsExpanded(false); // Reset expansion when changing tabs
              }}
              className={`px-6 py-3 rounded-full font-bold uppercase text-xs tracking-wider transition-all duration-300 ${
                activeTab === cat.id 
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Animated Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl overflow-hidden border border-slate-900 transition-all duration-500 hover:scale-[1.02] hover:border-cyan-500/40 cursor-pointer ${
                service.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <Image 
                src={service.img} 
                alt={service.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.70] group-hover:brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end z-10">
                <div>
                  <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 rounded-md">
                    {service.cat}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black mt-3 text-white tracking-wide uppercase">
                    {service.name}
                  </h3>
                </div>
                <div className="w-10 h-10 bg-slate-900/80 rounded-full border border-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Dynamic "View All" Button Container */}
        {activeTab === 'all' && SERVICES.length > 6 && (
          <div className="text-center mt-16">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest border border-slate-800 bg-slate-900/50 hover:bg-slate-900 text-cyan-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
            >
              {isExpanded ? 'Show Less' : 'View All 18 Adventures'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}