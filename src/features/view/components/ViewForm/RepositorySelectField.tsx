import { MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import Select from '@/components/form/Select'
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
    <Select label={'Repository'} name={'repositoryName'} control={control} size={'md'}>
      <MenuItem value={undefined}>-</MenuItem>
      {filteredRepositories.map((repository) => (
        <MenuItem key={repository.name} value={repository.name}>
          {repository.organization.name} / {repository.name}
        </MenuItem>
      ))}
    </Select>
  )
}
