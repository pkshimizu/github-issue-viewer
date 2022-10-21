import { MenuItem } from '@mui/material'
import { useFormContext } from 'react-hook-form'

import Select from '@/components/form/Select'
import useRepository from '@/features/repository/hooks/useRepository'
import { ViewFormParams } from '@/features/view/components/ViewForm/index'

type OrganizationSelectFieldProps = {}

export default function OrganizationSelectField({}: OrganizationSelectFieldProps) {
  const { organizations } = useRepository()
  const { control } = useFormContext<ViewFormParams>()
  return (
    <Select label={'Organization'} name={'organizationName'} control={control} size={'md'}>
      <MenuItem value={undefined}>-</MenuItem>
      {organizations.map((organization) => (
        <MenuItem key={organization.name} value={organization.name}>
          {organization.name}
        </MenuItem>
      ))}
    </Select>
  )
}
