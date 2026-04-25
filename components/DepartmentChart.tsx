'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { deptData } from '@/lib/data';

export default function DepartmentChart() {
  return (
    <div className="py-4 flex items-center gap-6">
      {/* Donut */}
      <div className="relative w-[180px] h-[180px] flex-shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={deptData}
              cx="50%"
              cy="50%"
              innerRadius={54}
              outerRadius={74}
              startAngle={90}
              endAngle={-270}
              dataKey="pct"
              stroke="none"
            >
              {deptData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-[22px] font-bold text-ds-text">248</div>
          <div className="text-[11px] text-ds-text-muted">Total</div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-2.5 flex-1">
        {deptData.map((d, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: d.color }}
              />
              <span className="text-xs text-ds-text-sub">{d.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[60px] h-1 bg-ds-border rounded-sm overflow-hidden">
                <div
                  className="h-full rounded-sm"
                  style={{ width: `${d.pct}%`, background: d.color }}
                />
              </div>
              <span className="text-xs font-semibold text-ds-text min-w-[28px] text-right">
                {d.pct}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
