import type { DashboardEmployee } from '@/lib/data';
import Avatar from './Avatar';
import Badge from './Badge';

const HEADERS = ['Name', 'Department', 'Joined', 'Status'];

export default function RecentEmployees({ employees }: { employees: DashboardEmployee[] }) {
  return (
    <div>
      {/* Table header */}
      <div className="grid gap-2 py-3 border-b border-white/10"
        style={{ gridTemplateColumns: '1fr 100px 110px 80px' }}>
        {HEADERS.map((h) => (
          <div key={h} className="text-[11px] text-slate-500 font-semibold uppercase tracking-widest">
            {h}
          </div>
        ))}
      </div>

      {/* Rows */}
      {employees.map((emp, i) => (
        <div
          key={i}
          className="grid gap-2 py-[11px] items-center border-b border-white/10 last:border-0"
          style={{ gridTemplateColumns: '1fr 100px 110px 80px' }}
        >
          <div className="flex items-center gap-2.5">
            <Avatar name={emp.name} size={28} />
            <span className="text-[13px] font-medium text-white">{emp.name}</span>
          </div>
          <span className="text-xs text-slate-400">{emp.dept}</span>
          <span className="text-xs text-slate-500">{emp.joined}</span>
          <Badge status={emp.status} />
        </div>
      ))}
    </div>
  );
}
