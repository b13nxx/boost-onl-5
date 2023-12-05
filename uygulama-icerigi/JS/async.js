const jsonPlaceHolderURL = "https://jsonplaceholder.typicode.com/comments";

const get = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        cb(null, response);
      } else {
        cb("Hata: " + xhr.status, null);
      }
    }
  };
  xhr.send();
};

// // CALLBACK HELL
// get(`${jsonPlaceHolderURL}/1`, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//         get(`${jsonPlaceHolderURL}/2`, (err,data) => {
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(data);
//                 get(`${jsonPlaceHolderURL}/3`, (err,data) => {
//                     if(err){
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                         get(`${jsonPlaceHolderURL}/4`, (err,data) => {
//                             if(err){
//                                 console.log(err);
//                             } else {
//                                 console.log(data);
//                                 get(`${jsonPlaceHolderURL}/5`, (err,data) => {
//                                     if(err){
//                                         console.log(err);
//                                     } else {
//                                         console.log(data);
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// PROMISE
const getRequest = (endpoint) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject(`${request.status} - Couln't Fetch the Data`);
      }
    });

    request.open("GET", endpoint);
    request.send();
  });
};

// console.log(1);
// console.log(2);
// getRequest(`${jsonPlaceHolderURL}/1`)
//   .then((res) => {
//     console.log(res);
//     return getRequest(`${jsonPlaceHolderURL}/2`);
//   })
//   .then((res) => {
//     console.log(res);
//     return getRequest(`${jsonPlaceHolderURL}/3`);
//   })
//   .then((res) => console.log(res));
//   console.log(3);
//   console.log(4);

// FETCH

fetch(`${jsonPlaceHolderURL}/2`)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => console.log(data));

const newComment = {
    name:"Lorem",
    email: "example@gmail.com",
    body: "lorem ipsum dolor sit amet non elit"
}

fetch(`${jsonPlaceHolderURL}`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newComment)
}).then(res => {
    console.log(res.status);
    return res.json()
}).then(data => console.log(data))