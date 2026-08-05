export interface ParsedMarkdown {
  metadata: Record<string, string | string[]>;
  content: string;
}

const stripQuotes = (s: string): string => {
  const t = s.trim();
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1);
  }
  return t;
};

/**
 * Separates frontmatter from body. Supported value forms:
 *   key: plain value
 *   key: "quoted value"
 *   key: [item, "quoted item", 2]
 */
export const parseMarkdown = (text: string): ParsedMarkdown => {
  const match = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/.exec(text.replace(/\r\n/g, '\n'));

  if (!match) {
    return { metadata: {}, content: text };
  }

  const metadata: Record<string, string | string[]> = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (!key || !value) continue;

    if (value.startsWith('[') && value.endsWith(']')) {
      metadata[key] = value
        .slice(1, -1)
        .split(',')
        .map(stripQuotes)
        .filter(Boolean);
    } else {
      metadata[key] = stripQuotes(value);
    }
  }

  return { metadata, content: match[2] };
};

/** Formats an ISO date (2026-08-03) for display without UTC off-by-one drift. */
export const formatDate = (iso: string): string => {
  const parts = iso.split('-').map(Number);
  const date =
    parts.length === 3 && !parts.some(isNaN)
      ? new Date(parts[0], parts[1] - 1, parts[2])
      : new Date(iso);
  if (isNaN(date.getTime())) return iso;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
