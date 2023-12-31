import { useState, useCallback } from 'react'

import { CommentBox } from '../CommentBox/CommentBox.jsx'
import { CommentList } from '../CommentList/CommentList.jsx'

export function Comments () {
  const [comments, setComments] = useState([])
  const [counterValue, setCounterValue] = useState(0)

  const handleCounterIncrease = () => {
    setCounterValue(counterValue + 1)
  }

  const handleAddComment = useCallback((commentText) => {
    setComments([
      ...comments,
      commentText
    ])
  }, [comments])

  return <div>
    <p>Counter value: {counterValue}</p>
    <button onClick={handleCounterIncrease}>Increment</button>
    <br />
    <br />
    <CommentBox addComment={handleAddComment} />
    <CommentList comments={comments} />
  </div>
}
