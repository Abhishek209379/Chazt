import { Box } from "@mui/material";
import { HeroSection } from '../components/HeroSection';
import Divider from '@mui/material/Divider';
import { HowItWorks } from "../components/HowItWorks";

const Home = (() => {
    return (
        <Box>
            <HeroSection />
            <Divider />
            <HowItWorks />
        </Box>
    )
})

export default Home;