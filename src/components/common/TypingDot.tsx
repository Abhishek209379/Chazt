import { Box, keyframes } from '@mui/material';

const bounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-4px); }
`;

export const TypingDot = ({ key, delay }: { key: number, delay: number}) => (
    <>
        <Box key={key}
            sx={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "text.disabled",
                animation: `${bounce} 1.4s infinite ease-in-out`,
                animationDelay: `${delay}s`,
            }}
        />
    </>
)