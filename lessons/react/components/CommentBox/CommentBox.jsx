import { useState } from 'react'

import styles from "./CommentBox.module.css"

export function CommentBox ({ addComment }) {
  const [commentText, setCommentText] = useState('')

  const handleTexteareValueChange = (event) => {
    setCommentText(event.target.value)
  }

  const handleAddComment = () => {
    addComment(commentText)
  }

  return <div>
    <textarea id="mytexteare" onChange={handleTexteareValueChange} />
    <br />
    <br />
    <button class={styles.button} onClick={handleAddComment}>Ekle</button>
  </div>
}