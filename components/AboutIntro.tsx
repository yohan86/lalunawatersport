"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import VideoPopUp from "./VideoPopUp";
import { prefix } from "../utils/prefix";

gsap.registerPlugin(ScrollTrigger);

const AboutIntro = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Helper function to calculate and animate images from grid center
    const animateImagesFromCenter = (timeline: gsap.core.Timeline) => {
      const gridContainer = imageRef.current;
      const images = gsap.utils.toArray<HTMLElement>(".about-images .image");

      if (!gridContainer || images.length === 0) return;

      const containerCenterX = gridContainer.offsetWidth / 2;
      const containerCenterY = gridContainer.offsetHeight / 2;

      images.forEach((img) => {
        const imgCenterX = img.offsetLeft + img.offsetWidth / 2;
        const imgCenterY = img.offsetTop + img.offsetHeight / 2;

        const deltaX = containerCenterX - imgCenterX;
        const deltaY = containerCenterY - imgCenterY;

        timeline.fromTo(
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
            duration: 2.5,
            ease: "power1.inOut",
          },
          0
        );
      });
    };

    // ----------------------------------------------------
    // Desktop View (min-width: 768px)
    // ----------------------------------------------------
    mm.add("(min-width: 768px)", () => {
      // 1. Image Timeline Trigger
      const imgTl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          end: "top 25%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      animateImagesFromCenter(imgTl);

      // 2. Text Content Timeline Trigger
      gsap.timeline({
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 85%",
          end: "top 25%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      }).fromTo(
        ".about-intro > *",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 2,
          ease: "power2.out",
        }
      );
    });

    // ----------------------------------------------------
    // Mobile View (max-width: 767px) - Handles flex-col-reverse
    // ----------------------------------------------------
    mm.add("(max-width: 767px)", () => {
      // 1. Mobile Image Timeline Trigger (Starts as soon as top enters viewport)
      const imgTl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 95%",
          end: "top 65%",
          scrub: 1,
          duration: 1.5,
          invalidateOnRefresh: true,
        },
      });
      animateImagesFromCenter(imgTl);

      // 2. Mobile Text Content Timeline Trigger (Triggers separately when scrolled down)
      gsap.timeline({
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 90%",
          end: "top 35%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      }).fromTo(
        ".about-intro > *",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 2,
          ease: "power2.out",
        }
      );
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="main-wrapper bg-white flex flex-col-reverse md:flex-row justify-between gap-6 my-10 md:my-25"
    >
      {/* Photo Showcase Grid */}
      <div
        ref={imageRef}
        className="about-images grid grid-cols-2 w-full md:w-[500px] relative items-start gap-y-4"
      >
        {/* Photo 1: Top Left */}
        <div className="image relative w-36 h-36 md:w-60 md:h-60 rounded-full overflow-hidden shrink-0 justify-self-center">
          <Image
            src={`${prefix}/images/sports/donut-ride-bentota.jpg`}
            alt="Donut ride adventure in Bentota at LaLuna Water Sports Center"
            fill
            className="object-cover"
          />
        </div>

        {/* Photo 2: Top Right */}
        <div
          onClick={() => setActiveVideo("sport-video2.mp4")}
          className="image relative w-28 h-28 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 justify-self-center mt-0 md:mt-0 cursor-pointer group"
        >
          <Image
            src={`${prefix}/images/sports/sport-4.jpg`}
            alt="Sports Image 4"
            fill
            className="object-cover"
          />
          {/* Play Overlay Button */}
          <div className="absolute inset-0 bg-black/30 opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-10 h-10 bg-site-green text-white rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
              <FaPlay size={16} />
            </div>
          </div>
        </div>

        {/* Photo 3: Bottom Left */}
        <div
          onClick={() => setActiveVideo("sofa-bed.mp4")}
          className="image relative w-28 h-28 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 justify-self-center mt-6 md:mt-6 cursor-pointer group"
        >
          <Image
            src={`${prefix}/images/sports/sofa-bed.jpg`}
            alt="Sofa bed activities in Bentota"
            fill
            className="object-cover"
          />
          {/* Play Overlay Button */}
          <div className="absolute inset-0 bg-black/30 opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-10 h-10 bg-site-green text-white rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
              <FaPlay size={16} />
            </div>
          </div>
        </div>

        {/* Photo 4: Bottom Right */}
        <div className="image relative w-36 h-36 md:w-60 md:h-60 rounded-full overflow-hidden shrink-0 justify-self-center -mt-6 md:-mt-12">
          <Image
            src={`${prefix}/images/sports/water-sport-jetski-bentota.jpg`}
            alt="Jet Ski adventure in Bentota at LaLuna Water Sports Center"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Column */}
      <div className="about-intro flex flex-col w-full md:w-[45%] mb-10 md:mb-0">
        <h2 className="text-4xl font-bold mb-6 text-site-green! font-display! [text-shadow:1px_2px_2px_#404242cc]">
          Ride the Thrill at Bentota River
        </h2>
        <h3 className="text-xl font-semibold mb-8 text-[#54686e]!">
          Unleash your inner adventurer with Sri Lanka’s premier water sports
          experience. Jet ski, flyboard, and dive into pure excitement
        </h3>
        <p className="text-gray-700 mb-6">
          At La Luna, we are passionate about creating unforgettable
          experiences for our clients. With years of expertise in the
          industry, we specialize in crafting unique and personalized events
          that leave a lasting impression.
        </p>
        <Link
          href="/about"
          className="btn primary-button gap-2 hover:gap-4 inline-flex items-center"
        >
          <span>Learn More</span>
          <FaArrowRightLong size={15} className="mt-[2px]" />
        </Link>
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <VideoPopUp
          url={activeVideo}
          closefn={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
};

export default AboutIntro;