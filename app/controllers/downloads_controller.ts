import type { HttpContext } from '@adonisjs/core/http'

interface GithubReleaseAsset {
  name: string
  size: number
  browser_download_url: string
}

interface GithubRelease {
  draft: boolean
  tag_name: string
  name: string | null
  published_at: string | null
  body: string | null
  assets: GithubReleaseAsset[]
}

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

interface ReleasesCacheEntry {
  data: Release[]
  expiresAt: number
  fetchedAt: string
}

const GITHUB_RELEASES_URL = 'https://api.github.com/repos/franktronics/pruftnet.app/releases'
const CACHE_DURATION_MS = 15 * 60 * 1000

let releasesCache: ReleasesCacheEntry | null = null

export default class DownloadsController {
  async index({ inertia, logger }: HttpContext) {
    try {
      const { releases, fetchedAt } = await this.getReleases()

      return inertia.render('downloads/downloads', {
        releases,
        error: null,
        stale: false,
        lastUpdatedAt: fetchedAt,
      })
    } catch (error) {
      logger.error({ err: error }, 'Failed to fetch GitHub releases')

      if (releasesCache) {
        return inertia.render('downloads/downloads', {
          releases: releasesCache.data,
          error: 'GitHub is temporarily unavailable. Showing the most recently cached releases.',
          stale: true,
          lastUpdatedAt: releasesCache.fetchedAt,
        })
      }

      return inertia.render('downloads/downloads', {
        releases: [],
        error: 'GitHub releases are temporarily unavailable. Please try again in a few minutes.',
        stale: false,
        lastUpdatedAt: null,
      })
    }
  }

  private async getReleases() {
    const now = Date.now()

    if (releasesCache && releasesCache.expiresAt > now) {
      return {
        releases: releasesCache.data,
        fetchedAt: releasesCache.fetchedAt,
      }
    }

    const response = await fetch(GITHUB_RELEASES_URL, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'pruftnet-site',
      },
    })

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`)
    }

    const payload = (await response.json()) as GithubRelease[]
    const releases = payload
      .filter((release) => !release.draft && release.published_at)
      .sort((left, right) => {
        return Date.parse(right.published_at ?? '') - Date.parse(left.published_at ?? '')
      })
      .map((release) => this.mapRelease(release))

    const fetchedAt = new Date().toISOString()

    releasesCache = {
      data: releases,
      expiresAt: now + CACHE_DURATION_MS,
      fetchedAt,
    }

    return {
      releases,
      fetchedAt,
    }
  }

  private mapRelease(release: GithubRelease): Release {
    const tagName = release.tag_name
    const version = tagName.replace(/^v/i, '') || tagName

    return {
      version,
      tagName,
      publishedAt: release.published_at ?? new Date().toISOString(),
      releaseNotes: release.body?.trim() ?? '',
      assets: release.assets.map((asset) => ({
        name: asset.name,
        downloadUrl: asset.browser_download_url,
        size: asset.size,
      })),
    }
  }
}
