



const removeDuplicate = (arr) => {

  //check for duplicates

  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    debugger;
    if (isNaN(arr[i]) === true) {
      arr[i] = arr[i].toLowerCase();
    }

    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    } else if (newArr.indexOf(arr[i]) > -1){
      continue;
    }
  }

return newArr;
}


console.log(removeDuplicate(['a', 'A', 2, 5, 7, 7, 'a', 5, 0, 0]));

