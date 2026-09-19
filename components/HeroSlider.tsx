"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import { prefix } from '@/utils/prefix';
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"



const HeroSlider = () => {
    const containerRef = useRef<HTMLDivElement>(null)

  // Reusable animation function for caption items
  const animateCaption = () => {
    gsap.fromTo(
      ".caption > *",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power1.inOut",
      },
      
    )
  }

  // Run entrance animation on component mount
  useGSAP(() => {
    animateCaption()
  }, { scope: containerRef });

  return (
   <section className="flex w-full max-w-[1600px] m-auto h-[calc(100vh-90px)] md:h-[560px]">
            <div ref={containerRef} className="hero-slider relative w-full h-[460px] md:h-[560px]">
                <div className="caption absolute flex flex-col w-[90%] items-center text-center justify-center top-20 left-[5%] text-white  z-10 [text-shadow:6px_4px_12px_#0a2668cc]">
                    <h1 className="font-cursive text-[28px] md:text-[40px] font-medium text-white!">Experience the Best Water Sports in Bentota, Sri Lanka</h1>
                    <h2 className="font-display text-[35px] leading-10 md:text-[40px] text-white!">Jet Ski • Banana Boat • River Safari • Wakeboarding</h2>
                    <p className="font-cursive text-[28px] md:text-[40px] font-medium "></p>
                    <Link href="/services" aria-label="Explore Water Sports" className="flex text-[16px] mt-6 py-2 px-6 md:py-3 font-bold bg-[#00d6ba] text-white rounded-4xl hover:bg-[#3eb6a6] transition-all duration-300 border-2 border-[#fff] gap-3 hover:gap-4">
                        <span className="leading-[25px]">Explore Water Sports</span><FaArrowRightLong size={24} className="mt-[2px]" />
                    </Link>
                </div>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                breakpoints={{
                    1024:{
                        navigation:true
                    }
                }}
                className="h-[calc(100vh-90px)] md:h-[560px]"
            >
                <SwiperSlide>
                    <div className="hero-slider__item relative w-full h-[calc(100vh-90px)] md:h-[560px]">
                        <Image 
                        src={`${prefix}/images/slider/lay-down-bentota-1900.jpg`} 
                        sizes="100vw" 
                        alt="Jet ski adventure in Bentota at LaLuna Water Sports Center" 
                        priority fill 
                        className="object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-slider__item relative w-full h-[calc(100vh-90px)] md:h-[560px]">
                        <Image 
                        src={`${prefix}/images/slider/jetski_bentota_1900.jpg`} 
                        sizes="100vw" 
                        alt="Jet Ski ride in Bentota, Sri Lanka" 
                        fill 
                        className="object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-slider__item relative w-full h-[calc(100vh-90px)] md:h-[560px]">
                        <Image 
                        src={`${prefix}/images/slider/donut_ride_bentota_1900.jpg`} 
                        sizes="100vw" 
                        alt="donut ride experience in Bentota, Sri Lanka" 
                        fill 
                        className="object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-slider__item relative w-full h-[calc(100vh-90px)] md:h-[560px]">
                        <Image 
                        src={`${prefix}/images/slider/sofa-bed-bentota.jpg`} 
                        sizes="100vw" 
                        alt="Sofa bed ride experience in Bentota, Sri Lanka" 
                        fill 
                        className="object-cover" />
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
   </section>
  )
}

export default HeroSlider