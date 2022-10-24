import { MenuItem } from '@mui/material'
import { useFormContext } from 'react-hook-form'

import Select from '@/components/form/Select'
import { FlexRow } from '@/components/layout/Flex'
import useRepository from '@/features/repository/hooks/useRepository'
import { ViewFormParams } from '@/features/view/components/ViewForm/index'

type OrganizationSelectFieldProps = {}

export default function OrganizationSelectField({}: OrganizationSelectFieldProps) {
  const { organizations } = useRepository()
  const { control } = useFormContext<ViewFormParams>()
  return (
    <FlexRow pt={1}>
      <Select label={'Organization'} name={'organizationName'} control={control} size={'md'}>
        <MenuItem value={undefined}>-</MenuItem>
        {organizations.map((organization) => (
          <MenuItem key={organization.name} value={organization.name}>
            {organization.name}
          </MenuItem>
        ))}
      </Select>
    </FlexRow>
  )
}
