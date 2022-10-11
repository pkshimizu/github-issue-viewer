import { Select } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'

type FormSelectFieldProps<T extends FieldValues> = {
  name: FieldPath<T>
  control: Control<T>
  children: ReactNode
}

export default function FormSelectField<T extends FieldValues>({
  name,
  control,
  children,
}: FormSelectFieldProps<T>) {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          onChange={(e) => {
            field.onChange(e.target.value)
          }}
        >
          {children}
        </Select>
      )}
    />
  )
}
