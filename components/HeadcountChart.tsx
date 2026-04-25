'use client';

import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { headcountData } from '@/lib/data';

export default function HeadcountChart() {
  return (
    <div className="h-[180px] pt-4 pb-1">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={headcountData} barCategoryGap="28%">
          <defs>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 11 }}
          />
          <Bar dataKey="value" fill="url(#barGrad)" radius={[4, 4, 0, 0]}>
            <LabelList
              dataKey="value"
              position="top"
              style={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
