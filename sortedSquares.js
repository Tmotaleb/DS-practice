

var sortedSquares = function(nums) {
  
  return nums.map(x => x * x).sort((a, b) => a-b)

};


var output = sortedSquares([-4, -1, 0, 3, 10]);
console.log(output)