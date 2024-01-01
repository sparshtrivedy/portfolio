import React, { createContext, useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import AppSkeleton from './pages/AppSkeleton';
import { HashRouter as Router } from 'react-router-dom';
import Box from '@mui/material/Box';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState('light');

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
      ? {
          secondary: {
            main: '#eaf0f9',
          },
          background: {
            main: '#f8fafd',
          },
        }
      : {
          secondary: {
            main: '#212121'
          },
          background: {
            main: '#424242',
          },
      }),
    },
  });

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }
  }),[]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Box component='div' sx={{bgcolor: 'background.main'}} className='App'>
          <Router>
            <AppSkeleton />
          </Router>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
