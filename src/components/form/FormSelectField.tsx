import { Select } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'

import { calcFormSizeToWidth, FormItemProps } from '@/components/form/FormBase'

type FormSelectFieldProps<T extends FieldValues> = {
  name: FieldPath<T>
  control: Control<T>
  children: ReactNode
} & FormItemProps

export default function FormSelectField<T extends FieldValues>({
  name,
  size,
  control,
  children,
}: FormSelectFieldProps<T>) {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          width={calcFormSizeToWidth(size)}
          maxW={calcFormSizeToWidth(size)}
          minW={calcFormSizeToWidth(size)}
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
