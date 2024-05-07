// && mantiqiy va operatorlari

// console.log(true && true);
// console.log(false && false);
// console.log(true && false);



// let = hour = 8
// let minute = 15
// let isofficeopen = (hour >= 9 && minute >= 0)
// let openooffice = isofficeopen === true ? 'open' : 'closed'
// console.log(openooffice)

let date = new Date()
let hour = date.getHours()
let minute = date.getMinutes()
console.log(hour, "dan", minute, "Daqiqa otdi")
let isofficeopen = (hour >= 7 || minute >= 0)
let isofficeclosed = !isofficeopen
// // || isofficeopen
// console.log(true || false);


// let openooffice = isofficeopen === true ? 'open' : 'closed'
// console.log(openooffice)


console.log(isofficeopen)
console.log(isofficeclosed)