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

//  **--------Two pointer method----------** 

// 1., reverse an array

// let array = [1,2,3,4,5,6];

// let i=0;
// let j= array.length-1;
// while(i<=j){
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     i++;
//     j--;
// }
// console.log(array);

// 2. putting 0 to the left side and 1 at the right side using pointer

// let array = [0,1,1,0,1,0,0,1,0,1,0,1];

// let i = 0;
// let j = 0;

// while(i<=array.length-1){
//     if(array[i] === 1){
//         i++;
//     }
//     if(array[i] === 0){
//      let temp = array[i];
//      array[i] = array[j];
//      array[j]= temp;
//      j++;
//      i++;
//     }
// }
// console.log(array);

// **Patern Programming**

// 1. How to print square in console
// let n=4;
// for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//         //print star in the same line
//         process.stdout.write("* "); 
//     }
//     console.log(" "); 
// }

// 2. How to print Right angle triangle 📐
// *
// **
// ***
// ****
// let n=4
// for(let i=0; i<n; i++){
//     for(let j=0; j<=i; j++){
//         process.stdout.write("* ")
//     }
//     console.log(" ");
// }

// 3. How to create inverted right triangle
// ****
// ***
// **
// *
// let n=4;
// for(let i=0; i<n; i++){
//     for(let j=0; j<n-i; j++){
//     // for(let j=n-i; j>0; j--){
//         process.stdout.write("* ")
//     }
//     console.log(" ");
// }

// 4. How to create left angle triangle
//    *
//   **
//  ***
// ****
// let n=4;

// for(let i=0; i<n; i++){
//     for(let j=0; j<n-i; j++){
//         process.stdout.write(" ")

//     }
//     for(let k=0; k<=i; k++){
//         process.stdout.write("*")
//     }
//     console.log(" ");
// }

// 5. How to draw cross (X) in console
// *   *
//  * *
//   *
//  * *
// *   * 

// let n=11
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         if(i===j || i+j === n+1 ){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log(" ");
// }

// 6. How to draw V shape in console
// *   *
//  * *
//   * 
// let n=15;
// let m=2*n+1;

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=m; j++){
//         if(i+j===2*n || i===j){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log(" ");   
// }

// Q (two sum in an array)

// function two_sum (array, target){
// 	let pointer_1=0;
// 	let pointer_2 = array.length-1;
//     let sum =0
// while(pointer_1<pointer_2){
// sum = array[pointer_1] + array[pointer_2]
// if(sum== target){
// return true;
// }
// else if(sum<target){
// pointer_1 +=1
// }
// else pointer_2 -=1
// }
// return false
// }

// console.log(two_sum([2,7,11,54],8))

// 21. write a function to return the sum of all number from 1 to N

// function sum(num){
//     let temp=0;
//     for(let i=0; i<=num; i++){
//         temp=temp+i;
//     }
//     return temp;
// }

// console.log(sum(5))

// 22. reverse a string without using build in method and without using extra variable 

// function reverse(str){
//     let result="";
//     for(let i= str.length-1; i>=0; i--){
//         result= result+str[i]
//     }
//     return result
// }
// console.log(reverse("hello"));

//23. check Armstrong number or not 

// function isArmstrong(num){
//     let original= num;
//     let sum=0;
//     let temp=num;
//     while(temp>0){
//         let reminder = temp % 10;    // getting the last value 
//         sum += reminder ** 3;        // taking the cube and add to the sum
//         temp= Math.floor(temp/10)    // last se aik value km kr raha hai
//     }
//     return sum == original;
// }

// console.log(isArmstrong(153));

// 24. Anagrams (earth,heart) same spelling

// function isAnagrams(str1, str2) {
//     if (str1.length !== str2.length) { return false }
//     let obj = {};
//     for (let char of str1) {
//         obj[char] = (obj[char] || 0) + 1 // agr valure obj me hai to 1 daldo agr nai hai to 0
//     }
//     for (let char of str2) {
//         if (obj[char]) {
//             obj[char]--;
//         }
//         else {
//             return false
//         }
//     }
//     return true
// }
// console.log(isAnagrams("abbb", "abba"))

// 25. sort charcter in descending or by frequency or count of each character 

// function sortFrequency(str) {
    // let obj = {};
    // for (let char of str) {
    //     obj[char] = (obj[char] || 0) + 1;
    // }
    // // console.log(obj);
    // const sortedEntries = Object.entries(obj).sort((a, b) => b[1] - a[1]); // obj pr direct sort nai lagta
    
    // let result=sortedEntries.map(([char, count])=> char.repeat(count)).join("")
   // console.log(result);
 // return 1;

//     // method 2

//     let result = '';
//     for(let [char, count] of sortedEntries ){
//         for(let i=0; i<count; i++){
//             result +=char
//         }
//     }
//     return result

// }
// console.log(sortFrequency("aabbbbc"))

// 26. write a function to return a longest suffix among all strings in an array



// function isSuffix(arr){
//     // reverse the first element
//     let suffix= arr[0].split("").reverse().join("");
//     for(let i=1; i<arr.length; i++){
//         let current= arr[i].split("").reverse().join("")
//         let j=0
//         while(j<current.length && j<suffix.length && suffix[j]=== current[j]){
//             j++;
//         }
//         // now we have to seperate the matched part
//         suffix= suffix.substring(0,j) // substring jo hai wo specific ko alag kr deti hai 
//         if(suffix ==="") return ""
//     }
//     return suffix.split("").reverse().join("")
// }
// // console.log(isSuffix(["introduction", "reduction", "production"]))
// console.log(isSuffix(["singing", "ringing", "bringing"]))

// 27. function to reverse the every third letter of the sentence

// function reverseThirdLetter(str){
//     let temp=str.split(" ") // strng ko array bna diya
//     for(let i=2; i<temp.length; i+=3){
//         temp[i] = temp[i].split("").reverse().join("")
//     }
//     return temp.join(" ") // dobara string bna diya hai
// }
// console.log(reverseThirdLetter("one two three four five six seven"))

// 28. write a function to delete all vowel letter from a string 

// function deleteVowelLetters(str){
//     let vowel = "aAeEiIoOuU";
//     let result = "";
//     for(let char of str){
//         if(!vowel.includes(char)){
//             result +=char;
//         }
//     }
//     return result;
// }
// console.log(deleteVowelLetters("beautifull day"));
