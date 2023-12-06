// ALIŞTIRMA ------------------------------------
// Aşağıda tarifinden anlayacağınız istekleri https://jsonplaceholder.typicode.com/ URL'ine atın. her bir isteği 1 kere then, 1 kere de async/await yöntemi ile atın. update isteğini Put ve Patch olacak şekilde ayrı ayrı atın. Toplamda 5 then, 5 async/await isteği atacaksınız. isteklerinizi fonksiyon içerisinde tanımlayın.
//getCommentById, getAllComments, deleteComment, updateCommentPatch, updateCommentPut

// getCommentById async
const getCommentById = async (commentId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`
    );
    const data = await response.json();
    return data;
  };
  let commentAsync;
  getCommentById(7).then((res) => {
    commentAsync = res;
    console.log(commentAsync);
  });
  
  // getCommentById then
  let commentThen;
  const getCommentByIdThen = (commentId) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
      .then((res) => res.json())
      .then((data) => (commentThen = data));
  };
  getCommentByIdThen(7).then((res) => {
    console.log(commentThen);
  });
  
  // getAllComments async
  const getAllComments = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments/"
    );
    const data = await response.json();
    return data;
  };
  let commentsAsync;
  getAllComments().then((res) => {
    commentsAsync = res;
    console.log(commentsAsync);
  });
  
  //getAllComments then
  let commentsThen;
  const getAllCommentsThen = () => {
    return fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((res) => res.json())
      .then((data) => (commentsThen = data));
  };
  getAllCommentsThen().then((res) => console.log(commentsThen));
  
  // deleteComment async
  const deleteComment = async (commentId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    const resData = "data deleted";
    return data;
  };
  
  deleteComment(4).then((res) => console.log(res));
  
  // deleteComment then
  const deleteCommentThen = (commentId) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };
  
  deleteCommentThen(5)
    .then((res) => res.json())
    .then((data) => console.log(data));
  
  //updateComment PATCH then
  let commentPatchThen;
  const updateCommentPatch = (commentId, newData) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }).then((response) =>
      response.json().then((data) => (commentPatchThen = data))
    );
  };
  const updatedCommentPatchThen = {
    body: "new comment / PATCH / THEN",
  };
  updateCommentPatch(4, updatedCommentPatchThen).then(() =>
    console.log(commentPatchThen)
  );
  
  //updateComment PUT then
  let commentPutThen;
  const updateCommentPut = (commentId, newData) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }).then((response) =>
      response.json().then((data) => (commentPutThen = data))
    );
  };
  const updatedCommentPutThen = {
    body: "new comment / PUT / THEN",
  };
  updateCommentPut(4, updatedCommentPutThen).then(() =>
    console.log(commentPutThen)
  );
  
  //updateComment PATCH async
  let commentPatchAsync;
  const updateCommentPatchAsync = async (commentId, newData) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );
    const data = await response.json();
    return data;
  };
  const updatedCommentPatchAsync = {
    body: "new comment / PATCH / ASYNC",
  };
  updateCommentPatchAsync(3, updatedCommentPatchAsync).then((res) => {
    commentPatchAsync = res;
    console.log(commentPatchAsync);
  });
  
  //updateComment PUT async
  let commentPutAsync;
  const updateCommentPutAsync = async (commentId, newData) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );
    const data = await response.json();
    return data;
  };
  const updatedCommentPutAsync = {
    body: "new comment / PUT / ASYNC",
  };
  updateCommentPutAsync(3, updatedCommentPutAsync).then((res) => {
    commentPutAsync = res;
    console.log(commentPutAsync);
  });
  