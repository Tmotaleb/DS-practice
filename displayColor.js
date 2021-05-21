

const displayColor = (arr) => {

  for (var i = 0; i < arr.length; i++) {
    debugger;
    if (i === 0) {
      console.log(`1st choice is ${arr[i]}`);
    }
    if (i === 1) {
      console.log(`2nd choice is ${arr[i]}`);
    }
    if (i === 2) {
      console.log(`3rd choice is ${arr[i]}`);
    }
    if (i > 3) {
      console.log(`${i}th choice is ${arr[i]}`);
    }
  }
}

var output = displayColor(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow", 'pink']);
console.log(output)