import { ArrowRight } from 'lucide-react'
import { Button } from '~/components/button'

export function Waitlist() {
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

          <form className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="h-12 rounded-lg border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary sm:w-80"
            />
            <Button size="lg" className="h-12 gap-2">
              Join Waitlist
              <ArrowRight className="size-4" />
            </Button>
          </form>

          <p className="mt-4 text-sm text-muted-foreground">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  )
}
