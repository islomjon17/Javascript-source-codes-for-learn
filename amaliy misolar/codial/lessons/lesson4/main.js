function ttyt(a, b) {
  return a * b;
}

console.log(ttyt(5, 6));

// function sqr(num) {
//     return num * num;

// }

// let result = sqr(55);
// console.log(sqr(55));
// console.log(result);

const func3 = (text1, character) => {
  var arr = text1.split(" ");
  console.log(arr);
  var newArr = arr.filter((item) => {
    return item.includes(x)
  })
  console.log(newArr);
  
  
};

var text1 = "lorem lorem onaons  osaiodnallkd dfslke ofslnf.";
console.log(func3(text1, "lorem"));
