const controls = ['Previous', 'Play', 'Pause', 'Next', 'Blank']

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

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr_480px] gap-14 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-950 text-blue-200">
              New: video, up to 4K
            </span>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-card text-brand-text">
              Runs with or without the internet
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Digital signage that<br />
            <span className="text-brand-blue-light">never misses a beat.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
            Images and video on any HDMI display, from a Raspberry Pi 5 behind the screen. Manage a
            whole fleet from the cloud, or run a single screen on its own with a one-time licence and
            no internet at all.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm text-center transition-colors shadow-lg shadow-brand-blue/25"
            >
              Request Access
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-3.5 rounded-lg border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium text-sm text-center transition-colors"
            >
              See How It Works →
            </a>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-slate-400 pt-2">
            <span>Raspberry Pi 5</span>
            <span>HDMI-CEC power control</span>
            <span>Signed A/B updates</span>
          </div>
        </div>

        {/* Display preview */}
        <div className="rounded-2xl border border-brand-border bg-brand-surface p-5 flex flex-col gap-3.5 shadow-2xl">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-brand-text">Lobby display</span>
            <span className="text-xs font-semibold text-green-400">Playing</span>
          </div>
          <div className="relative h-52 rounded-lg bg-brand-card flex items-center justify-center">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M10 8l6 4-6 4z" fill="#60a5fa" />
            </svg>
            <span className="absolute left-3 bottom-2.5 text-[11px] font-bold px-2 py-0.5 rounded bg-brand-blue-dark text-white">
              VIDEO · 3840×2160
            </span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {controls.map(c => (
              <span
                key={c}
                className={`text-center py-2 rounded-md text-xs text-white ${c === 'Play' ? 'bg-blue-600' : 'bg-gray-800'}`}
              >
                {c}
              </span>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5 text-xs">
            <div className="rounded-lg bg-brand-card px-3 py-2.5">
              <p className="text-slate-400">Display</p>
              <p className="text-brand-text font-semibold mt-0.5">Samsung · 3840×2160 @ 60 Hz</p>
            </div>
            <div className="rounded-lg bg-brand-card px-3 py-2.5">
              <p className="text-slate-400">Power (CEC)</p>
              <p className="text-green-400 font-semibold mt-0.5">On · per schedule</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
