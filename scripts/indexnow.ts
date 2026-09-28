// scripts/indexnow.ts
import { SERVICES_DATA } from '../data/services';
import { PACKAGES_DATA } from '../data/packages';
import { blogData } from '../data/blog';

const apiKey = '4a8b19f032e148e6921b084e591bc12a';
const host = 'lalunawatersportscenter.com';

const staticPages = [
  `https://${host}/`,
  `https://${host}/services/`,
  `https://${host}/about/`,
  `https://${host}/contact/`,
  `https://${host}/packages/`,
  `https://${host}/blog/`,
  `https://${host}/faq/`,
];

const servicePages = (SERVICES_DATA || []).map((s) => `https://${host}/services/${s.slug}/`);
const packagePages = (PACKAGES_DATA || []).map((s) => `https://${host}/packages/${s.slug}/`);
const blogPages = (blogData || []).map((post) => `https://${host}/blog/${post.slug}/`);

const urlList = [
  ...staticPages,
  ...servicePages,
  ...packagePages,
  ...blogPages,
];

async function submitToIndexNow() {
  console.log(`🚀 Submitting ${urlList.length} URLs to IndexNow...`);

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
      console.log('✅ IndexNow Submission Successful!');
      console.log(`Submitted ${urlList.length} pages.`);
    } else {
      const errText = await response.text();
      console.error('❌ IndexNow Submission Failed:', response.status, errText);
    }
  } catch (error) {
    console.error('❌ Error executing IndexNow request:', error);
  }
}

submitToIndexNow();