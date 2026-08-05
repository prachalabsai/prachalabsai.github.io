// Build-time generator: emits public/feed.xml (RSS 2.0) and public/sitemap.xml
// from the markdown posts. Runs automatically before `vite build`.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://prachalabs.com';
const TITLE = 'PrachaLabs — Downstream of Intelligence';
const DESCRIPTION =
  'An independent lab. Intelligence is becoming abundant — the opportunity is not automating what we do, but discovering what we can now attempt.';

const parseFrontmatter = (text) => {
  const match = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/.exec(text.replace(/\r\n/g, '\n'));
  if (!match) return { meta: {}, body: text };
  const meta = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (!key || !value) continue;
    value = value.replace(/^["']|["']$/g, '');
    meta[key] = value;
  }
  return { meta, body: match[2] };
};

const escapeXml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const collectPosts = () => {
  const posts = [];
  for (const sub of ['articles', 'journal']) {
    const dir = join(root, 'posts', sub);
    let files = [];
    try {
      files = readdirSync(dir).filter((f) => f.endsWith('.md'));
    } catch {
      continue;
    }
    for (const file of files) {
      const { meta } = parseFrontmatter(readFileSync(join(dir, file), 'utf8'));
      posts.push({
        slug: file.replace(/\.md$/, ''),
        title: meta.title ?? file,
        date: meta.date ?? '',
        excerpt: meta.excerpt ?? '',
      });
    }
  }
  return posts.sort((a, b) => b.date.localeCompare(a.date));
};

const posts = collectPosts();

const rssItems = posts
  .map((p) => {
    const url = `${SITE}/writing/${p.slug}`;
    const pubDate = p.date ? new Date(`${p.date}T12:00:00Z`).toUTCString() : '';
    return [
      '    <item>',
      `      <title>${escapeXml(p.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      pubDate ? `      <pubDate>${pubDate}</pubDate>` : null,
      p.excerpt ? `      <description>${escapeXml(p.excerpt)}</description>` : null,
      '    </item>',
    ]
      .filter(Boolean)
      .join('\n');
  })
  .join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(TITLE)}</title>
    <link>${SITE}/</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>${escapeXml(DESCRIPTION)}</description>
    <language>en</language>
${rssItems}
  </channel>
</rss>
`;

const staticRoutes = ['/', '/charter', '/writing', '/work', '/pracha'];
const urls = [
  ...staticRoutes.map((r) => `${SITE}${r}`),
  ...posts.map((p) => `${SITE}/writing/${p.slug}`),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;

mkdirSync(join(root, 'public'), { recursive: true });
writeFileSync(join(root, 'public', 'feed.xml'), rss);
writeFileSync(join(root, 'public', 'sitemap.xml'), sitemap);
console.log(`feeds: ${posts.length} post(s) → public/feed.xml, public/sitemap.xml`);
