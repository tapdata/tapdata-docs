const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../../build/sitemap.xml');

try {
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  
  // replace URL to avoid 301
  sitemap = sitemap.replace(/https:\/\/docs\.tapdata\.io\/search/g, 'https://docs.tapdata.io/search/');
  
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('sitemap.xml updated');
} catch (error) {
  console.error('error when update sitemap.xml', error);
}
