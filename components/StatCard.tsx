import type { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  valueClass?: string;
  sub: ReactNode;
  iconBg?: string;     
  icon: ReactNode;
  iconBgClass?: string;
}

export default function StatCard({ title, value, valueClass, sub, iconBg, icon }: StatCardProps) {
  return (
    <div className="flex-1 min-w-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-200 hover:border-white/20 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
      <div className="flex items-start justify-between mb-4">
        <p className="text-sm text-slate-400">{title}</p>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: iconBg }}>
          {icon}
        </div>
      </div>
      <div className={`text-3xl font-bold tracking-tight leading-none mb-2 ${valueClass ?? 'text-white'}`}>
        {value}
      </div>
      <div className="text-xs text-slate-500">{sub}</div>
    </div>
  );
}
