import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-[#050915] via-[#071021] to-[#0a1226] text-slate-100 font-inter">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-h-screen relative">
            <Topbar theme={theme} setTheme={setTheme} />
            <section className="px-4 sm:px-6 lg:px-8 pb-10">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/courses" element={<PageShell title="Courses">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
                        <p className="text-sm text-slate-300/90">Instructor {i}</p>
                        <h4 className="mt-1 font-semibold">Course Title {i}</h4>
                        <div className="mt-3 h-2 rounded-full bg-white/10">
                          <div className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-500" style={{ width: `${20 + i*10}%` }} />
                        </div>
                        <p className="mt-2 text-xs text-slate-400">Progress {20 + i*10}%</p>
                      </div>
                    ))}
                  </div>
                </PageShell>} />
                <Route path="/assignments" element={<PageShell title="Assignments">
                  <div className="space-y-3">
                    {[{c:'DSA',t:'Graph Traversal Project',d:'Oct 29, 2025',color:'from-emerald-400/60 to-teal-500/60'},{c:'OS',t:'Process Scheduling Quiz',d:'Nov 2, 2025',color:'from-sky-400/60 to-indigo-500/60'},{c:'DBMS',t:'Normalization Worksheet',d:'Nov 5, 2025',color:'from-fuchsia-400/60 to-pink-500/60'}].map((a,idx)=> (
                      <div key={idx} className="rounded-xl overflow-hidden border border-white/10">
                        <div className={`p-4 bg-gradient-to-r ${a.color}`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs uppercase tracking-wide text-white/80">{a.c}</p>
                              <h4 className="font-semibold">{a.t}</h4>
                            </div>
                            <span className="text-sm bg-black/30 px-2 py-1 rounded-lg">Due {a.d}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </PageShell>} />
                <Route path="/grades" element={<PageShell title="Grades">
                  <p className="text-slate-300">Your grade analytics and marks table will appear here.</p>
                </PageShell>} />
                <Route path="/attendance" element={<PageShell title="Attendance">
                  <p className="text-slate-300">Monthly attendance charts and summary will appear here.</p>
                </PageShell>} />
                <Route path="/forum" element={<PageShell title="Discussion Forum">
                  <p className="text-slate-300">Chat-like threads for students and teachers will appear here.</p>
                </PageShell>} />
                <Route path="/settings" element={<PageShell title="Settings">
                  <p className="text-slate-300">Update profile, theme preferences, and password here.</p>
                </PageShell>} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </section>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

function PageShell({ title, children }) {
  return (
    <div className="space-y-6">
      <GlassCard>
        <h3 className="text-lg font-semibold text-sky-300">{title}</h3>
      </GlassCard>
      <GlassCard>
        {children}
      </GlassCard>
    </div>
  );
}
