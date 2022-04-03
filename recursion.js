 function multip(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multip(arr, n - 1) * arr[n - 1];
    }
  }

console.log(multip([5,1,2,3],4))