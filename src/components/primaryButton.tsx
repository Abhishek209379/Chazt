import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface  PrimaryButtonProps {
    text: string;
    callback?: () => void;
}

export default function PrimaryButton({text, callback = () => {}}: PrimaryButtonProps) {
  return (
    <Box>
      <Button
        variant="contained"
        onClick={callback}
        sx={{
          background: "primary.main",
          borderRadius: "100px",
          py: 1,
          px: 4,
          textTransform: "capitalize",
          fontSize: "1rem",
          fontWeight: 500,
          color: "#0C0A0F",
          transition: "opacity 0.2s, transform 0.2s",
          letterSpacing: "0.06em",
        }}
      >
        {text}
      </Button>
    </Box>
  );
}
