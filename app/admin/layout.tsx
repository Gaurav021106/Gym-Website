import Link from "next/link";
import { Activity, LayoutDashboard, Users, CreditCard, CalendarCheck, Dumbbell, UserCog, Calendar, Utensils, MessageSquare, BarChart3, Star, Settings, ShieldAlert, Search, Bell, Crown } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111111] text-white flex flex-col h-full border-r border-gray-800 shrink-0 hidden md:flex">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-primary p-2 rounded-lg">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg text-white">EDDY FITNESS</span>
              <span className="font-bold text-xs text-primary">CLUB</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 space-y-1 scrollbar-thin scrollbar-thumb-gray-800">
          <Link href="/admin" className="flex items-center gap-3 bg-primary text-white px-4 py-3 rounded-xl font-medium">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <Users className="h-4 w-4" /> Members
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <Crown className="h-4 w-4" /> Membership Plans
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <CreditCard className="h-4 w-4" /> Fees & Payments
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <CalendarCheck className="h-4 w-4" /> Attendance
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <Dumbbell className="h-4 w-4" /> Workouts
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <UserCog className="h-4 w-4" /> Trainers
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <Calendar className="h-4 w-4" /> Classes
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <Utensils className="h-4 w-4" /> Nutrition
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <MessageSquare className="h-4 w-4" /> Communications
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <BarChart3 className="h-4 w-4" /> Reports & Analytics
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <Star className="h-4 w-4" /> Reviews
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <Settings className="h-4 w-4" /> Settings
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
            <ShieldAlert className="h-4 w-4" /> Access Control
          </Link>
        </div>

        <div className="p-4">
          <div className="bg-[#1A1A1A] border border-gray-800 p-4 rounded-xl text-center mb-4">
             <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2 text-yellow-500">
               <Crown className="w-4 h-4" />
             </div>
             <h4 className="text-white text-sm font-bold">Grow Your Gym</h4>
             <p className="text-xs text-gray-400 mt-1 mb-3">Upgrade to Premium for advanced features.</p>
             <button className="w-full bg-primary hover:bg-red-700 text-white text-xs font-bold py-2 rounded-lg transition-colors">Upgrade Now</button>
          </div>
          
          <div className="flex items-center gap-3 px-2 py-3">
             <div className="w-10 h-10 bg-gray-800 rounded-full shrink-0" />
             <div className="flex-1 overflow-hidden">
                <h4 className="text-sm font-bold text-white truncate">EDDY FITNESS CLUB</h4>
                <p className="text-xs text-gray-500">Admin</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-8 shrink-0">
           <div>
             <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
             <p className="text-sm text-gray-500">Welcome back, Admin! Here's what's happening with your gym today.</p>
           </div>
           
           <div className="flex items-center gap-6">
             <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="text" placeholder="Search members, invoices, etc..." className="bg-gray-50 border border-gray-200 pl-10 pr-4 py-2 rounded-lg text-sm w-80 outline-none focus:border-primary transition-colors text-gray-800" />
             </div>
             
             <div className="flex items-center gap-4">
               <button className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
               </button>
               <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
                  <Calendar className="h-5 w-5" />
               </button>
               <div className="flex items-center gap-3 ml-2 border-l border-gray-200 pl-6">
                  <div className="w-8 h-8 bg-gray-200 rounded-full shrink-0" />
                  <div className="hidden md:block">
                     <h4 className="text-sm font-bold text-gray-900">Admin User</h4>
                     <p className="text-xs text-gray-500">Super Admin</p>
                  </div>
               </div>
             </div>
           </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
