
import React from 'react';

interface RetroCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  noPadding?: boolean;
}

export const RetroCard: React.FC<RetroCardProps> = ({ children, title, className = '', noPadding = false }) => {
  return (
    <div className={`relative bg-[var(--bg-card)] border border-[var(--border-main)] shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:shadow-[6px_6px_0px_0px_var(--accent-primary)] hover:-translate-y-0.5 transition-all duration-200 ${className}`}>
      {title && (
        <div className="border-b border-[var(--border-main)] bg-[var(--bg-main)] p-2 flex items-center justify-between">
            <h3 className="font-pixel text-xl text-[var(--accent-secondary)] tracking-widest uppercase">
              {title}
            </h3>
            <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-[var(--border-main)]"></div>
                <div className="w-1.5 h-1.5 bg-[var(--accent-secondary)]"></div>
            </div>
        </div>
      )}
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
    </div>
  );
};
