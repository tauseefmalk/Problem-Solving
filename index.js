// 1. How to find duplicate elements in an array
// const duplicateArr = () => {
//     const arr = [1,2,4,1,4]
//     const duplarr = arr.filter((item, index, arr )=> arr.indexOf(item) !== index)
//     console.log(duplarr);
// };
// duplicateArr()

// 2. How to find max and min value in an array
// const array = [1, 2, 5, 8];
// let min = array.reduce((prev, current) => (prev < current ? prev : current));
// console.log(min);
// // Math.min
// // Math.max
// let max = array.reduce((prev, current) => (prev > current ? prev : current));
// console.log(max);
// let min = array[0];
// for(let i=1; i<= array.length-1; i++){
//     if(array[i]>min){
//         min=array[i];
//     }
// }
// console.log(min);

// 3. How to find the second largest value and remove the first largest value in an array
// const array = [1, 2, 5, 8];
// let max = array.reduce((prev, current) => (prev > current ? prev : current));
// const firstlargest = array.indexOf(max)
// array.splice(firstlargest, 1)

// let secondmax = array.reduce((prev, current) => (prev > current ? prev : current));

// console.log(secondmax);

// 4. How to find the missing number in an integer array from 1 to 10
// const array = [1,2,3,5,6,8,9,10];
// let missingvalues = [];
// for(let i=1; i<=10; i++){
//     if(array.indexOf(i) < 0){
//         // if the value is not found in the array it will return -1
//         missingvalues.push(i)
//     }
// }
// console.log(missingvalues);

// 5. How to find even and odd numbers in an array
// const array = [1,2,3,5,6,8,9,10];
// for(let i=0; i<= array.length-1; i++){
//     if(array[i]%2 === 0){
//         console.log("even", array[i]);
//     }else{
//         console.log("odd", array[i]);
//     }
// }

// 6. How to find the sum of all elements in an array
// const array = [1,2,3,5,6,8,9,10];
// let sum = 0;

// for(let i=0; i<= array.length-1; i++){
//     // sum = sum + array[i]
//     sum += array[i]
// }
// console.log(sum);

// 7. How to find the factorial of a given number
// const num=5;
// (recursion)

// const fact =(n)=>{
//     if(n == 1) return 1;
//     return n * fact(n-1);
// }
// console.log(fact(4));

//iteration methos is efficient in javascript
// let fact = 1;
// let n =4

// for(let i=1; i<=n; i++ ){
//     fact *= i;
// }
// console.log(fact);

// 8. How to find prime numbers

// prime number is which goes on 1 and itslef
// composite number more than 2 pr divide ho jayen

// const isPrime = (n) => {
//   if (n <= 1) return false; // 1 or less is not prime
//   if (n === 2) return true; // 2 is prime
//   if (n % 2 === 0) return false; // Even numbers > 2 are not prime
//   // Check odd divisors up to sqrt(n)
//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };
// console.log(isPrime(36));

// 9. How to find vowels in a string
// function vowelLetter (str){
//     let lowerCaseWord = str.toLowerCase()
//     let arr= lowerCaseWord.split("")

//     console.log(arr);
//     for(word of arr){
//         if (word==="a") {
//             console.log(word, 'vowel');
//         }
//         if (word==="e") {
//             console.log(word, 'vowel');
//         }
//         if (word==="i") {
//             console.log(word, 'vowel');
//         }
//         if (word==="o") {
//             console.log(word, 'vowel');
//         }
//         if (word==="u") {
//             console.log(word, 'vowel');
//         }
//     }
// }

// vowelLetter("TOUSEEF")

// 10. How to reverse a string

// function reverse (str) {
//     let reversestr = str.split("").reverse().join("");
//     // const reverseArray = convertToArray.reverse()
//     // const convertToString = reverseArray.join("")
//     console.log(reversestr);
// }
// reverse("hello")

// 11. How to find if a string is a palindrome

// const palindrome = "madam";

// const isPalindrom = (str) => {
//     let reverse = "";
//   const reverseStr = (str) => {
//     for (let i = str.length - 1; i >= 0; i--) {
//       reverse += str[i];
//     }
//     return reverse;
//   };
//   console.log(reverseStr(str));

//   if (reverse === str) {
//     return true;
// } else return false;

// };
// console.log(isPalindrom("touseef"));

// 12. How to swap two variables

// let var1 = "one";
// let var2 = "Two";

// let temp = "";

// temp= var1;
// var1= var2;
// var2= temp;

// console.log(var1, var2)

// 13. How to swap two variables without using a third variable

// let a = "one";
// let b = "two";

// missing semicollons

// [a, b] = [b, a];

// console.log(a,b);

// 14. How to merge and sort two arrays

// const arr1 = [1,2,4,6,8];
// const arr2 = [3,5,7,9,11];

// // [...arr1, ...arr2]
// const merge = arr1.concat(arr2)
// // console.log(merge);

// console.log(merge.sort((a,b)=> a-b));

// 15. How to find factors of a given integer

// const factor = (value) => {
//     let factors = [];
//     for(let i=1; i<=value; i++){
//         if(value % i === 0){
//             factors.push(i);
//         }
//     }
//     return factors;
// }

// console.log(factor(33));

// 16. How to find the intersection of two arrays

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// const intersection = () => {
//   let temparr = [];
//   for (let i = 0; i <= arr1.length - 1; i++) {
//     if (arr2.indexOf(arr1[i]) > -1) {
//       temparr.push(arr1[i]);
//     }
//   }
//   return temparr;
// };

// console.log(intersection());

// 17. How to find the union of two arrays

// const arr1 = [1,34,5,7,8,10];
// const arr2 = [6,7,8,9,0,12];

// const union = () => {
//     // let tempArr =[...arr1, ...arr2];
//     // // tempArr ko set me covert kraian to duplicate values hat jayengi
//     // // let u = new Set([...tempArr])
//     // let u = [...new Set(tempArr)]

//     // // if()
//     // return u

//     // second method
//     let tempArr = arr1.concat(arr2);
//     const resp = tempArr.filter((value, index, arr)=>arr.indexOf(value) === index)
//     return resp;
// }

// console.log(union())

// 18. How to convert Celsius into Fahrenheit and Fahrenheit into Celsius

// let Celsius=32;

// function convertToFarenheit (c) {
//     const f= (c*9/5) + 32
//     return f
// }
// console.log(convertToFarenheit(32))

// function convertToCelsius (f) {
//     const c= (f-32) * 5/9
//     return c
// }
// console.log(convertToCelsius(50))

// 19. How to convert kilometers into miles

// function kmIntoMiles(km) {
//   const miles = km * 0.62137119;
//   return miles;
// }

// console.log(kmIntoMiles(9));

// 20. Program to make the first letter of a string uppercase

// 1.for a single word;
// let str= "name";
// function uppercase (str) {
//     // console.log(str[0]);
//     const upc = str[0].toUpperCase()
//     return upc+str.slice(1);
    
// }
// console.log(uppercase("name"));

// 2.for a complete sentence
// let str = "hey osama, my name is touseef."

// function toUpperCase (str){
//     // ("") this will create new array from each alphabet of a string but if we put a spcae b/w "" this will create a new array for each word  like we did below
//     const array = str.split(" ");
//     console.log(array);
//     const upc = array.map((word)=>word[0].toUpperCase()+word.slice(1))
//     return upc.join(" ");
    
// }
// console.log(toUpperCase("hey osama, my name is touseef."))
