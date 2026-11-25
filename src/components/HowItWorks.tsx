import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import { SectionEyebrow } from './common/SectionEyebrow';

export const HowItWorks = (() => {
    return (
        <>
           <Box sx={{ minHeight: "calc(100vh - 87px)", px: { xs: 2, sm: 6, md: 14 } }}>

            <SectionEyebrow label="How It Works" />
            <Box>
                <Typography variant="h2">Three steps to feeling heard.</Typography>
                <Typography variant="body1">
                    Our platform is designed to help you find the best deals on flights, hotels, and cars.
                </Typography>
            </Box>
        </Box>
        </>
    )
})