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
// let userInput = prompt("Raqamli matn kiriting:");

// if (/^\d+$/.test(userInput)) {
//   let reversed = userInput.split("").reverse().join("");
//   console.log("Teskari tartibda:", reversed);
// } else {
//   console.log("Noto'g'ri kirish");
// }

// // 8) Foydalanuvchidan tug‘ilgan yilini so‘rab, agar yil 2000
// yildan katta yoki teng bo‘lsa "Yosh foydalanuvchi", aks holda
// "Kattaroq foydalanuvchi" deb chiqarish.

// const yosh = parseInt(prompt("Tug'ilgan yilizi kiriting: "));

// const hozirgiyil = new Date().getFullYear();

// if (yosh >= 2000 && yosh <= hozirgiyil) {
//   console.log("Yosh foydalanuvchi..");
// } else if (yosh > hozirgiyil) {
//   console.log("Siz hali tug'ilmagansiz");
// } else {
//   console.log("Kattaroq foydalanuvchi");
// }

// // 9) Foydalanuvchidan matn so‘rab, agar matnda faqat kichik
// harflar bo‘lsa, uni katta harflarga o‘zgartiring, aks holda
// kichik harflarga o‘zgartiring.

// let userInput = prompt("Iltimos, matn kiriting:");

// if (/^[a-z]+$/.test(userInput)) {
//   // /^[a-z]+$/ - Regular ifoda yordamida matn faqat kichik harflardan iboratligini tekshiradi.
//   let upperCaseText = userInput.toUpperCase();
//   console.log("Katta harflarda:", upperCaseText);
// } else {
//   let lowerCaseText = userInput.toLowerCase();
//   console.log("Kichik harflarda:", lowerCaseText);
// }

// // 10) Foydalanuvchidan telefon raqamini so‘rab, agar raqam
// uzunligi 10 ta bo‘lsa va faqat raqamlardan iborat bo‘lsa
// "Telefon raqami to‘g‘ri", aks holda "Telefon raqami noto‘g‘ri" deb chiqaring.
// let raqam = parseInt(prompt("Raqamizi kiriting: "))
// if (raqam.length === 10 && /^\d+$/.test(raqam)) {
//   console.log("Telefon raqami to‘g‘ri");
// } else {
//   console.log("Telefon raqami noto‘g‘ri");
// }

// // 11)  Foydalanuvchidan so‘z yoki ibora so‘rab, agar u
// palindrom bo‘lsa "Palindrom", aks holda "Palindrom emas" deb xabar bering.

// let soz = prompt("So'zni kiriting");

// if (soz.split("").reverse().join("") == soz) {
//   console.log("Bu so'z palindrom");
// } else {
//   console.log("Paliindrom emas");
// }
// // 12)  Foydalanuvchidan matn so‘rab, agar birinchi va
// oxirgi harflar bir xil bo‘lsa "Bir xil harf", aks holda
// "Harflar farq qiladi" deb chiqaring.
// let soz = prompt("So'zni kiriting");
// if (soz[0] == soz.slice(-1)) {
//   console.log("Bir xil harf");
// } else {
//   console.log("Harflar farq qiladi");
// }

// // 13) Foydalanuvchidan URL so‘rab, agar
// http:// yoki https:// bilan boshlansa "URL to‘g‘ri",
// aks holda "URL noto‘g‘ri" deb xabar bering.
// let link = prompt("Linkni kiriting");

// if (link.slice(0, 7) == "https://" || link.slice(0, 6) == "http://") {
//   console.log("URL to‘g‘ri");
// } else {
//   console.log("URL noto‘g‘ri");
// }

// // 14) Foydalanuvchidan matn so‘rab, agar matn faqat
// harflardan iborat bo‘lsa, harflarni alohida chiqarish,
// aks holda "Noto‘g‘ri matn" deb chiqaring.

// let matn = prompt("Matnni kiriting: ");
// if (/^[a-zA-Z]+$/.test(matn)) {
//   console.log(matn.split("").join("\n"));
// } else {
//   console.log("Noto‘g‘ri matn");
// }

// // 15) Foydalanuvchidan so‘z so‘rab, agar so‘z uzunligi
// 5 ta belgidan oshsa "Katta so‘z", aks holda "Kichik so‘z"
//  deb chiqarish.
// let soz = prompt("Matnni kiriting: ");
// if (soz.length() >= 5) {
//   console.log("Katta so‘z");
// } else {
//   console.log("Kichik so‘z");
// }
// // 16) Foydalanuvchidan matn so‘rab, agar matnda katta
//  harf bo‘lsa, birinchi katta harfni chiqarish, aks holda
//  "Katta harf yo‘q" deb xabar bering.

// let matn = "Codial";
// if (/[A-Z]/.test(matn)) {
//   console.log(matn.replace(/\d+/g, "").replace(/[a-z]+/g, ""));
// } else {
//   console.log("Katta harf yo‘q");
// }

// // 17) Foydalanuvchidan FIO (Familiya, Ism, Otasining ismi)
//  so‘rab, agar har bir qism bosh harf bilan boshlansa
//  "To‘g‘ri FIO", aks holda "Noto‘g‘ri FIO" deb chiqaring.
// let fio = prompt("FIO kiriting: ");

// let qismlar = fio.split(" ");

// let togri = qismlar.every((qism) => /^[A-ZА-Я]/.test(qism));

// if (togri) {
//   console.log("To‘g‘ri FIO");
// } else {
//   console.log("Noto‘g‘ri FIO");
// }
// // 18) Foydalanuvchidan matn so‘rab, agar matn kamida ikki
// so‘zdan iborat bo‘lsa, so‘zlarni teskari tartibda chiqarish,
// aks holda "Kam so‘zli matn" deb xabar bering.
// let matn = prompt("Matnni kiriting: ")
// let sozlar = matn.trim().split(/\s+/);

// if (sozlar.length >= 2) {
//   console.log(sozlar.reverse().join(" "));
// } else {
//   console.log("Kam so‘zli matn");
// }
// // 19) Foydalanuvchidan URL so‘rab, agar URL parametrlarga
//  ega bo‘lsa, parametrlarni ajratib chiqarish, aks holda
//  "Parametrlar yo‘q" deb chiqaring.
// let url = prompt("URL kiriting: ")
// let urlObj = new URL(url);
// let params = urlObj.searchParams;

// // Parametrlar mavjudligini tekshirish
// if (params.toString()) {
//   // Parametrlarni chiqarish
//   params.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
//   });
// } else {
//   console.log("Parametrlar yo‘q");
// }
// // 20) Foydalanuvchidan matn so‘rab, agar matnda harflar va
// raqamlar aralash bo‘lsa, "Miksa to‘g‘ri", aks holda
// "Miksa noto‘g‘ri" deb xabar bering.
// // let matn = prompt("Matnni kiriting: ")
// if (/[a-zA-Z]/.test(matn) && /\d/.test(matn)) {
//   console.log("Miksa to‘g‘ri");
// } else {
//   console.log("Miksa noto‘g‘ri");
// }
