import { Octokit } from 'octokit'

import { Issue, IssueState } from '@/features/issue/types'
import { Label } from '@/features/repository/types'

function toLabel(
  label:
    | string
    | { id?: number; name?: string; description?: string | null; color?: string | null },
): Label {
  if (typeof label === 'string') {
    return {
      id: 0,
      name: label,
      description: null,
      color: 'ffffff',
    }
  }
  return {
    id: label.id ?? 0,
    name: label.name ?? '',
    description: label.description ?? null,
    color: label.color ?? 'ffffff',
  }
}

export async function getIssues(
  organizationName: string,
  repositoryName: string,
  accessToken: string,
): Promise<Issue[]> {
  const octokit = new Octokit({ auth: accessToken })
  const issues: Issue[] = []
  let page = 1
  while (page !== 0) {
    const response = await octokit.rest.issues.listForRepo({
      owner: organizationName,
      repo: repositoryName,
      per_page: 100,
      page,
    })
    const results = response.data
    issues.push(
      ...results.map((result) => ({
        id: result.id,
        url: result.url,
        number: result.number,
        state: result.state as IssueState,
        title: result.title,
        body: result.body ?? null,
        labels: result.labels.map(toLabel),
        assignees:
          result.assignees == null
            ? []
            : result.assignees.map((assignee) => ({
                userId: assignee.login,
                name: assignee.name ?? null,
                avatarUrl: assignee.avatar_url,
                profileUrl: assignee.url,
              })),
      })),
    )
    if (results.length === 100) {
      page += 1
    } else {
      page = 0
    }
  }
  return issues
}
