function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return mergeHelper(left, right);
}

function mergeHelper(left, right) {
  let ans = [];
  while(left.length !== 0  && right.length !==  0 ) {
    if (left[0] > right[0]) {
      ans.push(right.shift());
    } else {
      ans.push(left.shift());
    }
  }
  return ans.concat(left).concat(right);

}
console.log(mergeSort([3,1,2,1,2,3,4,15,1]));
