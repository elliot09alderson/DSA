let arr = [3, -2, -2, 4, 1, -7, 9, -4, 2, 8, 2];
let maximum = -100;
let ans = [];
for (let i = 0; i < arr.length; i++) {
  // return the indexing from 0 to arr.length

  for (let j = i; j < arr.length; j++) {
    // for each value of i returns the indexing from i to arr.length i.e  for i = 3 j = 3,4,5,6,7...

    let sum = 0;
    for (let k = i; k <= j; k++) {
      // for each value of j it sums the indexing from j to arr.length i.e  for
      // i = 3 ;  k= 3

      ans.push(arr[k]);

      sum = sum + arr[k];
    }
    if (sum < maximum) {
      ans = [];
    }else{
        
    }
    maximum = max(sum, maximum);
  }
}

console.log(maximum);
console.log(ans);
function max(a, b) {
  if (a < b) {
    return b;
  } else {
    return a;
  }
}
