import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Fraunces', serif",
  },

  h1: {
    fontSize: '2rem',        
    fontWeight: 700,
    lineHeight: 1.2,
    
    // ← Add responsive sizes
    [createTheme().breakpoints.up('sm')]: {
      fontSize: '2.75rem',   // 600px+
    },
    [createTheme().breakpoints.up('md')]: {
      fontSize: '3.25rem',   // 900px+
    },
    [createTheme().breakpoints.up('lg')]: {
      fontSize: '3.5rem',    // 1200px+
    },
  },
  
  h2: {
    fontSize: '1.5rem',      
    fontWeight: 700,
    lineHeight: 1.3,
    
    [createTheme().breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
    [createTheme().breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
    [createTheme().breakpoints.up('lg')]: {
      fontSize: '2.75rem',
    },
  },
  
  h4: {
    fontSize: '1.25rem',     
    fontWeight: 600,
    lineHeight: 1.4,
    
    [createTheme().breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
    [createTheme().breakpoints.up('md')]: {
      fontSize: '1.75rem',
    },
  },
  
  body1: {
    fontSize: '0.95rem',     
    fontWeight: 400,
    lineHeight: 1.5,
    
    [createTheme().breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [createTheme().breakpoints.up('md')]: {
      fontSize: '1.0625rem',
    },
  },

  body2: {
    fontSize: '0.35rem',
    fontWeight: 400,
    lineHeight: 1,
    
    [createTheme().breakpoints.up('sm')]: {
      fontSize: '0.45rem',
    },
    [createTheme().breakpoints.up('md')]: {
      fontSize: '0.5rem',
    },
  },


  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1680,
    },
  },

  palette: {
    primary: {
      main: '#D4AF37',
    },

    secondary: {
      main: '#0C0A0F',
    },

    background: {
      default: '#0F0F0F',
    },

    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
      cream: '#F5F0E8',
      gold: '#D4AF37',
      goldtext: 'rgba(212,175,55,0.65)',
      grey: 'rgba(245,240,232,0.4)'
    },
  },

  customColors: {
    surface: '#0C0A0F',
    card: '#202020',
    border: '#2A2A2A',
  }
});

export default theme;