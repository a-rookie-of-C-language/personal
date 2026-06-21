import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputPath = resolve(__dirname, '../public/github-contributions.json')
const login = process.env.GITHUB_LOGIN || 'a-rookie-of-C-language'
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN

async function githubSearch(type) {
  const params = new URLSearchParams({
    q: `author:${login} type:${type}`,
    sort: 'updated',
    order: 'desc',
    per_page: '12',
  })
  const response = await fetch(`https://api.github.com/search/issues?${params}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })
  if (!response.ok) {
    throw new Error(`GitHub search failed for ${type}: ${response.status} ${await response.text()}`)
  }
  return response.json()
}

function mapItem(item, type) {
  const repository = item.repository_url.replace('https://api.github.com/repos/', '')
  const mergedAt = item.pull_request?.merged_at || null
  const state = type === 'pr' && mergedAt ? 'merged' : item.state
  return {
    kind: type === 'pr' ? 'pull_request' : 'issue',
    title: item.title,
    url: item.html_url,
    repository,
    number: item.number,
    state,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
    closedAt: item.closed_at,
    mergedAt,
  }
}

const [pullRequestResult, issueResult] = await Promise.all([
  githubSearch('pr'),
  githubSearch('issue'),
])

const pullRequests = pullRequestResult.items.map((item) => mapItem(item, 'pr'))
const issues = issueResult.items.map((item) => mapItem(item, 'issue'))
const payload = {
  login,
  generatedAt: new Date().toISOString(),
  summary: {
    pullRequests: pullRequests.length,
    mergedPullRequests: pullRequests.filter((item) => item.state === 'merged').length,
    openPullRequests: pullRequests.filter((item) => item.state === 'open').length,
    issues: issues.length,
    openIssues: issues.filter((item) => item.state === 'open').length,
    closedIssues: issues.filter((item) => item.state === 'closed').length,
  },
  pullRequests,
  issues,
}

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
console.log(`Wrote ${outputPath}`)
