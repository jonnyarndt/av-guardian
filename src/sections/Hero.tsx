const statCards = [
  { label: 'Displays Online',  value: '12', sub: 'of 14 total',   color: 'text-green-400' },
  { label: 'Active Alerts',    value: '1',  sub: '1 warning',     color: 'text-yellow-400' },
  { label: 'Pending Updates',  value: '3',  sub: 'ready to push', color: 'text-brand-blue-light' },
]

const displays = [
  { name: 'Grace Community Church — Lobby',  status: 'Online',   statusColor: 'text-green-400' },
  { name: 'Corner Coffee — Menu Board',       status: 'Updating', statusColor: 'text-yellow-400' },
  { name: 'Sunset Realty — Model Home',       status: 'Online',   statusColor: 'text-green-400' },
  { name: 'Willow Creek Apartments — Lobby',  status: 'Offline',  statusColor: 'text-red-400' },
]

const displayStatus = [
  { label: 'CEC Power',          sub: 'On · per schedule',              status: 'Active',        statusColor: 'text-green-400' },
  { label: 'Now Playing',        sub: 'Sunday Series · slide 3 of 8',    status: 'Synced',        statusColor: 'text-green-400' },
  { label: 'Display Resolution', sub: '1920×1080 · EDID detected',      status: 'OK',            statusColor: 'text-slate-400' },
  { label: 'Schedule Mode',      sub: 'Managed centrally',              status: 'Cloud Managed', statusColor: 'text-brand-blue-light' },
]

export default function Hero() {
  return (
    <section id="home" className="relative bg-brand-dark text-white pt-32 pb-24 px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Digital Signage That<br />
          <span className="text-brand-blue-light">Never Misses a Beat.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          AV Guardian gives installers and integrators zero-touch digital signage — cloud-scheduled
          content, CEC display power control, and secure remote updates for every screen they
          manage, with no site visits required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm transition-colors shadow-lg shadow-brand-blue/25"
          >
            Request Access
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 rounded-lg border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium text-sm transition-colors"
          >
            See How It Works →
          </a>
        </div>
      </div>

      {/* Dashboard preview */}
      <div className="relative max-w-3xl mx-auto mt-20">
        <div className="rounded-xl border border-brand-border bg-brand-surface shadow-2xl overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border bg-brand-darker">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-slate-500 font-mono">portal.avedge.io — Signage Fleet Overview</span>
          </div>

          {/* Stat row */}
          <div className="p-5 grid grid-cols-3 gap-3">
            {statCards.map(s => (
              <div key={s.label} className="rounded-lg bg-brand-card border border-brand-border p-4">
                <p className="text-xs text-slate-500 mb-1">{s.label}</p>
                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Displays list */}
          <div className="px-5 pb-3">
            <p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">Displays</p>
            <div className="grid grid-cols-2 gap-2">
              {displays.map(d => (
                <div
                  key={d.name}
                  className="rounded-lg bg-brand-card border border-brand-border px-3 py-2.5 flex items-center justify-between"
                >
                  <span className="text-xs text-slate-300 truncate">{d.name}</span>
                  <span className={`text-xs font-medium ml-2 flex-shrink-0 ${d.statusColor}`}>
                    {d.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Display status panel */}
          <div className="px-5 pb-5">
            <p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
              Display Status — Grace Community Church
            </p>
            <div className="grid grid-cols-2 gap-2">
              {displayStatus.map(s => (
                <div
                  key={s.label}
                  className="rounded-lg bg-brand-card border border-brand-border px-3 py-2.5 flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs text-slate-300">{s.label}</p>
                    <p className="text-[10px] text-slate-500">{s.sub}</p>
                  </div>
                  <span className={`text-xs font-medium flex-shrink-0 ml-2 ${s.statusColor}`}>
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
