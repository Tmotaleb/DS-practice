
// //Declare an array of 6 elements
// var arr = new Array(6)
// var length = 0;

// //add 3 elements to the array
// for (var i = 0; i < 3; i++) {
//   arr[length] = i;
//   length++;
// }


// //add a 4th element, we will add number 10
// for (var i = 0; i < arr.length; i++) {
//   arr[length] = 10;
//   length++;
//   console.log(`Index ${i} contains ${arr[i]}`);
// }



//Inserting at the start of an array /shifting


for (var i = 3; i >= 0; i--) {
  arr[i] = arr[i+1];
}
console.log(arr)

