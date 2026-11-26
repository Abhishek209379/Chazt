import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/icons/logo.svg";
import { PrimaryButton } from "../ui/PrimaryButton";

export default function Navbar() {
  const clickCallback = () => {};

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          py: 3,
          justifyContent: "space-between",
          px: { xs: 2, sm: 6, md: 14 },
        }}
      >
        <Box component="img" src={Logo} alt="Logo" sx={{ width: "100px" }} />

        <Box
          sx={{
            py: 1,
            px: 2,
            bgcolor: "gold.alpha08",
            border: "1px solid",
            borderColor: "gold.alpha15",
            borderRadius: "100px",
          }}
        >
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Anonymous & Safe
          </Typography>
        </Box>

        <PrimaryButton
          label="Join Free"
          onClick={clickCallback}
          customStyle={{ py: 1, px: 2 }}
        />
      </Toolbar>
    </AppBar>
  );
}