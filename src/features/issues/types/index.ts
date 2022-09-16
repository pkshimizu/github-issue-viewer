export type User = {
  icon: string
  name: string
}

export type IssueAggregation = {
  key: string
  title: string
  users: User[]
  openCount: number
  closeCount: number
}
