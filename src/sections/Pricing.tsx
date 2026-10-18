type Plan = {
  eyebrow: string
  name: string
  price: string
  unit?: string
  note: string
  items: string[]
  cta: string
  featured?: boolean
}

const VIDEO = 'Images and video, up to 4K (40 MB, about 1 minute, per video)'

const plans: Plan[] = [
  {
    eyebrow: 'One screen, online',
    name: 'Starter',
    price: '$6',
    unit: '/month',
    note: '1 screen · 1 Pi · 1 cloud connection',
    items: [
      'Remote monitoring and alerts',
      VIDEO,
      'Cloud library and local upload',
      'CEC power schedule',
      'Updates pushed from the cloud',
      'Pi Local UI',
    ],
    cta: 'Request Access',
  },
  {
    eyebrow: 'No internet needed',
    name: 'Stand-alone',
    price: '$10',
    unit: ' once',
    note: 'Lifetime licence for one Pi, on the firmware it is installed with. No firmware updates included.',
    items: [
      'Runs with no cloud account',
      VIDEO,
      'Quick controls and playlist',
      'CEC power schedule',
      'Firmware updates on request: $10 each, installed by file upload',
      '30-day free demo first',
      'Can join the cloud later',
    ],
    cta: 'Start a 30-day demo',
    featured: true,
  },
  {
    eyebrow: 'Installers and fleets',
    name: 'Dealer',
    price: 'Volume',
    note: 'Pricing by fleet size · contact us',
    items: [
      'Everything in Starter',
      'Multi-site fleet dashboard',
      'Site-wide playback sync',
      'Org-wide power and content schedules',
      'Team and role management',
      'Stand-alone licences at dealer rates',
    ],
    cta: 'Contact Us',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Pay monthly for the cloud, or once for a screen that runs on its own.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 items-stretch">
          {plans.map(p => (
            <div
              key={p.name}
              className={`rounded-2xl p-7 flex flex-col gap-5 ${
                p.featured
                  ? 'bg-slate-900 text-white border-2 border-brand-blue shadow-xl shadow-brand-blue/10'
                  : 'bg-white text-slate-900 border border-slate-200'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${p.featured ? 'text-blue-300' : 'text-brand-blue-dark'}`}>
                    {p.eyebrow}
                  </p>
                  <h3 className="text-xl font-extrabold mt-1">{p.name}</h3>
                </div>
                {p.featured && (
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-blue text-white">NEW</span>
                )}
              </div>

              <div>
                <p className="text-4xl font-extrabold">
                  {p.price}
                  {p.unit && (
                    <span className={`text-base font-normal ${p.featured ? 'text-slate-300' : 'text-slate-500'}`}>{p.unit}</span>
                  )}
                </p>
                <p className={`text-sm mt-1 ${p.featured ? 'text-slate-300' : 'text-slate-500'}`}>{p.note}</p>
              </div>

              <ul className="flex flex-col gap-2 text-sm">
                {p.items.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={p.featured ? 'text-brand-blue-light' : 'text-green-500'}>✓</span>
                    <span className={p.featured ? 'text-brand-text' : 'text-slate-700'}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-auto px-5 py-3 rounded-lg text-sm font-semibold text-center transition-colors ${
                  p.featured
                    ? 'bg-brand-blue hover:bg-brand-blue-dark text-white'
                    : 'border border-slate-300 hover:border-slate-400 text-slate-900'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
