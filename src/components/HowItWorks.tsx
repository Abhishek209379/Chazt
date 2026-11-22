import { Box, Grid } from "@mui/material"
import { Typography } from "@mui/material"

export const HowItWorks = (() => {
    return (
        <>
           <Box sx={{ backgroundColor: "background.default", minHeight: "calc(100vh - 87px)", px: { xs: 8, sm: 10, md: 14 } }}>
            <Grid
            container
            spacing={{ xs: 3, md: 4 }}
            sx={{ alignItems: "center", width: "100%" }}
            >
                <Box
                    sx={{
                    width: "28px",
                    backgroundColor: "border.main",
                    height: "0.6px",
                    }}
                ></Box>
                <Typography
                        sx={{
                        textTransform: "uppercase",
                        color: "text.gold",
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        fontSize: "11px",
                        }}
                    >
                        How It Works
                </Typography>
            </Grid>
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