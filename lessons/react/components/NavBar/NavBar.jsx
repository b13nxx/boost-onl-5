import { useContext } from 'react'

import styles from "./NavBar.module.css"

import { AppContext } from '../../App.jsx'
import { ToggleMode } from '../ToggleMode/ToggleMode.jsx'

export function NavBar () {
  const { theme } = useContext(AppContext)

  console.log('theme', theme)

  return <nav className={styles.navbar + ' ' + (theme === 'dark' ? styles['dark-mode'] : '')}>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/counter">Counter</a>
      </li>
      <li>
        <a href="/comments">Comments</a>
      </li>
      <li>
        <a href="/jokes">Jokes</a>
      </li>
      <li>
        <a href="/video">Video</a>
      </li>
      <li>
        <a href="/filter">Filter</a>
      </li>
      <li>
        <ToggleMode />
      </li>
    </ul>
  </nav>
}
