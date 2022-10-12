import { Octokit } from 'octokit'

import { Repository } from '@/features/repository/types'

export async function getRepositories(accessToken: string): Promise<Repository[]> {
  const octokit = new Octokit({ auth: accessToken })
  const repositories: Repository[] = []
  let page = 1
  while (page !== 0) {
    const response = await octokit.rest.repos.listForAuthenticatedUser({ per_page: 100, page })
    const results = response.data
    repositories.push(
      ...results.map((result) => ({
        name: result.name,
        organization: {
          name: result.owner.login,
        },
      })),
    )
    if (results.length === 100) {
      page += 1
    } else {
      page = 0
    }
  }
  return repositories
}
