import { useTheme } from 'next-themes'
let toggleTest
export const darkToggle = () => {
  const { theme, setTheme } = useTheme()

  return (toggleTest = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  
  )
    }