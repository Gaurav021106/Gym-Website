export interface Member {
  id: string;
  name: string;
  phone: string;
  email?: string;
  branch: string;
  plan: 'Monthly' | 'Quarterly' | 'Half-Yearly' | 'Yearly';
  joinDate: string;
  dueDate: string;
  amount: number;
  status: 'Active' | 'Expiring Soon' | 'Overdue';
}

export const BRANCHES = [
  'Rishikesh Main',
  'Tapovan',
  'Dehradun Rajpur Rd',
  'Dehradun Jakhan',
  'Haridwar',
];

export const INITIAL_MEMBERS: Member[] = [
  {
    id: 'efc-101',
    name: 'Aman Sharma',
    phone: '+919876543210',
    email: 'aman@example.com',
    branch: 'Rishikesh Main',
    plan: 'Quarterly',
    joinDate: '2026-06-01',
    dueDate: '2026-10-02',
    amount: 4500,
    status: 'Expiring Soon',
  },
  {
    id: 'efc-102',
    name: 'Rohit Rawat',
    phone: '+919812345678',
    email: 'rohit@example.com',
    branch: 'Dehradun Rajpur Rd',
    plan: 'Monthly',
    joinDate: '2026-08-25',
    dueDate: '2026-09-25',
    amount: 1800,
    status: 'Overdue',
  },
  {
    id: 'efc-103',
    name: 'Pooja Negi',
    phone: '+919765432109',
    email: 'pooja@example.com',
    branch: 'Tapovan',
    plan: 'Yearly',
    joinDate: '2025-10-03',
    dueDate: '2026-10-03',
    amount: 15000,
    status: 'Expiring Soon',
  },
  {
    id: 'efc-104',
    name: 'Vikram Joshi',
    phone: '+919988776655',
    email: 'vikram@example.com',
    branch: 'Dehradun Jakhan',
    plan: 'Monthly',
    joinDate: '2026-09-01',
    dueDate: '2026-10-15',
    amount: 2000,
    status: 'Active',
  },
  {
    id: 'efc-105',
    name: 'Neha Bisht',
    phone: '+919877112233',
    email: 'neha@example.com',
    branch: 'Haridwar',
    plan: 'Half-Yearly',
    joinDate: '2026-03-20',
    dueDate: '2026-09-20',
    amount: 8000,
    status: 'Overdue',
  },
];