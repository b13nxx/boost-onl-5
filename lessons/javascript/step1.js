// FUNCTIONAL PROGRAMMING

// Functional programming'de her şey bir fonksiyon içerisindedir.
function main() {
  // Scope / Context

  var b = 2; // global scope

  // Scope / Context = süslü parantezlerin arasındaki kod parçasıdır 
  function myFunction() { // function scope
    var a = 1; // local scope
    console.log(a);
  }

  if (true) { // block scope
    var counter = 1;
    let name = "Jane";
    const PI = 3.15;
  }
}

main()

// Declaring Variables (Değişken Tanımlamaları)

var counter = 0; // function-scoped değişken tanımlamasıdır
let name = "John"; // block-scoped değişken tanımlamasıdır
const PI = 3.14; // block-scoped sabit tanımlamasıdır

PI = 3.15 // TypeError: Assignment to constant variable.

const numbers = [1, 2, 3, 4, 5];

numbers.push(6); // [1, 2, 3, 4, 5, 6]
numbers.pop(); // [1, 2, 3, 4, 5]

numbers = [1, 2, 3, 4, 5, 6]; // TypeError: Assignment to constant variable.

// var vs let

// var ile tanımlanan değişkenler function scoped'dur.
// let ile tanımlanan değişkenler block scoped'dur.

// sektor standardı / best practice: let kullanulması yönündedir.
function sum() {
  var a = 1;

  if (true) {
    var b = 2;
    let c = 3; // let ile tanımlama yapıldığı değişkenin kendisi block scoped'dur. Bu sebeple block dışında değeri okunamaz.
  }


  // b = 'sacma sapan bir sekilde manipule edebilirim ve bu cok tehlikeli'

  console.log(a + b /* + c // bu yapılamaz */); // 3
}


// NAMING VARIABLES (Deişken İsimlendirmeleri)

// context'i (içeriği) anlatamayan çok kısa bir isimlendirme yapmayın
let attrs = [
  'passion',
  'curiosity',
  'openness',
  'creativity',
]

// context'i anlatacağız diye dört dönüp çok uzun bir isimlendirme yapmayın
let traitsTheOneHas = [
  'passion',
  'curiosity',
  'openness',
  'creativity',
]

// context'i efektif bir şekilde anlatan dengeli isimlendirme yapın
let personalTraits = [
  'passion',
  'curiosity',
  'openness',
  'creativity',
]

// boolean değişkenler has, is, check gibi prefixler alırlar:
let hasPassion = true;

// functionlar ise emir kipiyle başlar: fetch, get, set, sum, calc etc.
function fetchUser() {
  // ...
}

// Stringler:

let str = 'Hello World'

str.toLowerCase() // hello world
str.toUpperCase() // HELLO WORLD
str.chatAt(0) // H
str[0] // H
str.length // 11

// Numbers

let num = 1
let num2 = 3.4 // float/double

num.toFixed(2) // "1.00"

// Boolean

let isPlayer = true

// Conditions

if (isPlayer) {
  // ...
} else if (hasPassion) {
 // ...
} else {
 // ...
}

// Switch Case

let color = 'red'

// waterfall effec (şelale etkisi)
switch (color) {
  case 'red':
    // ...
    break
  case 'blue':
    // ...
    break
  default:
    // ...
}

// Arrays
// backend dillerinden ayıran özellikler:
// 1. arrayler dinamiktir ve manipule edilebilirler
// 2. arraylerdeki elemanlar farklı tiplerde olabilirler
let programmingLangs = [
  'JavaScript',
  50,
  true,
  ['Java', 'C#', 'C++'],
  { name: 'John' },
  function() {
    // ...
  },
  null,
  undefined,
  NaN
]

// Objects

let user = {
  name: 'John',
  age: 30,
  isPlayer: true,
  hobbies: ['football', 'basketball', 'tennis'],
  address: {
    city: 'Istanbul',
    country: 'Turkey',
    innerObj: {
      name: 'John',
      age: 30,
      isPlayer: true,
      hobbies: ['football', 'basketball', 'tennis'],
      address: {
        city: 'Istanbul',
        country: 'Turkey',
        innerObj: {
          // ...
        }
      },
      getFullName: function() {
        return this.name + ' Doe'
      }
    }
  },
  getFullName: function() {
    return this.name + ' Doe'
  },
  a: null,
  b: undefined,
  c: NaN
}

// Functions
// Diğer backend dillerinden ayıran özellikler:
// 1. access modifiers (public, private, protected) gerekli değildir
// 2. parametrelerin tipleri belirtilmez
// 3. return tipi de belirtilmez
function sum(a, b) {
  return a + b
}
