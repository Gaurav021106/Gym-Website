/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Search, Bell, Plus, Menu, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { INITIAL_MEMBERS, BRANCHES, Member } from '@/lib/admin-data';

import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminMobileNav } from '@/components/admin/AdminMobileNav';
import { MetricCards } from '@/components/admin/MetricCards';
import { RenewalActionCenter } from '@/components/admin/RenewalActionCenter';
import { MembersDirectory } from '@/components/admin/MembersDirectory';
import { RemindersCenter } from '@/components/admin/RemindersCenter';
import { MemberModal } from '@/components/admin/MemberModal';

export default function AdminDashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'members' | 'reminders'>('dashboard');
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedBranch, setSelectedBranch] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberToEdit, setMemberToEdit] = useState<Member | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamically compute member status based on dueDate
  const computeMemberStatus = (dueDateStr: string): Member['status'] => {
    if (!dueDateStr) return 'Active';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDateStr);
    due.setHours(0, 0, 0, 0);

    const diffDays = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return 'Overdue';
    if (diffDays <= 7) return 'Expiring Soon';
    return 'Active';
  };

  // Fetch all members from MongoDB API
  const fetchMembers = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/members', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch members');
      const data = await res.json();
      const rawMembers: Member[] = Array.isArray(data) ? data : data.members || [];

      const normalized = rawMembers.map((m: any) => ({
        ...m,
        id: m._id || m.id,
        status: computeMemberStatus(m.dueDate),
      }));

      setMembers(normalized);
    } catch (error) {
      console.error('Error loading members from API, falling back to local data:', error);
      setMembers(INITIAL_MEMBERS);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    fetchMembers();
  }, [fetchMembers]);

  // WhatsApp Trigger with member context
  const triggerWhatsApp = (member: Member) => {
    const rawNumber = member.phone.replace(/[^0-9]/g, '');
    const formattedPhone = rawNumber.length === 10 ? `91${rawNumber}` : rawNumber;
    const message = encodeURIComponent(
      `Hi ${member.name}, your Eddy Fitness Club (${member.branch}) membership fee of ₹${member.amount} is due on ${member.dueDate}. Please renew to continue your workout sessions uninterrupted.`
    );
    window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
  };

  // Metrics derived purely from actual data
  const metrics = useMemo(() => {
    const active = members.filter((m) => m.status === 'Active').length;
    const overdue = members.filter((m) => m.status === 'Overdue').length;
    const expiringSoon = members.filter((m) => m.status === 'Expiring Soon').length;
    const totalCollected = members.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

    return {
      activeMembers: active,
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

  // Add or Update Member in MongoDB
  const handleSaveMember = async (savedMember: Member) => {
    const payload = {
      ...savedMember,
      status: computeMemberStatus(savedMember.dueDate),
    };

    try {
      if (memberToEdit) {
        const targetId = (memberToEdit as any)._id || memberToEdit.id;
        const res = await fetch(`/api/members/${targetId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error('Failed to update member');
        const updated = await res.json();
        const formatted = {
          ...(updated.member || updated),
          id: (updated.member || updated)._id || savedMember.id,
          status: computeMemberStatus((updated.member || updated).dueDate),
        };

        setMembers((prev) => prev.map((m) => (m.id === targetId ? formatted : m)));
      } else {
        const res = await fetch('/api/members', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error('Failed to create member');
        const created = await res.json();
        const newDoc = created.member || created;
        const formatted = {
          ...newDoc,
          id: newDoc._id || newDoc.id || savedMember.id,
          status: computeMemberStatus(newDoc.dueDate),
        };

        setMembers((prev) => [formatted, ...prev]);
      }
    } catch (error) {
      console.error('API Save Error (updating state optimistically):', error);
      if (memberToEdit) {
        setMembers((prev) => prev.map((m) => (m.id === payload.id ? payload : m)));
      } else {
        setMembers((prev) => [payload, ...prev]);
      }
    } finally {
      setIsModalOpen(false);
      setMemberToEdit(null);
    }
  };

  // Delete Member from MongoDB
  const handleDeleteMember = async (id: string) => {
    if (!confirm('Are you sure you want to remove this member profile?')) return;

    try {
      const res = await fetch(`/api/members/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete member from database');
      setMembers((prev) => prev.filter((m) => m.id !== id && (m as any)._id !== id));
    } catch (error) {
      console.error('Delete error:', error);
      setMembers((prev) => prev.filter((m) => m.id !== id));
    }
  };

  // Export filtered directory to CSV
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

  if (!mounted) {
    return <div className="min-h-screen bg-[#090a0f]" />;
  }

  return (
    <div className="flex min-h-screen bg-[#090a0f] text-zinc-100 font-sans antialiased pb-16 md:pb-0">
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Sidebar Component */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        membersCount={members.length}
        overdueCount={metrics.overdueCount}
        branchesCount={BRANCHES.length}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Viewport */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/8 bg-[#0c0d14]/70 px-4 sm:px-6 md:px-8 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 rounded-lg text-zinc-400 md:hidden hover:bg-white/6"
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h2 className="text-base font-bold tracking-tight text-white capitalize truncate">
              {activeTab === 'dashboard' && 'Dashboard Overview'}
              {activeTab === 'members' && 'Member Directory'}
              {activeTab === 'reminders' && 'Fee Reminder Center'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block w-48 lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search member, phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/8 bg-white/4 pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:border-red-500/60 focus:outline-none transition"
              />
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={fetchMembers}
              disabled={loading}
              className="border-white/8 bg-white/4 text-zinc-300 hover:bg-white/8"
              title="Refresh Data"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setActiveTab('reminders')}
              className="relative border-white/8 bg-white/4 text-zinc-300 hover:bg-white/8"
              title="Overdue Notifications"
            >
              <Bell className="h-4 w-4" />
              {metrics.overdueCount > 0 && (
                <Badge className="absolute -top-1 -right-1 flex h-4 w-4 p-0 items-center justify-center rounded-full bg-red-600 text-[9px] font-bold text-white">
                  {metrics.overdueCount}
                </Badge>
              )}
            </Button>

            <Button
              size="sm"
              onClick={() => {
                setMemberToEdit(null);
                setIsModalOpen(true);
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs shadow-lg shadow-red-600/20"
            >
              <Plus className="w-3.5 h-3.5 mr-1" />
              <span>Add Member</span>
            </Button>
          </div>
        </header>

        {/* Tab Switcher Body */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 space-y-6 overflow-y-auto max-w-7xl w-full mx-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <MetricCards metrics={metrics} />
              <RenewalActionCenter
                members={members}
                onViewAllReminders={() => setActiveTab('reminders')}
                onSendWhatsApp={triggerWhatsApp}
              />
            </div>
          )}

          {activeTab === 'members' && (
            <MembersDirectory
              members={filteredMembers}
              selectedBranch={selectedBranch}
              onSelectBranch={setSelectedBranch}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onAddMember={() => {
                setMemberToEdit(null);
                setIsModalOpen(true);
              }}
              onEditMember={(m) => {
                setMemberToEdit(m);
                setIsModalOpen(true);
              }}
              onDeleteMember={handleDeleteMember}
              onSendWhatsApp={triggerWhatsApp}
              onExportCSV={exportCSV}
            />
          )}

          {activeTab === 'reminders' && (
            <RemindersCenter
              members={members}
              onSendWhatsApp={triggerWhatsApp}
              onSendAll={() => {
                members
                  .filter((m) => m.status === 'Overdue' || m.status === 'Expiring Soon')
                  .forEach((m) => triggerWhatsApp(m));
              }}
            />
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <AdminMobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        overdueCount={metrics.overdueCount}
      />

      {/* Member Form Modal */}
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