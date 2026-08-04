import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";

const theme = createTheme({
  palette,
  typography,
  breakpoints,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.06em',
            borderRadius: '100px',
            textTransform: "none",
            padding: "12px 32px",
        }
      },
      variants: [
        {
          props: {
            variant: "contained",
            color: "primary",
          },
          style: {
            backgroundColor: "#D4AF37",
            color: "#000",
            "&:hover": {
              backgroundColor: "#c19b2d",
            },
          },
        },
        {
          props: {
            variant: "outlined",
            color: "primary",
          },
          style: {
            borderColor: "#D4AF37",
            color: "#D4AF37",
  
            "&:hover": {
              borderColor: "#c19b2d",
              backgroundColor: "rgba(212,175,55,.08)",
            },
          },
        },
      ],
    }
  },
},
  {
    '@keyframes bounce': {
      '0%, 80%, 100%': {
        opacity: 0.4,
        transform: 'translateY(0)',
      },
      '40%': {
        opacity: 1,
        transform: 'translateY(-8px)',
      },
    }
  }
);

export default theme;