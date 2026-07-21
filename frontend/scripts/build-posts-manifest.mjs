import fs from 'node:fs'
import path from 'node:path'

const postsRoot = path.resolve('public/posts')
const outputPath = path.join(postsRoot, 'posts-manifest.json')

const categoryNames = {
  algorithms: '算法',
  'c-language': 'C 语言',
  'data-structures': '数据结构',
  distributed: '分布式系统',
  frontend: '前端',
  leetcode: 'LeetCode',
  rust: 'Rust',
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return [full]
  })
}

function parseFrontmatter(content) {
  if (!content.startsWith('---')) return { data: {}, body: content }

  const end = content.indexOf('\n---', 3)
  if (end === -1) return { data: {}, body: content }

  const raw = content.slice(3, end).trim()
  const body = content.slice(end + 4).trimStart()
  const data = {}
  let currentKey = ''

  for (const line of raw.split(/\r?\n/)) {
    const keyValue = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/)
    if (keyValue) {
      currentKey = keyValue[1]
      const value = keyValue[2].trim()
      data[currentKey] = value || []
      continue
    }

    const arrayItem = line.match(/^\s+-\s*(.*)$/)
    if (arrayItem && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = []
      data[currentKey].push(unquote(arrayItem[1].trim()))
    }
  }

  return { data, body }
}

function unquote(value) {
  return value.replace(/^['"]|['"]$/g, '')
}

function titleFromBody(body, fallback) {
  return body.match(/^#\s+(.+)$/m)?.[1].trim() || fallback
}

function summaryFromBody(body) {
  const cleaned = body
    .replace(/^---[\s\S]*?---\s*/, '')
    .replace(/^>\s.*$/gm, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/!\[[^\]]*]\([^)]+\)/g, '')
    .replace(/<[^>]+>/g, '')
    .split(/\r?\n/)
    .map((line) => line.replace(/^#+\s*/, '').trim())
    .filter(Boolean)
    .find((line) => !line.startsWith('|') && !line.includes('文章链接：'))

  if (!cleaned) return '这篇文章还没有摘要。'
  return cleaned.length > 120 ? `${cleaned.slice(0, 120)}...` : cleaned
}

function dateFromContent(content, fallback = '') {
  return content.match(/\d{4}-\d{2}-\d{2}/)?.[0] || fallback
}

function slugify(value, fallback) {
  const ascii = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  if (ascii) return ascii
  return `${fallback}-${shortHash(value)}`
}

function shortHash(value) {
  let hash = 0
  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  }
  return hash.toString(36)
}

function publicPath(file) {
  const relative = path.relative(postsRoot, file).split(path.sep)
  return `/posts/${relative.map(encodeURIComponent).join('/')}`
}

const indexFiles = walk(postsRoot)
  .filter((file) => path.basename(file) === 'index.md')
  .sort()

const posts = indexFiles.map((file, index) => {
  const relativeParts = path.relative(postsRoot, file).split(path.sep)
  const categorySlug = relativeParts[0]
  const directoryName = relativeParts.at(-2) || `post-${index + 1}`
  const content = fs.readFileSync(file, 'utf8')
  const { data, body } = parseFrontmatter(content)
  const title = unquote(String(data.title || titleFromBody(body, directoryName)))
  const categoryName = categoryNames[categorySlug] || categorySlug
  const date = unquote(String(data.date || dateFromContent(content)))
  const tags = Array.isArray(data.tags) && data.tags.length > 0
    ? data.tags
    : [categoryName]

  return {
    id: index + 1,
    title,
    slug: unquote(String(data.slug || slugify(`${categorySlug}-${directoryName}`, `post-${index + 1}`))),
    summary: unquote(String(data.summary || summaryFromBody(body))),
    cover_url: unquote(String(data.cover_url || '')),
    content: '',
    content_path: publicPath(file),
    status: unquote(String(data.status || 'published')),
    featured: String(data.featured || '').trim() === 'true' || index < 3,
    category_id: index + 1,
    category: {
      id: index + 1,
      name: categoryName,
      slug: categorySlug,
    },
    tags: tags.map((name, tagIndex) => ({
      id: index * 100 + tagIndex + 1,
      name: unquote(String(name)),
      slug: slugify(String(name), `tag-${index}-${tagIndex}`),
    })),
    published_at: date || null,
    created_at: date,
    updated_at: date,
  }
})

fs.writeFileSync(outputPath, `${JSON.stringify(posts, null, 2)}\n`)
console.log(`Generated ${path.relative(process.cwd(), outputPath)} with ${posts.length} posts.`)
