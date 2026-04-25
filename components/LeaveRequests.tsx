'use client';

import { useState } from 'react';
import type { LeaveRequest } from '@/lib/data';
import Avatar from './Avatar';

const TYPE_COLORS: Record<string, { bg: string; color: string }> = {
  Annual:    { bg: 'rgba(6,182,212,0.15)',   color: '#06b6d4' },
  Sick:      { bg: 'rgba(239,68,68,0.15)',   color: '#ef4444' },
  Personal:  { bg: 'rgba(245,158,11,0.15)',  color: '#f59e0b' },
  Maternity: { bg: 'rgba(168,85,247,0.15)',  color: '#a855f7' },
};

function LeaveRow({ req }: { req: LeaveRequest }) {
  const [status, setStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const tc = TYPE_COLORS[req.type] ?? { bg: 'rgba(148,163,184,0.15)', color: '#94a3b8' };

  return (
    <div className="flex items-center gap-3 py-3 border-b border-white/10 last:border-0">
      <Avatar name={req.name} size={32} />
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-semibold text-white mb-0.5 truncate">{req.name}</div>
        <div className="text-[11px] text-slate-500">{req.dates}</div>
      </div>
      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md flex-shrink-0"
        style={{ background: tc.bg, color: tc.color }}>
        {req.type}
      </span>
      {status === 'pending' ? (
        <div className="flex gap-1.5 flex-shrink-0">
          <button
            onClick={() => setStatus('approved')}
            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg cursor-pointer transition-colors duration-150"
            style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981', border: '1px solid rgba(16,185,129,0.3)' }}
          >
            Approve
          </button>
          <button
            onClick={() => setStatus('rejected')}
            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg cursor-pointer transition-colors duration-150"
            style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)' }}
          >
            Reject
          </button>
        </div>
      ) : (
        <span className="text-[12px] font-semibold px-2.5 py-1 rounded-lg flex-shrink-0"
          style={{
            color: status === 'approved' ? '#10b981' : '#ef4444',
            background: status === 'approved' ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)',
          }}>
          {status === 'approved' ? '✓ Approved' : '✕ Rejected'}
        </span>
      )}
    </div>
  );
}

export default function LeaveRequests({ requests }: { requests: LeaveRequest[] }) {
  return (
    <div>
      {requests.map((req, i) => (
        <LeaveRow key={i} req={req} />
      ))}
    </div>
  );
}
