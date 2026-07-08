import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';
import logo from '/icons/logo.svg';

const Header = () => {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={(theme) => ({
                bgcolor: theme.customColors.surface,
                height: '76px',
                display: 'flex',
                alignIteams: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.04)'
            })}
        >
            <Toolbar disableGutters
                sx={{
                    px: 6,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    component="img"
                    src={logo}
                    alt="Chazt"
                    sx={{ height: 36, py: 2.75 }}
                />

                <Button sx={{ background: '#D4AF37', borderRadius: '100px', padding: '9px 22px' }}>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif', color: '#0C0A0F', fontSize: '12px', textTransform: 'capitalize', fontWeight: 500, letterSpacing: '1px' }}>Join Free</Typography>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
