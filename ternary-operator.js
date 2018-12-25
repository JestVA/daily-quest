// 1
function checkEqual(a, b) {
  return a === b ? true : false
}

checkEqual(1, 2);

// function findGreater(a, b) {
//   if(a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater";
//   }
// }

// 2
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}

// 3 or ...multiple conditional operators
function checkSign(num) {
  return (num > 0) ? "positive" : (num === 0) ? "num is zero" : "negative" 
}

checkSign(10);

// logic is: if not positive and not zero then negative . No need for third conditional test