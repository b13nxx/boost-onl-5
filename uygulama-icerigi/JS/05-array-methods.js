// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
const myArray = [
    "Cem","Şimşek",29,true,"erik","çilek","karpuz","kivi","Kebap","Çorba",
  ];
  console.log(myArray);
  // 2- 
  myArray[0] = "Mert";
  console.log(myArray);
  // 3- 
  console.log(myArray.length);
  // 4- 
  let pushedLength = myArray.push("kedi"); // push metodu dizinin yeni uzunluğunu döner
  console.log(myArray);
  console.log(pushedLength);
  // 5- 
  let unshiftedLength = myArray.unshift("aslan"); // unshift metodu dizinin yeni uzunluğunu döner.
  console.log(myArray);
  console.log(unshiftedLength);
  // 6- 
  let silinenEleman = myArray.pop(); // pop metodu silinen elemanı döner.
  console.log(myArray);
  console.log(silinenEleman);
  // 7- 
  let shift = myArray.shift(); // shift metodu silinen elemanı döner.
  console.log(myArray);
  console.log(shift);
  console.log(myArray.length);
  // 8- 
  const newArray = [pushedLength,unshiftedLength,silinenEleman,shift,myArray.length,];
  console.log(newArray);
  // 9- 
  const thirdArray = myArray.concat(newArray);
  console.log(thirdArray);
  const spreadedArray = [...myArray, ...newArray];
  console.log(spreadedArray);
  // 10-
  console.log(myArray.includes("Veli"));
  // 11- 
  console.log(myArray.includes("patates", 3)); // patates yok
  console.log(myArray.includes("kivi", 1)); // kivi var
  // 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
  console.log(myArray.indexOf("erik"));
  console.log(myArray.indexOf("erik1")); //dizide yok -1 döner.
  // 13- 
  const slicedArray = thirdArray.slice(0, 3);
  console.log(slicedArray);
  // 14-
  console.log(slicedArray.splice(1, 1, "Anıl", "Murat")); //splice silinen elemanı geri döndürür. konsolda sadece silinen elemanı gördük.
  console.log(slicedArray);
  // 15- 
  slicedArray.splice(1,1)
  slicedArray.splice(1,1,'x')
  slicedArray.splice(3,0,'y')
  console.log(slicedArray);
  // 16-
  console.log(slicedArray.join(" + ")); 
  