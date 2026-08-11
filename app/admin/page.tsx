"use client";

import { 
  Users, CreditCard, CalendarCheck, Wallet, ArrowUpRight, 
  ArrowDownRight, ChevronDown, UserPlus, FileText, CheckSquare, 
  Crown, Megaphone, BarChart2, Activity 
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Top Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Gym Dashboard</h1>
          <p className="text-zinc-400 text-sm">Overview of Eddy Fitness Club performance.</p>
        </div>
        <button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 transition-colors shadow-sm">
           Aug 05 - Aug 11, 2026 <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Summary Stats (5 cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
         {[
           { title: "Total Members", value: "1,245", change: "+12.5%", isUp: true, icon: <Users className="text-red-500 w-6 h-6" />, bg: "bg-red-500/10" },
           { title: "Active Members", value: "1,028", change: "+8.3%", isUp: true, icon: <Users className="text-emerald-500 w-6 h-6" />, bg: "bg-emerald-500/10" },
           { title: "Total Revenue", value: "₹4,52,310", change: "+15.7%", isUp: true, icon: <Wallet className="text-purple-500 w-6 h-6" />, bg: "bg-purple-500/10" },
           { title: "Pending Payments", value: "₹31,280", change: "-4.3%", isUp: false, icon: <CreditCard className="text-amber-500 w-6 h-6" />, bg: "bg-amber-500/10" },
           { title: "Check-ins Today", value: "156", change: "+10.2%", isUp: true, icon: <CalendarCheck className="text-blue-500 w-6 h-6" />, bg: "bg-blue-500/10" },
         ].map((stat, i) => (
           <div key={i} className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 shadow-sm flex items-start gap-4 hover:border-zinc-700 transition-colors">
             <div className={`${stat.bg} p-3 rounded-lg shrink-0`}>
               {stat.icon}
             </div>
             <div>
                <p className="text-xs font-semibold text-zinc-400 mb-1">{stat.title}</p>
                <div className="flex items-baseline gap-2">
                   <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                   <span className={`flex items-center text-[10px] font-bold ${stat.isUp ? 'text-emerald-500' : 'text-red-500'}`}>
                     {stat.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                     {stat.change}
                   </span>
                </div>
                <p className="text-[10px] text-zinc-500 mt-1">vs last week</p>
             </div>
           </div>
         ))}
      </div>

      {/* Row 2: Charts & Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Overview Line Chart Placeholder */}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm lg:col-span-2">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-white">Revenue Overview</h3>
             <button className="flex items-center gap-1 text-xs font-semibold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors">
               This Week <ChevronDown className="w-3 h-3" />
             </button>
           </div>
           <div className="h-64 w-full relative flex items-end">
             {/* Y-Axis */}
             <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-zinc-500 font-medium">
               <span>₹500K</span>
               <span>₹400K</span>
               <span>₹300K</span>
               <span>₹200K</span>
               <span>₹100K</span>
               <span>₹0</span>
             </div>
             {/* Grid Lines */}
             <div className="absolute left-10 right-0 top-2 bottom-6 flex flex-col justify-between">
               {[1,2,3,4,5,6].map(i => <div key={i} className="w-full border-b border-zinc-800 h-0" />)}
             </div>
             {/* X-Axis */}
             <div className="absolute left-10 right-0 bottom-0 flex justify-between text-[10px] text-zinc-500 font-medium">
                <span>Aug 05</span><span>Aug 06</span><span>Aug 07</span><span>Aug 08</span><span>Aug 09</span><span>Aug 10</span><span>Aug 11</span>
             </div>
             
             {/* Fake Line Chart SVG */}
             <svg className="absolute left-10 right-0 top-2 bottom-6 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
               <defs>
                 <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                   <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                 </linearGradient>
               </defs>
               <path d="M0,60 Q15,40 30,50 T60,30 T85,50 T100,20 L100,100 L0,100 Z" fill="url(#gradient)" />
               <path d="M0,60 Q15,40 30,50 T60,30 T85,50 T100,20" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               <circle cx="60" cy="30" r="4" fill="#ef4444" stroke="#18181b" strokeWidth="2" />
               <foreignObject x="45" y="5" width="90" height="45" className="overflow-visible">
                 <div className="bg-zinc-800 text-white text-[10px] font-bold py-1.5 px-2 rounded-lg whitespace-nowrap shadow-xl border border-zinc-700 text-center">
                   Aug 09, 2026<br/><span className="text-sm font-black text-red-500">₹2,86,500</span>
                   <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 border-b border-r border-zinc-700 rotate-45"></div>
                 </div>
               </foreignObject>
             </svg>
           </div>
        </div>

        {/* Membership Status Donut */}
        <div className="space-y-6 lg:col-span-1">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm flex flex-col items-center h-full">
            <h3 className="font-bold text-white w-full text-left mb-6">Membership Status</h3>
            <div className="relative w-40 h-40">
               <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                 {/* Pending */}
                 <path strokeDasharray="5, 100" stroke="#3b82f6" strokeWidth="6" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                 {/* Expired */}
                 <path strokeDasharray="12.4, 100" strokeDashoffset="-5" stroke="#f59e0b" strokeWidth="6" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                 {/* Active */}
                 <path strokeDasharray="82.6, 100" strokeDashoffset="-17.4" stroke="#10b981" strokeWidth="6" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-xl font-bold text-white">1,245</span>
                 <span className="text-[10px] text-zinc-400 font-semibold">Total Members</span>
               </div>
            </div>
            <div className="w-full mt-auto space-y-3 pt-6">
               <div className="flex justify-between items-center text-xs">
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div><span className="text-zinc-300 font-medium">Active</span></div>
                 <span className="font-bold text-white">1,028 <span className="text-zinc-500 font-normal ml-1">(82.6%)</span></span>
               </div>
               <div className="flex justify-between items-center text-xs">
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500"></div><span className="text-zinc-300 font-medium">Expired</span></div>
                 <span className="font-bold text-white">154 <span className="text-zinc-500 font-normal ml-1">(12.4%)</span></span>
               </div>
               <div className="flex justify-between items-center text-xs">
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-zinc-300 font-medium">Pending</span></div>
                 <span className="font-bold text-white">63 <span className="text-zinc-500 font-normal ml-1">(5.0%)</span></span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {/* Activities */}
         <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm lg:col-span-1 flex flex-col">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-white">Recent Activities</h3>
             <span className="text-xs font-semibold text-red-500 cursor-pointer hover:underline">View All</span>
           </div>
           <div className="space-y-5 flex-1">
             {[
               { i: <Users className="w-3 h-3 text-blue-500" />, b: "bg-blue-500/10", t: "New member John Doe joined", d: "2 mins ago" },
               { i: <Wallet className="w-3 h-3 text-emerald-500" />, b: "bg-emerald-500/10", t: "Payment of ₹12,000 received", d: "15 mins ago" },
               { i: <Activity className="w-3 h-3 text-amber-500" />, b: "bg-amber-500/10", t: "PT session booked", d: "2 hours ago" },
               { i: <Crown className="w-3 h-3 text-purple-500" />, b: "bg-purple-500/10", t: "Plan \"Premium\" updated", d: "3 hours ago" },
             ].map((a, i) => (
               <div key={i} className="flex items-start gap-3">
                 <div className={`${a.b} p-2 rounded-lg mt-0.5`}>{a.i}</div>
                 <div>
                   <p className="text-xs font-medium text-zinc-200">{a.t}</p>
                   <p className="text-[10px] text-zinc-500 mt-1">{a.d}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>

         {/* Membership Plan Overview */}
         <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm lg:col-span-1">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-white">Membership Plan</h3>
           </div>
           <div className="space-y-6">
             {[
               { name: "Basic Plan", price: "₹2,000 / mo", count: "320 Members", pct: 45 },
               { name: "Standard Plan", price: "₹3,500 / mo", count: "480 Members", pct: 60 },
               { name: "Premium Plan", price: "₹5,000 / mo", count: "350 Members", pct: 75 },
               { name: "Online Coaching", price: "₹4,000 / mo", count: "95 Members", pct: 20 },
             ].map((p, i) => (
               <div key={i}>
                 <div className="flex justify-between text-xs font-medium text-zinc-200 mb-2">
                   <span>{p.name} <span className="text-zinc-500 font-normal ml-1">{p.price}</span></span>
                   <span>{p.count}</span>
                 </div>
                 <div className="w-full bg-zinc-800 rounded-full h-1.5 flex">
                   <div className="bg-red-600 h-1.5 rounded-full" style={{width: `${p.pct}%`}}></div>
                   <div className="flex-1 flex justify-end pr-1 text-[10px] text-zinc-500 -mt-1 font-bold">{p.pct}%</div>
                 </div>
               </div>
             ))}
           </div>
         </div>

         {/* Payments Overview */}
         <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm lg:col-span-1">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-white">Payments</h3>
           </div>
           <div className="space-y-4">
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                 <span className="text-sm font-medium text-zinc-400">Total Collected</span>
                 <span className="text-sm font-bold text-emerald-500">₹4,52,310</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                 <span className="text-sm font-medium text-zinc-400">Total Pending</span>
                 <span className="text-sm font-bold text-amber-500">₹31,280</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                 <span className="text-sm font-medium text-zinc-400">Total Overdue</span>
                 <span className="text-sm font-bold text-red-500">₹18,420</span>
              </div>
              <div className="flex justify-between">
                 <span className="text-sm font-medium text-zinc-400">Refunds Issued</span>
                 <span className="text-sm font-bold text-white">₹3,200</span>
              </div>
           </div>
         </div>

         {/* Top Members */}
         <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm lg:col-span-1">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-white">Top Check-ins</h3>
           </div>
           <div className="space-y-4">
             {[
               { name: "Rahul Sharma", plan: "Premium Plan", checks: 28 },
               { name: "Aman Verma", plan: "Standard Plan", checks: 26 },
               { name: "Priya Singh", plan: "Basic Plan", checks: 24 },
               { name: "Siddharth N.", plan: "Premium Plan", checks: 23 },
             ].map((m, i) => (
               <div key={i} className="flex justify-between items-center">
                 <div className="flex items-center gap-3">
                   <div className="w-9 h-9 bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold text-zinc-300 border border-zinc-700">{m.name.charAt(0)}</div>
                   <div>
                     <h4 className="text-xs font-bold text-zinc-200">{m.name}</h4>
                     <p className="text-[10px] text-zinc-500 mt-0.5">{m.plan}</p>
                   </div>
                 </div>
                 <div className="text-right">
                   <p className="text-xs font-bold text-white">{m.checks}</p>
                   <p className="text-[9px] text-zinc-500">Check-ins</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
      </div>

      {/* Row 4: Attendance Chart & Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Attendance Overview */}
         <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm md:col-span-1">
            <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-white">Attendance Overview</h3>
             <button className="flex items-center gap-1 text-[10px] font-semibold text-zinc-400 bg-zinc-950 px-2 py-1 rounded border border-zinc-800 hover:bg-zinc-800 transition-colors">
               This Week <ChevronDown className="w-3 h-3" />
             </button>
           </div>
           <div className="h-48 flex items-end justify-between gap-2">
             {[100, 120, 140, 160, 142, 110, 150].map((h, i) => (
               <div key={i} className="w-full bg-red-600 hover:bg-red-500 rounded-t-sm relative group cursor-pointer transition-colors" style={{height: `${(h/200)*100}%`}}>
                 {/* Tooltip */}
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-800 border border-zinc-700 text-white text-[10px] py-1.5 px-2 rounded-lg font-bold whitespace-nowrap z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                   {h} Check-ins
                   <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 border-b border-r border-zinc-700 rotate-45"></div>
                 </div>
               </div>
             ))}
           </div>
           <div className="flex justify-between mt-3 text-[10px] text-zinc-500 font-medium">
             <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
           </div>
         </div>

         {/* Quick Actions Grid */}
         <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm md:col-span-2">
           <h3 className="font-bold text-white mb-6">Quick Actions</h3>
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Add New Member", icon: <UserPlus className="w-5 h-5 text-red-500" />, bg: "bg-red-500/10" },
                { label: "Create Invoice", icon: <FileText className="w-5 h-5 text-emerald-500" />, bg: "bg-emerald-500/10" },
                { label: "Mark Attendance", icon: <CheckSquare className="w-5 h-5 text-blue-500" />, bg: "bg-blue-500/10" },
                { label: "Add New Plan", icon: <Crown className="w-5 h-5 text-purple-500" />, bg: "bg-purple-500/10" },
                { label: "Send Announcement", icon: <Megaphone className="w-5 h-5 text-amber-500" />, bg: "bg-amber-500/10" },
                { label: "View Reports", icon: <BarChart2 className="w-5 h-5 text-teal-500" />, bg: "bg-teal-500/10" },
              ].map((action, i) => (
                <div key={i} className="border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-red-500/50 hover:bg-zinc-800/50 cursor-pointer transition-all group">
                  <div className={`${action.bg} p-3 rounded-xl group-hover:scale-110 transition-transform`}>{action.icon}</div>
                  <span className="text-xs font-bold text-zinc-300">{action.label}</span>
                </div>
              ))}
           </div>
         </div>
      </div>
    </div>
  );
}