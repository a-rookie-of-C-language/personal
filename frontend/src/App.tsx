import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  Mail,
  MapPin,
  Search,
} from 'lucide-react'
import { MarkdownContent } from './MarkdownContent'
import {
  GITHUB_URL,
  deploymentNotes,
  emptyProfile,
  focusCards,
  organizationMemberships,
  projectCaseFor,
  projectEvidence,
  projectSlug,
  resumeSkillGroups,
  resumeTimeline,
  splitTechStack,
  stackHighlights,
  staticPosts,
  staticSite,
} from './siteContent'
import type { Post } from './types'
import './App.css'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

type GitHubContribution = {
  kind: 'pull_request' | 'issue'
  title: string
  url: string
  repository: string
  number: number
  state: 'open' | 'closed' | 'merged'
  createdAt: string
  updatedAt: string
  closedAt: string | null
  mergedAt: string | null
}

type GitHubContributionPayload = {
  login: string
  generatedAt: string | null
  summary: {
    pullRequests: number
    mergedPullRequests: number
    openPullRequests: number
    issues: number
    openIssues: number
    closedIssues: number
    totalPullRequests?: number
    totalIssues?: number
  }
  pullRequests: GitHubContribution[]
  issues: GitHubContribution[]
}

type RepositoryActivity = {
  repository: string
  pullRequests: GitHubContribution[]
  issues: GitHubContribution[]
  updatedAt: string
}

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<ResumePage />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog/:slug" element={<PostDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

function PublicLayout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">跳到主要内容</a>
      <header className="topbar">
        <Link to="/" className="brand"><BrandAvatar /> arookieofc</Link>
        <nav>
          <Link to="/">首页</Link>
          <Link to="/resume">简历</Link>
          <Link to="/blog">文章</Link>
          <a href={GITHUB_URL} target="_blank">GitHub</a>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

function BrandAvatar() {
  return (
    <span className="brand-avatar">
      <img src={emptyProfile.avatarUrl} alt="" />
      <span>AR</span>
    </span>
  )
}

function Home() {
  const site = staticSite
  const posts = staticPosts
  const profile = site.profile || emptyProfile
  const featuredPosts = posts.slice(0, 3)
  const projects = site.projects

  return (
    <main id="main">
      <section className="hero-section identity-hero">
        <div className="hero-copy">
          <p className="eyebrow">全栈 / AI Agent / 后端系统</p>
          <h1>{profile.displayName}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="bio">{profile.bio}</p>
          <p className="membership-line">
            member of{' '}
            {organizationMemberships.map((org, index) => (
              <span key={org.url}>
                <a href={org.url} target="_blank">{org.label}</a>
                {index < organizationMemberships.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href={GITHUB_URL} target="_blank"><GitBranch size={18} /> GitHub 主页</a>
            <Link className="secondary-btn" to="/resume"><FileText size={18} /> 在线简历</Link>
            <Link className="secondary-btn" to="/blog"><FileText size={18} /> 阅读文章</Link>
            {profile.email && <a className="secondary-btn" href={`mailto:${profile.email}`}><Mail size={18} /> 联系我</a>}
          </div>
          <div className="meta-row">
            {profile.location && <span><MapPin size={16} /> {profile.location}</span>}
            <a href={GITHUB_URL} target="_blank"><GitBranch size={16} /> github.com/a-rookie-of-C-language</a>
            {site.socialLinks.map((item) => <a key={item.id} href={item.url} target="_blank">{item.label}</a>)}
          </div>
          <div className="metric-strip" aria-label="站点概览">
            <span><strong>{posts.length}</strong> 篇文章</span>
            <span><strong>{projects.length}</strong> 个作品</span>
            <span><strong>{stackHighlights.length}</strong> 条技术线</span>
          </div>
        </div>
        <div className="hero-media terminal-collage">
          <div className="avatar-card">
            {profile.avatarUrl
              ? <img src={profile.avatarUrl} alt={`${profile.displayName} 的头像`} />
              : <span>AR</span>}
          </div>
          <div className="code-window">
            <div className="window-dots"><span></span><span></span><span></span></div>
            <pre>{`const builder = {
  stack: ['Spring', 'Rust', 'TS', 'C++'],
  focus: ['AI Agent', 'Backend', 'Tooling'],
  mode: 'ship > posture'
}`}</pre>
          </div>
          <div className="type-sample" aria-hidden="true">
            <span>AGENT</span>
            <span>BACKEND</span>
            <span>SHIP</span>
          </div>
          <div className="notebook-card" aria-label="身份摘要">
            <span className="dot-line"></span>
            <strong>构建者画像</strong>
            <p>全栈是表面，后端是骨架，Agent 工作流是大脑。</p>
          </div>
        </div>
      </section>

      <section className="content-band organization-band">
        <div className="section-head">
          <div>
            <p className="eyebrow">Organizations</p>
            <h2>参与的工程组织</h2>
          </div>
        </div>
        <div className="organization-grid">
          {organizationMemberships.map((org) => (
            <a className="organization-card" href={org.url} target="_blank" key={org.url}>
              <span>{org.label}</span>
              <h3>{org.name}</h3>
              <p>{org.description}</p>
              <div className="tag-row">
                {org.focus.map((item) => <span key={item}>{item}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="content-band identity-band">
        <div className="section-head">
          <div>
            <p className="eyebrow">工程签名</p>
            <h2>有取向的技术栈</h2>
          </div>
        </div>
        <div className="skill-matrix">
          {stackHighlights.map((item) => {
            const Icon = item.icon
            return (
              <article className="skill-card" key={item.label}>
                <Icon size={22} />
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="content-band agent-grid-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">构建方式</p>
            <h2>不做模板化作品集</h2>
          </div>
        </div>
        <div className="agent-grid">
          {focusCards.map((card, index) => (
            <article className="agent-card" key={card.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
          <a className="github-panel" href={GITHUB_URL} target="_blank">
            <GitBranch size={28} />
            <strong>a-rookie-of-C-language</strong>
            <p>查看公开代码轨迹。</p>
            <ExternalLink size={18} />
          </a>
        </div>
      </section>

      <GitHubActivity />

      <section className="content-band">
        <div className="section-head">
          <div>
            <p className="eyebrow">最近文章</p>
            <h2>思考记录</h2>
          </div>
          <Link to="/blog">全部文章</Link>
        </div>
        <div className="post-grid">
          {featuredPosts.map((post, index) => <PostCard key={post.id} post={post} index={index + 1} />)}
          {featuredPosts.length === 0 && <EmptyState text="还没有发布文章，可以在后台发布第一篇。" />}
        </div>
      </section>

      <section className="content-band">
        <div className="section-head">
          <div>
            <p className="eyebrow">精选作品</p>
            <h2>作品集</h2>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div><BriefcaseBusiness size={18} /><h3>{project.name}</h3></div>
              <p>{project.description}</p>
              <small>{project.techStack}</small>
              <div className="card-actions">
                <Link to={`/projects/${projectSlug(project)}`}>详情</Link>
                {project.url && <a href={project.url} target="_blank">访问</a>}
                {project.repoUrl && <a href={project.repoUrl} target="_blank">源码</a>}
              </div>
            </article>
          ))}
          {!projects.length && <EmptyState text="作品集会显示在这里。" />}
        </div>
      </section>
    </main>
  )
}

function GitHubActivity() {
  const [data, setData] = useState<GitHubContributionPayload | null>(null)
  const repositories = useMemo(() => data ? groupByRepository(data) : [], [data])

  useEffect(() => {
    let cancelled = false
    fetch(`${import.meta.env.BASE_URL}github-contributions.json`, { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : null)
      .then((payload: GitHubContributionPayload | null) => {
        if (!cancelled) setData(payload)
      })
      .catch(() => {
        if (!cancelled) setData(null)
      })
    return () => { cancelled = true }
  }, [])

  if (!data || (!data.pullRequests.length && !data.issues.length)) return null

  return (
    <section className="content-band github-activity-band">
      <div className="section-head">
        <div>
          <p className="eyebrow">GitHub Activity</p>
          <h2>公开协作记录</h2>
        </div>
        {data.generatedAt && <span className="activity-updated">更新于 {formatDate(data.generatedAt)}</span>}
      </div>
      <div className="activity-summary">
        <span><strong>{data.summary.pullRequests}</strong> total PRs</span>
        <span><strong>{data.summary.mergedPullRequests}</strong> merged PRs</span>
        <span><strong>{data.summary.openPullRequests}</strong> open PRs</span>
        <span><strong>{data.summary.issues}</strong> total issues</span>
        <span><strong>{data.summary.openIssues}</strong> open issues</span>
        <span><strong>{repositories.length}</strong> repos</span>
      </div>
      <div className="repository-activity-list">
        {repositories.map((repository, index) => (
          <details className="repository-activity" open={index < 3} key={repository.repository}>
            <summary>
              <span>{repository.repository}</span>
              <small>
                {repository.pullRequests.length} PRs · {repository.issues.length} issues · 更新于 {formatDate(repository.updatedAt)}
              </small>
            </summary>
            <div className="repo-contribution-grid">
              <ContributionList title={`Pull Requests (${repository.pullRequests.length})`} items={repository.pullRequests} />
              <ContributionList title={`Issues (${repository.issues.length})`} items={repository.issues} />
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

function ContributionList({ title, items }: { title: string; items: GitHubContribution[] }) {
  return (
    <section className="contribution-panel">
      <h3>{title}</h3>
      <div className="contribution-list">
        {items.length === 0 && <span className="contribution-empty">暂无记录</span>}
        {items.map((item) => (
          <a href={item.url} target="_blank" className="contribution-item" key={item.url}>
            <span className={`contribution-state ${item.state}`}>{stateLabel(item.state)}</span>
            <strong>{item.title}</strong>
            <small>{item.repository} #{item.number} · {formatDate(item.updatedAt)}</small>
          </a>
        ))}
      </div>
    </section>
  )
}

function groupByRepository(data: GitHubContributionPayload): RepositoryActivity[] {
  const grouped = new Map<string, RepositoryActivity>()
  for (const item of [...data.pullRequests, ...data.issues]) {
    const current = grouped.get(item.repository) || {
      repository: item.repository,
      pullRequests: [],
      issues: [],
      updatedAt: item.updatedAt,
    }
    if (item.kind === 'pull_request') current.pullRequests.push(item)
    else current.issues.push(item)
    if (new Date(item.updatedAt) > new Date(current.updatedAt)) current.updatedAt = item.updatedAt
    grouped.set(item.repository, current)
  }
  return [...grouped.values()].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
}

function stateLabel(state: GitHubContribution['state']) {
  if (state === 'merged') return 'merged'
  if (state === 'closed') return 'closed'
  return 'open'
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('zh-CN', { month: '2-digit', day: '2-digit' }).format(new Date(value))
}

function ResumePage() {
  const profile = staticSite.profile || emptyProfile
  const featuredProjects = staticSite.projects.slice(0, 6)

  return (
    <main id="main" className="resume-page">
      <section className="resume-hero">
        <div>
          <p className="eyebrow">ONLINE RESUME</p>
          <h1>{profile.displayName}</h1>
          <p>{profile.headline}</p>
          <div className="button-row">
            <button className="primary-btn" type="button" onClick={() => window.print()}><Download size={18} /> 打印 / 保存 PDF</button>
            <a className="secondary-btn" href={GITHUB_URL} target="_blank"><GitBranch size={18} /> GitHub</a>
            {profile.email && <a className="secondary-btn" href={`mailto:${profile.email}`}><Mail size={18} /> 邮件联系</a>}
          </div>
        </div>
        <aside className="resume-card">
          {profile.avatarUrl && <img src={profile.avatarUrl} alt={`${profile.displayName} 的头像`} />}
          <span>全栈 / AI Agent / 后端基础设施</span>
          <strong>Java Spring · Rust · TypeScript · C++</strong>
          <p className="membership-line compact">
            member of{' '}
            {organizationMemberships.map((org, index) => (
              <span key={org.url}>
                <a href={org.url} target="_blank">{org.label}</a>
                {index < organizationMemberships.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </aside>
      </section>

      <section className="resume-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">能力地图</p>
            <h2>技术栈不是标签，是能落地的组合</h2>
          </div>
        </div>
        <div className="resume-skill-grid">
          {resumeSkillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-row">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">经历摘要</p>
            <h2>用项目证明工程能力</h2>
          </div>
        </div>
        <div className="timeline-list">
          {resumeTimeline.map((item) => (
            <article key={item.title}>
              <span>{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">代表作品</p>
            <h2>可继续深入阅读的项目案例</h2>
          </div>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div><BriefcaseBusiness size={18} /><h3>{project.name}</h3></div>
              <p>{project.description}</p>
              <small>{project.techStack}</small>
              <div className="card-actions"><Link to={`/projects/${projectSlug(project)}`}>查看案例</Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section deployment-panel">
        <div>
          <p className="eyebrow">部署能力</p>
          <h2>域名、服务器和线上交付</h2>
        </div>
        <ul>
          {deploymentNotes.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </main>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const projects = staticSite.projects
  const project = projects.find((item) => projectSlug(item) === slug)
  if (!project) return <main id="main" className="page"><EmptyState text="这个作品暂时不存在。" /></main>

  const copy = projectCaseFor(project)
  const techStack = splitTechStack(project.techStack)
  const evidence = projectEvidence[project.name] || []

  return (
    <main id="main" className="project-detail-page">
      <Link to="/" className="back-link"><ArrowLeft size={18} /> 返回首页</Link>
      <section className="project-hero">
        <p className="eyebrow">PROJECT CASE</p>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div className="tag-row">{techStack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="button-row">
          {project.repoUrl && <a className="primary-btn" href={project.repoUrl} target="_blank"><GitBranch size={18} /> 查看源码</a>}
          {project.url && <a className="secondary-btn" href={project.url} target="_blank"><ExternalLink size={18} /> 在线访问</a>}
        </div>
      </section>
      <section className="case-grid">
        <article>
          <span>01</span>
          <h2>项目定位</h2>
          <p>{copy.focus}</p>
        </article>
        <article>
          <span>02</span>
          <h2>核心难点</h2>
          <p>{copy.challenge}</p>
        </article>
        <article>
          <span>03</span>
          <h2>实现方式</h2>
          <p>{copy.solution}</p>
        </article>
        <article>
          <span>04</span>
          <h2>体现能力</h2>
          <p>{copy.impact}</p>
        </article>
      </section>
      {(copy.highlights?.length || copy.details?.length || copy.decisions?.length) && (
        <section className="project-insight-grid">
          {copy.highlights?.length ? <ProjectList title="关键看点" items={copy.highlights} /> : null}
          {copy.details?.length ? <ProjectList title="工程细节" items={copy.details} /> : null}
          {copy.decisions?.length ? <ProjectList title="工程决策" items={copy.decisions} /> : null}
        </section>
      )}
      <section className="diagram-section">
        <ProjectFlow title="架构图" items={copy.architecture || []} />
        <ProjectFlow title="数据流转图" items={copy.dataFlow || []} />
      </section>
      {evidence.length > 0 && (
        <section className="evidence-strip">
          <p className="eyebrow">SOURCE EVIDENCE</p>
          <div>
            {evidence.map((item) => (
              <a key={item.url} href={item.url} target="_blank">{item.label}</a>
            ))}
          </div>
        </section>
      )}
      <section className="architecture-strip">
        <p className="eyebrow">CASE COVERAGE</p>
        <h2>我希望这个项目被看到的不是截图，而是工程取舍。</h2>
        <p>每个项目详情页都已经覆盖项目定位、核心难点、实现方式、体现能力、关键看点、工程细节、工程决策、架构图、数据流转图和来源证据。</p>
      </section>
    </main>
  )
}

function ProjectList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="project-list-card">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  )
}

function ProjectFlow({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="flow-card">
      <h2>{title}</h2>
      <div className="flow-lane">
        {items.map((item, index) => (
          <div className="flow-node" key={`${title}-${item}`}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}

function BlogList() {
  const [search, setSearch] = useState('')
  const deferredSearch = useDeferredValue(search)

  const posts = useMemo(() => {
    const keyword = deferredSearch.trim().toLowerCase()
    if (!keyword) return staticPosts
    return staticPosts.filter((post) => {
      const haystack = `${post.title} ${post.summary} ${post.content}`.toLowerCase()
      return haystack.includes(keyword)
    })
  }, [deferredSearch])

  return (
    <main id="main" className="page">
      <div className="page-title">
        <div>
          <p className="eyebrow">归档</p>
          <h1>文章</h1>
        </div>
        <label className="search-box">
          <Search size={18} />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜索标题、摘要或正文" />
        </label>
      </div>
      <div className="post-grid">
        {posts.map((post, index) => <PostCard key={post.id} post={post} index={index + 1} />)}
        {posts.length === 0 && <EmptyState text="没有匹配的文章。" />}
      </div>
    </main>
  )
}

function PostDetail() {
  const { slug } = useParams()
  const post = staticPosts.find((item) => item.slug === slug) || null

  if (!post) return <main id="main" className="page"><EmptyState text="这篇文章不存在或尚未发布。" /></main>

  return (
    <main id="main" className="article-page">
      <Link to="/blog" className="back-link"><ArrowLeft size={18} /> 返回文章列表</Link>
      {post.cover_url && <img className="article-cover" src={post.cover_url} alt="" />}
      <article>
        <p className="eyebrow">{post.category?.name || '文章'}</p>
        <h1>{post.title}</h1>
        <p className="summary">{post.summary}</p>
        <div className="tag-row">{post.tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}</div>
        <MarkdownContent value={post.content} />
      </article>
    </main>
  )
}

function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <article className="post-card">
      <span className="post-index">{String(index).padStart(2, '0')}</span>
      {post.cover_url && <img src={post.cover_url} alt="" />}
      <div>
        <p className="eyebrow">{post.category?.name || (post.status === 'published' ? '已发布' : '草稿')}</p>
        <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.summary}</p>
        <div className="tag-row">{post.tags.slice(0, 3).map((tag) => <span key={tag.id}>{tag.name}</span>)}</div>
      </div>
    </article>
  )
}

function EmptyState({ text }: { text: string }) {
  return <div className="empty-state">{text}</div>
}

export default App
