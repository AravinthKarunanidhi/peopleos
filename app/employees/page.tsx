import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import EmployeesGrid from '@/components/EmployeesGrid';

export default function EmployeesPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-ds-bg">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <Navbar page="Employees" />
        <EmployeesGrid />
      </div>
    </div>
  );
}
