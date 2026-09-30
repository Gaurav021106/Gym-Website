'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  LayoutDashboard,
  Users,
  BellRing,
  Building2,
  Settings,
  ArrowLeft,
  ExternalLink,
  X,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AdminSidebarProps {
  activeTab: 'dashboard' | 'members' | 'reminders';
  setActiveTab: (tab: 'dashboard' | 'members' | 'reminders') => void;
  membersCount: number;
  overdueCount: number;
  branchesCount: number;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function AdminSidebar({
  activeTab,
  setActiveTab,
  membersCount,
  overdueCount,
  branchesCount,
  mobileMenuOpen,
  setMobileMenuOpen,
}: AdminSidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-72 sm:w-64 transform border-r border-white/[0.08] bg-[#0c0d14]/95 p-4 transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between px-2 py-3 border-b border-white/[0.08] mb-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-xl overflow-hidden border border-red-500/30 bg-red-950/20 p-1 flex items-center justify-center">
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
          className="md:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06]"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Live Site Link */}
      <div className="px-1 mb-4">
        <Link
          href="/"
          className="flex items-center justify-between w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-semibold text-zinc-300 hover:text-white hover:border-red-500/50 hover:bg-red-600/10 transition group"
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
          className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-medium transition ${
            activeTab === 'dashboard'
              ? 'bg-red-600/15 text-white border border-red-500/30 font-semibold shadow-md shadow-red-950/40'
              : 'text-zinc-400 hover:bg-white/[0.04] hover:text-white'
          }`}
        >
          <LayoutDashboard className="h-4 w-4 text-red-400" />
          Dashboard
        </button>

        <button
          onClick={() => {
            setActiveTab('members');
            setMobileMenuOpen(false);
          }}
          className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-medium transition ${
            activeTab === 'members'
              ? 'bg-red-600/15 text-white border border-red-500/30 font-semibold shadow-md shadow-red-950/40'
              : 'text-zinc-400 hover:bg-white/[0.04] hover:text-white'
          }`}
        >
          <div className="flex items-center gap-3">
            <Users className="h-4 w-4" />
            Members
          </div>
          <Badge variant="outline" className="border-white/[0.08] bg-white/[0.04] text-zinc-300 text-[10px]">
            {membersCount}
          </Badge>
        </button>

        <button
          onClick={() => {
            setActiveTab('reminders');
            setMobileMenuOpen(false);
          }}
          className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-medium transition ${
            activeTab === 'reminders'
              ? 'bg-red-600/15 text-white border border-red-500/30 font-semibold shadow-md shadow-red-950/40'
              : 'text-zinc-400 hover:bg-white/[0.04] hover:text-white'
          }`}
        >
          <div className="flex items-center gap-3">
            <BellRing className="h-4 w-4" />
            Fee Reminders
          </div>
          {overdueCount > 0 && (
            <Badge className="bg-red-600 text-white text-[10px] font-bold">
              {overdueCount}
            </Badge>
          )}
        </button>

        <div className="pt-4 mt-4 border-t border-white/[0.08] space-y-1">
          <div className="flex items-center gap-3 px-3.5 py-2 text-xs font-medium text-zinc-500">
            <Building2 className="h-4 w-4" />
            <span>Branches ({branchesCount})</span>
          </div>
          <div className="flex items-center gap-3 px-3.5 py-2 text-xs font-medium text-zinc-500">
            <Settings className="h-4 w-4" />
            <span>WhatsApp Ready</span>
          </div>
        </div>
      </nav>
    </aside>
  );
}