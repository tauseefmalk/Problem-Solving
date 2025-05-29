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

// let arr1 = [2, 4, 6, 8];
// let arr2 = [1, 3, 5, 7];

// let arr3 = new Array(arr1.length + arr2.length);
// // console.log(arr3);
// let i = 0;
// let j = 0;
// let k = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     arr3[k] = arr1[i];
//     i++;
//     k++;
//   }
// else {
//     arr3[k] = arr2[j];
//     j++;
//     k++;
//   }
// }
// while (i < arr1.length) {
//   arr3[k] = arr1[i];
//   i++;
//   k++;
// }
// while (j < arr2.length) {
//   arr3[k] = arr2[j];
//   j++;
//   k++;
// }

// console.log(arr3);

// 5. Binary search (trees)

// linear search(iterate on every element) will word on unsorted array && sorted array  means on every array
// binary search is always on sorted array

// let arr = [1, 2, 3, 4, 5];

// let first = 0;
// let last = arr.length - 1;

// function binarySearch(arr, first, last, target) {
//   while(first <= last){
//     let mid = Math.floor((first+last)/2);
//   if(arr[mid] == target){
//     return mid;
//   }
//   else if(arr[mid]<target){
//     first= mid+1;
//   }
//   else{
//     last= mid-1
//   }
//   }
// }
// console.log(binarySearch(arr, first, last, 5));

// 6. Merge Sort

// const array = [5, 8, 3, 4, 7, 2, 9,32,2,67,1,21,45];
// let first = 0;
// let last = array.length - 1;

// function divide(array, first, last) {
//   if (first >= last) return;
//   let mid = Math.floor((first + last) / 2);
//   divide(array, first, mid);
//   divide(array, mid + 1, last);
//   conqourer(array, first, mid, last);
// }

// function conqourer(array, first, mid, last) {
//   let arr3 = new Array(last - first + 1);
//   let i = first;
//   let j = mid + 1;
//   let k = 0;
//   while (i <= mid && j <= last) {
//     if (array[i] < array[j]) {
//       arr3[k++] = array[i++];
//     } else {
//       arr3[k++] = array[j++];
//     }
//   }
//   while (i <= mid) {
//     arr3[k++] = array[i++];
//   }
//   while (j <= last) {
//     arr3[k++] = array[j++];
//   }
//   let p = 0;
//   let q = first;

//   while (p < arr3.length) {
//     array[q++] = arr3[p++];
//   }
// }

// divide(array, first, last);
// console.log(array);

// 7. Quick sort

// let array= [5,4,3,2,1,0];

// // for putting the pivot to the exact position and getting the pivot index
// function pivotIndex (arr, first, last ){
//   let pivot= array[first]
//   let i= first+1;
//   let j= last
//   while(i<=j){
//     while(i<=last && arr[i]<pivot) i++
//     while(j>=first && arr[j]>pivot) j--
//     if(i<j){
//       swap(arr, i,j)
//     }
//   }
//   swap(arr,j,first)
//   return j;
// }

// function swap(arr, i, j){
//   let temp= arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }

// function quickSort (arr, first, last){
//   if(first>=last) return
//   let p= pivotIndex(arr,first,last)
//   quickSort(arr, first, p-1)
//     quickSort(arr, p+1, last)
// }
// quickSort(array,0,array.length-1)
// console.log(array);

// let array=[5,3,1,2,4,10,20];

// let srt=array.sort((a,b)=>a-b)
// console.log(srt);
// console.log(Date.now());


// class BankAccount {
//   #balance
//   constructor(name, accountNumber, balance = 0) {
//     this.name = name;
//     this.accountNumber = Date.now();
//     this.#balance = balance;
//   }
//   withdraw(value) {
//     if (this.#balance < value) {
//       console.log("not enough balance to withdraw", value);
//     } else {
//       this.#balance = this.#balance - value;
//       console.log(value, "withdraw successfully");
//     }
//   }
//   deposite(value) {
//     if (value < 0) {
//       console.log("value can't be less than zero");
//     } else {
//       this.#balance = this.#balance + value;
//     }
//   }
//   takingLoan(value) {
//     console.log(`taking loan of ${value}`);
//   }
//   get balance(){
//    return this.#balance
// }
// }
// class CurrentAccount extends BankAccount {
//   takingLoan(value) {
//     console.log("loan successflly taken");
//     // this.balance = this.balance + value;
//     this.deposite(value)
//   }
// }
// class SavingAccount extends BankAccount {
//   takingLoan(value) {
//     console.log("loan successflly taken half");
//     // this.balance = (this.balance + (value/2));
//     this.deposite(value/2)
//   }
// }

// const touseefAccount= new CurrentAccount("touseef")
// // touseefAccount.takingLoan(100000)
// // touseefAccount.getBalance()

// // console.log(touseefAccount);
// const usamaAccount= new SavingAccount("Usama")
// // usamaAccount.takingLoan(10000)
// usamaAccount.deposite(10000)
// usamaAccount.takingLoan(500)
// console.log(usamaAccount.balance)
// // console.log(usamaAccount)


