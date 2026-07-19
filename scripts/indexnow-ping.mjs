/**
 * Ping IndexNow (Bing / Yandex) after each deployment.
 * Site: sumthinblades.com
 */

const KEY = '9c8d22f0a34d40d28fa4493b940beccf';
const SITE = 'https://sumthinblades.com';

const CORE_URLS = [
  '/',
  '/products',
  '/blog',
  '/about',
  '/contact',
];

async function pingIndexNow() {
  const urls = CORE_URLS.map((path) => `${SITE}${path}`);
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: SITE.replace('https://', ''),
        key: KEY,
        urlList: urls,
      }),
    });
    if (res.ok) {
      console.log(`✅ IndexNow pinged ${urls.length} URLs — status ${res.status}`);
    } else {
      console.warn(`⚠️  IndexNow returned ${res.status}: ${await res.text()}`);
    }
  } catch (err) {
    console.warn('⚠️  IndexNow ping failed (non-critical):', err.message);
  }
}

pingIndexNow();
