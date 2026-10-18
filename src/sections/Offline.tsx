const points = [
  { title: 'One-time licence or 30-day demo.', text: 'No subscription, no account, no phone-home.' },
  {
    title: 'Set it up from a laptop.',
    text: "On the site's network, or with a cable straight to the Pi: the display shows the address to open.",
  },
  {
    title: 'Update it by file.',
    text: 'Ask for a new firmware ($10 per update) and upload it in the browser; it installs, and rolls back on its own if anything goes wrong.',
  },
  {
    title: 'Connect it later if you like.',
    text: 'Plug in the internet and the same screen can join your cloud dashboard.',
  },
]

// A stand-in QR pattern (5×5); 1 = dark square.
const qr = [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1]

export default function Offline() {
  return (
    <section id="offline" className="bg-brand-darker text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_440px] gap-14 items-center">
        <div className="flex flex-col gap-5">
          <span className="text-sm font-bold tracking-widest text-brand-blue-light">NO CLOUD REQUIRED</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
            Some screens should never touch the internet. Now they don't have to.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Secure sites, isolated networks, a single menu board in a café: run AV Guardian on its own.
            Everything a display needs is on the Pi.
          </p>
          <ol className="flex flex-col gap-3.5 pt-1">
            {points.map((p, i) => (
              <li key={p.title} className="flex gap-3.5 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-brand-card text-blue-300 text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-relaxed text-brand-text">
                  <strong>{p.title}</strong> {p.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <figure className="flex flex-col gap-2.5 items-center">
          <div className="w-full max-w-[440px] aspect-[5/3] rounded-xl border-[10px] border-gray-800 bg-black flex flex-col items-center justify-center gap-2.5 px-4">
            <span className="text-lg font-bold">AV Guardian</span>
            <div
              className="w-20 h-20 bg-white rounded grid grid-cols-5 gap-1 p-2"
              role="img"
              aria-label="QR code to the appliance's setup page"
            >
              {qr.map((on, i) => (
                <span key={i} className={on ? 'bg-black' : ''} />
              ))}
            </div>
            <span className="text-[11px] text-zinc-400 text-center max-w-[300px]">
              Not connected to the cloud. Open the address below, or scan the code, to enter a licence
              key or start a 30-day demo.
            </span>
            <span className="text-sm font-bold">Direct cable: https://169.254.242.135</span>
          </div>
          <figcaption className="text-xs text-slate-400">What the display shows when it has no internet</figcaption>
        </figure>
      </div>
    </section>
  )
}
