import styles from "./SearchBar.module.css"

export function SearchBar() {
  return <div>
    <input className={styles['input-box']} type="text" placeholder="Ara..." />
    <button className={styles['input-button']}>Ara</button>
  </div>
}