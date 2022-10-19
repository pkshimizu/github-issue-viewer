import MuiSelect from '@mui/material/Select'
import { ReactNode } from 'react'
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'

import { calcFormSizeToWidth, FormItemProps } from '@/components/form/FormBase'

type SelectProps<T extends FieldValues> = {
  name: FieldPath<T>
  control: Control<T>
  children: ReactNode
} & FormItemProps

export default function Select<T extends FieldValues>({
  name,
  size,
  control,
  children,
}: SelectProps<T>) {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ field }) => (
        <MuiSelect
          sx={{
            width: calcFormSizeToWidth(size),
          }}
          onChange={(e) => {
            field.onChange(e.target.value)
          }}
        >
          {children}
        </MuiSelect>
      )}
    />
  )
}
