const features = [
  {
    icon: '📡',
    title: 'Remote Monitoring',
    description:
      'See display online/offline status, CEC power state, and connectivity for every screen — from one dashboard, anytime.',
  },
  {
    icon: '⚡',
    title: 'Zero-Touch Setup',
    description:
      'Ship a device to the site. It boots, shows a claim QR code on the display itself, and appears in your dashboard once scanned — no SSH, no config.',
  },
  {
    icon: '🔄',
    title: 'Secure OTA Updates',
    description:
      'Signed, atomic A/B firmware updates with automatic rollback on failure — push to one screen or your entire fleet with zero risk of bricking a device.',
  },
  {
    icon: '🖥️',
    title: 'Digital Signage & Scheduling',
    description:
      'Cloud image library and CEC display power scheduling, with content fan-out to a single screen, a whole site, or your entire org.',
  },
  {
    icon: '🔗',
    title: 'Site-Wide Sync',
    description:
      'Every display at a site plays the same content in lockstep — NTP-locked, no ongoing cloud connection required to stay in sync.',
  },
  {
    icon: '✨',
    title: 'Smooth Transitions',
    description:
      'GPU-assisted crossfades and effects between images — smooth, professional-looking signage, not a slideshow.',
  },
  {
    icon: '🔔',
    title: 'Schedule Activity & Offline Resilience',
    description:
      'Every scheduled content or power change is logged and auditable. If the internet drops, displays keep running on their last-known schedule and back-fill the log once reconnected.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Everything your signage needs
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Built for AV dealers, installers, and the venues they serve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => (
            <div
              key={f.title}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-2xl mb-4 block">{f.icon}</span>
              <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
