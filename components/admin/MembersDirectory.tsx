'use client';

import React, { useState } from 'react';
import {
  Download,
  Plus,
  Filter,
  Search,
  Calendar,
  Send,
  Pencil,
  Trash2,
  Copy,
  Check,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BRANCHES, Member } from '@/lib/admin-data';

interface MembersDirectoryProps {
  members: Member[];
  selectedBranch: string;
  onSelectBranch: (branch: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAddMember: () => void;
  onEditMember: (member: Member) => void;
  onDeleteMember: (id: string) => void;
  onSendWhatsApp: (member: Member) => void;
  onExportCSV: () => void;
}

export function MembersDirectory({
  members,
  selectedBranch,
  onSelectBranch,
  searchQuery,
  onSearchChange,
  onAddMember,
  onEditMember,
  onDeleteMember,
  onSendWhatsApp,
  onExportCSV,
}: MembersDirectoryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(members.length / itemsPerPage) || 1;
  const paginatedMembers = members.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCopyPhone = (id: string, phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="space-y-4">
      {/* Control Strip */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2 sm:py-1.5">
            <Filter className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
            <select
              value={selectedBranch}
              onChange={(e) => {
                onSelectBranch(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-transparent text-xs text-zinc-200 focus:outline-none cursor-pointer w-full"
            >
              <option value="All" className="bg-zinc-900 text-white">
                All Branches ({BRANCHES.length})
              </option>
              {BRANCHES.map((b) => (
                <option key={b} value={b} className="bg-zinc-900 text-white">
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
                onSearchChange(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full rounded-xl border border-white/[0.08] bg-zinc-900 px-8 py-2 text-xs text-zinc-200 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onExportCSV}
            className="flex-1 sm:flex-none border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08] hover:text-white"
          >
            <Download className="h-3.5 w-3.5 mr-1.5" />
            Export CSV
          </Button>
          <Button
            size="sm"
            onClick={onAddMember}
            className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700 text-white font-bold"
          >
            <Plus className="h-3.5 w-3.5 mr-1.5" />
            Add Member
          </Button>
        </div>
      </div>

      {/* Mobile Card Feed */}
      <div className="md:hidden space-y-3">
        {paginatedMembers.map((m) => (
          <Card key={m.id} className="border-white/[0.08] bg-[#0c0d14]/90 p-4 space-y-3 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-white text-sm">{m.name}</p>
                <p className="text-xs text-zinc-400 font-mono">{m.phone}</p>
              </div>
              <Badge
                variant="outline"
                className={
                  m.status === 'Active'
                    ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                    : m.status === 'Expiring Soon'
                    ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                    : 'bg-red-500/15 text-red-400 border-red-500/30'
                }
              >
                {m.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400 pt-2 border-t border-white/[0.06]">
              <div>
                <span className="block text-[10px] text-zinc-500 uppercase">Branch</span>
                <span className="text-zinc-300 truncate block">{m.branch}</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-500 uppercase">Plan & Fee</span>
                <span className="text-zinc-200 font-semibold">{m.plan} • ₹{m.amount}</span>
              </div>
              <div className="col-span-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                  Due: <span className="font-mono text-zinc-200">{m.dueDate}</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
              <Button
                size="sm"
                onClick={() => onSendWhatsApp(m)}
                className="flex-1 bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold h-8 text-xs"
              >
                <Send className="h-3.5 w-3.5 mr-1" />
                Reminder
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => onEditMember(m)}
                className="border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:text-white h-8 w-8"
              >
                <Pencil className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => onDeleteMember(m.id)}
                className="bg-red-950/20 border border-red-500/30 text-red-400 hover:bg-red-900/40 h-8 w-8"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          </Card>
        ))}

        {members.length === 0 && (
          <div className="p-8 text-center text-xs text-zinc-500 bg-zinc-950 rounded-2xl border border-white/[0.08]">
            No members match &quot;{searchQuery}&quot;.
          </div>
        )}
      </div>

      {/* Desktop Table View */}
      <Card className="hidden md:block border-white/[0.08] bg-[#0c0d14]/80 overflow-hidden shadow-sm backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-300 border-collapse">
            <thead className="bg-white/[0.02] text-[11px] uppercase tracking-wider text-zinc-400 border-b border-white/[0.08]">
              <tr>
                <th className="px-5 py-3.5">Member Name</th>
                <th className="px-5 py-3.5">Phone</th>
                <th className="px-5 py-3.5">Branch</th>
                <th className="px-5 py-3.5">Plan Type</th>
                <th className="px-5 py-3.5">Join Date</th>
                <th className="px-5 py-3.5">Next Due Date</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {paginatedMembers.map((m) => (
                <tr key={m.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-5 py-3.5">
                    <span className="font-semibold text-white block">{m.name}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">{m.id}</span>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-zinc-300 font-mono">
                    <div className="flex items-center gap-2">
                      <span>{m.phone}</span>
                      <button
                        onClick={() => handleCopyPhone(m.id, m.phone)}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition text-zinc-400 hover:text-white"
                        title="Copy Phone"
                      >
                        {copiedId === m.id ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-zinc-300">{m.branch}</td>
                  <td className="px-5 py-3.5 text-xs">
                    <Badge variant="outline" className="bg-white/[0.06] border-white/[0.08] text-zinc-300">
                      {m.plan}
                    </Badge>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-zinc-400">{m.joinDate}</td>
                  <td className="px-5 py-3.5 text-xs font-mono font-semibold text-zinc-200">{m.dueDate}</td>
                  <td className="px-5 py-3.5">
                    <Badge
                      variant="outline"
                      className={
                        m.status === 'Active'
                          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          : m.status === 'Expiring Soon'
                          ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                          : 'bg-red-500/15 text-red-400 border-red-500/30'
                      }
                    >
                      {m.status}
                    </Badge>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onSendWhatsApp(m)}
                        className="text-emerald-400 hover:bg-emerald-950/40 h-8 w-8"
                      >
                        <Send className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onEditMember(m)}
                        className="text-zinc-400 hover:bg-white/[0.06] hover:text-white h-8 w-8"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onDeleteMember(m.id)}
                        className="text-red-400 hover:bg-red-950/40 h-8 w-8"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {members.length === 0 && (
          <div className="p-8 text-center text-sm text-zinc-500">
            No members found matching &quot;{searchQuery}&quot;.
          </div>
        )}
      </Card>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0c0d14]/80 px-4 py-3 text-xs text-zinc-400">
        <span className="truncate">
          Showing {paginatedMembers.length} of {members.length}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08]"
          >
            Prev
          </Button>
          <span className="font-mono">
            {currentPage}/{totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08]"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}