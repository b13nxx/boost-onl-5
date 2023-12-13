import { useState, memo } from 'react'

import styles from "./CommentBox.module.css"

export const CommentBox = memo(({ addComment }) => {
  const [commentText, setCommentText] = useState('')

  const handleTexteareaValueChange = (event) => {
    setCommentText(event.target.value)
  }

  const handleAddComment = () => {
    if (commentText.trim() === '') return

    addComment(commentText)
  }

  return <div className={styles['comment-box']}>
    <textarea className={styles['text-area']} onChange={handleTexteareaValueChange} value={commentText} />
    <button className={styles.button} onClick={handleAddComment}>Ekle</button>
  </div>
})
