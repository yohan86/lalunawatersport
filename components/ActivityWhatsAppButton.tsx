"use client"
import { FaWhatsapp } from "react-icons/fa";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

interface ActivityWhatsAppButtonProps {
    title:string;
}
const ActivityWhatsAppButton = ({title}:ActivityWhatsAppButtonProps) => {
    const whatsappNumber = "94765504541";
    const whatsappMessage = encodeURIComponent(
    `Hi LaLuna! I am interested in booking '${title}'. Could you please provide the direct rate and availability?`
  );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const handleClick = () => {
        // Fire GA4 Key Event / Conversion type-safely
        if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
            event_category: "Conversion",
            event_label: `WhatsApp - ${title}`,
            value: 1,
        });
        }
    };

    return (
    <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="btn primary-button w-full flex text-center justify-center items-center shadow-md !bg-emerald-600 gap-2 text-[14px] md:text-[16px] hover:!bg-emerald-700 transition-colors text-base"
        >
        <FaWhatsapp className="text-xl" /> Get Rate via WhatsApp
    </a>
  )
}

export default ActivityWhatsAppButton