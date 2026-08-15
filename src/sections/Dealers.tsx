const benefits = [
  {
    icon: '🚫🚗',
    title: 'No More Truck Rolls',
    description:
      'Diagnose and resolve most display and connectivity issues remotely. Reserve site visits for situations that actually need hands-on work.',
  },
  {
    icon: '🔔',
    title: 'Proactive Display-Down Alerts',
    description:
      'Know about a dark screen or missed power-on before the venue calls you. Get notified the moment a display goes offline.',
  },
  {
    icon: '⬆️',
    title: 'Push Updates Remotely',
    description:
      'Roll out firmware and app updates to one screen or your entire fleet — without leaving the office.',
  },
  {
    icon: '📊',
    title: 'Every Venue, One Login',
    description:
      "Manage every church, coffee house, apartment lobby, and model home you've installed — one dashboard, organized by client and site.",
  },
  {
    icon: '🗓️',
    title: 'Schedule Once, Apply Everywhere',
    description:
      'Set content and power schedules at the site or org level — every display in scope picks it up automatically, no per-device edits.',
  },
  {
    icon: '👥',
    title: 'Your Team, Your Roles',
    description:
      'Add technicians with scoped access. Keep your team working efficiently without giving everyone admin rights.',
  },
]

export default function Dealers() {
  return (
    <section id="dealers" className="bg-brand-dark text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue-light mb-3">
            For AV Dealers, Installers &amp; the Venues They Serve
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Built for the people who do the installs
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            AV Guardian is designed around installer workflows — from churches and coffee houses to
            property managers overseeing multi-dwelling communities and realtors keeping model-home
            and listing displays running while a property is on the market. Less overhead. More margin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {benefits.map(b => (
            <div
              key={b.title}
              className="rounded-xl bg-brand-surface border border-brand-border p-6 hover:border-brand-blue/40 transition-colors"
            >
              <span className="text-2xl mb-4 block">{b.icon}</span>
              <h3 className="font-semibold text-white mb-2">{b.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 rounded-lg bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm transition-colors shadow-lg shadow-brand-blue/25"
          >
            Request Dealer Access
          </a>
        </div>
      </div>
    </section>
  )
}
