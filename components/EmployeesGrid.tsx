'use client';

import { useState } from 'react';
import { Search, ChevronDown, Plus } from 'lucide-react';
import type { Employee } from '@/lib/data';
import { allEmployees } from '@/lib/data';
import EmployeeCard from './EmployeeCard';

const DEPTS   = ['Engineering', 'Sales', 'HR', 'Finance', 'Operations'];
const STATUSES = ['Active', 'Probation', 'Remote'];
const TYPES    = ['Full-time', 'Part-time', 'Contract'];

function FilterSelect({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-ds-card border border-ds-border rounded-[10px] py-[9px] pl-3.5 pr-8 text-[13px] cursor-pointer outline-none min-w-[140px] focus:border-ds-violet transition-colors duration-150 appearance-none text-ds-text-muted"
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-ds-text-muted">
        <ChevronDown size={13} />
      </div>
    </div>
  );
}

function AddEmployeeModal({ onClose }: { onClose: () => void }) {
  const FIELDS = [
    { label: 'Full Name',     placeholder: 'e.g. Sara Al Mansoori' },
    { label: 'Job Title',     placeholder: 'e.g. Senior Engineer' },
    { label: 'Email Address', placeholder: 'name@peopleos.ae' },
    { label: 'Phone Number',  placeholder: '+971 50 000 0000' },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-ds-card border border-ds-border-light rounded-[20px] p-8 w-[480px] shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="text-[17px] font-bold text-ds-text">Add New Employee</div>
          <button
            onClick={onClose}
            className="bg-ds-border border-none text-ds-text-sub rounded-[8px] w-[30px] h-[30px] cursor-pointer flex items-center justify-center hover:bg-ds-border-light transition-colors"
          >
            ✕
          </button>
        </div>

        {FIELDS.map((f) => (
          <div key={f.label} className="mb-4">
            <div className="text-xs font-semibold text-ds-text-sub mb-1.5">{f.label}</div>
            <input
              placeholder={f.placeholder}
              className="w-full bg-ds-surface border border-ds-border rounded-[10px] px-3.5 py-2.5 text-[13px] text-ds-text outline-none focus:border-ds-violet transition-colors placeholder:text-ds-text-muted"
            />
          </div>
        ))}

        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { label: 'Department',       options: DEPTS },
            { label: 'Employment Type',  options: TYPES },
          ].map((f) => (
            <div key={f.label}>
              <div className="text-xs font-semibold text-ds-text-sub mb-1.5">{f.label}</div>
              <select className="w-full bg-ds-surface border border-ds-border rounded-[10px] px-3.5 py-2.5 text-[13px] text-ds-text-muted outline-none appearance-none focus:border-ds-violet transition-colors">
                <option value="">Select…</option>
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          ))}
        </div>

        <div className="flex gap-2.5 justify-end">
          <button
            onClick={onClose}
            className="bg-ds-border text-ds-text-sub border-none rounded-[10px] px-5 py-2.5 text-[13px] font-semibold cursor-pointer hover:bg-ds-border-light transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="bg-gradient-to-br from-ds-violet to-[#6d28d9] text-white border-none rounded-[10px] px-6 py-2.5 text-[13px] font-semibold cursor-pointer shadow-[0_4px_16px_rgba(124,58,237,0.4)] hover:shadow-[0_6px_24px_rgba(124,58,237,0.6)] transition-shadow"
          >
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EmployeesGrid() {
  const [search, setSearch]         = useState('');
  const [deptFilter, setDeptFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [showModal, setShowModal]   = useState(false);

  const filtered = allEmployees.filter((e) => {
    const q = search.toLowerCase();
    const matchSearch = !q || e.name.toLowerCase().includes(q) || e.title.toLowerCase().includes(q) || e.email.toLowerCase().includes(q);
    const matchDept   = !deptFilter   || e.dept   === deptFilter;
    const matchStatus = !statusFilter || e.status === statusFilter;
    const matchType   = !typeFilter   || e.type   === typeFilter;
    return matchSearch && matchDept && matchStatus && matchType;
  });

  const activeCount    = allEmployees.filter((e) => e.status === 'Active').length;
  const probationCount = allEmployees.filter((e) => e.status === 'Probation').length;
  const remoteCount    = allEmployees.filter((e) => e.status === 'Remote').length;

  const hasFilters = search || deptFilter || statusFilter || typeFilter;

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
      {/* Page header */}
      <div className="px-7 pt-6 pb-0 flex items-center justify-between flex-shrink-0">
        <div>
          <div className="text-[22px] font-extrabold text-ds-text tracking-tight">Employees</div>
          <div className="text-[13px] text-ds-text-muted mt-[3px]">
            <span className="text-ds-green font-semibold">{activeCount} active</span>
            {' · '}
            <span className="text-ds-amber font-semibold">{probationCount} probation</span>
            {' · '}
            <span className="text-ds-cyan font-semibold">{remoteCount} remote</span>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-gradient-to-br from-ds-violet to-[#6d28d9] text-white border-none rounded-[10px] px-5 py-2.5 text-[13px] font-semibold cursor-pointer shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:shadow-[0_6px_28px_rgba(124,58,237,0.6)] hover:-translate-y-px transition-all duration-200"
        >
          <Plus size={14} />
          Add Employee
        </button>
      </div>

      {/* Filters bar */}
      <div className="px-7 py-[18px] flex items-center gap-2.5 flex-shrink-0 border-b border-ds-border">
        <div className="relative flex-1 max-w-[320px]">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-ds-text-muted pointer-events-none">
            <Search size={14} />
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, title, email…"
            className="bg-ds-card border border-ds-border rounded-[10px] py-[9px] pl-9 pr-4 text-ds-text text-[13px] outline-none w-full focus:border-ds-violet transition-colors duration-150 placeholder:text-ds-text-muted"
          />
        </div>
        <FilterSelect label="Department"      options={DEPTS}    value={deptFilter}   onChange={setDeptFilter} />
        <FilterSelect label="Status"          options={STATUSES} value={statusFilter} onChange={setStatusFilter} />
        <FilterSelect label="Employment Type" options={TYPES}    value={typeFilter}   onChange={setTypeFilter} />
        {hasFilters && (
          <button
            onClick={() => { setSearch(''); setDeptFilter(''); setStatusFilter(''); setTypeFilter(''); }}
            className="bg-ds-red/15 text-ds-red border border-ds-red/25 rounded-[8px] px-3.5 py-2 text-xs font-semibold cursor-pointer whitespace-nowrap hover:bg-ds-red/25 transition-colors"
          >
            Clear filters
          </button>
        )}
        <div className="ml-auto text-xs text-ds-text-muted whitespace-nowrap">
          {filtered.length} of {allEmployees.length} employees
        </div>
      </div>

      {/* Card grid */}
      <div className="px-7 py-[22px] pb-7 flex-1">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {filtered.map((emp, i) => (
              <EmployeeCard key={i} emp={emp} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <div className="text-4xl">🔍</div>
            <div className="text-[15px] font-semibold text-ds-text-sub">No employees found</div>
            <div className="text-[13px] text-ds-text-muted">Try adjusting your search or filters</div>
          </div>
        )}
      </div>

      {showModal && <AddEmployeeModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
