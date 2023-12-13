import { SearchBar } from "../SearchBar/SearchBar.jsx"

import styles from "./NavBar.module.css"

export function NavBar () {
  return <nav className={styles.navbar}>
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
    </ul>
  </nav>
}
