import { useState } from 'react'

export function CommentBox () {
  const [commentText, setCommentText] = useState('')

  const handleTexteareValueChange = (event) => {
    setCommentText(event.target.value)
  }

  return <div>
    <textarea id="mytexteare" onChange={handleTexteareValueChange} />
    <br />
    <br />
    <button onClick={handleAddComment}>Ekle</button>
  </div>
}