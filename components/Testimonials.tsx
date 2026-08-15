"use client";
import { useRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import Swiper styling assets if not already included globally
import 'swiper/css';
import 'swiper/css/pagination';

const REVIEWS = [
  {
    id: 1,
    name: 'armaan kapoor',
    country: 'India',
    rating: 5,
    date: 'May 2026',
    activity: 'Great experience with Laluna Water Sports',
    comment: `We had a great experience with Laluna Water Sports in Bentota. We did the water safari and jet skiing with them, and overall it was a really good time.

Their pricing is very fair. I wouldn’t say it’s cheap, but for the kind of service and experience they provide, it feels completely justified.`
  },
  {
    id: 2,
    name: 'Hasandi Fernando',
    country: 'Sri Lanka',
    rating: 5,
    date: 'Octomber 2025',
    activity: 'It was such a nice experience',
    comment: `We were a bit late but they still provided us with a very good service. We did the individual jet ski for 15 minutes and they made sure everything was save and fun. They also offered us a customisable package with the banana boat, flying fish and lying down and it was perfect! Definitely recommend!!`
  },
  {
    id: 3,
    name: 'Shalini Vijayagopalan',
    country: 'Sri Lanka',
    rating: 5,
    date: '9 months ago',
    activity: 'really nice experience',
    comment: `We had a really nice experience here. Nearly 8 adults and 6 kids. Did kayaking , jet ski, banana ride and the sofa ride.Quite well managed and a good concern for safety.The cost is reasonable considering that they make their livelihood from tourism. The massage place attached is also quite good.`
  },
 
];

export default function TestimonialsSection() {
const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className="py-24 bg-[#0a6675] text-white px-6 md:px-12 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Navigation Sync */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-site-green! font-display tracking-widest text-[28px]">Guest Reviews</h2>
            <h3 className="text-[#c9cfd7]! text-4xl md:text-5xl font-black uppercase tracking-wider mt-2">
              What Adventurers Say
            </h3>
            <p className="text-white/80 mt-3 max-w-xl text-base">
              Don’t just take our word for it. Here is the feedback from travelers who experienced the rush with La Luna.
            </p>
          </div>

          {/* Slider Controllers */}
          <div className="flex gap-3 h-fit select-none">
            <button 
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              aria-label="Previous Review"
              className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer"
            >
              <FaArrowLeft size={14} />
            </button>
            <button 
              onClick={() => swiperRef.current?.swiper.slideNext()}
              aria-label="Next Review"
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