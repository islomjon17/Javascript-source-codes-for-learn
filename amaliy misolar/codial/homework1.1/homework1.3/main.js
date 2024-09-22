// // If-Else va String Metodlariga Oid Masalalar:
// // 1) Foydalanuvchidan ism so‘rab, agar ism admin bo‘lsa,
// "Xush kelibsiz, administrator!" aks holda "Xush kelibsiz,
// foydalanuvchi!" deb chiqaruvchi dastur yozing.
// let ism = prompt("foydalanuvchi ismini kiriting: ")
// if (ism == "admin"){
//     console.log("Xush kelibsiz, administrator");
// }
// else{
//     console.log("Xush kelibsiz, foydalanuvchi!");

// }

// // 2) Foydalanuvchidan parol so‘rab,
// parol uzunligi kamida 8 ta belgidan iborat bo‘lsa va
// raqam ham aralashsagina  "Parol qabul qilindi", aks holda "Parol juda sodda" deb chiqaring.
// const parol = prompt("Iltimos, parolingizni kiriting:");

// const uzunlikYaroqli = parol.length >= 8;
// const raqamYaroqli = /\d/.test(parol);

// if (uzunlikYaroqli && raqamYaroqli) {
//   alert("Parol qabul qilindi");
// } else {
//   alert("Parol juda sodda");
// }
// // 3) Foydalanuvchi email manzilini kiritsa, agar @ va .
//  belgilar mavjud bo‘lsa "Email to‘g‘ri", aks holda "Email noto‘g‘ri" deb chiqaring.

// const email = prompt("Emailni kiriting: ");
// const bor_kuchukcha = email.includes("@");
// const bor_nuqta = email.includes(".");

// if (bor_kuchukcha && bor_nuqta) {
//   console.log("Email to'g'ri");
// } else {
//   console.log("Email noto‘g‘ri ");
// }

// // 4) Foydalanuvchidan matn va so‘z so‘rab, agar matn
// ichida so‘z mavjud bo‘lsa "Topildi", aks holda "Topilmadi" deb chiqaruvchi dastur tuzing.
// const matn = prompt("Matnni kiriting: ");
// const soz = prompt("So'zni kiriting: ");
// const bor_soz = email.includes(soz);

// if (bor_soz == true) {
//   console.log("Topildi");
// } else {
//   console.log("Topilmadi ");
// }

// // 5) Foydalanuvchidan soatni so‘rab, agar soat 6-12
// oralig‘ida bo‘lsa "Xayrli tong", 12-18 oralig‘ida "Xayrli kun",
// 18-24 oralig‘ida "Xayrli kech" deb chiqaring, aks holda "Noto‘g‘ri soat" deb xabar bering.

// let vaqt = prompt("Vaqtni kiriting")

// let vaqt = 15;
// if (6 <= vaqt && vaqt <= 12) {
//   console.log("Xayrli tong");
// } else if (12 < vaqt && vaqt <= 18) {
//   console.log("Xayrli kun");
// } else if (18 < vaqt && vaqt <= 24) {
//   console.log("Xayrli kech");
// } else {
//   console.log("No to'g'ri vaqt");
// }
// // 6) Foydalanuvchidan matn so‘rab, agar matn uzunligi kamida
//  3 belgidan iborat bo‘lsa, uchinchi harfni chiqaring, aks holda
//  "Matn juda qisqa" deb xabar bering.

// const matn = prompt("Iltimos, parolingizni kiriting:");

// const uzunlikYaroqli = matn.length >= 3;

// if (uzunlikYaroqli == true) {
//   alert(matn[2]);
// } else {
//   alert("Matn juda qisqa");
// }
//

// // 7) Foydalanuvchidan raqamli matn so‘rab, agar matn faqat
// raqamlardan iborat bo‘lsa, raqamlarni teskari tartibda chiqarish,
// aks holda "Noto‘g‘ri kirish" deb xabar bering.

// // 8) Foydalanuvchidan tug‘ilgan yilini so‘rab, agar yil 2000
// yildan katta yoki teng bo‘lsa "Yosh foydalanuvchi", aks holda
// "Kattaroq foydalanuvchi" deb chiqarish.

// // 9) Foydalanuvchidan matn so‘rab, agar matnda faqat kichik
// harflar bo‘lsa, uni katta harflarga o‘zgartiring, aks holda
// kichik harflarga o‘zgartiring.

// // 10) Foydalanuvchidan telefon raqamini so‘rab, agar raqam
// uzunligi 10 ta bo‘lsa va faqat raqamlardan iborat bo‘lsa
// "Telefon raqami to‘g‘ri", aks holda "Telefon raqami noto‘g‘ri" deb chiqaring.

// // 11)  Foydalanuvchidan so‘z yoki ibora so‘rab, agar u
// palindrom bo‘lsa "Palindrom", aks holda "Palindrom emas" deb xabar bering.

// // 12)  Foydalanuvchidan matn so‘rab, agar birinchi va
// oxirgi harflar bir xil bo‘lsa "Bir xil harf", aks holda
// "Harflar farq qiladi" deb chiqaring.

// // 13) Foydalanuvchidan URL so‘rab, agar
// http:// yoki https:// bilan boshlansa "URL to‘g‘ri",
// aks holda "URL noto‘g‘ri" deb xabar bering.

// // 14) Foydalanuvchidan matn so‘rab, agar matn faqat
// harflardan iborat bo‘lsa, harflarni alohida chiqarish,
// aks holda "Noto‘g‘ri matn" deb chiqaring.

// // 15) Foydalanuvchidan so‘z so‘rab, agar so‘z uzunligi
// 5 ta belgidan oshsa "Katta so‘z", aks holda "Kichik so‘z"
//  deb chiqarish.

// // 16) Foydalanuvchidan matn so‘rab, agar matnda katta
//  harf bo‘lsa, birinchi katta harfni chiqarish, aks holda
//  "Katta harf yo‘q" deb xabar bering.

// // 17) Foydalanuvchidan FIO (Familiya, Ism, Otasining ismi)
//  so‘rab, agar har bir qism bosh harf bilan boshlansa
//  "To‘g‘ri FIO", aks holda "Noto‘g‘ri FIO" deb chiqaring.

// // 18) Foydalanuvchidan matn so‘rab, agar matn kamida ikki
// so‘zdan iborat bo‘lsa, so‘zlarni teskari tartibda chiqarish,
// aks holda "Kam so‘zli matn" deb xabar bering.

// // 19) Foydalanuvchidan URL so‘rab, agar URL parametrlarga
//  ega bo‘lsa, parametrlarni ajratib chiqarish, aks holda
//  "Parametrlar yo‘q" deb chiqaring.

// // 20) Foydalanuvchidan matn so‘rab, agar matnda harflar va
// raqamlar aralash bo‘lsa, "Miksa to‘g‘ri", aks holda
// "Miksa noto‘g‘ri" deb xabar bering.
