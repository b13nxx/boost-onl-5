import {  useContext } from 'react'

import { AppContext } from '../../App.jsx'

export function ToggleMode () {
  // const [isDarkMode, setIsDarkMode] = useState(false)
  const { theme, setTheme } = useContext(AppContext)

  const handleModeToggle = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return <button onClick={handleModeToggle}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
}
