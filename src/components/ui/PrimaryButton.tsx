import { Button } from '@mui/material';
import type { SxProps, Theme } from "@mui/material/styles";

type Props = {
  label: string
  onClick?: () => void
  customStyle?: SxProps<Theme>;
}

export const PrimaryButton = ({ label, onClick, customStyle }: Props) => {
  return <Button variant='contained' onClick={onClick} sx={{ background: '', ...customStyle }}>{label}</Button>
}