import { useContext } from 'react'

import { Comments } from "../../components/Comments/Comments.jsx";
import { AppContext } from '../../App.jsx'

import styles from './CommentsPage.module.css'

export function CommentsPage () {
  const { theme } = useContext(AppContext)

  return <div class={styles.wrapper + ' ' + (theme === 'dark' ? styles['dark-mode'] : '')}>
    <h1>Comments Page</h1>
    <Comments />
  </div>
}
