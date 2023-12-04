import fs from 'fs' // native (builtin) node'un file system modülü

// Callback Hell

// Callback Hell Example

fs.readFile('file1.txt', 'utf8', (error, data) => {
  if (error) {
    console.log(error)
  } else {
    console.log(data)
    fs.readFile('file2.txt', 'utf8', (error, data) => {
      if (error) {
        console.log(error)
      } else {
        console.log(data)
        fs.readFile('file3.txt', 'utf8', (error, data) => {
          if (error) {
            console.log(error)
          } else {
            console.log(data)
            fs.readFile('file4.txt', 'utf8', (error, data) => {
              if (error) {
                console.log(error)
              } else {
                console.log(data)
                fs.readFile('file5.txt', 'utf8', (error, data) => {
                  if (error) {
                    console.log(error)
                  } else {
                    console.log(data)
                    fs.readFile('file6.txt', 'utf8', (error, data) => {
                      if (error) {
                        console.log(error)
                      } else {
                        console.log(data)
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  }
})


// Promises

// Promises, callback hell'i önlemek için geliştirilmiş bir yapıdır.

// Promise'lar, yine bir nevi callback kullanırlar.
// Callback içerisinde iki önemli parametre vardır. Bu parametlerin ikisi de Promise'ı çözmek için Promise içerisinde kullanmanız gereken "metod"lardır.
// 1. resolve => Promise'ı olumlu olarak çözmek için (neticelendirmek için) kullanılır.
// 2. reject => Promise'ı olumsuz olarak çözmek için (neticelendirmek için) kullanılır.

// Promise olumlu çözüldüğünde, then() metoduna gidecektir.
// Promise olumsuz çözüldüğünde, catch() metoduna gidecektir.
const promise1 = new Promise((resolve, reject) => {
  fs.readFile('file1.txt', 'utf8', (error, data) => {
    if (error) {
      reject(error)
    } else {
      resolve(data)
    }
  })
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})


// Promise Chaining (Promise Zincirleme)

// Promise'lar, birbirlerine zincirleme olarak bağlanabilirler.
// Böylelikle callback hell önlemiş olur

// Promiseların zincirlenmesi, senkron (seri / sırayla) olarak çalışmalarını sağlar

const promise2 = new Promise((resolve, reject) => {
  fs.readFile('file1.txt', 'utf8', (error, data) => {
    if (error) {
      reject(error)
    } else {
      resolve(data)
    }
  })
}).then((data) => {
  console.log(data)

  return new Promise((resolve, reject) => {
    fs.readFile('file2.txt', 'utf8', (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}).then((data) => {
  console.log(data)

  return new Promise((resolve, reject) => {
    fs.readFile('file3.txt', 'utf8', (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}).then((data) => {
  console.log(data)

  return new Promise((resolve, reject) => {
    fs.readFile('file4.txt', 'utf8', (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}).then((data) => {
  console.log(data)

  return new Promise((resolve, reject) => {
    fs.readFile('file5.txt', 'utf8', (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}).then((data) => {
  console.log(data)

  return new Promise((resolve, reject) => {
    fs.readFile('file6.txt', 'utf8', (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})


// Promiseları asenkron (paralel, aynı anda) çalışmalarını sağlamak için:

const promise1 = new Promise((resolve, reject) => {
  fs.readFile('file1.txt', 'utf8', (error, data) => {
    if (error) {
      reject(error)
    } else {
      resolve(data)
    }
  })
}).then((data) => {
  console.log('file1 icerigi', data)
}).catch((error) => {
  console.log('catch', error)
})

const promise2 = new Promise((resolve, reject) => {
  fs.readFile('file2.txt', 'utf8', (error, data) => {
    if (error) {
      reject(error)
    } else {
      resolve(data)
    }
  })
}).then((data) => {
  console.log('file2 icerigi', data)
}).catch((error) => {
  console.log('catch', error)
})


// Promise.ALL

// Promise'ların seri ve paralel çalışma mantıklarını birbirleriyle bağlayabiliriz.

// Örnek olarak eğer file1 ve file2'nin aynı anda okunmasını,
// bu süreç bittikten sonra da file3 okunmasını istiyorsak:

const promise1 = new Promise((resolve, reject) => {
  fs.readFile('file1.txt', 'utf8', (error, data) => {
    if (error) {
      reject(error)
    } else {
      setTimeout(() => {
        resolve(data)
      }, 3000)
    }
  })
}).then((data) => {
  console.log('file1 icerigi', data)
})

const promise2 = new Promise((resolve, reject) => {
  fs.readFile('file2.txt', 'utf8', (error, data) => {
    if (error) {
      reject(error)
    } else {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    }
  })
}).then((data) => {
  console.log('file2 icerigi', data)
})

Promise.all([promise1, promise2]).then((data) => {
  console.log(data)

  const promise3 = new Promise((resolve, reject) => {
    fs.readFile('file3.txt', 'utf8', (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  }).then((data) => {
    console.log('file3 icerigi', data)
  }).catch((error) => {
    console.log(error)
  })
}).catch((error) => {
  console.log(error)
})


// Fetch

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    return response.json() // .json metodu da aynı fetch gibi bir promise'dır
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => { // error handling
    console.log(error)
  })
