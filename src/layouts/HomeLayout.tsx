import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

function HomeLayout() {
    return (
        <Box sx={{ w: 100 }}>
            <Header />
            <Box sx={{maxWidth: '1720px', margin: 'auto'}}>
                <Outlet />
            </Box>
        </Box>
    );
}

export default HomeLayout;
