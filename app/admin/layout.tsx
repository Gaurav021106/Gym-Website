import Link from "next/link";
import { 
  Activity, LayoutDashboard, 
  BarChart3, Bell, Globe 
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 text-white flex flex-col h-full border-r border-zinc-800 shrink-0 hidden md:flex">
        <div className="p-6">
          <Link href="/" target="_blank" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
            <div className="bg-red-600 p-2 rounded-lg">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-black text-lg tracking-tight text-white">EDDY FITNESS</span>
              <span className="font-bold text-xs tracking-widest text-red-500">CLUB</span>
            </div>
          </Link>
          
          <Link href="/" target="_blank" className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            <Globe className="h-4 w-4 text-zinc-400" />
            View Live Website
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 space-y-1 custom-scrollbar">
          <Link href="/admin" className="flex items-center gap-3 bg-red-600/10 text-red-500 px-4 py-3 rounded-xl font-medium transition-colors">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </Link>
          <Link href="/admin/blog" className="flex items-center gap-3 text-zinc-400 hover:text-white hover:bg-zinc-800 px-4 py-3 rounded-xl font-medium transition-colors">
            <BarChart3 className="h-4 w-4" /> Blog & Content
          </Link>
          {/* ... Add other sidebar links here ... */}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-zinc-950">
        <header className="bg-zinc-900 border-b border-zinc-800 h-20 flex items-center justify-between px-8 shrink-0">
           <div>
             <p className="text-sm text-zinc-400 hidden md:block">Welcome back, here&apos;s what&apos;s happening today.</p>
           </div>
           
           <div className="flex items-center gap-6">
             <div className="flex items-center gap-4">
               <Link href="/" target="_blank" title="View Public Website" className="p-2 text-zinc-400 hover:text-white transition-colors">
                  <Globe className="h-5 w-5" />
               </Link>
               <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-zinc-900"></span>
               </button>
             </div>
           </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8 custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
}