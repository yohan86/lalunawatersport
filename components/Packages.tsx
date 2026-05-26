"use client";
import Image from 'next/image';
import { useRef } from 'react';
// Import Swiper React components and required styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { FaCheckCircle, FaArrowLeft, FaArrowRight, FaBolt, FaCrown, FaUsers, FaAnchor, FaStar, FaCompass } from 'react-icons/fa';
import Link from 'next/link';

const PACKAGES = [
  {
    id: 'breeze-pack',
    name: 'River Breeze Family Combo',
    icon: <FaUsers className="text-emerald-400 text-xl" />,
    price: '$45',
    img: '/images/packages/family-river.jpg',
    badge: 'Family Favorite',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    inclusions: ['Mangrove River Boat Trip', 'Banana Boat Riding', 'Kayaking Adventure']
  },
  {
    id: 'adrenaline-rush',
    name: 'Extreme Adrenaline Pack',
    icon: <FaBolt className="text-cyan-400 text-xl" />,
    price: '$79',
    img: '/images/packages/adrenaline.jpg',
    badge: 'Best Seller',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    featured: true,
    inclusions: ['Jet Ski Racing (15 mins)', 'Fly Fish Flying Ride', 'Tube Riding Thrill']
  },
  {
    id: 'ocean-king',
    name: 'La Luna VIP Luxury Day',
    icon: <FaCrown className="text-amber-400 text-xl" />,
    price: '$149',
    img: '/images/packages/vip-yacht.jpg',
    badge: 'Premium Luxury',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    inclusions: ['Private Yacht Cruise', 'Deep Sea Diving Tour', 'Seafood Lunch on River']
  },
  {
    id: 'underwater-explorer',
    name: 'Deep Ocean Explorer',
    icon: <FaAnchor className="text-blue-400 text-xl" />,
    price: '$85',
    img: '/images/packages/diving-pack.jpg',
    badge: 'Marine Life Focus',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    inclusions: ['Deep Sea Diving Lesson', 'Snorkeling Reef Excursion', 'GoPro Media Kit']
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon Special',
    icon: <FaStar className="text-purple-400 text-xl" />,
    price: '$65',
    img: '/images/packages/speed-boat.jpg',
    badge: 'High Speed',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    inclusions: ['Speed Boat Coastal Run', 'Water Ski Masterclass', 'Sofa Riding Session']
  },
  {
    id: 'river-safari-pack',
    name: 'Eco River Explorer',
    icon: <FaCompass className="text-orange-400 text-xl" />,
    price: '$35',
    img: '/images/packages/eco-safari.jpg',
    badge: 'Nature Tour',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    inclusions: ['Canoeing Forest Tour', 'Traditional Fishing Session', 'Bird Watching Excursion']
  }
];

export default function Packages() {
  const swiperRef = useRef(null);

  return (
    <section className="py-24 bg-white text-white px-6 md:px-12 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div className="text-left">
            <h3 className="font-display text-[28px] text-site-green">Save with Bundles</h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider mt-2">
              Our Adventure Packages
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl text-base">
              Drag, swipe, or click arrows to view our best deals. Combine activities to save big.
            </p>
          </div>

          {/* Navigation Controls tied to Swiper Ref */}
          <div className="flex gap-3 h-fit">
            <button 
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-12 h-12 rounded-xl bg-site-green flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer select-none"
            >
              <FaArrowLeft size={14} />
            </button>
            <button 
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-12 h-12 rounded-xl bg-site-green  flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer select-none"
            >
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Swiper Layout Component */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          grabCursor={true} // Shows the hand grab icon automatically
          loop={true}
          breakpoints={{
            // Mobile screen (sm) shows 1 card
            640: {
              slidesPerView: 2,
            },
            // Desktop monitors (lg) show 3 cards
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!overflow-hidden" // Keeps the modern shadow styling clean
        >
          {PACKAGES.map((pkg) => (
            <SwiperSlide key={pkg.id} className="h-auto">
              <div className="group h-full flex flex-col justify-between bg-[#4d4f61] rounded-3xl overflow-hidden border border-slate-900/60 hover:border-slate-800/80 transition-all duration-300 select-none">
                
                {/* Card Top Block (Image & Details) */}
                <div>
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image 
                      src={pkg.img} 
                      alt={pkg.name} 
                      fill 
                      draggable={false}
                      className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 pointer-events-none"
                    />
                    <span className={`absolute top-4 right-4 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md ${pkg.badgeColor}`}>
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-slate-950 rounded-xl border border-slate-800">
                        {pkg.icon}
                      </div>
                      <h3 className="text-lg font-black uppercase tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                        {pkg.name}
                      </h3>
                    </div>

                    <div className="border-b border-slate-800/60 mb-5" />

                    <ul className="space-y-3">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <FaCheckCircle className="text-cyan-500 mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Block (Price & Button) */}
                <div className="p-6 pt-0">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-black text-white"></span>
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">/ person</span>
                  </div>

                  <button className="w-full py-3.5 rounded-xl bg-site-green hover:bg-slate-800 text-white border border-white hover:border-cyan-500/30 font-bold uppercase text-xs tracking-widest transition-all duration-300 cursor-pointer">
                    View Details
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
       <div className="flex justify-center mt-12"> 
            <Link href="/packages" className="btn primary-button items-center justify-center gap-2 hover:gap-4">
             View All Packages <FaArrowRight size={15} /> 
            </Link>
            </div>
    </section>
  );
}


