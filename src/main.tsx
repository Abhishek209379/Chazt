import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routers/AppRouter.tsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  </>
)
