// Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.

const arr = ["elma", "armut", "çilek"]
const upperCase = arr.map((eleman, index) => eleman.toUpperCase() )
console.log(upperCase);
console.log(arr);
//Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.

const arr1 = [1,2,3,4,5,6,7]

const carpimlar = []

console.log(arr1.forEach((e) => {
    carpimlar.push(e * 2)
}))

console.log(carpimlar);

console.log(arr.map((eleman, index) => eleman.toUpperCase() ));