const steps = [
  {
    number: '01',
    title: 'Flash & Mount',
    description:
      'Your installer flashes the AV Guardian signage image to a Raspberry Pi and mounts it behind the display — just like any other device.',
  },
  {
    number: '02',
    title: 'Power On & Show Claim Code',
    description:
      'The device boots, connects to the network, and shows a claim QR code right on the screen — nothing to configure, no SSH access required.',
  },
  {
    number: '03',
    title: 'Claim by Scan or Serial Number',
    description:
      "Scan the code (or type the serial from the box) in the cloud dashboard to assign the display to a client's site. It's ready immediately.",
  },
  {
    number: '04',
    title: 'Manage Forever',
    description:
      'Schedule content, control display power, monitor uptime, and push updates from anywhere — without ever coming back to the site.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Up and running in minutes
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Four steps from unboxing to fully managed signage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map(s => (
            <div key={s.number} className="flex gap-5">
              <span className="flex-shrink-0 text-3xl font-extrabold text-brand-blue/20 leading-none tabular-nums">
                {s.number}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
