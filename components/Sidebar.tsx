'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  DollarSign,
  Calendar,
  Clock,
  TrendingUp,
  Heart,
  Settings,
} from 'lucide-react';

const navItems = [
  { href: '/',            label: 'Dashboard',        icon: LayoutDashboard },
  { href: '/employees',   label: 'Employees',         icon: Users },
  { href: '/payroll',     label: 'Payroll',           icon: DollarSign },
  { href: '/leave',       label: 'Leave Management',  icon: Calendar },
  { href: '/attendance',  label: 'Attendance',        icon: Clock },
  { href: '/performance', label: 'Performance',       icon: TrendingUp },
  { href: '/benefits',    label: 'Benefits',          icon: Heart },
  { href: '/settings',    label: 'Settings',          icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] flex-shrink-0 flex flex-col h-screen border-r border-white/10"
      style={{ backgroundColor: '#0a0f1e' }}>

      {/* Logo */}
      <div className="px-5 py-6 flex items-center gap-3 border-b border-white/10">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div>
          <div className="text-[15px] font-bold text-white tracking-tight leading-tight">PeopleOS</div>
          <div className="text-[10px] text-slate-500 tracking-widest mt-0.5">HR PLATFORM</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 flex flex-col gap-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-150 ${
                isActive
                  ? 'text-white font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              style={isActive ? { backgroundColor: '#7c3aed' } : undefined}
            >
              <Icon size={16} />
              <span className="whitespace-nowrap">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Admin footer */}
      <div className="p-4 border-t border-white/10 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: '#7c3aed' }}>
          AK
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-white truncate">Aravinth K</div>
          <div className="text-xs text-slate-500">HR Admin</div>
        </div>
      </div>
    </aside>
  );
}
