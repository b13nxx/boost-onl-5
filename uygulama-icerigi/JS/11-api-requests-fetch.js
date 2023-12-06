const jsonPlaceHolderURL = "https://jsonplaceholder.typicode.com/posts"

let commentsThen;

const getAllCommentsThen = () => {
    return fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res=> res.json())
}
getAllCommentsThen().then(res => console.log(res))

// FETCH ile getCommentById, deleteComment, putComment, patchComment, postComment

