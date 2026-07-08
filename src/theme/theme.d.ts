import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeText {
    cream: string;
    gold: string;
  }

  interface Theme {
    customColors: {
      surface: string;
      card: string;
      border: string;
    };
  }

  interface ThemeOptions {
    customColors?: {
      surface?: string;
      card?: string;
      border?: string;
    };
  }
}
