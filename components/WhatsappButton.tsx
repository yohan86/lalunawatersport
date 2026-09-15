"use client";

import React, { useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({
  phoneNumber = "94765504541",
  defaultMessage = "Hello, I would like to get more details about water sports at LaLuna water sports center, Bentota.",
}: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  // Encode message for standard WhatsApp URL format
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-20 right-6 z-50 flex items-end gap-3 pointer-events-auto">
      {/* Optional Greeting Badge (Desktop) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 bg-[#0D1A12] border border-[#C5A059]/40 text-[#F7F4EE] px-4 py-3 rounded-lg shadow-2xl max-w-xs animate-fade-in relative">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-[#C5A059]">
              Water Sports Desk Online
            </p>
            <p className="text-xs text-[#A3B0A7]">
              Have questions? Chat with our team.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close message"
            className="absolute top-2 right-2 text-[#A3B0A7] hover:text-white text-xs ml-1"
          >
            ✕
          </button>
          
          {/* Subtle Indicator Arrow pointing to the button */}
          <div className="absolute right-[-6px] bottom-4 w-3 h-3 bg-[#0D1A12] border-t border-r border-[#C5A059]/40 rotate-45" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-[#0D1A12]"
      >
        {/* Ambient Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}