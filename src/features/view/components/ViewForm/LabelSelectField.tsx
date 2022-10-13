import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import FormSelectField from '@/components/FormSelectField'
import useLabel from '@/features/repository/hooks/useLabel'
import { Label } from '@/features/repository/types'
import { ViewFormParams } from '@/features/view/components/ViewForm/index'

type LabelSelectFieldProps = {}

export default function LabelSelectField({}: LabelSelectFieldProps) {
  const { labels, load } = useLabel()
  const { control, watch, getValues } = useFormContext<ViewFormParams>()
  const [repositoryLabels, setRepositoryLabels] = useState<Label[]>([])
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'repositoryName') {
        if (value.organizationName && value.repositoryName) {
          load(value.organizationName, value.repositoryName)
        }
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, load])
  useEffect(() => {
    const organizationName = getValues('organizationName')
    const repositoryName = getValues('repositoryName')
    if (organizationName && repositoryName) {
      const repositoryLabels =
        labels.find(
          (item) =>
            item.organizationName === organizationName && item.repositoryName === repositoryName,
        )?.labels ?? []
      setRepositoryLabels(repositoryLabels)
    }
  }, [labels, getValues])
  return (
    <FormSelectField name={'labelId'} control={control}>
      <option value={undefined}>-</option>
      {repositoryLabels.map((label) => (
        <option key={label.id} value={label.id}>
          {label.name}
        </option>
      ))}
    </FormSelectField>
  )
}
