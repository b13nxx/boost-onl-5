import { useState, memo } from 'react'

import styles from "./CommentBox.module.css"

const CommentBox = memo(({ addComment }) => {
  const [commentText, setCommentText] = useState('')

  const handleTexteareaValueChange = (event) => {
    setCommentText(event.target.value)
  }

  const handleAddComment = () => {
    addComment(commentText)
  }

  return <div>
    <textarea id="mytexteare" onChange={handleTexteareaValueChange} value={commentText} />
    <br />
    <br />
    <button className={styles.button} onClick={handleAddComment}>Ekle</button>
  </div>
})

export { CommentBox }
