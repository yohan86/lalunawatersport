"use client"
import { prefix } from '@/utils/prefix'
import Image from 'next/image'
import Link from 'next/link'

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin to ensure client-side initialization
gsap.registerPlugin(ScrollTrigger);

const AboutLaluna = () => {
  // Move containerRef to the top-level element so scope covers both text & images
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    
  useGSAP(() => {
    // 1. Create a timeline attached to the section's scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        //start: "top 80%",  // Starts when top of section hits 80% viewport height
        //end: "bottom 90%",    // Completes when top reaches 20%
        start: isMobile ? "top bottom" : "top 90%",  // Starts when top of section hits 80% viewport height
        end: "bottom 90%",    // Completes when top reaches 20%
        scrub:0.1,          // Smoothly links animation progress to scroll speed
        markers: false      // Remove when ready for production
      }
    });

    // 2. Animate photos staggering up from bottom to position
    tl.fromTo(
      '.about',
      { y: 200, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0, 
        ease: "power2.out" 
      },
    ).fromTo(
      '.about-photo',
      { y: 150, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2,
        ease: "power2.out" 
      },
      "<0.2"  // Start this animation at the same time as the previous one
    );

  }, { scope: containerRef });

  return (
    <section  className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-30">
        
        {/* Left Column: Text Content */}
        <div className="space-y-3">
          <div className="about">
            <h3 className="text-site-green font-bold font-cursive block text-[32px]">
              Welcome to LaLuna
            </h3>
            <h2 className="text-xl lg:text-4xl font-bold leading-tight mb-5">
              Bentota&apos;s <br /> Premier Watersports Center & Riverfront Experience
            </h2>
            <p className="text-gray-600 leading-relaxed">
              25+ Years of Thrills, Unmatched Safety & Warm Island Hospitality on the Bentota River.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For over a decade, La Luna Water Sports has been the leading water sports destination in Bentota, Sri Lanka. Situated directly on the banks of the scenic Bentota River, we offer the ultimate blend of high-speed ocean thrills, luxury riverfront relaxation, and authentic family-run hospitality.
            </p>
            <div className="flex my-6">
              <Link 
                href="/services" 
                className="btn primary-button"
                aria-label="Explore Activities"
              >
                Explore Activities
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Composite Image Showcase */}
        <div className="flex gap-3">
          <div className="about-photo relative h-[225px] md:h-[450px] w-[250px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            <Image
              src={`${prefix}/images/about/lalunaresort2.jpg`}
              alt="Thrilling ocean sports"
              fill
              className="object-cover"
            />
          </div>
          <div className="about-photo relative h-[125px] md:h-[300px] w-[250px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            <Image
              src={`${prefix}/images/about/lalunaresort.jpg`}
              alt="Thrilling ocean sports"
              fill
              className="object-cover"
            />
          </div>
          <div className="about-photo relative h-[225px] md:h-[450px] w-[250px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            <Image
              src={`${prefix}/images/about/lalunaresort3.jpg`}
              alt="Thrilling ocean sports"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

      {/* Fleet Section */}
      <div className="relative flex flex-col md:flex-row-reverse gap-12 items-center">
        <div className="absolute right-0 -top-15 md:top-0 h-20 w-50 md:w-70 md:h-30 rotate-25 opacity-80">
          <Image
            src={`${prefix}/images/about/jet-ski.png`}
            alt="Thrilling ocean sports"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="space-y-3 w-full md:w-[50%]">
          <h2 className="text-xl lg:text-4xl font-bold leading-tight">
            Modern Fleet <br />& Premium Equipment
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We take pride in maintaining one of the largest and newest equipment fleets in Sri Lanka. From high-powered, regularly serviced Yamaha Jet Skis to luxury speedboats, kayaks, and high-adrenaline towable tubes, our machinery is inspected daily to ensure peak performance and 100% reliability.
          </p>
          
          <div className="flex my-6">
            <Link 
              href="/packages" 
              className="btn primary-button"
            >
              Explore 
              packages
            </Link>
          </div>
        </div>

        <div className="relative h-[350px] w-full md:h-[450px] md:w-[450px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
          <Image
            src={`${prefix}/images/about/fleets.jpg`}
            alt="Thrilling ocean sports"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutLaluna;