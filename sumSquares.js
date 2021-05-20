

var sumSquares = (arr) => {

 return arr.reduce((accum, currentVal) => {
    var squaredVal = Math.pow(currentVal, 2)
    accum += squaredVal;
    return accum;
  }, 0)
}


console.log(sumSquares([0, 1, 2, 3, 4]));
