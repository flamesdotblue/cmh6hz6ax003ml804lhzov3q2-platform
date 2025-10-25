export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`relative rounded-2xl border border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-xl shadow-sky-900/20 ${className}`}>
      <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
        background: 'radial-gradient(1200px 200px at -10% -20%, rgba(56,189,248,0.08), transparent 60%), radial-gradient(1200px 200px at 110% 120%, rgba(168,85,247,0.06), transparent 60%)'
      }} />
      <div className="relative p-5 sm:p-6">
        {children}
      </div>
    </div>
  );
}
