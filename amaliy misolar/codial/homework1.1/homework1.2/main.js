// 1)Foydalanuvchidan yoshni so’raydigan dasturni tuzing.
// Yosh 50 dan y uqori bo’lsa, dastur “Siz kattasiz”
//  deb chiqarib berishi kerak. Yosh 50 dan past bo’lsa
//  “Siz yoshsiz” deb chiqarib berishi kerak.

// yosh = parseInt(prompt("Yoshizi kiriting: "))
// if (yosh > 50){
//     console.log(`Sizni yoshiz 50 dan katta`);
// }
// else {
//     console.log("Siz ga hali bor ekan qarishga. ");

// }

// 2)Somsani narxini so’raydigan dastur. Narx 3000 dan yuqori
// bo’lsa - dastur “qimmat” deb chiqarib bersin. 3000 dan arzon
// bo’lsa - “arzon” deb chiqarib bersin.

// narx = parseInt(prompt("Narxni kiriting: "))
// if (narx > 3000){
//     console.log(`Qimmat ekan`);
// }
// else {
//     console.log("Arzon ekan ");
// }

// 3). Foydalanuvchidan imtihonda necha ball to`plagani so`ralsin.
// Agar u 40 yoki 60 dan past to`plagan bo`lsa “balingiz past”
// deb chiqarilsin. Agar 100 va 130 ball orasida to`plagan bo`lsa
// “natijangiz yaxshi” deb chiqarilsin,agar 130 baldan yuqori bo`lsa “natijangiz zo`r deb chiqarilsin”.

// ball = parseInt(prompt("Ballni kiriting: "));

// if (40 > ball) {
//   console.log("Ancha past ekan");
// } else if (ball >= 40 && ball <= 60) {
//   console.log(`past ball ekan`);
// } else if (ball > 60 && ball < 100) {
//   console.log("O'rtacha ball");
// } else if (ball >= 100 && ball <= 140) {
//   console.log("natijangiz yaxshi");
// } else {
//   console.log("Unaqa ball yo'q");
// }

// 4)Parolni tekshiradigan dastur. Foydalanuvchi “codial”
//  parolini kiritgan bo’lsa, u bilan salomlashing. Boshqa
//   narsa kiritgan bo’lsa - unga “Xato!” deb yozing.

// parol = prompt("Narxni kiriting: ")
// if (parol > "codial"){
//     console.log(`Salomat`);
// }
// else {
//     console.log("Xato ekan ");
// }

// 5). Foydalanuvchidan oylik maoshi so`ralsin. Agar 1500$
//  yoki 2000$ kiritsa kasbini so`ralsin, agar 500$ va 700$
//  orasida kiritsa “Boshqa ish topishingiz kerak”, aks holda
//   “Siz bu ketishda BMW ololmaysiz!” deb chiqarilsin.

// maosh = parseFloat(prompt("Ko'kida oylikni kiriting: "));

// if (700 > maosh) {
//   console.log("Siz bu ketishda BMW ololmaysiz!");
// } else if (maosh >= 500 && maosh <= 700) {
//   console.log(`Boshqa ish topishingiz kerak`);
// } else if (maosh > 700 && maosh < 1500) {
//   console.log("bitta malibuga ketib qoladi");
// } else if (maosh >= 1500 && maosh < 2000) {
//   console.log("BMW olsa bo'ladi o'zgina yeg'ish kerak");
// } else {
//   console.log("Uje sizda BMW bor");
// }

// 6)Foydalanuvchidan ismini so’rang. Ismi “Ali” bo’lsa, unga
// “Salom og’a” deb yozing. Ismi “Ahmad” bo’lsa, unga
// “Ko’rinmayapsan dostim, nima qilyapsan?” deb yozing.
// ism = prompt("Ismizi kiriting");

// if (ism == "Ali") {
//   console.log("Salom og’a");
// } else if (ism == "Ahmad") {
//   console.log("Ko’rinmayapsan dostim, nima qilyapsan?");
// } else {
//   console.log("Meni sendaqa do'stim yo'q");
// }

// 7)Oshxonani menyusini tuzing. Foydalanuvchi “somsa”
// deb kiritsa - unga “3000” deb yozing. “palov” deb
// kiritsa “15000” deb yozing. “gumma” - “2000”.

// ovqat = prompt("Taom tanlang student( “somsa” - “palov” - “gumma” -)");
// if (ovqat == "somsa") {
//   console.log("narxi - “3000”");
// } else if (ovqat == palov) {
//   console.log("narxi - “15000”");
// } else if (ovqat == "gumma") {
//   console.log("narxi - “2000”");
// } else {
//   console.log("Bizda bunaqa ovqat yo'q. ");
// }

// 8)Narxlar: Somsa: 3000 Palov: 15000 Kabob: 12000

// Foydalanuvchi unda bor pulini kiritsin. Va mahsulotni
//  tanlasin. Puli yetsa - “sotib oldingiz” deb chiqaring.
//   Puli yetmasa - “uzr, pul yetmadi” deb yozing.

// maosh = parseInt(prompt("Pulizi kiriting kiriting: "));

// if (3000 > maosh) {
//   console.log("uzr, pul yetmadi!");
// } else if (maosh == 3000) {
//   console.log(`somsaga yetadi kerak`);
// } else if (maosh == 15000) {
//   console.log("Palovga yetib qoladi");
// } else if (maosh == 12000) {
//   console.log("Kabobga yetadi");
// } else {
//   console.log("puliz kop ekan");
// }
// 9) Foydalanuvchidan yoshini so'rab, kiruvchi yosh bo'yicha
//  "Yosh katta" yoki "Yosh kichik" degan xabarni chiqaring.
//   (Agar foydalanuvchi kiritgan yosh 18 dan katta yoki teng bo'lsa, "Yosh katta" deb hisoblang.)
// yosh = parseInt(prompt("Pulizi kiriting kiriting: "));

// if (18 > yosh) {
//   console.log("Yoshiz kichik ekan!");
// } else {
//   console.log("puliz kop ekan");
// }

// 10)Foydalanuvchidan ikki son kiritishni so'rab.
// Agar birinchi son ikkinchi songa teng bo'lsa,
// "Sonlar teng" aks holda "Sonlar teng emas" degan xabarni chiqaring.

// let son1 = prompt("Birinchi sonni kiriting:");
// let son2 = prompt("Ikkinchi sonni kiriting:");

// if (son1 == son2) {
//     console.log("Sonlar teng");
// } else {
//     console.log("Sonlar teng emas");
// }

// 11) Foydalanuvchidan nechinchi qavatda turishini
// so`rang. Agar 4 va 10 – qavat orasida kiritsa unga
// “Liftdan foydalaning”, aks holda “Zinadan chiqishingiz mumkin” deb chiqarilsin.
// let qavat = prompt("Nechinchi qavatda turasiz?");

// if (qavat >= 4 && qavat <= 10) {
//   console.log("Liftdan foydalaning");
// } else {
//   console.log("Zinadan chiqishingiz mumkin");
// }
