/*
  The current season — the site's heartbeat. Edit this file (and nothing else)
  whenever the lab's focus shifts; the Home page updates itself.
*/
export interface Season {
  season: string;
  focus: string;
  streams: number[]; // stream numbers currently flowing
  note: string;
}

export const NOW: Season = {
  season: 'Late Summer 2026',
  focus:
    'Measurement and control engineering for AI — building instruments for knowing what AI systems actually do.',
  streams: [4, 6],
  note: 'Agent systems are judged almost entirely by their outputs and rarely by how they got there. The work this season is an open-source library for analyzing agent traces statistically, starting with a simple experiment: can cheap structural signals reproduce expert failure annotations at a fraction of the cost of asking a model to read everything?',
};
