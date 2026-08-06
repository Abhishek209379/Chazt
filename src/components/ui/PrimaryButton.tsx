import { Button } from '@mui/material';

type Props = {
  label: string
  onClick?: () => void
}

export const PrimaryButton = ({ label, onClick }: Props) => {
  return <Button variant='contained' onClick={onClick} sx={{ background: ''}}>{label}</Button>
}