const jsonPlaceHolderURL = "https://jsonplaceholder.typicode.com/posts"

let commentsThen;

const getAllCommentsThen = () => {
    return fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res=> res.json())
    .then(data => commentsThen = data)
}

getAllCommentsThen().then(res => console.log(commentsThen))

// FETCH ile getCommentById, deleteComment, putComment, patchComment, postComment