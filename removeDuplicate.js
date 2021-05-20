



const removeDuplicate = (arr) => {

  var newArr = [];

  var pointer = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (pointer !== arr[i]) {
      newArr.push('yup')
    }
    newArr.push('nope')
  }
return newArr
}


console.log(removeDuplicate([23, 12, 25, 12]));

