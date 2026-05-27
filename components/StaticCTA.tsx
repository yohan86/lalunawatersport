import Image from 'next/image';
import { FaCalendarCheck, FaWhatsapp } from 'react-icons/fa';
import { prefix } from '@/utils/prefix';


export default function StaticCTA() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Main Container Banner Box */}
      <div className="w-full mx-auto relative overflow-hidden shadow-[0_25px_60px_rgba(6,182,212,0.15)]">
        
        {/* Static Background Image Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image 
            src={`${prefix}/images/cta-bg.jpg`} // Set your favorite Fly Fish or Jet Ski action shot here
            alt="La Luna Adventure Playground"
            fill
            className="object-cover brightness-[0.35]" // Keeps image dark so white text stands out beautifully
            priority // Tells Next.js to load this instantly
          />
        </div>

        {/* Ambient Blurred Lighting Accents */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/15 rounded-full blur-[90px] z-10 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-500/15 rounded-full blur-[90px] z-10 pointer-events-none" />

        {/* Action Content Overlay */}
        <div className="relative z-20 px-6 py-20 md:p-16 lg:p-24 text-center mx-auto flex flex-col items-center">
          
          {/* Animated Pulse Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] md:text-[18px] font-extrabold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6 animate-pulse select-none">
            <span className="w-2 h-2 bg-cyan-400 rounded-full -mt-4 md:mt-0" />
            Limited Slots Available For This Week
          </span>

          {/* Main Title Headline */}
          <h2 className="text-3xl md:text-5xl font-black tracking-wider text-[#b2e0c5]! leading-tight drop-shadow-lg">
            <span className="inline-block md:flex">Ready to Make a <span className="text-cyan-400 font-cursive ml-4">Splash</span></span> in Bentota?
          </h2>

          {/* Subtext Description */}
          <p className="text-slate-200 text-base md:text-lg mt-4 font-semibold leading-relaxed max-w-2xl drop-shadow-md">
            Don&apos;t miss out on Sri Lanka&apos;s ultimate river and ocean playground. Secure your adventure package or book single slots right now!
          </p>

          {/* Action Trigger Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto">
            
            {/* Primary Action Button - Booking Link */}
            <button className="inline-flex items-center justify-center gap-3 px-8 py-4.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black uppercase text-xs tracking-widest rounded-xl transition-all duration-300 shadow-[0_4px_25px_rgba(6,182,212,0.4)] hover:shadow-[0_4px_35px_rgba(6,182,212,0.6)] cursor-pointer group">
              <FaCalendarCheck size={14} className="transition-transform group-hover:scale-110" />
              Contact Us to Book
            </button>

            {/* Secondary Action Button - Direct WhatsApp Hook */}
            <a 
              href="https://wa.me/+94719149393?text=Hello%20La%20Luna!%20I%27m%20interested%20in%20booking%20a%20water%20sports%20activity.%20Could%20you%20please%20provide%20more%20details?" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4.5 bg-slate-950/80 hover:bg-slate-950 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/60 font-black uppercase text-xs tracking-widest rounded-xl transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              <FaWhatsapp size={16} className="text-emerald-400" />
              Chat on WhatsApp
            </a>

          </div>

          {/* Micro Trust Policy Caption */}
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-6 select-none drop-shadow">
            ⚡ Free Cancellation Up To 24 Hours in Advance
          </p>

        </div>

      </div>
    </section>
  );
}