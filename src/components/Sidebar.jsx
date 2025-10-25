import { Home, Book, FileText, BarChart3, CalendarCheck, MessageSquare, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

const nav = [
  { name: 'Dashboard', icon: Home, to: '/dashboard' },
  { name: 'Courses', icon: Book, to: '/courses' },
  { name: 'Assignments', icon: FileText, to: '/assignments' },
  { name: 'Grades', icon: BarChart3, to: '/grades' },
  { name: 'Attendance', icon: CalendarCheck, to: '/attendance' },
  { name: 'Discussion Forum', icon: MessageSquare, to: '/forum' },
  { name: 'Settings', icon: Settings, to: '/settings' },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="hidden md:flex md:flex-col w-64 min-h-screen sticky top-0 border-r border-white/10 bg-[#070f22]/60 backdrop-blur">
      <div className="h-16 flex items-center px-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-fuchsia-600 shadow-lg shadow-sky-900/40" />
          <div>
            <p className="text-sm font-semibold tracking-wide">Student Portal</p>
            <p className="text-[11px] text-slate-400">ID: STU-2024-017</p>
          </div>
        </div>
      </div>
      <nav className="p-3 space-y-1">
        {nav.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.to;
          return (
            <motion.div key={item.name} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <NavLink
                to={item.to}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition group border ${active ? 'bg-white/10 border-white/10' : 'hover:bg-white/10 border-transparent'}`}
              >
                <Icon size={18} className="text-sky-300" />
                <span className="text-sm">{item.name}</span>
              </NavLink>
            </motion.div>
          );
        })}
      </nav>
      <div className="mt-auto p-3">
        <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 to-indigo-600/10 p-3">
          <p className="text-xs text-slate-300">Semester</p>
          <p className="text-sm font-semibold text-sky-300">Spring 2025</p>
          <div className="mt-2 h-2 w-full rounded-full bg-white/10">
            <div className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-500" style={{ width: '62%' }} />
          </div>
          <p className="mt-1 text-[11px] text-slate-400">62% completed</p>
        </div>
      </div>
    </aside>
  );
}
