// components/HomeFaq.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What water sports activities are available in Bentota?",
    answer: (
      <>
        At La Luna Water Sports Center, we offer Jet Skiing, Banana Boat rides,
        Tube/Sofa rides, Water Skiing, Wakeboarding, Speedboat rides, Yacht
        Cruise Tours, Bentota River Safaris, and more than 15 water sports
        activities listed on our{" "}
        <Link
          href="/services"
          className="text-emerald-600 underline font-medium hover:text-emerald-700"
        >
          services page
        </Link>
        .
      </>
    ),
  },
  {
    question: "Do I need swimming experience for water sports in Bentota?",
    answer: "No prior swimming experience is required for most activities. We provide certified life jackets and expert instructors to ensure complete safety for all guests.",
  },
  {
    question: "Is hotel pick-up available for water sports packages?",
    answer: "Yes, we arrange complimentary or organized hotel transfers for guests staying in Bentota, Beruwala, and Aluthgama.",
  },
  {
    question: "What is the best season for water sports in Bentota, Sri Lanka?",
    answer: "The prime season for ocean water sports on the West Coast is from October to April. Bentota River activities are operational and suitable year-round.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Everything you need to know before booking your water adventure in Bentota.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-5 font-semibold text-gray-900 flex justify-between items-center gap-4 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-emerald-600 text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}