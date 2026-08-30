import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from "@mui/material/Box";
import Logo from '../../assets/icons/logo.svg';
import { PrimaryButton } from '../ui/PrimaryButton';

export default function Navbar() {

  const clickCallback = () => {

  }

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'background.default' }}>
      <AppBar position="static" sx={{
          bgcolor: "background.default",
          color: 'text.primary',
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
        }}>
        <Toolbar disableGutters sx={{ py: 3, px: 6, display: 'flex', justifyContent: 'space-between' }}>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              p: 0,
              minHeight: 'unset',
              width: '100px'
            }}
          />
          <PrimaryButton label='Join Free' onClick={clickCallback} customStyle={{ py: 1, px: 2 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
