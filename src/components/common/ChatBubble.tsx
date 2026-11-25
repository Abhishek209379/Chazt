import { Box, Typography } from '@mui/material';

export const ChatBubble = ({ key, text, from }: { key: number, text: string, from: string }) => (
    <>
        <Box sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "14px",
            borderBottomLeftRadius: "4px",
            alignSelf: from === "stranger" ? "flex-start" : "flex-end",
            py: 1,
            px: 1.5,
            lineHeight: 1.55,
            maxWidth: "155px",
        }}>
            <Typography key={key} sx={{ color: "text.creamYellow", fontSize: "12px" }} >
                {text}
            </Typography>
        </Box>
    </>
)