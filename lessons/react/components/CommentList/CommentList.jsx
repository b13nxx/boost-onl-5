import { useState } from 'react'

export function CommentList () {
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState([])

  const handleTexteareValueChange = (event) => {
    setCommentText(event.target.value)
  }

  const handleAddComment = () => {
    setComments([
      ...comments, // spread (dağıtmak / yaymak)
      commentText
    ])
  }

  return <div>
    <textarea id="mytexteare" onChange={handleTexteareValueChange} />
    <button onClick={handleAddComment}>Ekle</button>
    <ul>
      <li>Yorum 1</li>
      <li>Yorum 2</li>
      <li>Yorum 3</li>
    </ul>
    <ul>
      {
        // koşula bağlı render (conditional rendering)
        comments.length === 0
          ? 'Hiçbir yorum bulunmamaktadır'
          : comments.map((comment, index) => <li key={'comment#' + index} /* benzersizliği sağlamak için key verdik */ style={{
            color: 'red'
          }}>{comment}</li>)
      }
    </ul>
  </div>
}