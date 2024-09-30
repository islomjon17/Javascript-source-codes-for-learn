// Abbosaka front-end, [9/16/2024 5:21 PM]
// 1) 3 ta uchburchak berilgan. uchburchaklarning perimetrlari o'rta arifmetigi topilsin.
// 1-uchburchak tomonlari 4, 5, 7
// 2-uchburchak tomonlari 6, 8 , 10
// 3-uchburchak tomonlari 3, 4, 5

// 2) kvadrat shaklidagi bog'ning tomoni 10m. Bog'ning yuzini topadigan dastur tuzilsin.

// 3) Foydalanuvchidan Ismi va  yoshi so'ralsin
// va console da "Assalomu alaykum ISM. Siz falonchi yilda tug'ilgansiz" deb chiqsin.

// 4) foydalanuvchidan hozirgi yil, oy va
// kun so'ralsin va 2050-yil kirishiga necha kun borligi hisoblansin.

// 5) foydalanuvchidan 3 ta son so'ralsin
// bu sonlarning yig'indisi va ko'paytmasining o'rta arifmetigi hisoblansin.

// Abbosaka front-end, [9/16/2024 5:21 PM]
// a) kvadrat shaklidagi bog'ning tomoni 8m.
// Bog'ning yuzi va perimetrini topadigan dastur tuzilsin.

// b) Foydalanuvchidan Ismi va  yoshi va kasbi
// so'ralsin va console da "Assalomu alaykum ISM. Siz falonchi yilda tug'ilgansiz kasbingiz ——" deb chiqsin.

// c) foydalanuvchidan hozirgi yil, oy va kun
// so'ralsin va 2030-yil kirishiga necha kun borligi hisoblansin.

// d)foydalanuvchidan 3 ta son so'ralsin bu
// sonlarning yig'indisi va ko'paytmasining o'rta arifmetigi hisoblansin.

// e) Nolga teng bo'lmagan ikkita ixtiyoriy
// sonlarni yig'indisi, ko'paytmasi va har bir sonning kvadratlari aniqlansin

// f) 2 ta uchburchak berilgan.
// uchburchaklarning perimetrlari o'rta arifmetigi topilsin.
// 1-uchburchak tomonlari 3, 4, 5
// 2-uchburchak tomonlari 6, 8 , 10

// g) foydalanuvchidan yoshi so'ralsin va
// unga siz 50 ga kirishizga falon yil bor deb chqarib bersin

// 1-misol

// 1.1
var a = 4;
var b = 5;
var c = 7;

// 1.2

var a = 6;
var b = 8;
var c = 10;
// 1.3

var a = 3;
var b = 4;
var c = 5;
var p = (a + b + c);
var Orta_arif = (a + b + c) / 3;
console.log(`O'rta arifmetikasi - ${Orta_arif} ga teng, Permetiri esa - ${p}`);

// 2-misol

a = 10;
S= Math.pow(a,2);
console.log(`Bog'ning yuzi S = ${S}`);
// 3 - msiol;
var ism = prompt("Ismingiz nima?");
var yosh = prompt("Yoshingiz nechada?");
var buyil = new Date().getFullYear();
var tugilgan_yili = buyil - yosh;

console.log(`Assalomu alaykum ${ism}. Siz ${tugilgan_yili}-yilda tug'ilgansiz.`);

// 4 - msiol;

var yil = prompt("Hozirgi yilni kiriting:");
var oy = prompt("Hozirgi oyni kiriting (1-12):");
var kun = prompt("Hozirgi kunni kiriting (1-31):");
var hozirgiSana = new Date(yil, oy - 1, kun);
var kelajakSana = new Date(2050, 0, 1);

var farq = kelajakSana - hozirgiSana;
var kunlarSoni = Math.ceil(farq / (1000 * 60 * 60 * 24));

console.log(`2050-yil kirishiga ${kunlarSoni} kun qoldi.`);

//5 - misol
var a1 = parseInt(prompt("Birinchi sonni kiriting"));
var a2 = parseInt(prompt("Ikkinchi sonni kiriting"));
var a3 = parseInt(prompt("Uchinchi sonni kiriting"));

var yegindi = a1 + a2 + a3;
var kopayt = a1 * a2 * a3;
var Orta_arif = (yegindi + kopayt) / 2;

console.log(`O'rta arifmetik  = ${Orta_arif}`);

// a)

// a = 10;
S= Math.pow(a,2);
P = 2*(a+a);
console.log(`Bog'ning yuzi S = ${S}, Peremetiri esa ${P}`);

// b)

var ism = prompt("Ismingiz nima?");
var yosh = prompt("Yoshingiz nechada?");
var kasb = prompt("Nima ish qilsiz")
var buyil = new Date().getFullYear();
var tugilgan_yili = buyil - yosh;

console.log(`Assalomu alaykum ${ism}. Siz ${tugilgan_yili}-yilda tug'ilgansiz va kasbingiz ${kasb}`);

// c)

var yil = prompt("Hozirgi yilni kiriting:");
var oy = prompt("Hozirgi oyni kiriting (1-12):");
var kun = prompt("Hozirgi kunni kiriting (1-31):");
var hozirgiSana = new Date(yil, oy - 1, kun);
var kelajakSana = new Date(2030, 0, 1);

var farq = kelajakSana - hozirgiSana;
var kunlarSoni = Math.ceil(farq / (1000 * 60 * 60 * 24));

console.log(`2030-yil kirishiga ${kunlarSoni} kun qoldi.`);

// e)

var a = parseInt(prompt("Nolga teng bo'lmagan sonni kiriting: "));
var b = parseInt(prompt("Yana nolga teng bo'lmagan sonni kiriting: "));

var a1 = a + b;
var a2 = Math.pow(a, 2);
var a3 = Math.pow(b, 2);
var a4 = a * b;

console.log(`Sonlarning qo'shilmasi: ${a1}, sonlarning kvadrati: ${a2}, ${a3}, sonlarning ko'paytmasi: ${a4}`);

// f)

var a1 = 3, b1 = 4, c1 = 5;
var a2 = 6, b2 = 8, c2 = 10;

var p1 = a1 + b1 + c1;
var p2 = a2 + b2 + c2;

var Orta_arif = (p1 + p2) / 2;

console.log(`Uchburchaklarning perimetrlarining o'rta arifmetigi: ${Orta_arif}`);


// g)

var yil = prompt("Hozirgi yoshizi kiriting:");

// var hozirgiSana = new Date(yil, oy - 1, kun);
var qolgan_yil = 50-yil 
console.log(`50 yoshga kirishingizga ${qolgan_yil} yil qoldi.`);

