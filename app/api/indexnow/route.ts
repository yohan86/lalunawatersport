import { SERVICES_DATA } from '@/data/services';
import { PACKAGES_DATA } from '@/data/packages';
import { blogData } from '@/data/blog';

export async function GET() {
  const apiKey = '2ca5d3353e07db711d4087ce2dc9b62a';
  const host = 'lalunawatersportscenter.com';

  // 1. List all main static routes
  const staticPages = [
    `https://${host}/`,
    `https://${host}/services/`,
    `https://${host}/about/`,
    `https://${host}/contact/`,
    `https://${host}/packages/`,
    `https://${host}/blog/`,
    `https://${host}/faq/`, // Include if you have a packages page
  ];

  // 2. Map all 18 dynamic service routes
  const servicePages = SERVICES_DATA.map(
    (s) => `https://${host}/services/${s.slug}/`
  );
  const packagePages = PACKAGES_DATA.map( (s)=> `https://${host}/packages/${s.slug}/`);
  const blogPages = blogData.map( (s)=> `https://${host}/blog/${s.slug}/`);
  // 3. Combine both arrays
  const urlList = [...staticPages, ...servicePages, ...packagePages, ...blogPages];

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: host,
        key: apiKey,
        keyLocation: `https://${host}/${apiKey}.txt`,
        urlList: urlList,
      }),
    });

    if (response.ok) {
      return Response.json({ success: true, submittedCount: urlList.length, urls: urlList });
    } else {
      const errorText = await response.text();
      return Response.json({ success: false, status: response.status, error: errorText }, { status: 400 });
    }
  } catch (error) {
    return Response.json({ success: false, message: 'Submission failed' }, { status: 500 });
  }
}