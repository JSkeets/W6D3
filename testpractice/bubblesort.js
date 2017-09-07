  function bubbleSort(arr) {
    debugger;
    let sorted = false;
    while (!sorted) {
      sorted = true;
      for (var i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) break;
        let next = arr[i+1];

        if (arr[i] > next) {
          [arr[i],next] = [next,arr[i]];
          sorted = false;
        }
      }
    }
    return arr;

  }

console.log(bubbleSort([1,5,4,3,2,7,6,9]));
