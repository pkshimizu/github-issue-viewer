import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import FormSelectField from '@/components/FormSelectField'
import useRepository from '@/features/repository/hooks/useRepository'
import { Repository } from '@/features/repository/types'

type RepositorySelectFieldProps = {}

export default function RepositorySelectField({}: RepositorySelectFieldProps) {
  const { repositories } = useRepository()
  const { control, watch } = useFormContext()
  const [filteredRepositories, setFilteredRepositories] = useState<Repository[]>(repositories)
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === 'organizationName') {
        setFilteredRepositories(
          repositories.filter(
            (repository) => repository.organization.name === value.organizationName,
          ),
        )
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, repositories])
  return (
    <FormSelectField name={'repositoryName'} control={control}>
      {filteredRepositories.map((repository) => (
        <option key={repository.name} value={repository.name}>
          {repository.organization.name} / {repository.name}
        </option>
      ))}
    </FormSelectField>
  )
}
