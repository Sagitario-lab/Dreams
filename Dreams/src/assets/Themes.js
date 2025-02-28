import { createTheme } from '@mui/material/styles';
import colors from './Colors';
 
const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,  
    },
    secondary: {
      main: '#dc004e', 
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,  
        }, 
        containedPrimary: {
          border: `2px solid ${colors.secondary}`,  
           color: colors.third, 
        },
      },
    },
  },
});

export default  theme ;