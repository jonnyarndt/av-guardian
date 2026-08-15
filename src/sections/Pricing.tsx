export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Pricing for single-site installs and growing dealer fleets alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start max-w-3xl mx-auto">

          {/* Starter */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-brand-blue">
                For a single screen or small space
              </p>
              <h3 className="text-xl font-bold text-slate-900">Starter</h3>
            </div>

            <div>
              <p className="text-3xl font-extrabold text-slate-900">
                $6<span className="text-base font-normal text-slate-500">/mo</span>
              </p>
              <p className="text-xs text-slate-500 mt-1">
                1 display, 1 site — plus $1/mo per additional display (up to 3 total)
              </p>
            </div>

            <p className="text-sm text-slate-500">
              Perfect for a single church, coffee house, or small office. Full remote monitoring and content
              scheduling included.
            </p>

            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-slate-700">Remote monitoring &amp; alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-slate-700">Zero-touch appliance setup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-slate-700">Content scheduling (Local Upload + Cloud Library)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-slate-700">High-resolution image support (JPEG, PNG)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-slate-700">1 site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-slate-700">Pi Local UI access</span>
              </li>
            </ul>

            <p className="text-xs text-slate-400">More than 3 displays? See Dealer pricing.</p>

            <a
              href="#contact"
              className="mt-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold text-center hover:border-slate-400 transition-colors"
            >
              Request Access
            </a>
          </div>

          {/* Dealer */}
          <div className="rounded-2xl border border-brand-blue bg-brand-dark p-8 flex flex-col gap-5 shadow-xl shadow-brand-blue/10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-brand-blue-light">
                For dealers &amp; growing fleets
              </p>
              <h3 className="text-xl font-bold text-white">Dealer</h3>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-white">Volume pricing</p>
              <p className="text-sm text-brand-blue-light mt-1">Contact us</p>
              <div className="mt-2 space-y-1">
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/60 flex-shrink-0" />
                  Per-display · per-user pricing
                </p>
                <p className="text-xs text-brand-blue-light flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                  Volume discounts for larger fleets
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300">
              Full fleet management for installers and dealers. Site-wide sync and centralized scheduling
              across every client and site.
            </p>

            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-brand-blue-light mt-0.5">✓</span>
                <span className="text-slate-300">Everything in Starter</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-blue-light mt-0.5">✓</span>
                <span className="text-slate-300">Multi-site display fleet dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-blue-light mt-0.5">✓</span>
                <span className="text-slate-300">Site-wide playback sync</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-blue-light mt-0.5">✓</span>
                <span className="text-slate-300">Org-wide CEC power &amp; content scheduling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-blue-light mt-0.5">✓</span>
                <span className="text-slate-300">Team &amp; role management</span>
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-auto px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold text-center transition-colors"
            >
              Request Dealer Access
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
