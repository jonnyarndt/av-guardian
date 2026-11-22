const EMAIL = 'jonathan@automation-integration.com'
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('AV Guardian')}`

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Get in touch
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed">
          Questions, a download link, ready cards, a licence or dealer pricing: send an email and
          you'll get a personal reply.
        </p>

        <a
          href={MAILTO}
          className="inline-block mt-8 px-8 py-3.5 rounded-lg bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm transition-colors shadow-lg shadow-brand-blue/25"
        >
          Email us
        </a>
        <p className="mt-3 text-sm text-slate-500 break-all">
          <a href={MAILTO} className="hover:text-brand-blue">{EMAIL}</a>
        </p>

        <p className="mt-10 text-sm text-slate-500 leading-relaxed rounded-lg bg-slate-50 px-5 py-4">
          AV Guardian is available as a stand-alone product. Cloud fleet management (remote
          monitoring, alerts and updates from a dashboard) is paused for now. If you need it, say so
          in your email.
        </p>
      </div>
    </section>
  )
}
