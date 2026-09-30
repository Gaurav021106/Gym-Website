'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  IndianRupee,
  AlertTriangle,
  Clock,
  Search,
  Bell,
  Plus,
  Download,
  Trash2,
  Pencil,
  Send,
  CheckCircle2,
  LayoutDashboard,
  BellRing,
  Building2,
  Settings,
  Menu,
  X,
  ExternalLink,
  ArrowLeft,
  Filter,
  Phone,
  Calendar,
} from 'lucide-react';
import { INITIAL_MEMBERS, BRANCHES, Member } from '@/lib/admin-data';

// --- SUB-COMPONENT: RESPONSIVE MEMBER MODAL ---
interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (member: Member) => void;
  memberToEdit?: Member | null;
}

function MemberModal({ isOpen, onClose, onSave, memberToEdit }: MemberModalProps) {
  const getDefaultFormData = (member?: Member | null): Partial<Member> => ({
    name: member?.name || '',
    phone: member?.phone || '',
    email: member?.email || '',
    branch: member?.branch || BRANCHES[0],
    plan: member?.plan || 'Monthly',
    joinDate: member?.joinDate || new Date().toISOString().split('T')[0],
    dueDate: member?.dueDate || '',
    amount: member?.amount || 1800,
    status: member?.status || 'Active',
  });

  const [formData, setFormData] = useState<Partial<Member>>(() => getDefaultFormData(memberToEdit));

  useEffect(() => {
    setFormData(getDefaultFormData(memberToEdit));
  }, [memberToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.dueDate) return;

    onSave({
      id: memberToEdit ? memberToEdit.id : `EFC-${Date.now().toString().slice(-4)}`,
      name: formData.name || '',
      phone: formData.phone || '',
      email: formData.email,
      branch: formData.branch || BRANCHES[0],
      plan: (formData.plan as Member['plan']) || 'Monthly',
      joinDate: formData.joinDate || new Date().toISOString().split('T')[0],
      dueDate: formData.dueDate || '',
      amount: Number(formData.amount) || 1800,
      status: (formData.status as Member['status']) || 'Active',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4">
      <div className="relative w-full max-w-lg rounded-t-2xl sm:rounded-xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6 shadow-2xl text-zinc-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-4">
          {memberToEdit ? 'Edit Member Profile' : 'Add New Member'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-red-500 focus:outline-none"
              placeholder="e.g. Vikram Joshi"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">
                Phone (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-red-500 focus:outline-none"
                placeholder="+91..."
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-red-500 focus:outline-none"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">
                Select Branch *
              </label>
              <select
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-red-500 focus:outline-none"
              >
                {BRANCHES.map((branch) => (
                  <option key={branch} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">
                Plan Duration
              </label>
              <select
                value={formData.plan}
                onChange={(e) => setFormData({ ...formData, plan: e.target.value as Member['plan'] })}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-red-500 focus:outline-none"
              >
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Half-Yearly">Half-Yearly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">
                Join Date
              </label>
              <input
                type="date"
                value={formData.joinDate || ''}
                onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-red-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">
                Next Due Date *
              </label>
              <input
                type="date"
                required
                value={formData.dueDate || ''}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-red-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">
                Fee Amount (₹)
              </label>
              <input
                type="number"
                value={formData.amount || ''}
                onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-red-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2.5 pt-4 border-t border-zinc-800">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-300 hover:bg-zinc-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 sm:flex-none rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-red-700 transition active:scale-95"
            >
              Save Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --- MAIN ADMIN DASHBOARD ---
export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'members' | 'reminders'>('dashboard');
  const [members, setMembers] = useState<Member[]>(INITIAL_MEMBERS);
  const [selectedBranch, setSelectedBranch] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberToEdit, setMemberToEdit] = useState<Member | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Pagination for members
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // WhatsApp Trigger
  const triggerWhatsApp = (member: Member) => {
    const rawNumber = member.phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `Hi ${member.name}, your Eddy Fitness Club (EFC) membership expires on ${member.dueDate}. Please pay ₹${member.amount} to continue your fitness journey. DM us for payment details.`
    );
    window.open(`https://wa.me/${rawNumber}?text=${message}`, '_blank');
  };

  // Metrics
  const metrics = useMemo(() => {
    const active = members.filter((m) => m.status === 'Active').length;
    const overdue = members.filter((m) => m.status === 'Overdue').length;
    const expiringSoon = members.filter((m) => m.status === 'Expiring Soon').length;
    const totalCollected = members.reduce((acc, curr) => acc + (curr.amount || 0), 0);

    return {
      activeMembers: 1250 + active,
      totalCollected: `₹${totalCollected.toLocaleString('en-IN')}`,
      overdueCount: overdue,
      expiringCount: expiringSoon,
    };
  }, [members]);

  // Filtering
  const filteredMembers = useMemo(() => {
    return members.filter((m) => {
      const matchBranch = selectedBranch === 'All' || m.branch === selectedBranch;
      const matchQuery =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.phone.includes(searchQuery) ||
        (m.email && m.email.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchBranch && matchQuery;
    });
  }, [members, selectedBranch, searchQuery]);

  // Pagination Slice
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage) || 1;
  const paginatedMembers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredMembers.slice(start, start + itemsPerPage);
  }, [filteredMembers, currentPage]);

  const handleSaveMember = (savedMember: Member) => {
    if (memberToEdit) {
      setMembers((prev) => prev.map((m) => (m.id === savedMember.id ? savedMember : m)));
    } else {
      setMembers((prev) => [savedMember, ...prev]);
    }
    setIsModalOpen(false);
    setMemberToEdit(null);
  };

  const handleDeleteMember = (id: string) => {
    if (confirm('Are you sure you want to remove this member profile?')) {
      setMembers((prev) => prev.filter((m) => m.id !== id));
    }
  };

  const exportCSV = () => {
    const headers = 'ID,Name,Phone,Branch,Plan,Join Date,Next Due Date,Fee Amount,Status\n';
    const rows = filteredMembers
      .map(
        (m) =>
          `"${m.id}","${m.name}","${m.phone}","${m.branch}","${m.plan}","${m.joinDate}","${m.dueDate}","${m.amount}","${m.status}"`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EFC_Members_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex min-h-screen bg-black text-zinc-100 font-sans antialiased selection:bg-red-500 selection:text-white pb-16 md:pb-0">
      {/* MOBILE DRAWER BACKDROP */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
        />
      )}

      {/* SIDEBAR NAVIGATION */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 sm:w-64 transform border-r border-zinc-800/80 bg-zinc-950 p-4 transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-2 py-3 border-b border-zinc-800/70 mb-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-lg overflow-hidden border border-red-500/30 bg-red-950/20 p-1 flex items-center justify-center">
              <Image src="/logo.png" alt="EFC Logo" width={32} height={32} className="object-contain" priority />
            </div>
            <div>
              <h1 className="text-sm font-black tracking-wider uppercase text-white group-hover:text-red-500 transition">
                Eddy Fitness
              </h1>
              <span className="text-[10px] text-red-500 font-semibold tracking-widest uppercase">Admin Panel</span>
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden p-1.5 rounded-md text-zinc-400 hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Live Site Link */}
        <div className="px-1 mb-4">
          <Link
            href="/"
            className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white hover:border-red-500/50 hover:bg-zinc-800 transition group"
          >
            <span className="flex items-center gap-2">
              <ArrowLeft className="h-3.5 w-3.5 text-red-500 group-hover:-translate-x-0.5 transition" />
              Live Gym Site
            </span>
            <ExternalLink className="h-3 w-3 text-zinc-500" />
          </Link>
        </div>

        <nav className="space-y-1">
          <button
            onClick={() => {
              setActiveTab('dashboard');
              setMobileMenuOpen(false);
            }}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              activeTab === 'dashboard'
                ? 'bg-red-600/10 text-red-500 border border-red-500/30 font-semibold'
                : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
            }`}
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </button>

          <button
            onClick={() => {
              setActiveTab('members');
              setMobileMenuOpen(false);
            }}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              activeTab === 'members'
                ? 'bg-red-600/10 text-red-500 border border-red-500/30 font-semibold'
                : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
            }`}
          >
            <Users className="h-4 w-4" />
            Members
          </button>

          <button
            onClick={() => {
              setActiveTab('reminders');
              setMobileMenuOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              activeTab === 'reminders'
                ? 'bg-red-600/10 text-red-500 border border-red-500/30 font-semibold'
                : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <BellRing className="h-4 w-4" />
              Fee Reminders
            </div>
            {metrics.overdueCount > 0 && (
              <span className="rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                {metrics.overdueCount}
              </span>
            )}
          </button>

          <div className="pt-4 mt-4 border-t border-zinc-800/60 space-y-1">
            <button
              onClick={() => alert('Branches: Rishikesh Main, Tapovan, Dehradun Rajpur Rd, Jakhan, Haridwar.')}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"
            >
              <Building2 className="h-4 w-4" />
              Branches (5)
            </button>
            <button
              onClick={() => alert('Settings: WhatsApp Web hook & Payment Gateway active.')}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"
            >
              <Settings className="h-4 w-4" />
              Settings
            </button>
          </div>
        </nav>
      </aside>

      {/* MAIN VIEWPORT */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP BAR */}
        <header className="sticky top-0 z-30 flex h-14 sm:h-16 items-center justify-between border-b border-zinc-800/80 bg-zinc-950/80 px-3 sm:px-6 md:px-8 backdrop-blur-md">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 rounded-lg text-zinc-400 md:hidden hover:bg-zinc-900"
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h2 className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-white capitalize truncate">
              {activeTab === 'dashboard' && 'Dashboard Overview'}
              {activeTab === 'members' && 'Member Directory'}
              {activeTab === 'reminders' && 'Fee Reminder Center'}
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Search */}
            <div className="relative hidden sm:block w-48 lg:w-64">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search member, phone..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:border-red-500 focus:outline-none"
              />
            </div>

            {/* Notification Bell */}
            <button
              onClick={() => setActiveTab('reminders')}
              className="relative rounded-lg border border-zinc-800 p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white transition"
              title="Overdue Notifications"
            >
              <Bell className="h-4 w-4" />
              {metrics.overdueCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[9px] font-bold text-white animate-pulse">
                  {metrics.overdueCount}
                </span>
              )}
            </button>

            {/* Admin Avatar */}
            <div className="flex items-center gap-2 border-l border-zinc-800 pl-2 sm:pl-4">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
                EFC
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-xs font-semibold leading-none text-zinc-200">Admin Manager</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Headquarters</p>
              </div>
            </div>
          </div>
        </header>

        {/* BODY CONTENT */}
        <main className="flex-1 p-3.5 sm:p-6 md:p-8 space-y-5 overflow-y-auto">
          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <div className="space-y-5">
              {/* Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-950 p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Active Members
                    </span>
                    <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
                  </div>
                  <p className="mt-2 text-xl sm:text-2xl font-black text-white">{metrics.activeMembers}</p>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5">Across 5 branches</p>
                </div>

                <div className="rounded-xl border border-zinc-800/80 bg-zinc-950 p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      This Month Fees
                    </span>
                    <IndianRupee className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
                  </div>
                  <p className="mt-2 text-xl sm:text-2xl font-black text-white">{metrics.totalCollected}</p>
                  <p className="text-[10px] sm:text-[11px] text-emerald-500 mt-0.5">Target achieved</p>
                </div>

                <div className="rounded-xl border border-red-950/60 bg-red-950/10 p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-semibold text-red-400 uppercase tracking-wider">
                      Pending Fees
                    </span>
                    <AlertTriangle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-500" />
                  </div>
                  <p className="mt-2 text-xl sm:text-2xl font-black text-red-500">{metrics.overdueCount}</p>
                  <p className="text-[10px] sm:text-[11px] text-red-400/80 mt-0.5">Overdue action</p>
                </div>

                <div className="rounded-xl border border-amber-950/60 bg-amber-950/10 p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      Due In 3 Days
                    </span>
                    <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-500" />
                  </div>
                  <p className="mt-2 text-xl sm:text-2xl font-black text-amber-400">{metrics.expiringCount}</p>
                  <p className="text-[10px] sm:text-[11px] text-amber-400/80 mt-0.5">Expiry alerts</p>
                </div>
              </div>

              {/* Action Center: Next 3 Days Renewal */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 sm:p-5 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      Members Due for Renewal (Next 3 Days)
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Send direct WhatsApp reminders to prevent membership drop-off.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('reminders')}
                    className="self-start sm:self-auto text-xs font-semibold text-red-500 hover:text-red-400 transition"
                  >
                    View Reminder Center →
                  </button>
                </div>

                {/* Mobile Feed (< md) */}
                <div className="md:hidden space-y-2.5">
                  {members
                    .filter((m) => m.status === 'Expiring Soon' || m.status === 'Overdue')
                    .map((m) => (
                      <div
                        key={m.id}
                        className="rounded-lg border border-zinc-850 bg-zinc-900/60 p-3.5 flex flex-col gap-2.5"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-white text-sm">{m.name}</p>
                            <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
                              <Phone className="h-3 w-3" />
                              {m.phone}
                            </p>
                          </div>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
                              m.status === 'Overdue'
                                ? 'bg-red-950/70 text-red-400 border border-red-500/20'
                                : 'bg-amber-950/70 text-amber-400 border border-amber-500/20'
                            }`}
                          >
                            {m.status}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-zinc-400 pt-1 border-t border-zinc-800/60">
                          <span>{m.branch}</span>
                          <span className="font-mono text-amber-400 font-semibold">{m.dueDate}</span>
                        </div>

                        <button
                          onClick={() => triggerWhatsApp(m)}
                          className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 py-2 text-xs font-bold text-white shadow-md active:bg-emerald-700 transition"
                        >
                          <Send className="h-3.5 w-3.5" />
                          Send WhatsApp
                        </button>
                      </div>
                    ))}
                </div>

                {/* Desktop Table (>= md) */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left text-sm text-zinc-300">
                    <thead className="bg-zinc-900/70 text-xs uppercase text-zinc-400 border-b border-zinc-800">
                      <tr>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Phone</th>
                        <th className="px-4 py-3">Branch</th>
                        <th className="px-4 py-3">Plan</th>
                        <th className="px-4 py-3">Due Date</th>
                        <th className="px-4 py-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900">
                      {members
                        .filter((m) => m.status === 'Expiring Soon' || m.status === 'Overdue')
                        .map((m) => (
                          <tr key={m.id} className="hover:bg-zinc-900/40 transition">
                            <td className="px-4 py-3 font-semibold text-white">{m.name}</td>
                            <td className="px-4 py-3 text-zinc-400 text-xs">{m.phone}</td>
                            <td className="px-4 py-3 text-zinc-300 text-xs">{m.branch}</td>
                            <td className="px-4 py-3">
                              <span className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] text-zinc-300 font-medium">
                                {m.plan}
                              </span>
                            </td>
                            <td className="px-4 py-3 font-mono text-xs text-amber-400 font-semibold">{m.dueDate}</td>
                            <td className="px-4 py-3 text-right">
                              <button
                                onClick={() => triggerWhatsApp(m)}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-md hover:bg-emerald-500 transition active:scale-95"
                              >
                                <Send className="h-3.5 w-3.5" />
                                Send WhatsApp
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MEMBERS DIRECTORY */}
          {activeTab === 'members' && (
            <div className="space-y-4">
              {/* Responsive Header Controls */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {/* Search & Filter Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 sm:py-1.5">
                    <Filter className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                    <select
                      value={selectedBranch}
                      onChange={(e) => {
                        setSelectedBranch(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="bg-transparent text-xs text-zinc-200 focus:outline-none cursor-pointer w-full"
                    >
                      <option value="All" className="bg-zinc-900">
                        All Branches (5)
                      </option>
                      {BRANCHES.map((b) => (
                        <option key={b} value={b} className="bg-zinc-900">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative sm:hidden w-full">
                    <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-zinc-500" />
                    <input
                      type="text"
                      placeholder="Search member, phone..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-900 pl-8 pr-3 py-2 text-xs text-zinc-200 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Actions Row */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={exportCSV}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 transition"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Export CSV
                  </button>
                  <button
                    onClick={() => {
                      setMemberToEdit(null);
                      setIsModalOpen(true);
                    }}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-lg bg-red-600 px-3.5 py-2 text-xs font-bold text-white shadow-md hover:bg-red-700 transition"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Add Member
                  </button>
                </div>
              </div>

              {/* Mobile Member Cards (< md) */}
              <div className="md:hidden space-y-2.5">
                {paginatedMembers.map((m) => (
                  <div
                    key={m.id}
                    className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-2.5 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-white text-sm">{m.name}</p>
                        <p className="text-xs text-zinc-400">{m.phone}</p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
                          m.status === 'Active'
                            ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/20'
                            : m.status === 'Expiring Soon'
                            ? 'bg-amber-950/60 text-amber-400 border border-amber-500/20'
                            : 'bg-red-950/60 text-red-500 border border-red-500/20'
                        }`}
                      >
                        {m.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400 pt-1 border-t border-zinc-900">
                      <div>
                        <span className="block text-[10px] text-zinc-500 uppercase">Branch</span>
                        <span className="text-zinc-300 truncate block">{m.branch}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-zinc-500 uppercase">Plan & Fee</span>
                        <span className="text-zinc-200 font-semibold">{m.plan} • ₹{m.amount}</span>
                      </div>
                      <div className="col-span-2 flex items-center justify-between">
                        <span className="flex items-center gap-1 text-[11px]">
                          <Calendar className="h-3 w-3 text-zinc-500" />
                          Due: <span className="font-mono text-zinc-200">{m.dueDate}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-zinc-900">
                      <button
                        onClick={() => triggerWhatsApp(m)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600/90 py-2 text-xs font-bold text-white active:bg-emerald-700 transition"
                      >
                        <Send className="h-3.5 w-3.5" />
                        Reminder
                      </button>
                      <button
                        onClick={() => {
                          setMemberToEdit(m);
                          setIsModalOpen(true);
                        }}
                        className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white"
                        aria-label="Edit Member"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteMember(m.id)}
                        className="p-2 rounded-lg border border-red-950/40 bg-red-950/20 text-red-400"
                        aria-label="Delete Member"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}

                {filteredMembers.length === 0 && (
                  <div className="p-8 text-center text-xs text-zinc-500 bg-zinc-950 rounded-xl border border-zinc-850">
                    No members match &quot;{searchQuery}&quot;.
                  </div>
                )}
              </div>

              {/* Desktop Table (>= md) */}
              <div className="hidden md:block rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-zinc-300">
                    <thead className="bg-zinc-900/60 text-xs uppercase text-zinc-400 border-b border-zinc-800">
                      <tr>
                        <th className="px-4 py-3">Member Name</th>
                        <th className="px-4 py-3">Phone Number</th>
                        <th className="px-4 py-3">Branch</th>
                        <th className="px-4 py-3">Plan Type</th>
                        <th className="px-4 py-3">Join Date</th>
                        <th className="px-4 py-3">Next Due Date</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900">
                      {paginatedMembers.map((m) => (
                        <tr key={m.id} className="hover:bg-zinc-900/40 transition">
                          <td className="px-4 py-3">
                            <span className="font-semibold text-white block">{m.name}</span>
                            <span className="text-[10px] text-zinc-500 font-mono">{m.id}</span>
                          </td>
                          <td className="px-4 py-3 text-xs text-zinc-300 font-mono">{m.phone}</td>
                          <td className="px-4 py-3 text-xs text-zinc-300">{m.branch}</td>
                          <td className="px-4 py-3 text-xs font-medium">{m.plan}</td>
                          <td className="px-4 py-3 text-xs text-zinc-400">{m.joinDate}</td>
                          <td className="px-4 py-3 text-xs font-mono font-semibold text-zinc-200">{m.dueDate}</td>
                          <td className="px-4 py-3">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                                m.status === 'Active'
                                  ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/20'
                                  : m.status === 'Expiring Soon'
                                  ? 'bg-amber-950/60 text-amber-400 border border-amber-500/20'
                                  : 'bg-red-950/60 text-red-500 border border-red-500/20'
                              }`}
                            >
                              {m.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <button
                                onClick={() => triggerWhatsApp(m)}
                                title="Send WhatsApp Reminder"
                                className="rounded p-1.5 text-emerald-400 hover:bg-emerald-950/50 transition"
                              >
                                <Send className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => {
                                  setMemberToEdit(m);
                                  setIsModalOpen(true);
                                }}
                                title="Edit Member"
                                className="rounded p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition"
                              >
                                <Pencil className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteMember(m.id)}
                                title="Delete Member"
                                className="rounded p-1.5 text-red-400 hover:bg-red-950/50 transition"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredMembers.length === 0 && (
                  <div className="p-8 text-center text-sm text-zinc-500">
                    No members found matching &quot;{searchQuery}&quot;.
                  </div>
                )}
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-xs text-zinc-400">
                <span className="truncate">
                  {paginatedMembers.length} of {filteredMembers.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="rounded border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-zinc-300 disabled:opacity-40"
                  >
                    Prev
                  </button>
                  <span className="font-mono">
                    {currentPage}/{totalPages}
                  </span>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    className="rounded border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-zinc-300 disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FEE REMINDERS & NOTIFICATION CENTER */}
          {activeTab === 'reminders' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Overdue / Expiring List */}
              <div className="lg:col-span-2 rounded-xl border border-zinc-800 bg-zinc-950 p-4 sm:p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">Pending Membership Dues</h3>
                    <p className="text-xs text-zinc-400">
                      Accounts marked as Overdue or Expiring within 3 days.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      members
                        .filter((m) => m.status === 'Overdue' || m.status === 'Expiring Soon')
                        .forEach((m) => triggerWhatsApp(m));
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-emerald-500 transition active:scale-95"
                  >
                    <Send className="h-3.5 w-3.5" />
                    1-Click Send All
                  </button>
                </div>

                <div className="divide-y divide-zinc-900 border-t border-zinc-800">
                  {members
                    .filter((m) => m.status === 'Overdue' || m.status === 'Expiring Soon')
                    .map((m) => (
                      <div
                        key={m.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 gap-2.5"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-white text-sm">{m.name}</p>
                            <span
                              className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
                                m.status === 'Overdue'
                                  ? 'bg-red-950/60 text-red-500 border border-red-500/20'
                                  : 'bg-amber-950/60 text-amber-400 border border-amber-500/20'
                              }`}
                            >
                              {m.status}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-0.5">
                            {m.branch} • Due Date:{' '}
                            <span className="text-amber-400 font-mono font-semibold">{m.dueDate}</span>
                          </p>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-3">
                          <span className="font-bold text-sm text-zinc-200">₹{m.amount}</span>
                          <button
                            onClick={() => triggerWhatsApp(m)}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 transition"
                          >
                            <Send className="h-3 w-3" />
                            Send
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Template Preview Card */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 sm:p-5 space-y-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2">
                    WhatsApp Message Preview
                  </h3>
                  <div className="rounded-lg border border-emerald-900/40 bg-emerald-950/20 p-3.5 text-xs leading-relaxed text-zinc-200 space-y-2">
                    <p className="font-semibold text-emerald-400">Standard EFC Template:</p>
                    <blockquote className="italic border-l-2 border-emerald-500/50 pl-3 text-zinc-300">
                      &quot;Hi [Name], your EFC membership expires on [Date]. Please pay ₹[Amount] to continue your
                      fitness journey. DM us for payment details.&quot;
                    </blockquote>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-zinc-900">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Auto-fills member name, fee &amp; expiry date</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Direct WhatsApp Web / App redirect</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex h-14 items-center justify-around border-t border-zinc-850 bg-zinc-950/95 backdrop-blur-lg px-2">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex flex-col items-center justify-center flex-1 py-1 text-[10px] font-medium transition ${
            activeTab === 'dashboard' ? 'text-red-500 font-bold' : 'text-zinc-400'
          }`}
        >
          <LayoutDashboard className="h-4 w-4 mb-0.5" />
          <span>Overview</span>
        </button>

        <button
          onClick={() => setActiveTab('members')}
          className={`flex flex-col items-center justify-center flex-1 py-1 text-[10px] font-medium transition ${
            activeTab === 'members' ? 'text-red-500 font-bold' : 'text-zinc-400'
          }`}
        >
          <Users className="h-4 w-4 mb-0.5" />
          <span>Members</span>
        </button>

        <button
          onClick={() => setActiveTab('reminders')}
          className={`relative flex flex-col items-center justify-center flex-1 py-1 text-[10px] font-medium transition ${
            activeTab === 'reminders' ? 'text-red-500 font-bold' : 'text-zinc-400'
          }`}
        >
          <BellRing className="h-4 w-4 mb-0.5" />
          <span>Reminders</span>
          {metrics.overdueCount > 0 && (
            <span className="absolute top-1 right-5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-600 text-[8px] font-black text-white">
              {metrics.overdueCount}
            </span>
          )}
        </button>
      </nav>

      {/* ADD / EDIT MEMBER MODAL */}
      <MemberModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setMemberToEdit(null);
        }}
        onSave={handleSaveMember}
        memberToEdit={memberToEdit}
      />
    </div>
  );
}