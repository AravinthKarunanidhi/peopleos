export type EmployeeStatus = 'Active' | 'Probation' | 'Remote';
export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract';

export interface Employee {
  name: string;
  title: string;
  dept: string;
  email: string;
  phone: string;
  status: EmployeeStatus;
  type: EmploymentType;
}

export interface DashboardEmployee {
  name: string;
  dept: string;
  joined: string;
  status: EmployeeStatus;
}

export interface LeaveRequest {
  name: string;
  type: string;
  dates: string;
}

export const dashboardEmployees: DashboardEmployee[] = [
  { name: 'Sara Al Mansoori', dept: 'Engineering', joined: 'Jan 12, 2026', status: 'Active' },
  { name: 'Ravi Shankar',     dept: 'Sales',        joined: 'Feb 3, 2026',  status: 'Probation' },
  { name: 'Layla Ibrahim',    dept: 'HR',           joined: 'Mar 20, 2026', status: 'Active' },
  { name: 'Carlos Mendes',    dept: 'Finance',      joined: 'Apr 1, 2026',  status: 'Remote' },
  { name: 'Priya Nair',       dept: 'Operations',   joined: 'Apr 8, 2026',  status: 'Active' },
];

export const leaveRequests: LeaveRequest[] = [
  { name: 'Ahmed Khalil',  type: 'Annual',    dates: 'Apr 24 – Apr 28' },
  { name: 'Mei Lin',       type: 'Sick',      dates: 'Apr 23 – Apr 25' },
  { name: 'James Okafor',  type: 'Personal',  dates: 'Apr 26' },
  { name: 'Fatima Zahra',  type: 'Annual',    dates: 'May 1 – May 5' },
  { name: 'Daniel Park',   type: 'Maternity', dates: 'May 10 – Jun 10' },
];

export const headcountData = [
  { month: 'Nov', value: 218 },
  { month: 'Dec', value: 224 },
  { month: 'Jan', value: 229 },
  { month: 'Feb', value: 235 },
  { month: 'Mar', value: 241 },
  { month: 'Apr', value: 248 },
];

export const deptData = [
  { name: 'Engineering', pct: 35, color: '#7c3aed' },
  { name: 'Sales',       pct: 20, color: '#06b6d4' },
  { name: 'Operations',  pct: 20, color: '#f59e0b' },
  { name: 'Finance',     pct: 15, color: '#10b981' },
  { name: 'HR',          pct: 10, color: '#a855f7' },
];

export const allEmployees: Employee[] = [
  { name: 'Sara Al Mansoori', title: 'Senior Frontend Engineer',  dept: 'Engineering', email: 'sara.m@peopleos.ae',   phone: '+971 50 234 5678', status: 'Active',    type: 'Full-time' },
  { name: 'Ravi Shankar',     title: 'Sales Executive',            dept: 'Sales',       email: 'ravi.s@peopleos.ae',   phone: '+971 55 876 4321', status: 'Probation', type: 'Full-time' },
  { name: 'Layla Ibrahim',    title: 'HR Business Partner',        dept: 'HR',          email: 'layla.i@peopleos.ae',  phone: '+971 50 111 2233', status: 'Active',    type: 'Full-time' },
  { name: 'Carlos Mendes',    title: 'Finance Analyst',            dept: 'Finance',     email: 'carlos.m@peopleos.ae', phone: '+971 54 998 7766', status: 'Remote',    type: 'Contract'  },
  { name: 'Priya Nair',       title: 'Operations Manager',         dept: 'Operations',  email: 'priya.n@peopleos.ae',  phone: '+971 56 443 2210', status: 'Active',    type: 'Full-time' },
  { name: 'Ahmed Khalil',     title: 'Backend Engineer',           dept: 'Engineering', email: 'ahmed.k@peopleos.ae',  phone: '+971 50 321 9988', status: 'Active',    type: 'Full-time' },
  { name: 'Mei Lin',          title: 'UX Designer',                dept: 'Engineering', email: 'mei.l@peopleos.ae',    phone: '+971 55 654 3300', status: 'Probation', type: 'Full-time' },
  { name: 'James Okafor',     title: 'Regional Sales Lead',        dept: 'Sales',       email: 'james.o@peopleos.ae',  phone: '+971 58 112 9901', status: 'Remote',    type: 'Full-time' },
  { name: 'Fatima Zahra',     title: 'Payroll Specialist',         dept: 'Finance',     email: 'fatima.z@peopleos.ae', phone: '+971 50 778 6655', status: 'Active',    type: 'Part-time' },
];
