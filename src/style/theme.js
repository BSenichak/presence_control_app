import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#ffa726',
        },
        secondary: {
          main: '#d50000',
        },
      },
})
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffa726',
    },
    secondary: {
      main: '#d50000',
    },
  },
})