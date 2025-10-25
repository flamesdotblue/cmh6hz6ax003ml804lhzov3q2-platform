import { Bell, Mail, Sun, Moon, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Topbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-lg shadow-sky-800/40" />
          <span className="hidden sm:block text-sm text-slate-300">BMP University • LMS</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button aria-label="Toggle Theme" onClick={toggleTheme} className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/10 hover:bg-white/20 transition">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/10 hover:bg-white/20 transition">
            <Bell size={18} />
          </button>
          <button className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/10 hover:bg-white/20 transition">
            <Mail size={18} />
          </button>
          <div className="relative">
            <motion.button whileTap={{ scale: 0.98 }} onClick={() => setOpen(v => !v)} className="flex items-center gap-2 h-10 pl-2 pr-3 rounded-xl border border-white/10 bg-white/10 hover:bg-white/20 transition">
              <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=240&auto=format&fit=crop" alt="avatar" className="h-7 w-7 rounded-lg object-cover" />
              <span className="hidden sm:block text-sm">Alex T.</span>
              <ChevronDown size={16} />
            </motion.button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl border border-white/10 bg-[#0b1327]/95 backdrop-blur p-1 shadow-xl">
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-sm"><User size={16}/> Profile</button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-sm"><Settings size={16}/> Settings</button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-sm text-rose-300"><LogOut size={16}/> Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
