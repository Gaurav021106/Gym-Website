'use client';

import React from 'react';
import { Send, Phone } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Member } from '@/lib/admin-data';

interface RenewalActionCenterProps {
  members: Member[];
  onViewAllReminders: () => void;
  onSendWhatsApp: (member: Member) => void;
}

export function RenewalActionCenter({
  members,
  onViewAllReminders,
  onSendWhatsApp,
}: RenewalActionCenterProps) {
  const pendingMembers = members.filter(
    (m) => m.status === 'Expiring Soon' || m.status === 'Overdue'
  );

  return (
    <Card className="border-white/[0.08] bg-[#0c0d14]/80 shadow-md backdrop-blur-xl">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4">
        <div>
          <CardTitle className="text-base font-bold text-white tracking-tight">
            Members Due for Renewal
          </CardTitle>
          <CardDescription className="text-xs text-zinc-400 mt-0.5">
            Send direct WhatsApp reminders to prevent membership drop-off.
          </CardDescription>
        </div>
        <Button
          variant="link"
          onClick={onViewAllReminders}
          className="self-start sm:self-auto p-0 h-auto text-xs font-semibold text-red-400 hover:text-red-300"
        >
          View Reminder Center →
        </Button>
      </CardHeader>

      <CardContent>
        {/* Mobile View */}
        <div className="md:hidden space-y-3">
          {pendingMembers.map((m) => (
            <div
              key={m.id}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-white text-sm">{m.name}</p>
                  <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                    <Phone className="h-3 w-3" />
                    {m.phone}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={
                    m.status === 'Overdue'
                      ? 'bg-red-500/15 text-red-400 border-red-500/30'
                      : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                  }
                >
                  {m.status}
                </Badge>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-white/[0.06]">
                <span>{m.branch}</span>
                <span className="font-mono text-zinc-200 font-semibold">{m.dueDate}</span>
              </div>

              <Button
                size="sm"
                onClick={() => onSendWhatsApp(m)}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold"
              >
                <Send className="h-3.5 w-3.5 mr-1.5" />
                Send WhatsApp
              </Button>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-300 border-collapse">
            <thead className="bg-white/[0.02] text-[11px] uppercase tracking-wider text-zinc-400 border-b border-white/[0.08]">
              <tr>
                <th className="px-4 py-3.5">Name</th>
                <th className="px-4 py-3.5">Phone</th>
                <th className="px-4 py-3.5">Branch</th>
                <th className="px-4 py-3.5">Plan</th>
                <th className="px-4 py-3.5">Due Date</th>
                <th className="px-4 py-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {pendingMembers.map((m) => (
                <tr key={m.id} className="hover:bg-white/[0.02] transition">
                  <td className="px-4 py-3.5 font-semibold text-white">{m.name}</td>
                  <td className="px-4 py-3.5 text-zinc-400 text-xs font-mono">{m.phone}</td>
                  <td className="px-4 py-3.5 text-zinc-300 text-xs">{m.branch}</td>
                  <td className="px-4 py-3.5">
                    <Badge variant="outline" className="bg-white/[0.06] border-white/[0.08] text-zinc-300">
                      {m.plan}
                    </Badge>
                  </td>
                  <td className="px-4 py-3.5 font-mono text-xs text-amber-400 font-semibold">{m.dueDate}</td>
                  <td className="px-4 py-3.5 text-right">
                    <Button
                      size="sm"
                      onClick={() => onSendWhatsApp(m)}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-8 px-3 text-xs"
                    >
                      <Send className="h-3.5 w-3.5 mr-1.5" />
                      Send WhatsApp
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}