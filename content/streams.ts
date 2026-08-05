import { getAllPosts, Post } from './posts';
import { WORK, WorkItem } from './work';

/*
  The Six Streams — transcribed from LAB.md ("The Six Streams" table), which is
  the source of truth. If the charter changes, update this file to match.
*/
export interface Stream {
  number: number;
  name: string;
  question: string;
  gloss: string;
}

export const STREAMS: Stream[] = [
  {
    number: 1,
    name: 'Frontier Intelligence',
    question: 'How is powerful intelligence actually made?',
    gloss:
      'The ideas, architectures, and bets behind frontier models — told as a story of decisions, not a reading list.',
  },
  {
    number: 2,
    name: 'The Ecology of Intelligence',
    question: 'What does abundance actually do?',
    gloss:
      'The dynamics of a world where intelligence flows freely — emergence, amplification, selection, opportunity.',
  },
  {
    number: 3,
    name: 'Data Science, Deep Learning & Generative Modeling',
    question: 'Where do the founding disciplines go?',
    gloss:
      'The frontiers beyond language models — and the future of the crafts that built this field.',
  },
  {
    number: 4,
    name: 'First Principles for AI Systems',
    question: 'How should we think about these systems?',
    gloss:
      'AI seen through the deepest ideas of other fields — control theory, complexity, statistics, philosophy, dynamics.',
  },
  {
    number: 5,
    name: 'Philosophy & Methods of AI Research',
    question: "How do we know what's actually true here?",
    gloss:
      'Epistemology and philosophy of science applied to AI — the standards that separate real findings from dressed-up demos.',
  },
  {
    number: 6,
    name: 'Agentic Systems & the Art of Problem Solving',
    question: 'How do we build well with intelligence?',
    gloss:
      'The real building blocks of agentic systems, and the craft — taste, judgment, creativity — that makes the difference.',
  },
];

/* Derived views — never hand-maintained. As posts and work declare their
   streams, these fill in and every stream-aware view updates itself. */
export const postsForStream = (n: number): Post[] =>
  getAllPosts().filter((p) => p.streams.includes(n));

export const workForStream = (n: number): WorkItem[] =>
  WORK.filter((w) => w.streams.includes(n));

export const artifactCountForStream = (n: number): number =>
  postsForStream(n).length + workForStream(n).length;
