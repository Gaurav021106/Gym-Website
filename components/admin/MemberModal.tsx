/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BRANCHES, Member } from '@/lib/admin-data';

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (member: Member) => void;
  memberToEdit?: Member | null;
}

export function MemberModal({ isOpen, onClose, onSave, memberToEdit }: MemberModalProps) {
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
      <div className="relative w-full max-w-lg rounded-t-2xl sm:rounded-2xl border border-white/[0.1] bg-zinc-950 p-6 shadow-2xl text-zinc-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-zinc-400 hover:bg-white/[0.06] hover:text-white transition"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-lg font-bold tracking-tight text-white mb-4">
          {memberToEdit ? 'Edit Member Profile' : 'Add New Member'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/80 px-3.5 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-red-500/60 focus:outline-none focus:ring-1 focus:ring-red-500/30 transition"
              placeholder="e.g. Aman Sharma"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5">
                Phone (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/80 px-3.5 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-red-500/60 focus:outline-none focus:ring-1 focus:ring-red-500/30 transition"
                placeholder="+91..."
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/80 px-3.5 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-red-500/60 focus:outline-none transition"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5">
                Select Branch *
              </label>
              <select
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100 focus:border-red-500/60 focus:outline-none transition cursor-pointer"
              >
                {BRANCHES.map((branch) => (
                  <option key={branch} value={branch} className="bg-zinc-900 text-white">
                    {branch}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5">
                Plan Duration
              </label>
              <select
                value={formData.plan}
                onChange={(e) => setFormData({ ...formData, plan: e.target.value as Member['plan'] })}
                className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100 focus:border-red-500/60 focus:outline-none transition cursor-pointer"
              >
                <option value="Monthly" className="bg-zinc-900 text-white">Monthly</option>
                <option value="Quarterly" className="bg-zinc-900 text-white">Quarterly</option>
                <option value="Half-Yearly" className="bg-zinc-900 text-white">Half-Yearly</option>
                <option value="Yearly" className="bg-zinc-900 text-white">Yearly</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5">
                Join Date
              </label>
              <input
                type="date"
                value={formData.joinDate || ''}
                onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
                className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100 focus:border-red-500/60 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5">
                Next Due Date *
              </label>
              <input
                type="date"
                required
                value={formData.dueDate || ''}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100 focus:border-red-500/60 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1.5">
                Fee Amount (₹)
              </label>
              <input
                type="number"
                value={formData.amount || ''}
                onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100 focus:border-red-500/60 focus:outline-none transition"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2.5 pt-4 border-t border-white/[0.08]">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onClose}
              className="border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08] hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg shadow-red-600/30"
            >
              Save Member
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}