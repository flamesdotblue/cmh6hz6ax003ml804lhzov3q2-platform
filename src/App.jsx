import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import GlassCard from './components/GlassCard';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050915] via-[#071021] to-[#0a1226] text-slate-100 font-inter">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen relative">
          <Topbar theme={theme} setTheme={setTheme} />
          <section className="px-4 sm:px-6 lg:px-8 pb-10">
            <Dashboard />
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <GlassCard className="lg:col-span-2">
                <h3 className="text-lg font-semibold text-sky-300 mb-3">Welcome back, Alex Thompson</h3>
                <p className="text-slate-300/90">Track your learning journey. Here’s a snapshot of your progress, upcoming assignments, and the latest announcements. Keep the momentum going!</p>
              </GlassCard>
              <GlassCard>
                <h3 className="text-lg font-semibold text-sky-300 mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="rounded-xl bg-sky-500/20 border border-sky-400/30 hover:bg-sky-500/30 transition-colors px-4 py-3 text-sm">Join Class</button>
                  <button className="rounded-xl bg-indigo-500/20 border border-indigo-400/30 hover:bg-indigo-500/30 transition-colors px-4 py-3 text-sm">Upload File</button>
                  <button className="rounded-xl bg-emerald-500/20 border border-emerald-400/30 hover:bg-emerald-500/30 transition-colors px-4 py-3 text-sm">New Note</button>
                  <button className="rounded-xl bg-fuchsia-500/20 border border-fuchsia-400/30 hover:bg-fuchsia-500/30 transition-colors px-4 py-3 text-sm">Ask Question</button>
                </div>
              </GlassCard>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
