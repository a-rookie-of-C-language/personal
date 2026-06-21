export type Profile = {
  displayName: string
  headline: string
  bio: string
  avatarUrl: string
  location: string
  email: string
}

export type Category = { id: number; name: string; slug: string }
export type Tag = { id: number; name: string; slug: string }

export type Project = {
  id: number
  name: string
  description: string
  url: string
  repoUrl: string
  techStack: string
  featured: boolean
}

export type SocialLink = {
  id: number
  label: string
  url: string
  icon: string
  sortOrder: number
}

export type Post = {
  id: number
  title: string
  slug: string
  summary: string
  cover_url: string
  content: string
  status: 'draft' | 'published'
  featured: boolean
  category_id?: number | null
  category?: Category | null
  tags: Tag[]
  published_at?: string | null
  created_at: string
  updated_at: string
}

export type SitePayload = {
  profile: Profile
  projects: Project[]
  socialLinks: SocialLink[]
  categories: Category[]
  tags: Tag[]
}

export type TaxonomyInput = { name: string; slug: string }
export type ProjectInput = {
  name: string
  description: string
  url: string
  repo_url: string
  tech_stack: string
  featured: boolean
}
export type SocialInput = {
  label: string
  url: string
  icon: string
  sort_order: number
}
