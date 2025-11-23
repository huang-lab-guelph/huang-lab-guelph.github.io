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
  bio: string
  image?: string
  email?: string
}

export interface Publication {
  id: string
  title: string
  authors: string[]
  journal: string
  year: number
  doi?: string
  link?: string
}

export interface ResearchArea {
  id: string
  title: string
  description: string
  image?: string
}
