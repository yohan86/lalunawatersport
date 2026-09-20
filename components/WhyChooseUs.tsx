'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Smooth viewport-relative parallax calculation
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const distanceFromTop = rect.top - viewportHeight;
        setOffsetY(distanceFromTop * 0.32); // 22% parallax speed ratio
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trustMetrics = [
    { value: '25+', label: 'Years Experience' },
    { value: '15+', label: 'Water Activities' },
    { value: '725K+', label: 'Happy Clients' },
  ];

  const features = [
    {
      num: '01',
      title: 'USCG-Certified Safety First',
      description:
        'Latest-model Yamaha & Seadoo WaveRunners, speedboats inspected daily. Certified life jackets provided for all age groups.',
    },
    {
      num: '02',
      title: '15+ Water Activities & River Safaris',
      description:
        'From high-speed Jet Skiing & Sofa rides to peaceful Bentota River Safaris through natural mangroves.',
    },
    {
      num: '03',
      title: 'Transparent Local Pricing',
      description:
        'No hidden fuel surcharges or surprise booking fees. Direct water sports package pricing in Sri Lanka.',
    },
    {
      num: '04',
      title: 'Prime Aluthgama & Bentota Location',
      description:
        'Situated right on the calm riverbank with complimentary pickup transfers for guests at nearby hotels.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 sm:px-12 my-12"
    >
      {/* Background Layer with Relative Parallax Offset */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center h-[130%] -top-[15%] w-full will-change-transform"
        style={{
          backgroundImage: `url('/images/slider/donut_ride_bentota_1900.jpg')`, // Ensure image path exists in /public
          transform: `translate3d(0, ${offsetY}px, 0)`,
        }}
      >
        {/* Dark Ocean Gradient Overlay */}
        <div className="absolute inset-0 bg-slate-950/55 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950" />
      </div>

      {/* Main Content Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Header, Google Trust Badge & Action Sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 uppercase tracking-widest text-xs font-bold">
              The LaLuna Standard
            </span>

            {/* Google Rating Block */}
            <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 rounded-xl p-3 w-fit backdrop-blur-md">
              {/* Interactive Google Rating Block */}
                <a
                href="https://www.google.com/maps/search/?api=1&query=LaLuna+Water+Sports+Center+Bentota" // Replace with your actual Google Maps URL or Place ID link
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-3 w-fit backdrop-blur-md transition-all duration-300 shadow-lg cursor-pointer"
                >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                    <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                </svg>
                <div>
                    <div className="flex items-center gap-1.5">
                    <span className="text-white font-extrabold text-sm group-hover:text-cyan-400 transition-colors">
                        4.1 / 5.0
                    </span>
                    <div className="flex text-amber-400 text-xs">★★★★★</div>
                    </div>
                    <span className="text-stone-400 text-xs flex items-center gap-1 group-hover:text-stone-300 transition-colors">
                    Read 125+ Google Reviews <span className="text-cyan-400 font-bold">↗</span>
                    </span>
                </div>
                </a>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white! tracking-tight leading-tight">
              Why Book With <span className="text-cyan-400">LaLuna Center</span>?
            </h2>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              Sri Lanka’s premier water sports & river safari destination in Bentota & Aluthgama. We combine modern Yamaha & Seadoo equipment with certified safety standards.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                href="/services"
                className="w-full px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-base transition-all duration-300 shadow-lg shadow-cyan-500/20 text-center"
              >
                Explore 15+ Services →
              </Link>
              <a
                href="https://wa.me/94765504541?text=Hi%20LaLuna!%20I%20would%20like%20to%20inquire%20about%20water%20sports%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center w-full px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/40 text-cyan-400 font-extrabold text-base transition-all duration-300 text-center backdrop-blur-md"
              >
                <FaWhatsapp size={16} className="text-emerald-400" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Trust Metrics Strip + Scrolling Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-xl text-center">
              {trustMetrics.map((metric, idx) => (
                <div key={idx} className={idx > 0 ? 'border-l border-slate-800' : ''}>
                  <div className="text-2xl sm:text-4xl font-extrabold text-cyan-400 font-mono">
                    {metric.value}
                  </div>
                  <div className="text-stone-300 text-xs sm:text-sm font-medium mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Cards */}
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-900/60 border border-slate-800/80 rounded-2xl p-8 hover:border-cyan-400/60 hover:bg-slate-900/80 transition-all duration-300 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row sm:items-start gap-6"
              >
                <div className="text-3xl font-extrabold text-cyan-400 font-mono bg-cyan-950/60 border border-cyan-500/30 rounded-xl px-4 py-2 w-fit">
                  {feature.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}