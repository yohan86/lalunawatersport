import Image from "next/image";
import Link from "next/link";

interface Package {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  content: string;
  price: number;
  duration?: string;
  activities?: string[];
  image?: string;
  badge?: string;
  minimum?: number;
}

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container with Badge */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <Image
          src={pkg.image || "/images/packages/default-package.jpg"}
          alt={pkg.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Floating Badge */}
        {pkg.badge && (
          <span className="absolute top-4 left-4 bg-site-green text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
            {pkg.badge}
          </span>
        )}

        {/* Minimum Persons Badge */}
        {pkg.minimum && (
          <span className="absolute bottom-3 left-4 text-xs font-medium text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
            👥 Min {pkg.minimum} {pkg.minimum === 1 ? "Person" : "People"}
          </span>
        )}

        {/* Duration Badge */}
        {pkg.duration && (
          <span className="absolute bottom-3 right-4 text-xs font-medium text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
            ⏱️ {pkg.duration}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-site-green transition-colors">
          {pkg.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3 leading-relaxed flex-1">
          {pkg.description}
        </p>

        {/* Activities Tags */}
        {pkg.activities && pkg.activities.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {pkg.activities.map((act, index) => (
              <span
                key={index}
                className="text-[11px] font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full border border-gray-200/60"
              >
                ✓ {act}
              </span>
            ))}
          </div>
        )}

        {/* Price & CTA Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          
            <div className="btn primary-button py-1!">
                <Link
                    href={`/packages/${pkg.slug}/`}
                    className="primary-button text-sm"
                >
                    View Details
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
}