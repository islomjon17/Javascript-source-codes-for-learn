/* 
let a = 5;
let b = 3;
let sum = a + b; // Qoshish
let difference = a - b; // Ayirsh
let product = a * b; // Ko'paytirish
let quotient = a / b; // Bolish
let remainder = a % b; // Modul (bo'limning qolgan qismi)
let increment = a++; // Qo'shuvchi
let decrement = b--; // Ayruvchi


*/

let x =7;
let y = 11;

console.log(x+y); // 18
console.log(x-y); // -4
console.log(x*y); // 77
console.log(x/y); // 0.63
console.log(x%y); // 7
console.log(x**7) // 823543
/*

Operator 	Example 	Same As
= 	        x = y 	    x = y
+= 	        x += y 	    x = x + y
-= 	        x -= y 	    x = x - y
*= 	        x *= y 	    x = x * y
/= 	        x /= y 	    x = x / y
%= 	        x %= y 	    x = x % y
**= 	    x **= y 	x = x ** y
*/

////////////////////////////////////////////////////////////////

console.log(++x)// 8

console.log(x++)// 8

/* 
x ++ == x = x + 1
x += 3 === x = x + 3

*/



// String operatorlari


let text1 = "Islomjon";
let text2 = "Turg'unov";
let text3 = text1 + " " + text2;

console.log(text3)

let text_1 = "What a very ";
text_1 += "nice day"; 
console.log(text_1)
