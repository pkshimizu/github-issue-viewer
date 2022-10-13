import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import FormSelectField from '@/components/FormSelectField'
import useRepository from '@/features/repository/hooks/useRepository'
import { Repository } from '@/features/repository/types'
import { ViewFormParams } from '@/features/view/components/ViewForm/index'

type RepositorySelectFieldProps = {}

export default function RepositorySelectField({}: RepositorySelectFieldProps) {
  const { repositories } = useRepository()
  const { control, watch } = useFormContext<ViewFormParams>()
  const [filteredRepositories, setFilteredRepositories] = useState<Repository[]>([])
  useEffect(() => {
    setFilteredRepositories(repositories)
    const subscription = watch((value, { name }) => {
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
      <option value={undefined}>-</option>
      {filteredRepositories.map((repository) => (
        <option key={repository.name} value={repository.name}>
          {repository.organization.name} / {repository.name}
        </option>
      ))}
    </FormSelectField>
  )
}
