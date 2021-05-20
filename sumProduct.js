

var sumProduct = (arr) => {

  var sum = 0;
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
    product *= arr[i]
  }
  return `Sum: ${sum}, Product: ${product}`;
 }


 console.log(sumProduct([1, 2, 3, 4]));
