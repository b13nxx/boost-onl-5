// Null / Undefined / NaN

// Declaring vs Defining (Beyan etme ve Tanımlama)

// Declaring (Beyan etme)
let num // Declare edilmiş bir değişkendir

// Defining (Tanımlama)
num = 5 // Tanımlanmış bir değişkendir

// Declaring and Defining (Beyan etme ve Tanımlama)
// Initilization (İlk değerinin verilmesi)
let grades = [40, 50, 10, 80] // Declare edilmiş ve tanımlanmış bir değişkendir

// Undefined

// Declare edilmiş ama define edilmemiş değişkenler "undefined" değerine sahiptir:
let personAge // Declare evet, Define hayır = undefined

// Null (empty / boş)

// Değişkenin kendisini hem declare hem de define ediyorum ama "NULL" değeriyle
let skills = null // Declare evet, Define evet ama NULL değeriyle

// Böylelikle null ve undefined çok temel bir farklılık var olduğunu anlarız:
// undefined, developer'ın elinde olmadan gerçekleşen durumlardır
// null ise, developer tarafından bizzat atınmış olmasıdır

// NaN (Not a Number)
const zero = 0

const result = 0 / zero // NaN

if (result === NaN) { // NaN bu şekilde kontrol edilemez

}

if (isNaN(result)) { // NaN bu şekilde kontrol edilebilir
// ...
}

// Conditions

// == (loosly / gevşekçe) vs === (strictly / katıca) Equality Operators

// İki eşittir operatorü kontrolü gerçekleştirirken sol ve sağ tarafın tiplerini birbirine eşitledikten sonra değerlerini karşılaştırır.
// Üç eşittiir operatörü ise bu tarz tip eşitlemesi yapmaksızın diğer karşılaştırma yapar. Bu sebeple tipler eşit olmadığında false döndürür.

// Loosly Equality
console.log("0" == 0) // true
console.log(1 == true) // true

// Strictly Equality
console.log("0" === 0) // false
console.log(1 === true) // false

console.log(null == undefined) // true
console.log(null === undefined) // false

// Ekosistem standardı olarak (best practice), condition'lar strictly (üç eşittir) operatoru kullanılarak yazılır.

let age

if (age === null || age === undefined) {
  // ...
}

// bunun yerine (yukarıdaki açıkladığımız özel davranış sebebiyle)

if (age == null) {
  // ...
}

// ternary operator

const isHuman = false
let isAttackable

if (isHuman) {
  isAttackable = false
} else {
  isAttackable = true
}

let isAttackablev2 = isHuman ? false : true // if/else için shortcut


// not operator (değil operatörü)

// not false = true
// not true = false
let isAttackablev3 = !isHuman

// String'ler

// Template literals
let name = 'John' // String
let templateStr = `Hello ${name}` // Template literal
let combinedStr = 'Hello ' + name // String concatenation

let total = 2 + 3 // 5

// ${ ... } içerisine valid (geçerli) herhangi bir JavaScript ifadesi (expression) yazılabilir
console.log(`Toplam: ${total.toFixed(2)} TL`) // Total: 5.36 TL

console.log(`Kargo bedeli: ${total > 100 ? '0.00' : '30.00'} TL`)

// Functions

// Defining Functions (Fonksiyonları Tanımlama)

// Named function (isimlendirilmiş fonksiyon)
// Function Declaration
function calcSum(firstNum, secondNum) {
  return firstNum + secondNum
}

// Anonim fonksiyonun değişkene atama yapılarak bir nevi isimlendirilmesidir
// Function Expression
const capitalizeText = function (text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}


// Default Parameters

// 1. Yöntem

function printHelloMessage(name = "John") {
  console.log(`Hello ${name}`)
}

printHelloMessage() // Hello John

// 2. Yöntem

function printHelloMessagev2(name) {
  name = name || "John" // sol tarafın falsy olup olmamasına bakar

  console.log(`Hello ${name}`)
}

// 3. Yöntem

function printHelloMessagev3(name) {
  name = name ?? "John" // nullish coalescing operator (sol tarafın null/undefined olup olmamasına bakar)

  console.log(`Hello ${name}`)
}

// 4. Yöntem (cok fazla tercih edilmez)

function printHelloMessagev4(name) {
  if (!name) {
    name = "John"
  }

  console.log(`Hello ${name}`)
}


// Bağımlılık (Dependency)

let counter = 0 // global context

const increaseCounter = function () { // function context'in global context'teki bir yapıya bağımlı olması
  counter++
}


// Closures

// Inner (içteki/içsel) scope'un outer (dıştaki/dışsal) scope'a erişebilmesi durumudur
// Closure'lar Garbage Collector için tam bir baş ağrısıdır (yani bölüm sonu canavarıdır)
// çünkü istediği gibi değişkenleri memory'den silemez olur
function createCounter() {
  let counter = 0

  const increaseCounter = function () {
    counter++
  }

  return increaseCounter
}

const counter1 = createCounter()

counter1()


// Loops

const personalTraits = [
  'passion', // tutku
  'curiosity', // merak
  'love', // sevgi
  'empathy', // empati
]
const person = {
  name: 'John',
  age: 30,
  country: 'Turkey'
}

// For



// For Of



// For In