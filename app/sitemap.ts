import { MetadataRoute } from 'next';
import { blogData } from '@/data/blog';       // Array of blog post objects
import { SERVICES_DATA } from '@/data/services'; // Array of service objects
import { PACKAGES_DATA } from '@/data/packages';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lalunawatersportscenter.com";

  // 1. Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/packages/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    }
  ];

  // 2. Dynamic Service Pages (High SEO Priority for local business leads)
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9, // High priority because these drive activity bookings directly
  }));

  // 3. Dynamic Blog Post Pages
  const blogRoutes: MetadataRoute.Sitemap = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));
  const packageRoutes: MetadataRoute.Sitemap = PACKAGES_DATA.map((post)=> ({
    url: `${baseUrl}/packages/${post.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority:0.9,
  }));

  // Combine static pages + dynamic services + dynamic blog posts
  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...packageRoutes];
}