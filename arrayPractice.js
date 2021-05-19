

var swapString = (arr) => {

  var str = ''
  for (var i = 0; i < arr.length; i++) {
    debugger;
    //console.log(`row ${arr.indexOf(arr[i])}`);
    // return `row ${arr.indexOf(arr[i])}`
    // for (var j = 0; j < arr[i].length; j++) {
    //   console.log(arr[i][j])

    // }

      // str += `row ${arr.indexOf(arr[i])}`
      console.log(`row ${i}`)
      for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j])
        // str += arr[i][j]
       // return arr[i][j]

      }

  }
  // return str;
}


console.log(swapString([[1, 2, 1, 24], [8, 11, 9, 4]]));
