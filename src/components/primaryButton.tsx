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
        size="medium"
        sx={{
          background: "primary.main",
          borderRadius: "100px",
          py: 1,
          px: 4,
          textTransform: "capitalize",
          fs: 1.5,
          fw: 500,
          color: "#0C0A0F",
          transition: "opacity 0.2s,transform 0.2s",
          letterSpacing: "0.06em"
        }}
        // onClick={callback}
      >
        {text}
      </Button>
    </Box>
  );
}
