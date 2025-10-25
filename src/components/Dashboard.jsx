import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { PlayCircle, CalendarCheck, Megaphone } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const courses = [
  { id: 1, title: 'Data Structures & Algorithms', instructor: 'Dr. Priya Mehta', progress: 78 },
  { id: 2, title: 'Operating Systems', instructor: 'Prof. Aaron Blake', progress: 45 },
  { id: 3, title: 'Database Management Systems', instructor: 'Dr. Nina Kapoor', progress: 92 },
];

const assignments = [
  { id: 1, course: 'DSA', title: 'Graph Traversal Project', due: 'Oct 29, 2025', tag: 'Project', color: 'from-emerald-400/60 to-teal-500/60' },
  { id: 2, course: 'OS', title: 'Process Scheduling Quiz', due: 'Nov 2, 2025', tag: 'Quiz', color: 'from-sky-400/60 to-indigo-500/60' },
  { id: 3, course: 'DBMS', title: 'Normalization Worksheet', due: 'Nov 5, 2025', tag: 'Assignment', color: 'from-fuchsia-400/60 to-pink-500/60' },
];

const announcements = [
  { id: 1, title: 'Holiday Notice', body: 'Campus will remain closed on Oct 31 for maintenance.', time: '2h ago' },
  { id: 2, title: 'Workshop: AI In Education', body: 'Join the AI Club session on Nov 3 at 5 PM, Lab A2.', time: '6h ago' },
  { id: 3, title: 'Exam Pattern Update', body: 'Midterms will include a practical coding round.', time: '1d ago' },
];

const progressData = [
  { name: 'Mon', progress: 62 },
  { name: 'Tue', progress: 68 },
  { name: 'Wed', progress: 70 },
  { name: 'Thu', progress: 74 },
  { name: 'Fri', progress: 76 },
  { name: 'Sat', progress: 78 },
  { name: 'Sun', progress: 80 },
];

const gradeDist = [
  { name: 'A', value: 6, color: '#38bdf8' },
  { name: 'B', value: 3, color: '#a78bfa' },
  { name: 'C', value: 1, color: '#34d399' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <HeroSpline />

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 -mt-20">
        <div className="xl:col-span-2 space-y-6">
          <Courses />
          <Analytics />
        </div>
        <div className="space-y-6">
          <Assignments />
          <Announcements />
        </div>
      </section>
    </div>
  );
}

function HeroSpline() {
  return (
    <div className="relative h-[380px] sm:h-[420px] w-full rounded-3xl overflow-hidden border border-white/10">
      <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(600px 240px at 10% 10%, rgba(56,189,248,0.20), transparent 60%), radial-gradient(800px 300px at 90% 90%, rgba(236,72,153,0.16), transparent 60%)'
      }} />
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-white drop-shadow">Your Learning Universe</h1>
          <p className="mt-2 text-slate-200/90">Explore courses, track progress, and stay ahead with a modern, immersive LMS experience.</p>
        </motion.div>
      </div>
    </div>
  );
}

function Courses() {
  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-sky-300">Enrolled Courses</h3>
        <button className="text-sm px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">View All</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map(c => (
          <motion.div key={c.id} whileHover={{ y: -3 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
            <p className="text-sm text-slate-300/90">{c.instructor}</p>
            <h4 className="mt-1 font-semibold">{c.title}</h4>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-500" style={{ width: `${c.progress}%` }} />
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-slate-400">{c.progress}%</span>
              <button className="flex items-center gap-1 text-sky-300 hover:text-sky-200"><PlayCircle size={18}/> Continue</button>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}

function Assignments() {
  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-emerald-300 flex items-center gap-2"><CalendarCheck size={18}/> Upcoming Assignments</h3>
        <button className="text-sm px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">All</button>
      </div>
      <div className="space-y-3">
        {assignments.map(a => (
          <div key={a.id} className="rounded-xl overflow-hidden border border-white/10">
            <div className={`p-4 bg-gradient-to-r ${a.color}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/80">{a.course} • {a.tag}</p>
                  <h4 className="font-semibold">{a.title}</h4>
                </div>
                <span className="text-sm bg-black/30 px-2 py-1 rounded-lg">Due {a.due}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function Announcements() {
  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-fuchsia-300 flex items-center gap-2"><Megaphone size={18}/> Announcements</h3>
        <button className="text-sm px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">View</button>
      </div>
      <div className="space-y-4">
        {announcements.map(n => (
          <div key={n.id} className="rounded-xl border border-white/10 p-4 bg-white/5">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{n.title}</h4>
              <span className="text-xs text-slate-400">{n.time}</span>
            </div>
            <p className="text-sm text-slate-300 mt-1">{n.body}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function Analytics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <GlassCard className="lg:col-span-3">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold text-sky-300">Weekly Progress</h3>
          <span className="text-xs text-slate-400">Study hours vs goal</span>
        </div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={progressData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorP" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: 'rgba(10,18,38,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }} />
              <Area type="monotone" dataKey="progress" stroke="#60a5fa" strokeWidth={2} fill="url(#colorP)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
      <GlassCard className="lg:col-span-2">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold text-sky-300">Grade Distribution</h3>
          <span className="text-xs text-slate-400">This semester</span>
        </div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={gradeDist} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={6}>
                {gradeDist.map((e, i) => (
                  <Cell key={`cell-${i}`} fill={e.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
          {gradeDist.map(g => (
            <div key={g.name} className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: g.color }} />
              <span>{g.name}: {g.value}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
