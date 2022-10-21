import MuiTextField from '@mui/material/TextField'
import { UseFormRegisterReturn } from 'react-hook-form'

import { calcFormSizeToWidth, FormItemProps } from '@/components/form/FormBase'

type TextType = 'text' | 'email' | 'password'

type TextFieldProps = {
  label?: string
  type?: TextType
  register: UseFormRegisterReturn
  error?: string
} & FormItemProps

export default function TextField({ label, type = 'text', size, register, error }: TextFieldProps) {
  return (
    <MuiTextField
      label={label}
      type={type}
      variant='outlined'
      sx={{ width: calcFormSizeToWidth(size) }}
      {...register}
      error={error !== undefined}
      helperText={error ?? ''}
      size='small'
    />
  )
}
