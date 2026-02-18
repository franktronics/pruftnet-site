import { useState, FormEvent } from 'react'
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '~/components/button'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setFormState('loading')

    try {
      const response = await fetch('/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setFormState('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setFormState('error')
        setMessage(data.message)
      }
    } catch {
      setFormState('error')
      setMessage('Something went wrong. Please try again later.')
    }
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Be the First to Know
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our waitlist and get early access when we launch
          </p>

          {formState === 'success' ? (
            <div className="mt-10 flex items-center justify-center gap-3 rounded-lg border border-green-500/30 bg-green-500/10 p-6 text-green-600 dark:text-green-400">
              <CheckCircle className="size-6" />
              <span className="text-lg font-medium">{message}</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={formState === 'loading'}
                className="h-12 rounded-lg border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 sm:w-80"
              />
              <Button size="lg" className="h-12 gap-2" disabled={formState === 'loading'}>
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="size-4" />
                  </>
                )}
              </Button>
            </form>
          )}

          {formState === 'error' && <p className="mt-4 text-sm text-red-500">{message}</p>}

          {formState !== 'success' && (
            <p className="mt-4 text-sm text-muted-foreground">
              We respect your privacy. No spam, ever.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
