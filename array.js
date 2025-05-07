function leftRotationByOne(cpyArr) {
  let last = cpyArr[0];
  for (let i = 0; i < cpyArr.length - 1; i++) {
    cpyArr[i] = cpyArr[i + 1];
  }
  cpyArr[cpyArr.length - 1] = last;
  console.log(cpyArr);
}
function rightRotationByOne(cpyArr) {
  let start = cpyArr[cpyArr.length - 1];
  for (let i = cpyArr.length - 1; i > 0; i--) {
    cpyArr[i] = cpyArr[i - 1];
  }
  cpyArr[0] = start;
  console.log(cpyArr);
}

let arr = [1, 2, 3, 34, 5, 56, 78];
// leftRotationByOne(arr);
// rightRotationByOne(arr);
console.log(leftRotationByKStep(arr, 9));

function leftRotationByKStep(arr, k) {
  if (k == arr.length) return arr;
  if (k > arr.length) {
    k = k - arr.length;
  }
  for (j = 0; j < k; j++) {
    let start = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = start;
  }
  return arr;
}
let arr2 = [1, 2, 3, 34, 5, 56, 78];

function rightRotationByK(arr, k) {
  for (let i = 0; i < k; i++) {
    let temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      console.log(arr[j]);
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }
  return arr;
}
console.log(rightRotationByK(arr2, 3));
