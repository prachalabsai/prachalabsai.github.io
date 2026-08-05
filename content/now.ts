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
  focus: 'Laying the source: the charter, the position essay, and the first agentic experiments.',
  streams: [2, 6],
  note: 'The map is drawn. This season converts it into the first artifacts — worked in public.',
};
