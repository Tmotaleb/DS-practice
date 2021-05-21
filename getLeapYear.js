

const getLeapYear = (y1, y2) => {

  var result = [];
  var arr = getRange(y1, y2)

  for (var i = 0; i < arr.length; i++) {
    if ((arr[i] % 4 === 0 && arr[i] % 100 !==0 ) || (arr[i] % 400 === 0 && arr[i] % 100 === 0)) {
      result.push(arr[i])
    }
  }

return result;
}


function getRange(y1, y2) {

  var arr = [];

  for (var i = y1; i <= y2; i++) {
    arr.push(i)
  }

  return arr;
}

var output = getLeapYear(2000, 2012);
console.log(output);