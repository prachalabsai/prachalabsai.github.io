import React from 'react';
import { STREAMS, artifactCountForStream } from '../content/streams';
import { NOW } from '../content/now';

/*
  Season- and output-aware: streams in the current season get an "active"
  marker; streams with attached artifacts show a count. Zero-state renders
  nothing extra — the grid never looks empty.
*/
export const StreamsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[var(--border-main)]">
      {STREAMS.map((stream) => {
        const flowing = NOW.streams.includes(stream.number);
        const count = artifactCountForStream(stream.number);
        return (
          <div
            key={stream.number}
            className={`border-b border-r border-[var(--border-main)] p-5 flex flex-col gap-2 transition-colors hover:bg-[var(--accent-tint)] ${
              flowing ? 'bg-[var(--accent-tint)]' : ''
            }`}
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs text-accent">
                {String(stream.number).padStart(2, '0')}
              </span>
              <span className="font-mono text-[10px] text-accent-soft flex items-center gap-2">
                {count > 0 && (
                  <span>
                    {count} artifact{count > 1 ? 's' : ''}
                  </span>
                )}
                {flowing && (
                  <span className="text-accent" title="Active this season">
                    active
                  </span>
                )}
              </span>
            </div>
            <h3 className="font-serif text-lg font-semibold leading-snug text-[var(--text-main)]">
              {stream.name}
            </h3>
            <p className="font-serif italic text-base leading-snug text-[var(--text-muted)]">
              {stream.question}
            </p>
          </div>
        );
      })}
    </div>
  );
};
