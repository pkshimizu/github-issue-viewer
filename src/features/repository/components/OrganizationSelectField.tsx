import { Select } from '@chakra-ui/react'

import useRepository from '@/features/repository/hooks/useRepository'

type OrganizationSelectFieldProps = {}

export default function OrganizationSelectField({}: OrganizationSelectFieldProps) {
  const { organizations } = useRepository()
  return (
    <Select>
      {organizations.map((organization) => (
        <option key={organization.name} value={organization.name}>
          {organization.name}
        </option>
      ))}
    </Select>
  )
}
