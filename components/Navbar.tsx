'use client';

import { useState } from 'react';
import { Search, Bell } from 'lucide-react';

interface NavbarProps {
  page: string;
}

export default function Navbar({ page }: NavbarProps) {
  const [search, setSearch] = useState('');

  return (
    <header className="h-16 border-b border-white/10 flex items-center px-6 gap-4 flex-shrink-0"
      style={{ backgroundColor: '#0a0f1e' }}>

      <div className="flex-1">
        <div className="text-lg font-bold text-white tracking-tight">{page}</div>
        <div className="text-xs text-slate-500">Wednesday, April 23, 2026</div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search employees, docs…"
          className="bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-white text-sm outline-none w-[220px] placeholder:text-slate-500 focus:border-violet-500 transition-colors duration-150"
        />
      </div>

      {/* Bell */}
      <div className="relative cursor-pointer">
        <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-slate-400 hover:text-white transition-colors">
          <Bell size={16} />
        </div>
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full border-2"
          style={{ backgroundColor: '#f59e0b', borderColor: '#0a0f1e' }} />
      </div>

      {/* Avatar */}
      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        style={{ backgroundColor: '#7c3aed' }}>
        AK
      </div>
    </header>
  );
}
