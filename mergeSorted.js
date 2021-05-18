

// var merge = function(nums1, m, nums2, n) {

//   //make a copy of the first m elements of nums1
//   var nums1Copy = new Array();
//   for (var i = 0; i < m; i++) {
//     nums1Copy[i] = nums1[i];
//   }
//   //read pointer for nums1Copy and nums2 respectively
//   var p1 = 0;
//   var p2 = 0;

//   //compare elements from nums1Copy and nums2 and write the smallest to nums1

//   for (var p = 0; p < m+n; p++) {
//     //we also need to ensure that p1 and p2 are not over the boundaries of their respective arrays
//     if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
//       nums1[p] = nums1Copy[p1++];
//     } else {
//       nums1[p] = nums2[p2++];
//     }
//   }


// };

var merge = function (nums1, m, nums2, n) {

for (var i = 0; i < n; i++) {
  nums1[i+m] = nums2[i];
}

nums1.sort()
}


var output = merge([1,2,3,0,0,0], 3, [2,5,6], 3);
console.log(output)
