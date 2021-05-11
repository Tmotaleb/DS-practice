var duplicateZeros = function(arr) {

 for (var i = 0; i < arr.length; i++) {
   var index = arr[i + 1]
   arr.splice(arr[i+1], 0, '0')
 }
 console.log(arr)
 return arr;
};

var output = duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])  //[1, 0, 2, 3, 0, 4, 5, 0]
console.log(output)
//[1, 0, 0, 2, 3, 0, 0, 4]


var output2 = duplicateZeros([1, 2, 3])
console.log(output2)
//[1, 2, 3]P