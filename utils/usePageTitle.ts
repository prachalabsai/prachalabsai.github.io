import { useEffect } from 'react';

const BASE = 'PrachaLabs — Downstream of Intelligence';

export const usePageTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${title} — PrachaLabs` : BASE;
  }, [title]);
};
