import { Select } from '@chakra-ui/react'

import useRepository from '@/features/repository/hooks/useRepository'
import { Organization, Repository } from '@/features/repository/types'

type RepositorySelectFieldProps = {
  organization?: Organization
}

function filteredRepositories(repositories: Repository[], organization?: Organization) {
  if (organization) {
    return repositories.filter((repository) => repository.organization === organization)
  }
  return repositories
}

export default function RepositorySelectField({ organization }: RepositorySelectFieldProps) {
  const { repositories } = useRepository()
  return (
    <Select>
      {filteredRepositories(repositories, organization).map((repository) => (
        <option key={repository.name} value={repository.name}>
          {repository.organization.name} / {repository.name}
        </option>
      ))}
    </Select>
  )
}
