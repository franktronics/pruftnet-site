import { Head, Link } from '@inertiajs/react'
import {
  AlertCircle,
  ArrowLeft,
  Download,
  ExternalLink,
  Github,
  Network,
  Package,
  Server,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '~/components/button'

interface ReleaseAsset {
  name: string
  downloadUrl: string
  size: number
}

interface Release {
  version: string
  tagName: string
  publishedAt: string
  releaseNotes: string
  assets: ReleaseAsset[]
}

interface DownloadsPageProps {
  releases: Release[]
  error: string | null
  stale: boolean
  lastUpdatedAt: string | null
}

type AssetKind = 'desktop' | 'server' | 'unknown'
type AssetArch = 'x64' | 'arm64' | 'unknown'

interface ParsedAsset extends ReleaseAsset {
  kind: AssetKind
  arch: AssetArch
  extension: string
  label: string
}

const numberFormatter = new Intl.NumberFormat('en-US')
const longDateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})
const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

export default function Downloads({ releases, error, stale, lastUpdatedAt }: DownloadsPageProps) {
  const [latestRelease, ...previousReleases] = releases
  const totalAssets = releases.reduce((sum, release) => sum + release.assets.length, 0)

  return (
    <>
      <Head>
        <title>Downloads | Pruftnet - Visual Network Analyser</title>
        <meta
          name="description"
          content="Download the latest Pruftnet desktop and server builds directly from GitHub releases. Browse release notes, supported architectures, and installation packages."
        />
        <meta
          name="keywords"
          content="pruftnet downloads, github releases, network analyser download, linux deb, arm64, x64, packet capture tool"
        />
        <meta property="og:title" content="Downloads | Pruftnet" />
        <meta
          property="og:description"
          content="Get the latest Pruftnet desktop and server builds from official GitHub releases."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pruftnet.app/downloads" />
        <meta property="og:image" content="https://pruftnet.app/meta.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Downloads | Pruftnet" />
        <meta
          name="twitter:description"
          content="Download official Pruftnet builds for desktop and server environments."
        />
        <meta name="twitter:image" content="https://pruftnet.app/meta.jpeg" />
      </Head>

      <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 hidden justify-center lg:flex">
          <div className="container-main relative h-full w-full">
            <div className="guides-vertical absolute left-0 top-0 h-full" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-120 bg-[radial-gradient(circle_at_top,rgba(234,88,12,0.18),transparent_65%)]" />
        <div className="pointer-events-none absolute -right-40 top-36 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-100 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />

        <header className="relative z-10 border-b border-border/70 bg-background/85 backdrop-blur">
          <nav className="container-main flex h-16 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <Network className="size-7 text-primary" strokeWidth={2.5} />
              <span className="text-xl font-bold tracking-tight">Prüftnet</span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/" className="gap-2">
                  <ArrowLeft className="size-4" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/franktronics/pruftnet.app/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Github className="size-4" />
                  GitHub Releases
                </a>
              </Button>
            </div>
          </nav>
        </header>

        <main className="relative z-10 flex-1">
          <section className="py-16 md:py-24">
            <div className="container-main">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-end">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary">
                    Official GitHub Releases
                  </div>

                  <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                    Download Pruftnet
                    <span className="mt-2 block text-primary">
                      Desktop and server builds, ready to ship
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                    Browse published releases, compare package formats, and download the build that
                    fits your Linux workstation or deployment target.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <div className="rounded-full border border-border bg-background/80 px-4 py-2">
                      {numberFormatter.format(releases.length)} published release
                      {releases.length === 1 ? '' : 's'}
                    </div>
                    <div className="rounded-full border border-border bg-background/80 px-4 py-2">
                      {numberFormatter.format(totalAssets)} downloadable asset
                      {totalAssets === 1 ? '' : 's'}
                    </div>
                    {lastUpdatedAt ? (
                      <div className="rounded-full border border-border bg-background/80 px-4 py-2">
                        Updated {shortDateFormatter.format(new Date(lastUpdatedAt))}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="rounded-3xl border border-border/70 bg-card/85 p-6 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)] backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/80">
                        Download focus
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-foreground">
                        Pick the package that matches your runtime.
                      </h2>
                    </div>
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <Download className="size-6" />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3">
                      <Package className="size-4 text-primary" />
                      Desktop builds in `.deb` and `.zip`
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3">
                      <Server className="size-4 text-primary" />
                      Server bundles for headless deployments
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3">
                      <ShieldCheck className="size-4 text-primary" />
                      Assets served from the public GitHub release page
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="guides-horizontal-full hidden lg:block" />

          <section className="py-12 md:py-16">
            <div className="container-main space-y-6">
              {error ? (
                <div
                  className={`rounded-2xl border px-5 py-4 text-sm ${
                    stale
                      ? 'border-amber-300/60 bg-amber-50 text-amber-900'
                      : 'border-destructive/25 bg-destructive/10 text-destructive'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 size-4 shrink-0" />
                    <p>{error}</p>
                  </div>
                </div>
              ) : null}

              {latestRelease ? (
                <article className="overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-[0_30px_90px_-40px_rgba(234,88,12,0.45)]">
                  <div className="border-b border-border/70 bg-[linear-gradient(135deg,rgba(234,88,12,0.12),rgba(255,255,255,0.7))] px-6 py-6 md:px-8 md:py-8">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                      <div>
                        <div className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                          Latest Release
                        </div>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                          {latestRelease.tagName}
                        </h2>
                        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                          Published {longDateFormatter.format(new Date(latestRelease.publishedAt))}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button asChild>
                          <a
                            href={`https://github.com/franktronics/pruftnet.app/releases/tag/${latestRelease.tagName}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <ExternalLink className="size-4" />
                            View Release
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-8 px-6 py-6 md:px-8 md:py-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                    <div>
                      <SectionHeading
                        title="Release Notes"
                        description="Highlights from this version."
                      />
                      <ReleaseNotes notes={latestRelease.releaseNotes} />
                    </div>

                    <div>
                      <SectionHeading
                        title="Downloads"
                        description="Desktop and server assets for the latest release."
                      />
                      <AssetList assets={latestRelease.assets} />
                    </div>
                  </div>
                </article>
              ) : (
                <EmptyState />
              )}
            </div>
          </section>

          {previousReleases.length > 0 ? (
            <div className="guides-horizontal-full hidden lg:block" />
          ) : null}

          {previousReleases.length > 0 ? (
            <section className="py-12 md:py-16">
              <div className="container-main">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    Previous Releases
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Earlier builds stay available for testing, rollback plans, and server upgrades.
                  </p>
                </div>

                <div className="mt-10 space-y-6">
                  {previousReleases.map((release) => (
                    <article
                      key={release.tagName}
                      className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)] md:p-8"
                    >
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary/75">
                            Version {release.version}
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-foreground">
                            {release.tagName}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Published {longDateFormatter.format(new Date(release.publishedAt))}
                          </p>
                        </div>

                        <Button variant="outline" asChild>
                          <a
                            href={`https://github.com/franktronics/pruftnet.app/releases/tag/${release.tagName}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <ExternalLink className="size-4" />
                            Open on GitHub
                          </a>
                        </Button>
                      </div>

                      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                        <div>
                          <SectionHeading
                            title="Notes"
                            description="A quick overview of what shipped in this version."
                          />
                          <ReleaseNotes notes={release.releaseNotes} compact />
                        </div>

                        <div>
                          <SectionHeading
                            title="Assets"
                            description="Packages available for this release."
                          />
                          <AssetList assets={release.assets} compact />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ) : null}
        </main>

        <footer className="relative z-10 border-t border-border py-8">
          <div className="container-main flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Pruftnet. Open source under MIT License.</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/franktronics/pruftnet.app"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <Link href="/about" className="transition-colors hover:text-foreground">
                About
              </Link>
              <Link href="/doc" className="transition-colors hover:text-foreground">
                Docs
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-border bg-card/70 px-6 py-12 text-center md:px-10 md:py-16">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Package className="size-7" />
      </div>
      <h2 className="mt-6 text-2xl font-semibold text-foreground">No published releases yet</h2>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        As soon as the first public release is published on GitHub, the download packages will
        appear here automatically.
      </p>
      <div className="mt-8 flex justify-center">
        <Button asChild>
          <a
            href="https://github.com/franktronics/pruftnet.app/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2"
          >
            <Github className="size-4" />
            Track GitHub Releases
          </a>
        </Button>
      </div>
    </div>
  )
}

function AssetList({ assets, compact = false }: { assets: ReleaseAsset[]; compact?: boolean }) {
  if (assets.length === 0) {
    return (
      <div className="mt-5 rounded-2xl border border-dashed border-border bg-background/70 px-4 py-5 text-sm text-muted-foreground">
        No downloadable assets were attached to this release.
      </div>
    )
  }

  const parsedAssets = assets
    .map(parseAsset)
    .sort((left, right) => getAssetSortValue(left) - getAssetSortValue(right))

  return (
    <div className={`mt-5 grid gap-3 ${compact ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
      {parsedAssets.map((asset) => (
        <a
          key={asset.name}
          href={asset.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-border bg-background/85 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                {asset.kind === 'server' ? (
                  <Server className="size-4" />
                ) : (
                  <Package className="size-4" />
                )}
                <span>{asset.label}</span>
              </div>
              <p className="mt-2 break-all text-sm text-foreground">{asset.name}</p>
              <p className="mt-2 text-xs text-muted-foreground">{formatBytes(asset.size)}</p>
            </div>
            <div className="rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
              Download
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

function ReleaseNotes({ notes, compact = false }: { notes: string; compact?: boolean }) {
  const lines = notes
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  const items = lines
    .map((line) => line.replace(/^[-*]\s*/, ''))
    .filter((line) => !/^#+\s*/.test(line))

  if (items.length === 0) {
    return (
      <div className="mt-5 rounded-2xl border border-dashed border-border bg-background/70 px-4 py-5 text-sm text-muted-foreground">
        Release notes are not available for this version.
      </div>
    )
  }

  const limitedItems = compact ? items.slice(0, 4) : items.slice(0, 8)

  return (
    <div className="mt-5 rounded-2xl border border-border bg-background/70 p-5">
      <ul className="space-y-3">
        {limitedItems.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-6 text-muted-foreground sm:text-base"
          >
            <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function parseAsset(asset: ReleaseAsset): ParsedAsset {
  const fileName = asset.name.toLowerCase()
  const extension = fileName.endsWith('.tar.gz')
    ? '.tar.gz'
    : fileName.slice(fileName.lastIndexOf('.')) || 'file'

  const isServer = fileName.includes('server')
  const kind: AssetKind = isServer
    ? 'server'
    : fileName.includes('pruftnet')
      ? 'desktop'
      : 'unknown'
  const arch: AssetArch = fileName.includes('arm64')
    ? 'arm64'
    : fileName.includes('x64') || fileName.includes('amd64')
      ? 'x64'
      : 'unknown'

  const baseLabel =
    kind === 'server' ? 'Server' : kind === 'desktop' ? 'Desktop' : 'Download package'
  const archLabel = arch === 'unknown' ? 'universal' : arch

  return {
    ...asset,
    kind,
    arch,
    extension,
    label: `${baseLabel} ${extension} ${archLabel}`,
  }
}

function getAssetSortValue(asset: ParsedAsset) {
  const kindWeight = asset.kind === 'desktop' ? 0 : asset.kind === 'server' ? 1 : 2
  const formatWeight = asset.extension === '.deb' ? 0 : asset.extension === '.zip' ? 1 : 2
  const archWeight = asset.arch === 'x64' ? 0 : asset.arch === 'arm64' ? 1 : 2

  return kindWeight * 100 + formatWeight * 10 + archWeight
}

function formatBytes(bytes: number) {
  if (bytes === 0) {
    return '0 B'
  }

  const units = ['B', 'KB', 'MB', 'GB']
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
  const value = bytes / 1024 ** exponent

  return `${value.toFixed(value >= 100 || exponent === 0 ? 0 : 1)} ${units[exponent]}`
}
