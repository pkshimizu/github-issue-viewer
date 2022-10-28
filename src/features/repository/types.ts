export type Organization = {
  name: string
}

export type Repository = {
  name: string
  organization: Organization
}

export type Label = {
  id: number
  name: string
  description: string | null
  color: string
}

export type User = {
  userId: string
  name: string | null
  avatarUrl: string
  profileUrl: string
}
