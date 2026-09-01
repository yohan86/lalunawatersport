"use client";
import Image from 'next/image';
import { useRef } from 'react';
// Import Swiper React components and required styles
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { prefix } from '@/utils/prefix';
import {Package, PACKAGES_DATA} from '@/data/packages';


import 'swiper/css';
import 'swiper/css/navigation';

import { FaCheckCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
const PACKAGES = PACKAGES_DATA as Package[];


export default function Packages() {
const swiperRef = useRef<SwiperRef>(null);
  return (
    <section className="py-12 md:py-24 bg-white text-white px-6 md:px-12 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div className="text-left">
            <p className="font-display text-[18px] md:text-[28px] text-site-green">Save Big on Combo Bundles</p>
            <h2 className="text-[20px] leading-8.5 md:text-3xl font-black uppercase tracking-wider mt-2">
              Best Bentota Water Sports Packages & Deals
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl text-base">
              Explore our most popular water sports packages in Bentota. Combine Jet Ski, Banana Boat, Speed Boat, and more to save on your adventure.
            </p>
          </div>

          {/* Navigation Controls tied to Swiper Ref */}
          <div className="flex gap-3 h-fit">
            <button 
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              aria-label="Previous Package"
              className="w-12 h-12 rounded-xl bg-site-green flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer select-none"
            >
              <FaArrowLeft size={14} />
            </button>
            <button 
              onClick={() => swiperRef.current?.swiper.slideNext()}
              aria-label="Next Package"
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
            <SwiperSlide key={pkg.slug} className="h-auto">
              <div className="group h-full flex flex-col justify-between bg-[#4d4f61] rounded-3xl overflow-hidden border border-slate-900/60 hover:border-slate-800/80 transition-all duration-300 select-none">
                
                {/* Card Top Block (Image & Details) */}
                <div>
                  <div className="relative w-full h-60 overflow-hidden">
                    <Image 
                      src={`${prefix}${pkg.image}`} 
                      alt={`${pkg.title}, water sports package in Bentota`} 
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      draggable={false}
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 pointer-events-none"
                    />
                    <span className={`absolute top-4 right-4 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md ${pkg.badgeColor}`}>
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-lg font-black uppercase tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                        {pkg.title}
                      </h3>
                    </div>

                    <div className="border-b border-slate-800/60 mb-5" />

                    <ul className="space-y-3">
                      {pkg.activities.map((item, idx) => (
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
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Min {pkg.minimum} persons</span>
                  </div>

                  <Link  aria-label={`View ${pkg.title} package`} href={`/packages/${pkg.slug}`} className="btn primary-button w-full border border-white hover:border-cyan-500/30 tracking-widest items-center justify-center">
                    Explore Package
                  </Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
       <div className="flex justify-center mt-12"> 
            <Link aria-label="View All Packages" href="/packages" className="btn primary-button items-center justify-center gap-2 hover:gap-4">
             View All Packages <FaArrowRight size={15} /> 
            </Link>
            </div>
    </section>
  );
}


