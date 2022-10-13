import { Octokit } from 'octokit'

import { Label, Repository } from '@/features/repository/types'

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

export async function getLabels(
  accessToken: string,
  owner: string,
  repo: string,
): Promise<Label[]> {
  const octokit = new Octokit({ auth: accessToken })
  const labels: Label[] = []

  let page = 1
  while (page !== 0) {
    const response = await octokit.request('GET /repos/{owner}/{repo}/labels', {
      owner,
      repo,
      per_page: 100,
      page,
    })
    const results = response.data
    labels.push(
      ...results.map((result) => ({
        id: result.id,
        name: result.name,
        description: result.description,
        color: result.color,
      })),
    )
    if (results.length === 100) {
      page += 1
    } else {
      page = 0
    }
  }
  return labels
}
