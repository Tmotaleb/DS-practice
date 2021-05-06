


var findNumbers = function(nums) {

  var counter = 0;

  for (var i = 0; i < nums.length; i++) {
    if (String(nums[i]).length % 2 === 0) {
      counter++
    }
  }
  return counter;
}



var output = findNumbers([12, 33, 445, 1233])
console.log(output)

