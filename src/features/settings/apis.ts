import { Octokit } from 'octokit'

import { Authentication } from '@/features/settings/types'

export async function getAuthentication(accessToken: string): Promise<Authentication> {
  const octokit = new Octokit({ auth: accessToken })
  const response = await octokit.rest.users.getAuthenticated()
  const data = response.data
  return {
    userId: data.login,
    name: data.name,
    avatarUrl: data.avatar_url,
    profileUrl: data.html_url,
  }
}
