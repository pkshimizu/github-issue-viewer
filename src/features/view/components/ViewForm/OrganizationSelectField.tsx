import { useFormContext } from 'react-hook-form'

import Select from '@/components/form/Select'
import useRepository from '@/features/repository/hooks/useRepository'
import { ViewFormParams } from '@/features/view/components/ViewForm/index'

type OrganizationSelectFieldProps = {}

export default function OrganizationSelectField({}: OrganizationSelectFieldProps) {
  const { organizations } = useRepository()
  const { control } = useFormContext<ViewFormParams>()
  return (
    <Select name={'organizationName'} control={control} size={'sm'}>
      <option value={undefined}>-</option>
      {organizations.map((organization) => (
        <option key={organization.name} value={organization.name}>
          {organization.name}
        </option>
      ))}
    </Select>
  )
}
