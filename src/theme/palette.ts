import type { PaletteOptions } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

const GOLD = "#D4AF37";

const palette: PaletteOptions = {
  mode: "dark",
  primary: { main: "#D4AF37", dark: "#C9A227", contrastText: "#000" },
  secondary: { main: "#F59E0B" },
  background: {
    default: "#0C0A0F",
    paper: "#161320",        // chat card (was a hardcoded #161320)
    cardGrey: "#111018",     // card header/footer
    subtle: "#ffffff0d",     // bubbles, input pill
  },
  text: {
    primary: "#F5F0E8",      // cream
    secondary: "#f5f0e8b3",  // 70%
    disabled: "#f5f0e840",   // 25%, muted hints
  },
  gold: {
    alpha08: alpha(GOLD, 0.08),
    alpha12: alpha(GOLD, 0.12),
    alpha15: alpha(GOLD, 0.15),
    alpha20: alpha(GOLD, 0.2),
  },
  divider: "rgba(255,255,255,0.07)",
};

export default palette;