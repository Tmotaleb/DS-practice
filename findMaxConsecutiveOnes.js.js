

var findMaxConsecutiveOnes = function(num) {
  var arr = [];
  var count = 0;
  for (var i = 0; i < num.length; i++) {
      if (num[i] === 1) {
          count++
      }
      if (num[i] === 0) {
          arr.push(count);
          count = 0;
      }

  }
  arr.push(count)

  console.log(arr)
  return Math.max(...arr);
};


var output = findMaxConsecutiveOnes([1,0,1,1,0,1])
console.log(output)
// Input: num = [1,1,0,1,1,1]
// Output: 3