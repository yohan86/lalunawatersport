import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | LaLuna Water Sports Center Bentota',
  description:
    'Learn how LaLuna Water Sports Center collects, uses, and protects your personal data during bookings and inquiries.',
  alternates: {
    canonical: 'https://lalunawatersportscenter.com/privacy-policy/',
  },
  openGraph: {
    title: 'Privacy Policy | LaLuna Water Sports Center Bentota',
    description:
      'Learn how LaLuna Water Sports Center collects, uses, and protects your personal data.',
    url: 'https://lalunawatersportscenter.com/privacy-policy/',
    siteName: 'LaLuna Water Sports Center',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {

  // Privacy Policy WebPage Schema
  const privacyPolicySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://lalunawatersportscenter.com/privacy-policy/#webpage',
    'url': 'https://lalunawatersportscenter.com/privacy-policy/',
    'name': 'Privacy Policy | LaLuna Water Sports Center Bentota',
    'description':
      'Learn how LaLuna Water Sports Center collects, uses, and protects your personal data during bookings and inquiries.',
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://lalunawatersportscenter.com/#website',
      'url': 'https://lalunawatersportscenter.com/',
      'name': 'LaLuna Water Sports Center',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'LaLuna Water Sports Center',
      'url': 'https://lalunawatersportscenter.com/',
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Inject JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicySchema) }}
      />
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-emerald max-w-none">
        <h1 className="text-3xl md:text-4xl font-medium text-site-green! font-sans! mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: August 7, 2026</p>

        <p className="text-gray-600">
          At <strong>LaLuna Water Sports Center</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operated in Bentota, Sri Lanka, accessible from{' '}
          <Link href="https://lalunawatersportscenter.com/" className="text-emerald-600 font-semibold underline">
            lalunawatersportscenter.com
          </Link>, visitor privacy is a primary priority.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Information We Collect</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li><strong>Personal Details:</strong> Name, email address, phone number, and hotel location for pick-up/transfer services.</li>
          <li><strong>Booking Information:</strong> Selected packages, date/time, and group size.</li>
          <li><strong>Technical Data:</strong> IP address, device type, and traffic metrics gathered via cookies.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How We Use Your Information</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>To manage and confirm water sports activities and hotel transfers in Bentota, Beruwala, and Ahungalla.</li>
          <li>To respond via WhatsApp, email, or telephone.</li>
          <li>To optimize website speed and SEO performance.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Contact Us</h2>
        <p className="text-gray-600">
          For any data requests or privacy questions, contact LaLuna Water Sports Center, Bentota, Sri Lanka.
        </p>
      </div>
    </main>
  );
}