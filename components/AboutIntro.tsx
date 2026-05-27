import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6";
import {prefix} from "../utils/prefix";


const AboutIntro = () => {
  return (
    <section className="main-wrapper flex-col-reverse md:flex-row justify-between gap-2 my-10 md:my-25">
      <div className="about-images grid grid-cols-2 w-full md:w-125 relative  items-start">
        
        <div className="image relative w-40 h-40 md:w-75 md:h-75 rounded-full overflow-hidden shrink-0 ">
          <Image src={`${prefix}/images/sports/sport-2.jpg`} alt="Sports Image 2" fill className="object-cover"/>
        </div>
        <div className="image relative w-30 h-30 md:w-40 md:h-40 rounded-full overflow-hidden md:ml-20 mt-6 md:mt-15 shrink-0">
          <Image src={`${prefix}/images/sports/sport-4.jpg`} alt="Sports Image 2" fill className="object-cover"/>
        </div>
        <div className="image relative w-30 h-30 md:w-40 md:h-40 rounded-full overflow-hidden ml-10 mt-5 md:-mt-10 md:ml-15 shrink-0">
          <Image src={`${prefix}/images/sports/sport-1.jpg`} alt="Sports Image 3" fill className="object-cover"/>
        </div>
        
        
        <div className="image relative w-40 h-40 md:w-75 md:h-75 rounded-full overflow-hidden md:-mt-30  shrink-0">
          <Image src={`${prefix}/images/sports/sport-3.jpg`} alt="Sports Image 1" fill className="object-cover"/>
        </div>
      </div>
      <div className="about-intro flex flex-col w-full md:w-[40%] mb-15 md:mb-0">
        <h1 className="text-4xl font-bold mb-6 text-site-green [text-shadow:1px_2px_2px_#404242cc]">Ride the Thrill at Bentota River</h1>
        <h2 className="text-xl font-semibold mb-8">Unleash your inner adventurer with Sri Lanka’s premier water sports experience. Jet ski, flyboard, and dive into pure excitement</h2>
        <p className="text-gray-700 mb-6">
          At La Luna, we are passionate about creating unforgettable experiences for our clients. With years of expertise in the industry, we specialize in crafting unique and personalized events that leave a lasting impression. Our team of dedicated professionals is committed to delivering exceptional service and attention to detail, ensuring that every aspect of your event is flawlessly executed. Whether you&#39;re planning a wedding, corporate event, or special celebration, La Luna is here to bring your vision to life and make your dreams a reality.
        </p>
        <button className="btn primary-button gap-2 hover:gap-4">
          
          <span className="">Learn More</span><FaArrowRightLong size={15} className="mt-[5px]" />
        </button>
      </div>
    </section>
  )
}

export default AboutIntro