'use client';

import React from 'react';
import { Users, IndianRupee, AlertTriangle, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface MetricCardsProps {
  metrics: {
    activeMembers: number;
    totalCollected: string;
    overdueCount: number;
    expiringCount: number;
  };
}

export function MetricCards({ metrics }: MetricCardsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Active Members */}
      <Card className="border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-sm">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Active Members
            </span>
            <Users className="h-4 w-4 text-emerald-400" />
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{metrics.activeMembers}</p>
          <p className="text-xs text-zinc-500 mt-1">Total across branches</p>
        </CardContent>
      </Card>

      {/* 2. Total Collected */}
      <Card className="border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-sm">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Total Fees
            </span>
            <IndianRupee className="h-4 w-4 text-emerald-400" />
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{metrics.totalCollected}</p>
          <p className="text-xs text-emerald-500 mt-1">Recorded revenue</p>
        </CardContent>
      </Card>

      {/* 3. Pending Overdue */}
      <Card className="border-red-500/25 bg-gradient-to-b from-red-600/[0.08] to-red-950/[0.02] shadow-sm">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-red-300 uppercase tracking-wider">
              Pending Fees
            </span>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-red-400">{metrics.overdueCount}</p>
          <p className="text-xs text-red-400/80 mt-1">Action required</p>
        </CardContent>
      </Card>

      {/* 4. Due Soon */}
      <Card className="border-amber-500/25 bg-gradient-to-b from-amber-500/[0.08] to-amber-950/[0.02] shadow-sm">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
              Due Soon
            </span>
            <Clock className="h-4 w-4 text-amber-400" />
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-amber-400">{metrics.expiringCount}</p>
          <p className="text-xs text-amber-400/80 mt-1">Expiring within 3 days</p>
        </CardContent>
      </Card>
    </div>
  );
}