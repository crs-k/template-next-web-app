import { createTheme, Theme } from "@nextui-org/react"

const fonts = {
  sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
};

const sharedTheme: Theme = {
  theme: {
    fonts
  }
};

export const lightTheme = createTheme({
  ...sharedTheme,
    type: 'light',
    theme: {
      colors: {},
    }
  })
  
export const darkTheme = createTheme({
  ...sharedTheme,
    type: 'dark',
    theme: {
      colors: {},
    }
  })