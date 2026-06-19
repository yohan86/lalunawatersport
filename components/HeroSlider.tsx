"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import { prefix } from '@/utils/prefix';



const HeroSlider = () => {
  return (
   <section className="flex w-full max-w-[1600px] m-auto h-[calc(100vh-90px)] md:h-[560px]">
            <div className="hero-slider relative w-full h-[460px] md:h-[560px]">
                <div className="absolute flex flex-col w-[90%] items-center text-center justify-center top-20 left-[5%] text-white  z-10 [text-shadow:6px_4px_12px_#0a2668cc]">
                    <p className="font-cursive text-[28px] md:text-[40px] font-medium">Come and fun with</p>
                    <h1 className="text-[35px] md:text-[72px]">La Luna Water Sports Center</h1>
                    <Link href="#services" className="flex text-[16px] mt-6 py-2 px-6 md:py-3 font-bold bg-[#00d6ba] text-white rounded-4xl hover:bg-[#3eb6a6] transition-all duration-300 border-2 border-[#fff] gap-3 hover:gap-4">
                        <span className="leading-[25px]">Explore Our Services</span><FaArrowRightLong size={24} className="mt-[2px]" />
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
                        <Image src={`${prefix}/images/slider/slider-1.jpg`} alt="Hero Image" fill className="object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-slider__item relative w-full h-[calc(100vh-90px)] md:h-[560px]">
                        <Image src={`${prefix}/images/slider/slider-2.jpg`} alt="Hero Image" fill className="object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-slider__item relative w-full h-[calc(100vh-90px)] md:h-[560px]">
                        <Image src={`${prefix}/images/slider/slider-3.jpg`} alt="Hero Image" fill className="object-cover" />
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
   </section>
  )
}

export default HeroSlider