export default function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-brand-border text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-5">

        <div className="flex items-center gap-2 text-white font-semibold">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-brand-blue text-white text-xs font-bold">
            AG
          </span>
          AV Guardian Suite
        </div>

        <p className="text-xs text-slate-500 text-center">
          © {new Date().getFullYear()} Automation &amp; Integration, LLC. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
