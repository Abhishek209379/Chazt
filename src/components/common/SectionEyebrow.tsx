import { Box, Typography } from '@mui/material';

export const SectionEyebrow = ({ label }: { label: string }) => (
    <>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 3.5 }}>
            <Box sx={{ width: "28px", backgroundColor: "primary.main", height: "0.6px" }}></Box>
            <Typography sx={{ textTransform: "uppercase", color: "primary.main", fontWeight: 500, variant:"overline", fontSize: "11px" }}>{label}</Typography>
        </Box>
    </>  
)