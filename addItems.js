

const addItems = (arr) => {

  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
    console.log(`Element ${i} = ${arr[i]}`)
  }
  return newArr;
}


console.log(addItems([23, 12, 25]));

