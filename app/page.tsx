import { Users, Calendar, Bell, DollarSign } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import StatCard from '@/components/StatCard';
import SectionCard from '@/components/SectionCard';
import HeadcountChart from '@/components/HeadcountChart';
import DepartmentChart from '@/components/DepartmentChart';
import RecentEmployees from '@/components/RecentEmployees';
import LeaveRequests from '@/components/LeaveRequests';
import { dashboardEmployees, leaveRequests } from '@/lib/data';

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-ds-bg">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <Navbar page="Dashboard" />

        <main className="flex-1 overflow-y-auto p-6 flex flex-col gap-[22px]">
          {/* Row 1 — Stat Cards */}
          <div className="flex gap-4">
            <StatCard
              title="Total Employees"
              value="248"
              sub={
                <span>
                  ↑ <strong className="text-ds-green">12%</strong> this month
                </span>
              }
              iconBgClass="bg-ds-violet/15"
              icon={<Users size={16} className="text-ds-violet-light" />}
            />
            <StatCard
              title="On Leave Today"
              value="14"
              sub="4 pending approvals"
              iconBgClass="bg-ds-cyan/15"
              icon={<Calendar size={16} className="text-ds-cyan" />}
            />
            <StatCard
              title="Pending Approvals"
              value="7"
              valueClass="text-ds-amber"
              sub={<span className="text-ds-amber">⚠ Action required</span>}
              iconBgClass="bg-ds-amber/15"
              icon={<Bell size={16} className="text-ds-amber" />}
            />
            <StatCard
              title="Payroll Due"
              value="AED 284,500"
              valueClass="text-ds-green"
              sub={<span className="text-ds-green">Due in 3 days</span>}
              iconBgClass="bg-ds-green/15"
              icon={<DollarSign size={16} className="text-ds-green" />}
            />
          </div>

          {/* Row 2 — Charts */}
          <div className="grid grid-cols-2 gap-4">
            <SectionCard
              title="Headcount Trend"
              titleRight={
                <span className="text-[11px] text-ds-text-muted bg-ds-border px-2.5 py-[3px] rounded-full">
                  Last 6 months
                </span>
              }
            >
              <HeadcountChart />
            </SectionCard>

            <SectionCard
              title="Department Breakdown"
              titleRight={
                <span className="text-[11px] text-ds-text-muted bg-ds-border px-2.5 py-[3px] rounded-full">
                  Apr 2026
                </span>
              }
            >
              <DepartmentChart />
            </SectionCard>
          </div>

          {/* Row 3 — Table + Leave */}
          <div className="grid grid-cols-2 gap-4">
            <SectionCard
              title="Recent Employees"
              titleRight={
                <button className="text-xs text-ds-violet-light bg-transparent border-none cursor-pointer hover:text-ds-violet transition-colors">
                  View all →
                </button>
              }
            >
              <RecentEmployees employees={dashboardEmployees} />
            </SectionCard>

            <SectionCard
              title="Upcoming Leave Requests"
              titleRight={
                <span className="text-[11px] font-semibold text-ds-amber bg-ds-amber/15 px-2.5 py-[3px] rounded-full">
                  {leaveRequests.length} pending
                </span>
              }
            >
              <LeaveRequests requests={leaveRequests} />
            </SectionCard>
          </div>
        </main>
      </div>
    </div>
  );
}
