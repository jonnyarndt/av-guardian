import type { ReactNode } from 'react'

function Option({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg bg-slate-50 px-3.5 py-3">
      <p className="text-sm font-bold text-slate-900">{title}</p>
      <p className="text-[13px] leading-normal text-slate-500 mt-0.5">{children}</p>
    </div>
  )
}

function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 flex flex-col gap-3.5">
      <div className="flex items-center gap-3">
        <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-blue text-white text-lg font-extrabold flex items-center justify-center">
          {n}
        </span>
        <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
      </div>
      {children}
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Up and running in minutes
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Three steps from a blank card to content on screen. The first 30 days are free.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <Step n={1} title="Get the software">
            <p className="text-sm leading-relaxed text-slate-500">
              AV Guardian runs from the Pi 5's microSD card. Pick whichever suits you:
            </p>
            <div className="flex flex-col gap-2.5">
              <Option title="Send us your cards">We write the image and post them back.</Option>
              <Option title="Download the image">Ask for a link and write it to your own cards.</Option>
              <Option title="Buy a ready card">
                32 GB A2 microSD, pre-imaged · $50 per card, plus shipping and handling.
              </Option>
            </div>
          </Step>

          <Step n={2} title="Power on: 30 days free">
            <p className="text-sm leading-relaxed text-slate-500">
              Put the card in a Pi 5 behind the display and connect HDMI. The screen shows its serial,
              its address and a QR code.
            </p>
            <p className="text-sm leading-relaxed text-slate-500">
              Scan the code or open the address to start the free 30-day demo. Upload images and videos,
              set the power schedule, see it play.
            </p>
            <div className="mt-auto rounded-lg bg-blue-50 px-3.5 py-3 text-[13px] leading-normal text-blue-900">
              Works on the site's network or with a laptop cabled straight to the Pi. No internet needed.
            </div>
          </Step>

          <Step n={3} title="Ask for a licence">
            <p className="text-sm leading-relaxed text-slate-500">
              Before the demo ends, ask us for a licence key and enter it on the Pi. Choose:
            </p>
            <div className="flex flex-col gap-2.5">
              <Option title="Cloud, monthly or yearly">
                Monitoring, alerts, remote updates and the fleet dashboard.
              </Option>
              <Option title="Stand-alone, $10 once">
                Runs on its own for the life of the Pi. Updates on request.
              </Option>
            </div>
            <a href="#pricing" className="mt-auto text-sm font-semibold text-brand-blue hover:text-brand-blue-dark">
              Compare plans →
            </a>
          </Step>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm text-center transition-colors"
          >
            Request the image or a ready card
          </a>
        </div>
      </div>
    </section>
  )
}
