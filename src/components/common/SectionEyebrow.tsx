import { Box, Typography } from '@mui/material';

export const SectionEyebrow = ({ label }: { label: string }) => (
    <>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 3.5 }}>
            <Box sx={{ width: "28px", backgroundColor: "border.main", height: "0.6px" }}></Box>
            <Typography sx={{ textTransform: "uppercase", color: "text.gold", fontWeight: 500, letterSpacing: "0.2em", fontSize: "11px" }}>{label}</Typography>
        </Box>
    </>  
)