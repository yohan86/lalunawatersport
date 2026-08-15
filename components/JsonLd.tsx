export default function JsonLd() {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SportsActivityLocation",
        "@id": "https://lalunawatersportscenter.com/#organization",
        "name": "LaLuna Water Sports Center",
        "url": "https://lalunawatersportscenter.com/",
        "image": "https://lalunawatersportscenter.com/og-image.jpeg",
        "telephone": "+94765504541",
        "priceRange": "$$",
        "description":
          "Premier water sports center in Bentota, Sri Lanka offering Jet Skiing, Banana Boat rides, River Safaris, Speedboats, and custom adventure packages.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 06, Kaluwamodara, Aluthgama",
          "addressLocality": "Bentota",
          "addressRegion": "Southern Province",
          "postalCode": "80500",
          "addressCountry": "LK",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 6.4366495,
          "longitude": 79.995577,
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "08:00",
          "closes": "18:00",
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61591600229584",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
    />
  );
}