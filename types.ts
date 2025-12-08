
export interface ContentItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[]; // Replaced category with tags for flexibility
  excerpt: string;
  content: string; // Markdown content
}

export interface Experiment {
  id: string;
  title: string;
  status: 'Hypothesis' | 'In Progress' | 'Published' | 'Archived';
  description: string;
  hypothesis: string; // PhD: Theoretical grounding
  metrics: { label: string; value: string }[]; // VC: Velocity/KPIs
  stack: string[]; // Engineer: Implementation details
  lastUpdate: string;
  tags: string[];
  link?: string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  status: 'Alpha' | 'Beta' | 'Live';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
