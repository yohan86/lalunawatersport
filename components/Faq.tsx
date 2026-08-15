
import {FAQ_DATA as faqData} from "../data/faq";

export default function FaqSection() {
  // Generate JSON-LD Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    
    <div>
      {/* Invisible Schema Script for Google Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    {faqData.map((item, idx) => (
      <div key={idx} className="border-b border-gray-200 pb-4 mb-10 font-sans!">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {item.question}
        </h3>
        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
      </div>
    ))}
  </div>
  );
}