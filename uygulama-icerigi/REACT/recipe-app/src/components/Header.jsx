import React, { useContext, useState } from 'react'
import { ThemeContex } from '../context/ThemeContex'


const ThemeSlider = () => {
  const {theme, toggleTheme} = useContext(ThemeContex)

  // const [isToggled, setIsToggled] = useState(theme === 'dark')

  const handleToggle = () => {
    // setIsToggled(!isToggled)
    toggleTheme()
  }

  return (
    <div onClick={handleToggle} className={`slider-container ${theme}`}>
          <div className='slider-button'></div>
        </div>
  )
}


const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>Recipe Platform</div>
      <nav className='navbar'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Add Recipe</a></li>
          <li><a href="#">About</a></li>
          <ThemeSlider/>
        </ul>
        
      </nav>
    </header>
  )
}

export default Header