import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | LaLuna Water Sports Center Bentota',
  description: 'Read the terms, safety guidelines, cancellation policies, and operational rules for activities at La Luna Water Sports Center.',
  alternates: {
    canonical: 'https://lalunawatersportscenter.com/terms-and-conditions/',
  },
};

export default function TermsAndConditionsPage() {
  const baseUrl = "https://lalunawatersportscenter.com";
  // JSON-LD Structured Data for Terms & Conditions Policy Page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms & Conditions",
    "description":
      "Terms, safety guidelines, cancellation policies, and operational rules for activities at LaLuna Water Sports Center.",
    "url": `${baseUrl}/terms-and-conditions/`,
    "publisher": {
      "@type": "SportsActivityLocation",
      "name": "LaLuna Water Sports Center",
      "url": baseUrl,
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-emerald max-w-none">
        <h1 className="text-3xl md:text-4xl font-medium text-site-green! font-sans! mb-2">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: August 7, 2026</p>

        <p className="text-gray-600">
          Welcome to <strong>LaLuna Water Sports Center</strong>. By booking an activity or participating in our water sports services on the Bentota River or ocean, you agree to comply with and be bound by the following terms and safety regulations.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Safety Briefings & Mandatory Gear</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li><strong>Life Jackets:</strong> Certified life jackets must be worn during all water activities.</li>
          <li><strong>Sobriety:</strong> Participating under the influence of alcohol or drugs is strictly prohibited.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Cancellations & Weather Policy</h2>
        <p className="text-gray-600">
          Safety comes first. If we cancel activities due to severe weather or river conditions, guests will receive a full refund or a rescheduled slot. Cancellations made 24 hours prior receive full refunds.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Contact Information</h2>
        <p className="text-gray-600">
          For inquiries regarding bookings or policies, <Link href="/contact/" className="text-site-green">contact</Link>{"  "}LaLuna Water Sports Center, Bentota, Sri Lanka.
        </p>
      </div>
    </main>
  );
}