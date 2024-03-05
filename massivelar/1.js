let cars = ["BMW", "TOYOTA", "Merc"];

console.log(cars.length);

console.log(cars[0]);

/* 
JS da funksiyalar



*/


// Massivni aniqlash
let sonlar = [1, 2, 3, 4, 5];

// forEach(): Berilgan funktsiyani massivning har bir elementi uchun bir marta bajaradi
sonlar.forEach(function (son) {
    console.log(son);
});

// map(): Berilgan funksiyani takrorlanadigan har bir massiv elementiga qo'llab-quvvatlanuvchi natijalarni o'z ichiga olgan yangi massiv yaratadi
let ikkilanganSonlar = sonlar.map(function (son) {
    return son * 2;
});
console.log(ikkilanganSonlar); // Output: [2, 4, 6, 8, 10]

// filter(): Berilgan funksiya tomonidan sinovlangan har bir elementi o'z ichiga olgan yangi massiv yaratadi
let juftSonlar = sonlar.filter(function (son) {
    return son % 2 === 0;
});
console.log(juftSonlar); // Output: [2, 4]

// reduce(): Massivning har bir elementi uchun reduktor funksiyasini bajaradi, natijada yagona chiqish qiymatini olish
let yigindi = sonlar.reduce(function (accumulator, hozirgiQiymat) {
    return accumulator + hozirgiQiymat;
}, 0);
console.log(yigindi); // Output: 15

// find(): Massivning ichida berilgan test funksiyasini qondiradigan birinchi element qiymatini qaytaradi
let birinchiJuftSon = sonlar.find(function (son) {
    return son % 2 === 0;
});
console.log(birinchiJuftSon); // Output: 2

// indexOf(): Berilgan elementning massivdagi birinchi indeksini qaytaradi, agar mavjud bo'lmasa -1 qaytaradi
let indeks = sonlar.indexOf(3);
console.log(indeks); // Output: 2

// slice(): Massivning qismi uchun yangi massivning kamtar nusxasini qaytaradi
let kesilganMassiv = sonlar.slice(1, 3);
console.log(kesilganMassiv); // Output: [2, 3]
