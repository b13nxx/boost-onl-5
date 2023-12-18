import React, { useContext } from 'react'
import { ThemeContex } from '../context/ThemeContex'
import {Link} from 'react-router-dom'


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
          <li><Link to={"/"} >Home</Link> </li>
          <li><Link to={"/add-recipe"} >Add Recipe</Link></li>
          <li><Link to={"/recipes"}>Recipe List</Link></li>
          <ThemeSlider/>
        </ul>
        
      </nav>
    </header>
  )
}

export default Header