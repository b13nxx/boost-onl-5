// // Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.

// const arr = ["elma", "armut", "çilek"]
// const upperCase = arr.map((eleman, index) => eleman.toUpperCase())
// console.log(upperCase);
// console.log(arr);
// //Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.

// const arr1 = [1,2,3,4,5,6,7]

// const carpimlar = []

// console.log(arr1.forEach((e) => {
//     carpimlar.push(e * 2)
// }))

// console.log(carpimlar);

// console.log(arr.map((eleman, index) => eleman.toUpperCase() ));

// Kullanılacak diziler
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
// const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
// const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.(çıktı örneği: "1. Eleman: 1")
const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

dizi.forEach((eleman, index) => {
  console.log(`${index + 1}. Eleman: ${eleman}`);
});

// 2- Verilen bir dizinin sadece çift sayılarını konsola yazdıran bir forEach döngüsü oluşturun.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

dizi.forEach((eleman) => {
  if (eleman % 2 === 0) {
    console.log(eleman);
  }
});

// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const carpimlar = [];

dizi.forEach((eleman) => {
  carpimlar.push(eleman * 2);
});

console.log(carpimlar);

// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let toplam = 0;

dizi.forEach((eleman) => {
  toplam += eleman;
});

console.log(toplam);

// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
const dizi1 = ["elma", "armut", "kiraz", "üzüm"];

dizi1.forEach((eleman, indeks, dizi1) => {
  if (indeks === dizi1.length - 1) {
    console.log("Son eleman: " + eleman);
  } else {
    console.log(eleman);
  }
});

// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.
// const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
const buyukHarfler = dizi1.map((eleman) => eleman.toUpperCase());
console.log(buyukHarfler);

// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rastgeleDizi = dizi.map(
  (eleman) => eleman + Math.ceil(Math.random() * 10)
);
console.log(rastgeleDizi);

// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const string = "merhaba benim adım cem";
const tersKelime = string
  .split(" ")
  .map((harf) => harf.split("").reverse().join(""));
console.log(tersKelime);

// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringDizi = dizi.map((eleman) => eleman.toString());
console.log(stringDizi);

// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.
// const dizi1 = ["elma", "armut", "kiraz", "üzüm"];

const tersCevir = (string) => {
  let tersString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    tersString += string[i];
  }
  return tersString;
};

const tersDizi = dizi1.map((eleman) => tersCevir(eleman));

console.log(tersDizi);

// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ciftSayilar = dizi.filter((eleman) => eleman % 2 === 0);
console.log(ciftSayilar);

// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.
// const dizi1 = ["elma", "armut", "kiraz", "üzüm"]

const uzunluk = 4;
const uzunStringler = dizi.filter((eleman) => eleman.length === uzunluk);
console.log(uzunStringler);

// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const diziToplam = dizi.reduce(
  (accumulator, currentValue) => accumulator + currentValue + 2,
  0
);
console.log(diziToplam);

// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek

// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ilkCiftSayi = dizi.find((eleman) => eleman % 2 === 0);
console.log(ilkCiftSayi);
// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek

// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sonCiftSayi = dizi.findLast((eleman) => eleman % 2 === 0);
console.log(sonCiftSayi);

// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek
const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];

const negatifVarMi = dizi2.some(function (eleman) {
  return eleman < 0;
});
console.log(negatifVarMi);
// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const hepsiPozitifMi = dizi.every(function (eleman) {
  return eleman > 0;
});
console.log(hepsiPozitifMi);

// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek
const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];
const siraliDizi = dizi3.sort((a, b) => a - b);
console.log(siraliDizi);
console.log(dizi3); // orijinal dizi değişti
const dizi5 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];
const siraliDizi2 = dizi5.toSorted((a, b) => a - b);
console.log(siraliDizi2);
console.log(dizi5); // orijinal dizi değişmedi
