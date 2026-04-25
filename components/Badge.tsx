import type { EmployeeStatus } from '@/lib/data';

const STATUS_STYLES: Record<EmployeeStatus, string> = {
  Active:    'bg-green-500/20 text-green-400',
  Probation: 'bg-amber-500/20 text-amber-400',
  Remote:    'bg-blue-500/20 text-blue-400',
};

export default function Badge({ status }: { status: EmployeeStatus }) {
  return (
    <span
      className={`${STATUS_STYLES[status]} text-[11px] font-semibold px-2.5 py-[3px] rounded-full tracking-[0.03em]`}
    >
      {status}
    </span>
  );
}
