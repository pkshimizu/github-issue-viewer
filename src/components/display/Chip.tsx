import MuiChip from '@mui/material/Chip'

import useColor from '@/hooks/useColor'

type ChipProps = {
  label: string
  colorCode?: string
}

export default function Chip({ label, colorCode }: ChipProps) {
  const { textColor } = useColor()
  const frontColor = textColor(colorCode)
  return (
    <MuiChip label={label} size={'small'} sx={{ backgroundColor: colorCode, color: frontColor }} />
  )
}
