'use client';

import { useState, useRef, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';
import type { Employee } from '@/lib/data';
import Avatar from './Avatar';
import Badge from './Badge';

const DEPT_STYLES: Record<string, { bg: string; color: string }> = {
  Engineering: { bg: 'rgba(124,58,237,0.2)',  color: '#a855f7' },
  Sales:       { bg: 'rgba(6,182,212,0.2)',   color: '#06b6d4' },
  HR:          { bg: 'rgba(16,185,129,0.2)',  color: '#10b981' },
  Finance:     { bg: 'rgba(245,158,11,0.2)',  color: '#f59e0b' },
  Operations:  { bg: 'rgba(239,68,68,0.2)',   color: '#ef4444' },
};

const MENU_ITEMS = ['View Profile', 'Edit Details', 'Assign Leave', 'Deactivate'];

function ThreeDotMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
        className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border-none bg-transparent"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-[110%] right-0 border border-white/10 rounded-xl p-1.5 z-50 min-w-[148px] shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
          style={{ backgroundColor: '#1a2338' }}>
          {MENU_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => setOpen(false)}
              className={`block w-full text-left px-3 py-2 bg-transparent border-none cursor-pointer text-[13px] rounded-lg transition-colors duration-100 hover:bg-white/10 ${
                item === 'Deactivate' ? 'text-red-400' : 'text-slate-300'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function EmployeeCard({ emp }: { emp: Employee }) {
  const dept = DEPT_STYLES[emp.dept] ?? { bg: 'rgba(148,163,184,0.15)', color: '#94a3b8' };

  return (
    <div className="border border-white/10 rounded-2xl px-5 pt-[22px] pb-[18px] flex flex-col transition-all duration-200 hover:border-violet-500/50 hover:bg-white/5 hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] cursor-default"
      style={{ backgroundColor: '#141b2d' }}>

      {/* Top: avatar + menu */}
      <div className="flex items-start justify-between mb-3.5">
        <div className="flex items-center gap-3">
          <Avatar name={emp.name} size={48} />
          <div>
            <div className="text-sm font-bold text-white leading-tight mb-[3px]">{emp.name}</div>
            <div className="text-xs text-slate-500 leading-tight">{emp.title}</div>
          </div>
        </div>
        <ThreeDotMenu />
      </div>

      {/* Badges */}
      <div className="flex items-center gap-1.5 mb-4">
        <span className="text-[11px] font-semibold px-2.5 py-[3px] rounded-md tracking-wide"
          style={{ background: dept.bg, color: dept.color }}>
          {emp.dept}
        </span>
        <Badge status={emp.status} />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-3.5" />

      {/* Contact */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <Mail size={13} className="text-slate-500 flex-shrink-0" />
          <span className="text-xs text-slate-400 truncate">{emp.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={13} className="text-slate-500 flex-shrink-0" />
          <span className="text-xs text-slate-400">{emp.phone}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] text-slate-500">{emp.type}</span>
        <button className="text-[11px] font-medium text-violet-400 hover:text-violet-300 bg-transparent border-none cursor-pointer transition-colors">
          View Profile →
        </button>
      </div>
    </div>
  );
}
