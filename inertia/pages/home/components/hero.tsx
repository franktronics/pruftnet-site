import { ArrowRight, Github } from 'lucide-react'
import { Button } from '~/components/button'
import homeSvg from '@/resources/assets/home_svg.svg'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(234,88,12,0.1),transparent)]" />

      <div className="container-main">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 py-12 lg:flex-row lg:gap-12 lg:py-20">
          {/* Text Content */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge / Tagline */}
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Visual Network Analyser
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              See Your Network
              <span className="block text-primary">Like Never Before</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Capture packets in real-time, visualize your network topology, and build custom
              analysis workflows with an intuitive drag-and-drop interface. No coding required.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" className="gap-2 text-base">
                Join the Waitlist
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-base" asChild>
                <a href="https://github.com/pruftnet" target="_blank" rel="noopener noreferrer">
                  <Github className="size-4" />
                  View on GitHub
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
              <div className="flex items-center gap-2">
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Cross-Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Web version</span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <div className="absolute inset-0 -z-10 blur-3xl">
                <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20" />
              </div>

              <img
                src={homeSvg}
                alt="Network visualization showing interconnected devices and servers"
                className="w-full scale-180 drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
