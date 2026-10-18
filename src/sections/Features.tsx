import type { ReactNode } from 'react'

type Feature = { icon: ReactNode; title: string; description: string; isNew?: boolean }

const features: Feature[] = [
  {
    isNew: true,
    icon: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M10 9l5 3-5 3z" /></>,
    title: 'Images and video',
    description:
      'Mix JPEG, PNG and MP4 in one playlist. Videos play to their end, then the next item follows. Up to 40 MB per video (about 1 minute); up to 4K, smoothest at 24 fps in 4K and 60 fps in 1080p.',
  },
  {
    isNew: true,
    icon: <><path d="M2 2l20 20" /><path d="M8.5 16.5a5 5 0 0 1 7 0" /><path d="M5 12.9a10 10 0 0 1 5.2-2.8" /><circle cx="12" cy="20" r="1" /></>,
    title: 'Works without the internet',
    description:
      'A one-time licence or a 30-day demo runs a display with no cloud account. Set it up from a laptop on the same network, or cabled straight to the Pi.',
  },
  {
    isNew: true,
    icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 9l6 3-6 3z" /></>,
    title: 'Quick controls',
    description:
      'Play, Pause, Next, Previous and Blank from the browser. Jump to any item, or hide one from the rotation without deleting it.',
  },
  {
    icon: <path d="M3 12h4l3-8 4 16 3-8h4" />,
    title: 'Remote monitoring',
    description:
      "Online status, CEC power state, what is on screen and the display's own model and resolution, for every screen, from one dashboard.",
  },
  {
    icon: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><path d="M14 17h7M17.5 14v7" /></>,
    title: 'Zero-touch setup',
    description:
      "The display shows a QR code. Online, it claims the screen to your account; offline, it opens the Pi's own setup page.",
  },
  {
    icon: <><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /></>,
    title: 'Secure updates, online or not',
    description:
      'Signed A/B firmware with automatic rollback. Push from the cloud, or upload the file at the screen itself, with no internet needed.',
  },
  {
    icon: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></>,
    title: 'CEC power schedule',
    description:
      'Turn displays on and off by day and time over HDMI-CEC, for one screen, a site or the whole organization. Every change is logged.',
  },
  {
    icon: <><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></>,
    title: 'Site-wide sync',
    description:
      'Every display at a site plays the same item at the same moment, locked to network time, with no live cloud connection needed to stay in step.',
  },
  {
    icon: <><path d="M4 12c4-8 12-8 16 0" /><path d="M4 12c4 8 12 8 16 0" /></>,
    title: 'Smooth transitions',
    description: 'Crossfades and effects between items, so it looks like signage, not a slideshow.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Everything your signage needs
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Built for AV dealers, installers and the venues they serve: one screen or a whole fleet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => (
            <div
              key={f.title}
              className={`bg-white rounded-xl p-6 flex flex-col gap-2.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
                f.isNew ? 'border-2 border-brand-blue' : 'border border-slate-200'
              }`}
            >
              <div className="flex justify-between items-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {f.icon}
                </svg>
                {f.isNew && (
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900">NEW</span>
                )}
              </div>
              <h3 className="font-bold text-slate-900">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
