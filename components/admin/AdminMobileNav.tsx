'use client';

import React from 'react';
import { LayoutDashboard, Users, BellRing } from 'lucide-react';

interface AdminMobileNavProps {
  activeTab: 'dashboard' | 'members' | 'reminders';
  setActiveTab: (tab: 'dashboard' | 'members' | 'reminders') => void;
  overdueCount: number;
}

export function AdminMobileNav({
  activeTab,
  setActiveTab,
  overdueCount,
}: AdminMobileNavProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex h-14 items-center justify-around border-t border-white/[0.08] bg-zinc-950/95 backdrop-blur-lg px-2">
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
        {overdueCount > 0 && (
          <span className="absolute top-1 right-5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-600 text-[8px] font-black text-white">
            {overdueCount}
          </span>
        )}
      </button>
    </nav>
  );
}