import '@mui/material/styles';

declare module '@mui/material/styles' {
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

  interface TypeText {
    cream: string;
    gold: string;
    goldtext: string;
    grey: string;
  }

  interface TypeTextOptions {
    cream?: string;
    gold?: string;
    goldtext?: string;
    grey?: string;
  }
}

export {};