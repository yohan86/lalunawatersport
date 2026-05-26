import AboutIntro from "@/components/AboutIntro";
import HeroSlider from "@/components/HeroSlider";
import OurServices from "@/components/OurServices";
import Packages from "@/components/Packages";
import StaticCTA from "@/components/StaticCTA";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <HeroSlider />
    <div className="wrapper-container">
        <AboutIntro />
        <OurServices />
        <Packages />
        <StaticCTA />
        <Testimonials />
    </div>
    </>
  );
}
