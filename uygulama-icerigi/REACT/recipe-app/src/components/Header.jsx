import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>Recipe Platform</div>
      <nav className='navbar'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Add Recipe</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header