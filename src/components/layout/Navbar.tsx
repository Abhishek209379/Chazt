import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from "@mui/material/Box";
import Logo from '../../assets/icons/logo.svg';
import { PrimaryButton } from '../ui/PrimaryButton';
import { Typography } from "@mui/material";
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
        <Toolbar disableGutters sx={{ py: 3, display: 'flex', justifyContent: 'space-between', px: { xs: 8, sm: 10, md: 14 }  }}>
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
          <Box sx={{ p: 1, px: 2, bgcolor: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212,175,55,0.15)', borderRadius: '100px' }}>
            <Box></Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px' }}>Anonymous & Safe</Typography>
          </Box>
          <PrimaryButton label='Join Free' onClick={clickCallback} customStyle={{ py: 1, px: 2 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
