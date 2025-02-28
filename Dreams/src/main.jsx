import { StrictMode } from 'react'  
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css' 
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/Themes.js'  // Importa el tema personalizado

import App from './App.jsx';
 
 
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}> 
        <App/> 
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
