import { Label, User } from '@/features/repository/types'

export type IssueState = 'open' | 'closed'

export type Issue = {
  id: number
  url: string
  number: number
  state: IssueState
  title: string
  body: string | null
  labels: Label[]
  assignees: User[]
}
