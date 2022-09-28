import { Selectors } from '@/features/settings/selectors'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'

export default function useAuthentication() {
  const dispatch = useAppDispatch()
  const value = useAppSelector(Selectors.authentication)
  return {
    value,
  }
}
