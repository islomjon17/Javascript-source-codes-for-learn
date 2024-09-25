// 1-masala: sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// sonlardan iborat array berilgan ushbu arraydan
// foydalanib yangi array yarating va ushbu arrayda
// faqat juft sonlarni consolga natijani chiqaring.
// const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const jusft_sonlar = [];
// for (let i = 1; i <= sonlar.length; i++) {
//   if (i % 2 == 0) {
//     jusft_sonlar.push(i);
//   }
// }
// console.log(jusft_sonlar);

//  2-masala sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   sonlardan iborat array berilgan ushbu arraydan
//   foydalanib yangi array yarating va ushbu arrayda
//   faqat toq sonlarni consolga natijani chiqaring.
// const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const jusft_sonlar = [];
// for (let i = 1; i <= sonlar.length; i++) {
//   if (i % 2 == 0) {
//     console.log("Topilmadi");
//   } else {
//     jusft_sonlar.push(i);
//   }
// }
// console.log(jusft_sonlar);

// 3-masala matnlar = ["salom", "hayr", "javascript", "filter", "mavzu", "masala"]
// so`zlardan iborat array berilgan ushbu arraydan
// foydalanib so`zlar uzunligi 5dan kotta bo`lgan so`zlarni
// consolga chiqaring.

// const matnlar = ["salom", "hayr", "javascript", "filter", "mavzu", "masala"];
// const katta_matn = [];
// for (let i = 0; i < matnlar.length; i++) {
//   if (matnlar[i].length > 5) {
//     console.log(matnlar[i]);
//     katta_matn.push(matnlar[i]);
//   } else {
//     console.log("mos emas");
//   }
// }
// console.log(katta_matn);

// 4-masala  const massiv = ['JavaScript', 'Java', 'Python', 'Node.js', 'React', 'Angular']
// array berliga berilgan arraydan foydalanib yangi array yarating va
// so`zlar ichida   "java"  qatnashgan bo`lsa o`sha so`zlarni consolga chiqaring.

// const massiv = ["JavaScript", "Java", "Python", "Node.js", "React", "Angular"];
// for (let i = 0; i < massiv.length; i++) {
//   if (massiv[i].includes("Java")) {
//     console.log(massiv[i]);
//   } else {
//     console.log("mos emas");
//   }
// }

//  5-masala  const massiv = [15, 25, 35, 45, 55];
//  array berilga berilgan arraydan foydalanib yangi
//  array yarating va 30dan kichik bo`lga sonlarni consolga chiqaring
// const massiv = [15, 25, 35, 45, 55];
// const yangi = [];
// for (let i = 0; i < massiv.length; i++) {
//   if (massiv[i] > 30) {
//     console.log(massiv[i]);
//     yangi.push(massiv[i]);
//   } else {
//     console.log("Topilmadi");
//   }
// }

// console.log(yangi);

// 6-masala var text = “salom men codialda ishlayman ”
// sitring malumotda matn berilgan berilgan sitrigdan
// foydalanib yangi array yarating va o`sha arrayga faqat uzunligi 5dan kotta bo`lgan so`zlar qolsin.
// var text = "salom men codialda ishlayman";
// var words = text.split(" ");
// const matn = [];
// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > 5) {
//     matn.push(words[i]);
//   } else {
//     console.log("topilmadi");
//   }
// }

// console.log(matn);
// 7-masala let harflar = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// array berilga ushbu arraydan foydalanib yangi array yarating
// va o`sha arrayga faqat unli harflarni joylashtiring va consolga chiqaring
// let harflar = ["a", "b", "c", "d", "e", "f", "g"];
// let unli = ["a", "i", "o", "u", "o'", "e", ""];

// for (let i = 0; i < harflar.length; i++) {
//   if (unli.includes(harflar[i])) {
//     console.log(harflar[i]);
//   } else {
//     console.log("yoq ekan");
//   }
// }

// 8-masala sozlar = ["olma", "banan", "shaftoli", "nok", "anor"]
// massiv berilgan berilgan massivdan foydalanib yangi massiv
// yarating va massivda "a" harfin o`z ichiga olgan so`zlarni consolga chiqaring.
// const sozlar = ["olma", "banan", "shaftoli", "nok", "anor"];
// const a_harfli = [];
// for (let i = 0; i < sozlar.length; i++) {
//   if (sozlar[i].includes("a")) {
//     a_harfli.push(sozlar[i]);
//   } else {
//     console.log("Topilmadi");
//   }
// }

// console.log(a_harfli);

// 9-masala ["Abbosbek" , "Islombek","Alijon","Muhammaddiyor",
// "Mardonbek","Azimjon"]  ushbu arraydan foydalanib yangi array
// yarating yangi arrayga faqat "bek" qo'shimchasi borlar yozilsin.
// const sozlar = ["Abbosbek" , "Islombek","Alijon","Muhammaddiyor",
// "Mardonbek","Azimjon"];
// const bek_harfli = [];
// for (let i = 0; i < sozlar.length; i++) {
//   if (sozlar[i].includes("bek")) {
//     bek_harfli.push(sozlar[i]);
//   } else {
//     console.log("Topilmadi");
//   }
// }
// console.log(bek_harfli);

// 10-masala sozlar = ["JavaScript", "Python", "HTML", "CSS", "React", "Node"];
// array berilgan berilgan arraydan foydalanib yangi array yarating va arraydagi
// so`zlarni uzunligi 4 dan kottalarini arrayga qo`shing va consolga chiqaring
// const sozlar = ["JavaScript", "Python", "HTML", "CSS", "React", "Node"];
// const matn = [];
// for (let i = 0; i < sozlar.length; i++) {
//   if (sozlar[i].length > 4) {
//     matn.push(sozlar[i]);
//     console.log(sozlar[i]);
//   } else {
//     console.log("topilmadi");
//   }
// }

// console.log(matn);

// 11-masala    sozlar = ["apple", "banana", "cherry", "date", "grape"];
// massiv berilgan berilgan massivdan foydalanib yangi massiv yarating
// va massivda "b" harfin o`z ichiga olgan so`zlarni consolga chiqaring.
// const sozlar = ["apple", "banana", "cherry", "date", "grape"];
// const b_harfli = [];
// for (let i = 0; i < sozlar.length; i++) {
//   if (sozlar[i].includes("b")) {
//     b_harfli.push(sozlar[i]);
//     console.log(sozlar[i]);
//   } else {
//     console.log("Topilmadi");
//   }
// }

// console.log(b_harfli);
// 12-masala  const massiv = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];
// array berilga berilgan arraydan foydalanib yangi array yarating va
// 69 dan kotta bo`lga sonlarni consolga  chiqaring.

// const massiv = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];
// const karra = [];
// for (let i=0; i < massiv.length; i++) {
//   if (massiv[i] > 69) {
//     console.log(massiv[i]);
//     karra.push(massiv[i]);
//   } else {
//     console.log("Kichkina");
//   }
// }

// 13-masala var sozlar = ["apple", "banana", "orange", "kiwi", "grape"]
// array berilgan  ushbu arraydan foydalanib arraydagi so`zlarni uzunligi
// 5 dan kotta bo`lgan so`zlarni consolga chiqaring.
// const sozlar = ["apple", "banana", "orange", "kiwi", "grape"];

// for (let i = 0; i < sozlar.length; i++) {
//   if (sozlar[i].length > 5) {
//     console.log(sozlar[i]);
//   } else {
//     console.log("Kichkina");
//   }
// }
