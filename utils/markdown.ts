
import { ContentItem } from '../types';

interface ParsedMarkdown {
  metadata: Partial<ContentItem>;
  content: string;
}

/**
 * Parses raw markdown file content to separate Frontmatter (YAML-like) from body.
 * 
 * Format expected:
 * ---
 * title: My Title
 * date: 2025-01-01
 * tags: [Tag1, Tag2]
 * excerpt: Short description
 * ---
 * 
 * # Content
 * ...
 */
export const parseMarkdown = (text: string): ParsedMarkdown => {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;
  const match = frontmatterRegex.exec(text);

  if (!match) {
    return {
      metadata: {},
      content: text
    };
  }

  const metadataBlock = match[1];
  const content = match[2];
  const metadata: any = {};

  metadataBlock.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      
      // Handle array format [Tag1, Tag2]
      if (value.startsWith('[') && value.endsWith(']')) {
        metadata[key.trim()] = value
          .slice(1, -1)
          .split(',')
          .map(s => s.trim());
      } else {
        metadata[key.trim()] = value;
      }
    }
  });

  return { metadata, content };
};

export const fetchContent = async (path: string, id: string): Promise<ContentItem> => {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load post: ${path}`);
    const text = await response.text();
    const { metadata, content } = parseMarkdown(text);

    return {
      id,
      slug: path.split('/').pop()?.replace('.md', '') || id,
      title: metadata.title || 'Untitled',
      date: metadata.date || 'Undated',
      tags: metadata.tags || [],
      excerpt: metadata.excerpt || '',
      content: content
    } as ContentItem;
  } catch (error) {
    console.error(error);
    return {
      id,
      slug: 'error',
      title: 'Error Loading Content',
      date: 'N/A',
      tags: [],
      excerpt: 'Could not load content.',
      content: 'Error loading content. Please check the file path.'
    };
  }
};
