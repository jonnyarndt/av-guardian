import { useState, FormEvent } from 'react'

const API_URL = 'https://portal.avedge.io/api/interest'

type FormState = 'idle' | 'submitting' | 'success' | 'error'
type Interest = 'starter' | 'dealer'

export default function Contact() {
  const [state, setState]       = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null
    const interest = (submitter?.value as Interest) ?? 'starter'

    setState('submitting')
    setErrorMsg('')

    const fd = new FormData(e.currentTarget)

    const payload = {
      name:    (fd.get('name') as string).trim(),
      company: (fd.get('company') as string).trim(),
      email:   (fd.get('email') as string).trim(),
      interest,
    }

    try {
      const res = await fetch(API_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      })

      if (res.ok) {
        setState('success')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(
          data.error
            ?? (res.status === 429
              ? 'Too many submissions — please try again later.'
              : 'Something went wrong. Please try again.')
        )
        setState('error')
      }
    } catch {
      setErrorMsg('Could not reach the server. Please check your connection and try again.')
      setState('error')
    }
  }

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Get in touch
          </h2>
          <p className="text-slate-500 text-lg">
            We'll follow up shortly.
          </p>
        </div>

        {state === 'success' ? (
          <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
            <p className="text-2xl mb-3">✅</p>
            <p className="font-semibold text-green-800 mb-2">Thanks — we'll be in touch soon.</p>
            <p className="text-sm text-green-700">
              We read every submission and follow up personally.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              placeholder="Name"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <input
              name="company"
              type="text"
              required
              maxLength={100}
              autoComplete="organization"
              placeholder="Company"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <input
              name="email"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
              placeholder="Email"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />

            {state === 'error' && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {errorMsg}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                type="submit"
                name="interest"
                value="starter"
                disabled={state === 'submitting'}
                className="flex-1 px-6 py-3.5 rounded-lg border-2 border-brand-blue text-brand-blue font-semibold text-sm hover:bg-blue-50 disabled:opacity-60 transition-colors"
              >
                {state === 'submitting' ? 'Sending…' : 'Request Access'}
              </button>
              <button
                type="submit"
                name="interest"
                value="dealer"
                disabled={state === 'submitting'}
                className="flex-1 px-6 py-3.5 rounded-lg bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm disabled:opacity-60 transition-colors"
              >
                {state === 'submitting' ? 'Sending…' : 'Request Dealer Access'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

