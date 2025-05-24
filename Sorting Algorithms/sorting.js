// 1. Bubble Sort

// let array = [5,4,3,2,1];

// for(let i=0; i<=array.length-1; i++){
//     // outer loop is controlling the phase only
//     for(let j=0; j<=array.length-i; j++){
//         //inner loop iterates for the inner values and swapping
//         if(array[j]>array[j+1]){
//             let temp = array[j];
//             array[j] = array[j+1];
//             array[j+1] = temp;
//         }
//     }
// }
// console.log(array);

// 2. Selection Sort

// let array = [5, 4, 3, 2, 1];

// for (let i = 0; i <= array.length - 1; i++) {
//   let min = i;
//   for (let j = i+1; j < array.length; j++) {
//     if (array[j] < array[min]) {
//       min = j;
//     }
//   }
//     if(array[i] !== array[min]){
//         let temp = array[i];
//         array[i] = array[min];
//         array[min] = temp;
//     }
// }

// console.log(array);

// 3. Insertion Sort

// let array = [5, 4, 3, 2, 1,8,1,0];

// for (let i = 1; i < array.length; i++) {
//   let key = array[i];
//   let j = i - 1;
//   while (j >= 0 && array[j] > key) {
//     array[j + 1] = array[j];
//     j--;
//   }
//   array[j + 1] = key;
// }
// console.log(array);

// 4. Merge and sort

let arr1 = [2, 4, 6, 8];
let arr2 = [1, 3, 5, 7];

let arr3 = new Array(arr1.length + arr2.length);
// console.log(arr3);
let i = 0;
let j = 0;
let k = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    arr3[k] = arr1[i];
    i++;
    k++;
  }
else {
    arr3[k] = arr2[j];
    j++;
    k++;
  }
}
while (i < arr1.length) {
  arr3[k] = arr1[i];
  i++;
  k++;
}
while (j < arr2.length) {
  arr3[k] = arr2[j];
  j++;
  k++;
}

console.log(arr3);
