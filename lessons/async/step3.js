// Async / Await

// Async = Asenkron fonksiyonlar oluşturmanızı ve
// Await = Asenkron fonksiyonları beklemeyebilmenizi sağlar

// Sadece Async olan bir fonksiyon içerisinde Await kullanabilirsiniz
// Sadece Async olan bir fonksiyonu Await edebilirsiniz

// Temelinde bir Promise'dır ama Functional programming
// Syntax'ına sahip olduğu için daha okunabilirdir

;(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()

  console.log(data)
})()
