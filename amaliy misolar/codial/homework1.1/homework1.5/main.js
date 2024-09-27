// 1.Funksiya qabul qilingan satrda har bir
// so'zning birinchi harfini katta qilib consolega chiqaring
// function Katta_harf(a) {
//   return a
//     .split(" ")
//     .map((soz) => soz.charAt(0).toUpperCase() + soz.slice(1))
//     .join(" ");
// }

// let soz = "salom dunyo";
// console.log(Katta_harf(soz));

// 2.Funksiyaga jo'natilgan sonlar massivining
// har bir elementini kvadratga oshiradigan funksiya yozing.
// function Kvadrat_list(a) {
//   const list2 = [];
//   for (let i = 0; i < a.length; i++) {
//     let b = Math.pow(a[i], 2);
//     list2.push(b);
//   }
//   return list2;
// }
// const list1 = [1, 2, 3, 4, 5, 6, 6, 7, 8];

// console.log(Kvadrat_list(list1));

// 3. Massivni teskari aylantirish
// Berilgan massivni teskari qilib qaytaradigan funksiya yozing.
// function Kvadrat_list(a) {
//   return a.reverse();
// }
// const list1 = [1, 2, 3, 4, 5, 6, 6, 7, 8];

// console.log(Kvadrat_list(list1));

// 4. Katta va kichik harflarni almashtirish
// Berilgan satrda har bir harfni katta yoki
// kichik harfga almashtiradigan funksiya yozing.

// function teskari_harf(gap) {
//   return gap
//     .split("")
//     .map((harf) =>
//       harf === harf.toUpperCase() ? harf.toLowerCase() : harf.toUpperCase()
//     )
//     .join("");
// }

// let gap = "Salom Dunyo";
// console.log(teskari_harf(gap));

// 5.Berilgan sonlar massivida eng katta va eng
// kichik sonni topadigan funksiya yozing.

// function Kvadrat_list(a) {
//   const list2 = [];
//   list2.push(Math.min(...a));
//   list2.push(Math.max(...a));
//   return list2;
// }
// const list1 = [1, 2, 3, 4, 5, 6, 6, 7, 8];

// console.log(Kvadrat_list(list1));

// 6.Satr va harf qabul qiladigan funksiya yarating
// Berilgan satrda o'sha harf necha marta takrorlanganini aniqlasin.
// function harf_sanash(a) {
//   const harfsoni = {};

//   for (let i = 0; i < a.length; i++) {
//     const harf = a[i];
//     if (harfsoni[harf]) {
//       harfsoni[harf]++;
//     } else {
//       harfsoni[harf] = 1;
//     }
//   }

//   for (const harf in harfsoni) {
//     console.log(`${harf} ${harfsoni[harf]} ta topildi`);
//   }
// }

// const matn = "Salom mmeeennn ssii kkkkaa akkksa ksmkallkkejj";
// harf_sanash(matn);

// 7. Berilgan sonlar massivida faqat juft sonlarni
//  qaytaradigan funksiya yozing.

// function jusft(a) {
//   const jusft_sonlar = [];
//   for (let i = 1; i <= sonlar.length; i++) {
//     if (i % 2 == 0) {
//       jusft_sonlar.push(i);
//     }
//   }
//   return jusft_sonlar;
// }

// const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(jusft(sonlar));

// 8. Massivdagi stringlarni uzunligi bo'yicha saralash
// Berilgan satrlar massivini so'z uzunligi bo'yicha
// o'sish tartibida saralovchi funksiya yozing.
// Ps: sort() va length methodlaridan foydalaning.
// function uzunsoz(matn) {
//     return matn.sort((a, b) => a.length - b.length);
// }

// // Misol
// const matn = ["olma", "banan", "qulpunoy", "uzum", "shaftoli"];
// console.log(uzunsoz(matn));

// 9. Berilgan satrning birinchi va oxirgi belgisini
// almashtiradigan funksiya yozing.
// function alishgan(list1) {
//   let a = list1[0];
//   list1[0] = list1[list1.length - 1];
//   list1[list1.length - 1] = a;
//   return list1;
// }

// const matn = ["olma", "banan", "qulpunoy", "uzum", "shaftoli"];
// console.log(alishgan(matn));
// 10. Ikkita massivning umumiy elementlarini
// qaytaradigan funksiya yozing.
// function oxshash(list1, list2) {
//   return list1.filter((belgi) => list2.includes(belgi));
// }

// const list1 = [1, 2, 3, 4, 5];
// const list2 = [3, 4, 5, 6, 7];

// console.log(oxshash(list1, list2));

// 11. Sonlar massivini o'sish bo'yicha saralash
// Berilgan sonlar massivini o'sish tartibida
// saralaydigan funksiya yozing.
// function tartiblash(list1) {
//   return list1.sort();
// }

// const matn = [1, 7, 2, 3, 2, 8, 10];
// console.log(tartiblash(matn));
// 12. Massiv elementlarini birlashtirish
// Berilgan satrlar massivini yagona satrga
//  birlashtiradigan funksiya yozing.
// Ps: join() metodidan foydalaning.
// 13. Massiv ichida aniq qiymat borligini tekshirish
// Berilgan qiymat massivda bor yoki yo'qligini
//  aniqlaydigan funksiya yozing.
// 14. Massiv ichidagi unikal elementlarni topish
// Berilgan massiv ichida faqat takrorlanmagan
// elementlarni qaytaradigan funksiya yozing.
// 15. Massivdagi juft sonlar sonini sanash
// Berilgan massiv ichida nechta juft son borligini
// aniqlaydigan funksiya yozing.
// 16. Birinchi harfini olib tashlash
// Berilgan satrdagi birinchi harfni olib
// tashlaydigan funksiya yozing.
// 17. So'zlarni teskari tartibda chiqarish
// Berilgan satrni so'zlar teskari tartibda
// bo'lgan holatda qaytaradigan funksiya yozing.
