export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  link?: string
  github?: string
}

export interface Skill {
  category: string
  items: string[]
}