"use client";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import Swiper styling assets if not already included globally
import 'swiper/css';
import 'swiper/css/pagination';

const REVIEWS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    country: 'United Kingdom',
    rating: 5,
    date: 'May 2026',
    activity: 'Jet Ski & Fly Fish',
    comment: 'Absolutely incredible experience! The Fly Fish ride was insane—we caught so much air. Instructors were professional, fun, and made us feel totally safe the whole time. Highlight of our Bentota trip!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    country: 'Australia',
    rating: 5,
    date: 'April 2026',
    activity: 'Extreme Adrenaline Pack',
    comment: 'We booked the 3-activity combo pack. It is worth every single dollar. The Jet Skis are fast and well-maintained. Booking through WhatsApp was incredibly fast and easy.'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    country: 'Germany',
    rating: 5,
    date: 'Rhine Tour Traveler',
    activity: 'Mangrove River Safari',
    comment: 'Beautiful, peaceful boat trip down the river. Our guide pointed out crocodiles, monitor lizards, and beautiful birds. Perfect for families. Highly recommend La Luna!'
  },
  {
    id: 4,
    name: 'David & Family',
    country: 'UAE',
    rating: 5,
    date: 'March 2026',
    activity: 'River Breeze Family Combo',
    comment: 'Took my kids on the Banana Boat and Kayaks. The life jackets fit perfectly, and the staff were watching closely. Safe, organized, and beautifully positioned on the river.'
  },
  {
    id: 5,
    name: 'Tomás Silva',
    country: 'Portugal',
    rating: 5,
    date: 'February 2026',
    activity: 'Deep Sea Diving',
    comment: 'Great dive site setups and pristine gear. The divemaster knew the local reef structures perfectly. Saw turtles and amazing schools of fish. 10/10.'
  }
];

export default function TestimonialsSection() {
  const swiperRef = useRef(null);

  return (
    <section className="py-24 bg-[#0a6675] text-white px-6 md:px-12 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Navigation Sync */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div className="text-left">
            <h3 className="text-site-green font-display tracking-widest text-[28px]">Guest Reviews</h3>
            <h2 className="text-[#c9cfd7]! text-4xl md:text-5xl font-black uppercase tracking-wider mt-2">
              What Adventurers Say
            </h2>
            <p className="text-white/80 mt-3 max-w-xl text-base">
              Don’t just take our word for it. Here is the feedback from travelers who experienced the rush with La Luna.
            </p>
          </div>

          {/* Slider Controllers */}
          <div className="flex gap-3 h-fit select-none">
            <button 
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer"
            >
              <FaArrowLeft size={14} />
            </button>
            <button 
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer"
            >
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Swiper Slider Wrapper Container */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14" // Adds space at the bottom for pagination dots
        >
          {REVIEWS.map((review) => (
            <SwiperSlide key={review.id} className="h-auto">
              <div className="bg-slate-900/40 border border-slate-900/80 p-8 rounded-3xl h-full flex flex-col justify-between relative group hover:border-slate-800 transition-all duration-300 select-none">
                
                {/* Visual Quote Icon Accent */}
                <FaQuoteLeft className="absolute top-6 right-8 text-[#f1f7ff] text-4xl pointer-events-none transition-colors group-hover:text-cyan-950/40 duration-300" />

                <div>
                  {/* Rating Stars Block */}
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-300 text-sm leading-relaxed italic font-medium mb-6 relative z-10">
                    &quot;{review.comment}&quot;
                  </p>
                </div>

                {/* Profile Identity Bottom Footer */}
                <div>
                  <div className="border-t border-slate-800/60 pt-4 mb-3" />
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-black text-white text-base tracking-wide uppercase">
                        {review.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">
                        {review.country}
                      </p>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-900/50 px-2.5 py-1 rounded-md">
                      {review.activity}
                    </span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Inject custom styling overrides into Swiper pagination dots to match cyan theme */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #fff !important;
          opacity: 0.6;
          width: 12px !important;
          height: 12px !important;
        }
        .swiper-pagination-bullet-active {
          background: #06b6d4 !important;
          width: 20px !important;
          border-radius: 4px !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}