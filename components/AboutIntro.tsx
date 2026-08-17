"use client"
import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6";
import { prefix } from "../utils/prefix";
import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoPopUp from "./VideoPopUp";
import { FaPlane, FaPlay } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AboutIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Helper function to animate images from grid center to final layout
    const animateFromCenter = () => {
      const gridContainer = containerRef.current?.querySelector(".about-images") as HTMLElement;
      const images = gsap.utils.toArray<HTMLElement>(".about-images .image");

      if (!gridContainer || images.length === 0) return;

      const containerCenterX = gridContainer.offsetWidth / 2;
      const containerCenterY = gridContainer.offsetHeight / 2;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          end: "top 20%",
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      images.forEach((img) => {
        const imgCenterX = img.offsetLeft + img.offsetWidth / 2;
        const imgCenterY = img.offsetTop + img.offsetHeight / 2;

        const deltaX = containerCenterX - imgCenterX;
        const deltaY = containerCenterY - imgCenterY;

        tl.fromTo(
          img,
          {
            x: deltaX,
            y: deltaY,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration:2.5,
            ease: "power1.out",
          },
          0
        );
        tl.fromTo(
        ".about-intro > *",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 2,
          duration:2,
          ease: "power2.out",
        },
        "<0.5" // Starts 0.2s into the image expansion
      );
      });
    };

    // Desktop Breakpoint
    mm.add("(min-width: 768px)", () => {
      animateFromCenter();
    });

    // Mobile Breakpoint
    mm.add("(max-width: 767px)", () => {
      animateFromCenter();
    });

    return () => mm.revert();

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="main-wrapper bg-white flex-col-reverse md:flex-row justify-between gap-6 my-10 md:my-25">
      
      {/* Photo Showcase Grid */}
      <div className="about-images grid grid-cols-2 w-full md:w-[500px] relative items-start gap-y-4">
        
        {/* Photo 1: Top Left */}
        <div className="image relative w-36 h-36 md:w-60 md:h-60 rounded-full overflow-hidden shrink-0 justify-self-center"
        
        >
          <Image src={`${prefix}/images/sports/sport-2.jpg`} alt="Sports Image 2" fill className="object-cover"/>
        </div>

        {/* Photo 2: Top Right */}
        <div onClick={()=> setActiveVideo("sport-video2.mp4")} className="image relative w-28 h-28 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 justify-self-center mt-0 md:mt-0">
          <Image src={`${prefix}/images/sports/sport-4.jpg`} alt="Sports Image 4" fill className="object-cover"/>
              { /* Play Overlay Button */}
              <div className="absolute inset-0 bg-black/30 opacity-100 transition-opacity duration-300 flex items-center justify-center curso">
                <div className="w-10 h-10 bg-site-green text-white rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
                  <FaPlay size={16} />
                </div>
              </div>
        </div>

        {/* Photo 3: Bottom Left */}
        <div onClick={()=> setActiveVideo("sofa-bed.mp4")} className="image relative w-28 h-28 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 justify-self-center mt-6 md:mt-6">
          <Image src={`${prefix}/images/sports/sofa-bed.jpg`} alt="Sports Image 1" fill className="object-cover"/>
          { /* Play Overlay Button */}
              <div className="absolute inset-0 bg-black/30 opacity-100 transition-opacity duration-300 flex items-center justify-center curso">
                <div className="w-10 h-10 cursor-pointer bg-site-green text-white rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
                  <FaPlay size={16} />
                </div>
              </div>
        </div>
        
        {/* Photo 4: Bottom Right */}
        <div className="image relative w-36 h-36 md:w-60 md:h-60 rounded-full overflow-hidden shrink-0 justify-self-center -mt-6 md:-mt-12">
          <Image src={`${prefix}/images/sports/sport-3.jpg`} alt="Sports Image 3" fill className="object-cover"/>
        </div>

      </div>

      {/* Content Column */}
      <div className="about-intro flex flex-col w-full md:w-[45%] mb-10 md:mb-0">
        <h2 className="text-4xl font-bold mb-6 text-site-green! font-display! [text-shadow:1px_2px_2px_#404242cc]">
          Ride the Thrill at Bentota River
        </h2>
        <h3 className="text-xl font-semibold mb-8 text-blue-900!">
          Unleash your inner adventurer with Sri Lanka’s premier water sports experience. Jet ski, flyboard, and dive into pure excitement
        </h3>
        <p className="text-gray-700 mb-6">
          At La Luna, we are passionate about creating unforgettable experiences for our clients. With years of expertise in the industry, we specialize in crafting unique and personalized events that leave a lasting impression.
        </p>
        <Link href="/about" className="btn primary-button gap-2 hover:gap-4">
          <span>Learn More</span><FaArrowRightLong size={15} className="mt-[5px]" />
        </Link>
      </div>
      {activeVideo && <VideoPopUp url={activeVideo} closefn={()=>setActiveVideo(null)} />}
    </section>

  )
}

export default AboutIntro;