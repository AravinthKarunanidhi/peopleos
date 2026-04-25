import type { ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  titleRight?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function SectionCard({ title, titleRight, children, className = '' }: SectionCardProps) {
  return (
    <div className={`border border-white/10 rounded-2xl overflow-hidden ${className}`}
      style={{ backgroundColor: '#141b2d' }}>
      <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <div className="text-sm font-semibold text-white">{title}</div>
        {titleRight}
      </div>
      <div className="px-6">{children}</div>
    </div>
  );
}
