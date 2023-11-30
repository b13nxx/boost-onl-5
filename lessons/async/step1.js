// Try / Catch Blokları

// Kodlarınızı yazarken olabildiğince edge case'leri düşünmeye çalışın.
const capitalizeText = function (text) {
  let result = ''

  try {
    result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  } catch (error) {
    // ...
  }

  return result
}

capitalizeText(50)




// Asenkron Programlama
// JavaScript single thread olduğu için, paralel programlama gereken noktaları
// Callback mekanizması ile çözer.
// Callback, sizin, asenkron süreç içerisinde göndermiş olduğunuz bir methoddur.
// JavaScript ise bu asenkron süreç bitince callback metodunuzu çalıştırır.
// Böylelikle asenkron sürecin bittiğinden sizi haberdar eder.




// Callbacks

// setTimeout ve setInterval asenkron işlemdir
// asenkron metodlarda callback yapısı kullanılır
// callback, javascript'e, süreç bittiğinde beni çağır dediğiniz "metod"tur
setTimeout(() => {
  console.log('Hello')
}, 1000 /* milisaniye */)

console.log('World')



// Callback gerektirecek işlemler ne olabilir:
// 1. Dosya okuma / yazma işlemleri
// 2. API istekleri
// 3. Veritabanı işlemleri






// Event Listeners (Handlers) (Olay Dinleyiciler)

// Event Listeners, bir olayın gerçekleşmesini bekleyen
// ve o olay gerçekleştiğinde çalışan metodlardır.

// Event Listeners'lar, bir nevi callback'dir.

// Örneğin, bir butona tıklandığında click eventi için bir listener oluşturabiliriz:

let button = document.getElementById('submit')

// JavaScript, eventleri en az 1 tane olmak kaydıyla default parametrelerle çalıştırır.
// İlk parametre neredeyse her zaman için gerçekleşen eventin kendisini ifade eden bir "event objesi"dir.

const eventMethod = (event) => {
  console.log(event)
}

// JavaScript aslında arkaplanda event metodunuzu default parametrelerle çağıracaktır: eventMethod(event)
button.addEventListener('click', eventMethod)

// Event listener eklemenin bir başka yöntemi de şudur:
button.onClick = eventMethod


// XHR (XMLHttpRequest) (XML Http Request)
// Tarayıcıda native (builtin) olarak bulanan, request göndermek için kullanabileceğiniz mekanizmadır.

let xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    console.log(xhr.responseText)
  }
})

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')

xhr.send()
