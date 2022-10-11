import { useFormContext } from 'react-hook-form'

import FormSelectField from '@/components/FormSelectField'
import useRepository from '@/features/repository/hooks/useRepository'

type OrganizationSelectFieldProps = {}

export default function OrganizationSelectField({}: OrganizationSelectFieldProps) {
  const { organizations } = useRepository()
  const { control } = useFormContext()
  return (
    <FormSelectField name={'organizationName'} control={control}>
      {organizations.map((organization) => (
        <option key={organization.name} value={organization.name}>
          {organization.name}
        </option>
      ))}
    </FormSelectField>
  )
}
