import { useState } from 'react'

import { CommentBox } from '../CommentBox/CommentBox.jsx'
import { CommentList } from '../CommentList/CommentList.jsx'

export function Comments () {
  const [comments, setComments] = useState([])

  const handleAddComment = (text) => {
    setComments([
      ...comments,
      text
    ])
  }

  return <div>
    <CommentBox addComment={handleAddComment} />
    <CommentList comments={comments} />
  </div>
}