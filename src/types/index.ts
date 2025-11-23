export interface NewsItem {
  id: string
  date: string
  title: string
  content: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  category: 'leader' | 'graduate' | 'undergraduate'
  bio: string
  education?: string[]
  research?: string
  image?: string
  email?: string
  startYear?: number
}

export interface Publication {
  id: string
  number: number
  title: string
  authors: string
  journal: string
  year: number
  volume?: string
  pages?: string
  month?: string
  link?: string
  status?: 'accepted' | 'submitted' | 'published'
}

export interface ResearchArea {
  id: string
  title: string
  description: string
  image?: string
}
