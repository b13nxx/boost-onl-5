import fs from 'fs/promises'

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

  // Veya parantezleri kullanıp işlem önceliği oluşturarak tek satırda yazabiliriz:
  const result = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()

  console.log(data)
  console.log(result)
})()

// Asenkron metodları seri çalıştırabiliriz:

;(async () => {
  const fileOneContent = await fs.readFile('file1.txt', 'utf8')

  console.log('fileOneContent', fileOneContent)

  const fileTwoContent = await fs.readFile('file2.txt', 'utf8')

  console.log('fileTwoContent', fileTwoContent)

  const fileThreeContent = await fs.readFile('file3.txt', 'utf8')

  console.log('fileThreeContent', fileThreeContent)
})()


// Asenkron metodları paralel de çalışıyoruz:

;(async () => {
  const promiseOne = fs.readFile('file1.txt', 'utf8') // 2s
  const promiseTwo = fs.readFile('file2.txt', 'utf8') // 5s
  const promiseThree = fs.readFile('file3.txt', 'utf8') // 3s

  const contentOne = await promiseOne
  const contentTwo = await promiseTwo
  const contentThree = await promiseThree

  console.log('contentOne', contentOne)
  console.log('contentTwo', contentTwo)
  console.log('contentThree', contentThree)
})()


// Seri ve paralel süreçleri combine edebiliriz:

;(async () => {
  try {  // Promise.catch yapısı Try Catch bloklarıyla oluşturabiliriz
    const promiseOne = fs.readFile('file1.txt', 'utf8') // 2s
    const promiseTwo = fs.readFile('file2.txt', 'utf8') // 5s
  
    const contentOne = await promiseOne
    const contentTwo = await promiseTwo
  
    const contentThree = await fs.readFile('file3.txt', 'utf8')
  
    console.log('contentOne', contentOne)
    console.log('contentTwo', contentTwo)
    console.log('contentThree', contentThree)
  } catch (e) {
    console.log('error', e)
  }

  console.log('program running')
})()
