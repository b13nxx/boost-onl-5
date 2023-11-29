// Functions

// Arrow functions

// Arrow functionlar function expression ile oluşturulurlar
// Arrow func'lar yerine göre named veya anonymous olabilirler
const printHello = () => {
  console.log('Hello')
}

// Kendilerine ait bir context'e sahip değillerdir ve parent fonksiyonun context'ini inherit (miras) alırlar

function outerFunc() {
  const printHello = () => {
    this.text = 'Hello' // buradaki this outerFunc'in context'ini ifade eder
    console.log('Hello')
  }

  function innerFunc() {
    this.text = 'Hello' // buradaki this ilgili func'in context'ini ifade eder
    printHello()
  }
}


// IIFE (Immediately Invoked Function Expression)

(function () {
  console.log('Hello')
})()

(() => {
  console.log('Hello')
})()

((param1, param2) => {

})('param1i yollarsın', 20)


// Arrays

// Array methods

let nums = [1, 2, 3, 4, 5]

for (let i = 0; i < nums.length; i++) {
  nums[i] = Math.pow(nums[i], 2)
}

console.log(nums) // [1, 4, 9, 16, 25]

// MAPPING


function mapArray(arr, method) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = method(arr[i])
  }

  return arr
}

// CR = Code Review

// Math.pow => fonksiyonun kendisi iken
// Math.pow(2) => fonksiyonun çağırılması ve geri döndürdüğü değerdir

let noktadanSonraIkiBasamakliDizi = mapArray(nums, (num) => {
  return num.toFixed(2)
})

let ikiyeGoreModuluAlinmisDizi = mapArray(nums, (num) => {
  return num % 2
})


// YERINE

let karesiAlinmisDizi = nums.map((item) => {
  return Math.pow(item, 2)
})


// Spread Operator

// ... (üç nokta) operatörüdür
// Yani upuzun bir paragraf kısaltılır ve sonuna üç nokta eklenir ya (uzun yazı... şeklinde)

// spread operator ya butunlesık bir yapıyı parçalayacaktır ya da parçalı bir yapıyı birleştirecektir

// 1. fonksiyon parametre tanımında kullanırız (rest operator)
// geriye kalan parametreleri bir araya getirip dizi olarak belirten bir operatördür

function calcSum(param1, param2, ...rest /*, vallahiDeBillahiDeSonParam // bu yapılamaz */) {
  console.log('param1', param1)
  console.log('param2', param2)

  console.log('rest', rest)
}

calcSum(5, 7, 92, 48, 65, 24)

// 2. array'i parçalamak için kullanırız (spread operator)
calcSum(...nums) // calcSum(1, 2, 3, 4, 5)

Math.pow(...nums) // Math.pow(1, 2, 3, 4, 5)


// Object Destructuring (Obje Yıkımı)

const [num1, num2, num3, ...rest] = nums

console.log(num1) // 1
console.log(num2) // 2
console.log(num3) // 3
console.log(rest) // [4, 5]

const person = { 
  name: 'John',
  age: 25,
  address: {
    city: 'Istanbul',
    country: 'Turkey'
  }
}

// Objelerde yıkım yaparken property isimlerini doğrudan vermelisiniz
// Yıkım yaparken renaming (yeniden isimlendirme) yapmak istiyorsak ": yeniIsim" syntax'ını kullanılabilir
const { age, name: personName,  address: { city, country } } = person

console.log(personName) // John
console.log(age) // 25
console.log(city) // Istanbul
console.log(country) // Turkey

// ÖDEV:

const otherPerson = {
  name: 'Jane',
  age: 30,
  address: {
    city: 'Ankara',
    country: 'Turkey'
  }
}

const otherNums = [6, 7, 8, 9, 10]

const [num1 ,, num3, ...rest] = nums


const combinedObj = {
  ...person,
  ...otherPerson
}

const combinedArr = [
  ...nums,
  ...otherNums
]
