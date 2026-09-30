'use client';

import React from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Member } from '@/lib/admin-data';

interface RemindersCenterProps {
  members: Member[];
  onSendWhatsApp: (member: Member) => void;
  onSendAll: () => void;
}

export function RemindersCenter({ members, onSendWhatsApp, onSendAll }: RemindersCenterProps) {
  const pendingMembers = members.filter(
    (m) => m.status === 'Overdue' || m.status === 'Expiring Soon'
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Overdue / Expiring List */}
      <Card className="lg:col-span-2 border-white/[0.08] bg-[#0c0d14]/80 shadow-md">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4">
          <div>
            <CardTitle className="text-base font-bold text-white tracking-tight">
              Pending Membership Dues
            </CardTitle>
            <CardDescription className="text-xs text-zinc-400 mt-0.5">
              Accounts marked as Overdue or Expiring within 3 days.
            </CardDescription>
          </div>
          <Button
            size="sm"
            onClick={onSendAll}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-md"
          >
            <Send className="h-3.5 w-3.5 mr-1.5" />
            1-Click Send All
          </Button>
        </CardHeader>

        <CardContent>
          <div className="divide-y divide-white/[0.04] border-t border-white/[0.08]">
            {pendingMembers.map((m) => (
              <div
                key={m.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-white text-sm">{m.name}</p>
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
                  <p className="text-xs text-zinc-400 mt-1">
                    {m.branch} • Due Date:{' '}
                    <span className="text-amber-400 font-mono font-semibold">{m.dueDate}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3">
                  <span className="font-bold text-sm text-zinc-200">₹{m.amount}</span>
                  <Button
                    size="sm"
                    onClick={() => onSendWhatsApp(m)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-8 text-xs"
                  >
                    <Send className="h-3 w-3 mr-1" />
                    Send
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Template Preview Card */}
      <Card className="border-white/[0.08] bg-[#0c0d14]/80 shadow-md flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-xs font-bold text-white uppercase tracking-wider">
            WhatsApp Message Preview
          </CardTitle>
          <div className="mt-3 rounded-xl border border-emerald-900/30 bg-emerald-950/20 p-4 text-xs leading-relaxed text-zinc-200 space-y-2.5">
            <p className="font-semibold text-emerald-400">Direct Message Format:</p>
            <blockquote className="italic border-l-2 border-emerald-500/50 pl-3 text-zinc-300">
              &quot;Hi [Name], your Eddy Fitness Club ([Branch]) membership fee of ₹[Amount] is due on [Date]. Please renew to continue your workout sessions uninterrupted.&quot;
            </blockquote>
          </div>
        </CardHeader>

        <CardContent className="space-y-2 pt-4 border-t border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>Auto-fills member name, branch, amount &amp; expiry</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>Direct WhatsApp Web / App redirect</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}