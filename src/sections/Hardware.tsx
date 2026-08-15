export default function Hardware() {
  return (
    <section className="bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Runs on hardware you already trust
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          AV Guardian runs on a Raspberry Pi 4 or 5 mounted behind the display.
        </p>
      </div>
      <div className="max-w-sm mx-auto">
        <div className="rounded-xl border-2 border-brand-blue p-6 text-center">
          <h3 className="font-semibold text-slate-900 mb-1">Bring Your Own Pi</h3>
          <p className="text-sm text-slate-500">
            Free download — flash the AV Guardian image to your own Raspberry Pi 4 or 5.
          </p>
        </div>
      </div>
    </section>
  )
}
