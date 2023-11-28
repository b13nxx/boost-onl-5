// Math.abs - Math.ceil -Math.floor -Math.max - Math.min - Math.sqrt - Math.pow - Math.trunc - .toFixed - .toPrecision - Math.round

// 1-) negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.
let negatif = -10
let absoluteValue = Math.abs(negatif)
console.log(absoluteValue);
// 2-) ondalıklı bir sayıyı yukarıya yuvarlayın.
let ceiledNumber = Math.ceil(7.234)
console.log(ceiledNumber);
// 3-) ondalıklı bir sayıyı aşağıya yuvarlayın.
let flooredNumber = Math.floor(6.345)
console.log(flooredNumber);
// 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.
console.log(Math.max(3,5,3,7,9,1,5));
// 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.
console.log(Math.min(3,5,3,7,9,1,5));
// 6-) ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.
let number2 = 5.777555
console.log(number2.toFixed(3));
// 7-) bir sayının karekökünü bulun.
let sqrtNumber = Math.sqrt(81)
console.log(sqrtNumber);
// 8-) bir sayının üstel fonksiyonunu bulun. (x üzeri y)
let powNumber = Math.pow(5, 3)
console.log(powNumber);
// 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
let number3 = 3.435634
console.log(number3.toPrecision(6));
// 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.
console.log(Math.trunc(123.456789));
// 11-) Rastgele bir sayı üretin. (0 ile 100 arasında)
    // 0-1 arasında bir sayı üretir. (0 dahil - 1 dahil değil)
console.log(Math.floor(Math.random() * 101));
// ( 1 ile 10 arasındaki sayılar 10 dahil!)
// ( 0 ile 10 arasındaki sayılar)
console.log(Math.ceil(Math.random() * 10));
console.log(Math.floor(Math.random() * 11));