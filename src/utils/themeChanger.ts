import { useTheme as useNextTheme } from 'next-themes'

let toggleTheme

export const darkToggle = () => {
const { theme,setTheme } = useNextTheme();
  return (toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  )
} 