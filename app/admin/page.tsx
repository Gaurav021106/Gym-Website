import { Users, CreditCard, CalendarCheck, Wallet, ArrowUpRight, ArrowDownRight, ChevronDown, UserPlus, FileText, CheckSquare, Crown, Megaphone, BarChart2, Activity } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Top Header Actions */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
           May 12 - May 18, 2024 <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Summary Stats (5 cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
         {[
           { title: "Total Members", value: "1,245", change: "+12.5%", isUp: true, icon: <Users className="text-red-500 w-6 h-6" />, bg: "bg-red-50" },
           { title: "Active Members", value: "1,028", change: "+8.3%", isUp: true, icon: <Users className="text-green-500 w-6 h-6" />, bg: "bg-green-50" },
           { title: "Total Revenue", value: "$45,231", change: "+15.7%", isUp: true, icon: <Wallet className="text-purple-500 w-6 h-6" />, bg: "bg-purple-50" },
           { title: "Pending Payments", value: "$3,128", change: "-4.3%", isUp: false, icon: <CreditCard className="text-orange-500 w-6 h-6" />, bg: "bg-orange-50" },
           { title: "Check-ins Today", value: "156", change: "+10.2%", isUp: true, icon: <CalendarCheck className="text-blue-500 w-6 h-6" />, bg: "bg-blue-50" },
         ].map((stat, i) => (
           <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
             <div className={`${stat.bg} p-3 rounded-lg shrink-0`}>
               {stat.icon}
             </div>
             <div>
                <p className="text-xs font-semibold text-gray-500 mb-1">{stat.title}</p>
                <div className="flex items-baseline gap-2">
                   <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                   <span className={`flex items-center text-[10px] font-bold ${stat.isUp ? 'text-green-600' : 'text-red-600'}`}>
                     {stat.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                     {stat.change}
                   </span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1">vs last week</p>
             </div>
           </div>
         ))}
      </div>

      {/* Row 2: Charts & Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Overview Line Chart Placeholder */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm lg:col-span-2">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-gray-900">Revenue Overview</h3>
             <button className="flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-200 hover:bg-gray-100">
               This Week <ChevronDown className="w-3 h-3" />
             </button>
           </div>
           <div className="h-64 w-full relative flex items-end">
             {/* Y-Axis */}
             <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-gray-400 font-medium">
               <span>$50K</span>
               <span>$40K</span>
               <span>$30K</span>
               <span>$20K</span>
               <span>$10K</span>
               <span>$0</span>
             </div>
             {/* Grid Lines */}
             <div className="absolute left-8 right-0 top-2 bottom-6 flex flex-col justify-between">
               {[1,2,3,4,5,6].map(i => <div key={i} className="w-full border-b border-gray-100 h-0" />)}
             </div>
             {/* X-Axis */}
             <div className="absolute left-8 right-0 bottom-0 flex justify-between text-[10px] text-gray-400 font-medium">
                <span>May 12</span><span>May 13</span><span>May 14</span><span>May 15</span><span>May 16</span><span>May 17</span><span>May 18</span>
             </div>
             
             {/* Fake Line Chart SVG */}
             <svg className="absolute left-8 right-0 top-2 bottom-6 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
               <defs>
                 <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" stopColor="#ff0000" stopOpacity="0.2" />
                   <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
                 </linearGradient>
               </defs>
               <path d="M0,60 Q15,40 30,50 T60,30 T85,50 T100,20 L100,100 L0,100 Z" fill="url(#gradient)" />
               <path d="M0,60 Q15,40 30,50 T60,30 T85,50 T100,20" fill="none" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               <circle cx="60" cy="30" r="4" fill="#ff0000" stroke="white" strokeWidth="2" />
               <foreignObject x="50" y="10" width="80" height="40" className="overflow-visible">
                 <div className="bg-gray-900 text-white text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap shadow-lg">
                   May 15, 2024<br/><span className="text-sm font-black">$28,650</span>
                   <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                 </div>
               </foreignObject>
             </svg>
           </div>
        </div>

        {/* Membership Status Donut & Activities */}
        <div className="space-y-6 lg:col-span-1">
          {/* Donut Chart Placeholder */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
            <h3 className="font-bold text-gray-900 w-full text-left mb-6">Membership Status</h3>
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
                 <span className="text-xl font-bold text-gray-900">1,245</span>
                 <span className="text-[10px] text-gray-500 font-semibold">Total Members</span>
               </div>
            </div>
            <div className="w-full mt-6 space-y-3">
               <div className="flex justify-between items-center text-xs">
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-gray-600 font-medium">Active</span></div>
                 <span className="font-bold text-gray-900">1,028 <span className="text-gray-400 font-normal ml-1">(82.6%)</span></span>
               </div>
               <div className="flex justify-between items-center text-xs">
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500"></div><span className="text-gray-600 font-medium">Expired</span></div>
                 <span className="font-bold text-gray-900">154 <span className="text-gray-400 font-normal ml-1">(12.4%)</span></span>
               </div>
               <div className="flex justify-between items-center text-xs">
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-gray-600 font-medium">Pending</span></div>
                 <span className="font-bold text-gray-900">63 <span className="text-gray-400 font-normal ml-1">(5.0%)</span></span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Lists (Activities moved here for layout simplicity, Plan, Payments, Top) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {/* Activities */}
         <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm lg:col-span-1 flex flex-col">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-gray-900">Recent Activities</h3>
             <span className="text-xs font-semibold text-primary cursor-pointer hover:underline">View All</span>
           </div>
           <div className="space-y-5 flex-1">
             {[
               { i: <Users className="w-3 h-3 text-blue-500" />, b: "bg-blue-50", t: "New member John Doe joined", d: "2 mins ago" },
               { i: <Wallet className="w-3 h-3 text-green-500" />, b: "bg-green-50", t: "Payment of $120 received", d: "15 mins ago" },
               { i: <Activity className="w-3 h-3 text-orange-500" />, b: "bg-orange-50", t: "PT session booked", d: "2 hours ago" },
               { i: <Crown className="w-3 h-3 text-purple-500" />, b: "bg-purple-50", t: "Plan \"Premium\" updated", d: "3 hours ago" },
             ].map((a, i) => (
               <div key={i} className="flex items-start gap-3">
                 <div className={`${a.b} p-1.5 rounded-md mt-0.5`}>{a.i}</div>
                 <div>
                   <p className="text-xs font-medium text-gray-800">{a.t}</p>
                   <p className="text-[10px] text-gray-500">{a.d}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>

         {/* Membership Plan Overview */}
         <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm lg:col-span-1">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-gray-900">Membership Plan</h3>
             <span className="text-xs font-semibold text-gray-500 border border-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-50">View All</span>
           </div>
           <div className="space-y-6">
             {[
               { name: "Basic Plan", price: "$29 / month", count: "320 Members", pct: 45 },
               { name: "Standard Plan", price: "$49 / month", count: "480 Members", pct: 60 },
               { name: "Premium Plan", price: "$79 / month", count: "350 Members", pct: 75 },
               { name: "Elite Plan", price: "$119 / month", count: "95 Members", pct: 80 },
             ].map((p, i) => (
               <div key={i}>
                 <div className="flex justify-between text-xs font-medium text-gray-800 mb-2">
                   <span>{p.name} <span className="text-gray-400 font-normal ml-1">{p.price}</span></span>
                   <span>{p.count}</span>
                 </div>
                 <div className="w-full bg-gray-100 rounded-full h-1.5 flex">
                   <div className="bg-green-500 h-1.5 rounded-full" style={{width: `${p.pct}%`}}></div>
                   <div className="flex-1 flex justify-end pr-1 text-[10px] text-gray-400 -mt-1 font-bold">{p.pct}%</div>
                 </div>
               </div>
             ))}
           </div>
         </div>

         {/* Payments Overview */}
         <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm lg:col-span-1">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-gray-900">Payments</h3>
             <span className="text-xs font-semibold text-gray-500 border border-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-50">View All</span>
           </div>
           <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-100 pb-3">
                 <span className="text-sm font-medium text-gray-700">Total Collected</span>
                 <span className="text-sm font-bold text-green-600">$45,231</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-3">
                 <span className="text-sm font-medium text-gray-700">Total Pending</span>
                 <span className="text-sm font-bold text-orange-500">$3,128</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-3">
                 <span className="text-sm font-medium text-gray-700">Total Overdue</span>
                 <span className="text-sm font-bold text-red-600">$1,842</span>
              </div>
              <div className="flex justify-between">
                 <span className="text-sm font-medium text-gray-700">Refunds Issued</span>
                 <span className="text-sm font-bold text-gray-900">$320</span>
              </div>
           </div>
         </div>

         {/* Top Members */}
         <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm lg:col-span-1">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-gray-900">Top Members</h3>
             <span className="text-xs font-semibold text-gray-500 border border-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-50">View All</span>
           </div>
           <div className="space-y-4">
             {[
               { name: "Mike Tyson", plan: "Premium Plan", checks: 28 },
               { name: "Sarah Connor", plan: "Standard Plan", checks: 26 },
               { name: "John Doe", plan: "Basic Plan", checks: 24 },
               { name: "Emily Davis", plan: "Premium Plan", checks: 23 },
             ].map((m, i) => (
               <div key={i} className="flex justify-between items-center">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">{m.name.charAt(0)}</div>
                   <div>
                     <h4 className="text-xs font-bold text-gray-900">{m.name}</h4>
                     <p className="text-[10px] text-gray-500">{m.plan}</p>
                   </div>
                 </div>
                 <div className="text-right">
                   <p className="text-xs font-bold text-gray-900">{m.checks}</p>
                   <p className="text-[9px] text-gray-400">Check-ins</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
      </div>

      {/* Row 4: Attendance Chart, Gender, Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Attendance Overview */}
         <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm md:col-span-1">
            <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-gray-900">Attendance Overview</h3>
             <button className="flex items-center gap-1 text-[10px] font-semibold text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-200 hover:bg-gray-100">
               This Week <ChevronDown className="w-3 h-3" />
             </button>
           </div>
           <div className="h-48 flex items-end justify-between gap-2">
             {[100, 120, 140, 160, 142, 110, 150].map((h, i) => (
               <div key={i} className="w-full bg-primary hover:opacity-80 rounded-t-sm relative group cursor-pointer transition-opacity" style={{height: `${(h/200)*100}%`}}>
                  {/* Tooltip */}
                  {i === 4 && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded font-bold whitespace-nowrap z-10">
                      142 Check-ins
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  )}
               </div>
             ))}
           </div>
           <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-medium">
             <span>May 12</span><span>May 14</span><span>May 16</span><span>May 18</span>
           </div>
         </div>

         {/* Quick Actions Grid */}
         <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm md:col-span-2">
           <h3 className="font-bold text-gray-900 mb-6">Quick Actions</h3>
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Add New Member", icon: <UserPlus className="w-5 h-5 text-red-500" />, bg: "bg-red-50" },
                { label: "Create Invoice", icon: <FileText className="w-5 h-5 text-green-500" />, bg: "bg-green-50" },
                { label: "Mark Attendance", icon: <CheckSquare className="w-5 h-5 text-blue-500" />, bg: "bg-blue-50" },
                { label: "Add New Plan", icon: <Crown className="w-5 h-5 text-purple-500" />, bg: "bg-purple-50" },
                { label: "Send Announcement", icon: <Megaphone className="w-5 h-5 text-orange-500" />, bg: "bg-orange-50" },
                { label: "View Reports", icon: <BarChart2 className="w-5 h-5 text-teal-500" />, bg: "bg-teal-50" },
              ].map((action, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary/30 hover:shadow-sm cursor-pointer transition-all">
                  <div className={`${action.bg} p-3 rounded-xl`}>{action.icon}</div>
                  <span className="text-xs font-bold text-gray-700">{action.label}</span>
                </div>
              ))}
           </div>
         </div>
      </div>
    </div>
  );
}
