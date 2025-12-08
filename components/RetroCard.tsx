import React from 'react';

interface RetroCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  noPadding?: boolean;
}

export const RetroCard: React.FC<RetroCardProps> = ({ children, title, className = '', noPadding = false }) => {
  return (
    <div className={`relative bg-[#FDFBF7] border-2 border-[#1c1c1c] shadow-[4px_4px_0px_0px_rgba(28,28,28,1)] hover:shadow-[6px_6px_0px_0px_rgba(28,28,28,1)] hover:-translate-y-0.5 transition-all duration-200 ${className}`}>
      {title && (
        <div className="border-b-2 border-[#1c1c1c] bg-[#F2EFE9] p-2 flex items-center justify-between">
            <h3 className="font-mono text-sm uppercase tracking-widest text-[#1c1c1c] font-bold">
              {title}
            </h3>
            <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full border border-[#1c1c1c] bg-transparent"></div>
                <div className="w-2 h-2 rounded-full border border-[#1c1c1c] bg-[#1c1c1c]"></div>
            </div>
        </div>
      )}
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
    </div>
  );
};