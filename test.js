// how to find duplicate element in an array
// let arr = [1,2,4,3,4,2];
// function duplicate(arr){
//     let dup = []
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] === arr[j]){
//                 dup.push(arr[i])
//             }
//         }
//     }
//     console.log(dup);

// }
// console.log(duplicate(arr));

// this is not a valid solution 

// const duplicate=(arr)=>{
//     let duplicatearr= arr.filter((element, index, arr)=> arr.indexOf(element) !== index)
//     console.log(duplicatearr);
// }
// duplicate(arr)

// how to find the max and min value in and array without using built in method [Masth.max or Math.min]

// let arr = [1,2,4,3,5];

// function maxValue(arr){
//     let response= arr.reduce((a,b)=>a>b?a:b)
//     console.log(response);
// }
// maxValue(arr)

// function minValue(arr){
//     let response= arr.reduce((a,b)=>a<b?a:b)
//     console.log(response);
// }
// minValue(arr)

// let max=arr[0];

// function maxvalue (arr){
//     for(let e of arr){
//        if(max<arr[e]){
//         max= arr[e];
//        }
//     }
//     return max
// }
// let min=arr[0];

// function minvalue (arr){
//     for(let e of arr){
//        if(min>arr[e]){
//         min= arr[e];
//        }
//     }
//     return min
// }
// console.log(minvalue(arr))

// How to find the second largest value and remove the first largest value in an array

// function secondLargest(arr){
//     let firstLargest= Math.max(...arr);
//     console.log(firstLargest);
//     // removing the first largest value from an array
//     let newArr = arr.filter((element)=> element !== firstLargest)
//     console.log(newArr);

//     let secondLargestValue= Math.max(...newArr)
//     console.log("second Largest value is ", secondLargestValue);

// }
// secondLargest(arr)

// 4. How to find the missing number in an integer array from 1 to 10

// let arr=[1,2,3,6,7,9,10];

// function missingNumber(arr){
//     let missing= [];
//     for(let i=1; i<=10; i++){
//         if(arr.indexOf(i) < 0){ // agr index nai aya to -1 
//             missing.push(i)
//         }
//     }
//     console.log(missing);

// }
// missingNumber(arr)

// 5. How to find even and odd numbers in an array

// let arr= [1,2,3,4,5];

// function findEven(arr){
//     let even = [];
//     for(let i=0; i<=arr.length-1; i++){
//         if(arr[i]%2 === 0){
//             even.push(arr[i])
//         }
//     }
//     console.log(even,"Even");
// }
// findEven(arr);

// function findOdd(arr){
//     let odd=[];
//     for(let i=0; i<=arr.length-1; i++){
//         if(arr[i]%2 !== 0){
//             odd.push(arr[i])
//         }
//     }
//     console.log(odd, "Odd");

// }
// findOdd(arr)

// 6. How to find the sum of all elements in an array

// let array = [1,2,3,4,5];

// function sumOfAllElement(array){
//     let sum=0;
//     for(let i=0; i<array.length; i++){
//         sum += array[i]
//     }
//     console.log(sum);

// // method 2
//     // let sum = array.reduce((a,b)=>a+b)
//     // console.log(sum);

// }
// sumOfAllElement(array)

// 7. How to find the factorial of a given number

// let num = 5;

// function factorial(num){
//     if(num===1) return 1;
//     return num* factorial(num-1)
// }
// console.log(factorial(num))

// function factorial(num){
//     if(num==1) return 1;
//     let fact=1;
//     for(let i=2; i<=num; i++){
//         fact = fact*i;
//     }
//     console.log(fact);
// }
// factorial(num);

// 8. How to find prime numbers

// let num = 25;

// function prime(num) {
//     if (num === 1) {
//         console.log("not a composite or a prime number")
//         return false;
//     }
//     if (num === 2) return true
//     if (num % 2 === 0) return false;
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true;
// }
// console.log(prime(num))

// 9. How to find vowels in a string

// let string = "hello world"

// function vowel(str){
//     const vowelLetter="aAeEiIoOuU";
//     let temp="";
//     for(let i=0; i<str.length; i++){
//         if(vowelLetter.includes(str[i])){
//             temp += str[i];
//         }
//     }
//     return temp
// }
// console.log(vowel(string));

// 10. How to reverse a string

// let str="feesuot";

// function reverse(str){
//     let rev= str.split("").reverse().join("")
//     console.log(rev);   
// }
// reverse(str)

// function reverse(str){
//     let rev="";
//     for(let i=str.length-1; i>=0; i--){
//         rev += str[i]
//     }
//     return rev;
// }
// console.log(reverse(str))

// 11. How to find if a string is a palindrome

// let str = "madam";

// function palindrome(str){
//     let reverse = str.split("").reverse().join("");
//     if(str === reverse){
//         return true;
//     } 
//     else{
//         return false
//     }
// }
// console.log(palindrome(str))

// function palindrome(str){
//     let reverse="";
//     for(let i=str.length-1; i>=0; i--){
//         reverse += str[i];
//     }
//     if(str === reverse){
//         return true;
//     }
//     else{
//         return false
//     }

// }
// console.log(palindrome(str))

// 12. How to swap two variables

// let a=10;
// let b=67;

// let temp=a;
// a=b
// b=temp

// console.log("a",a);
// console.log("b",b);

// 13. How to swap two variables without using a third variable

// let a=10;
// let b=20;

// [a,b]=[b,a]

// console.log("a",a);
// console.log("b",b);

// 14. How to merge and sort two arrays

// let arr1=[1,3,5,7]
// let arr2 =[2,4,6,8,11];
// let arr3= [];

// // let arr3=[...arr1,...arr2]
// // let sortedarr=arr3.sort((a,b)=>a-b)
// let i=0;
// let j=0;
// let k=0


// while(arr1.length>i && arr2.length>j){
//     if(arr1[i]<arr2[j]){
//         arr3[k++] =arr1[i++]
//     }
//     arr3[k++] = arr2[j++]
// }
// while(arr2.length>j){
//     arr3[k++] = arr2[j++]
// }
// while(arr1.length>i){
//     arr3[k++]= arr1[i++]
// }

// console.log(arr3);


// 15. How to find factors of a given integer

// let num = 12;

// function factors(num) {
//     let i = 1;
//     let f = [];
//     for (let i = 1; i <= Math.floor(num / 2); i++) {
//         if (num % i === 0) {
//             f.push(i);
//         }
//     }
//     return f
// }
// console.log(factors(num));

// 16. How to find the intersection of two arrays

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [2, 4, 6, 9, 8];

// function intersection(arr1, arr2) {
// let arr3 = [];
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             arr3.push(arr1[i])
//         }
//     }
// }
// return arr3;
//-------------------------------
// let arr3=[];
// for(e of arr1){
//     if(arr2.includes(e)){
//         arr3.push(e)
//     }
// }
// return arr3

// }
// ----------------------------------
// let intersectionV = arr1.filter((e,i)=>arr2.includes(e))
// console.log(intersectionV);


// console.log(intersection(arr1, arr2))

// 17. How to find the union of two arrays
// let arr1 =[1,2,3,4,5,6];
// let arr2 = [5,6,7,8,9];

// let arr3 = new Set([...arr1,...arr2])
// let response = Array.from(arr3) // this will convert this set into array
// console.log(response);

// 18. How to convert Celsius into Fahrenheit and Fahrenheit into Celsius

// function cIntoF(c){
//     return (c*9/5)+32
// }
// console.log(cIntoF(26));
// function fIntoC(f){
//     return (f-32)*5/9
// }
// console.log(fIntoC(78.8));

// 19. How to convert kilometers into miles

// function kilometersIntoMiles(km){
//     // return km*(0.621371)
//     return km/1.609344
// }
// console.log(kilometersIntoMiles(100));

// 20. Program to make the first letter of a string uppercase

// let str = "touseef";
// console.log(str[0].toUpperCase());

// let remainingSection = str.slice(1)
// console.log(remainingSection);
// let firstLetter=str[0].toUpperCase()
// console.log(firstLetter+remainingSection);

// 21. write a function to return the sum of all number from 1 to N

// let num = 10000000000;

// function sumOfAll(num){
//     let sum = 0;
//     for(let i=0; i<=num; i++){
//         sum += i;
//     }
//     return sum;
// }
// // console.log(sumOfAll(num));

// function another(num){
//     return num*(num/2)+(num/2);
// }
// console.log(another(num));

// 22. reverse a string without using build in method and without using extra variable 

// let string = "hello";

// function reverseStr(string) {
//     for(let i=string.length-1; i>=0; i--){
//         string += string[i]
//     }
//     return string.slice(string.length/2);
// }
// console.log(reverseStr(string))

// 23. check Armstrong number or not 
// let num = 153;

// function isArmstrong(num) {
//     let original= num
//     let sum = 0;
//     let temp = num
//     while (temp>0) {
//         let single = temp % 10;
//         sum += single ** 3;
//         temp = Math.floor(temp/10);

//     }
//     console.log(temp);

//     if(original === sum){
//         return true;
//     }
//     else{
//         return false
//     }


// }
// console.log(isArmstrong(num))

// 24. Anagrams (earth,heart) same spelling

// function anagrams(str1, str2){
//     if(str1.length !== str2.length) return false;
//     let obj = {};
//     for(let ch of str1){
//         obj[ch] = (obj[ch] || 0) + 1
//     }
//     for(let ch of str2){
//         if(obj[ch]){
//             obj[ch]--;
//         }
//         else{
//             return false
//         }
//     }
//     return true

// }
// console.log(anagrams("earthh","hearth"))
// -------------------best way----------------------------
// function isAnagram(str1, str2){
//     if(str1.length !== str2.length) return false;
//     for(let ch of str1){
//         if(str2.indexOf(ch)<0){
//             return false;
//         }
//         else {
//             return true
//         }
//     }
// }
// console.log(isAnagram("race","acer"))

// 25. sort charcter in descending or by frequency or counting of each character 
// let str= "aabccc";
// function sortDescByFrequency(str){
//     let obj={};
//     for(let ch of str){
//         obj[ch]= (obj[ch] || 0)+1
//     }
//     console.log(obj);
//     let sort= Object.entries(obj).sort((a,b)=>b[1]-a[1])
//     console.log(sort);
//     let result=sort.map(([char, count])=> char.repeat(count)).join("")
//     console.log(result);
// }
// console.log(sortDescByFrequency(str))

// check for All alphabets in the sentence or not (pangram)

// let str = "The quick brown fox jumps over the lazy dog"

// let str = "The quick brown "

// function isPangram(str) {
//     let pangram = "abcdefghijklmnopqrstuvwxyz"
//     let toLowerletter = str.toLowerCase()
//     for (let ch of pangram) {
//        if(!toLowerletter.includes(ch)){
//         return false
//        }
//     }
//     return true;
// }
// console.log(isPangram(str))
// -----------------------------------
// function isPangram(str){
//     let toLowerCase = str.toLowerCase()
//     let set = new Set(toLowerCase)
//     return set.size === 27; 
// }
// console.log(isPangram(str));

// 26. write a function to retuern a longest suffix among all strings in an array

// let strArr= ["singing", "dancing", "ringing"];

// function suffix(arr){
//   let reversed= arr.map((word)=>word.split("").reverse().join(""))
// //   console.log(reversed);
//   let firstWord = reversed[0];
//   let result= '';
//   for(let i=0; i<firstWord.length; i++){
//     let currentCh = firstWord[i];
//     if(reversed.every(word=>word[i]===currentCh)){
//         result+=currentCh
//     }else{
//         break
//     }
//   }
//   return result.split("").reverse().join("")

// }
// console.log(suffix(strArr))

// 27. function to reverse the every third word of the sentence
// let str="my name is touseef and Usama is my friend"

// function reverseEveryThirdWord(str){
//     let arr = str.split(" ")
//     for(let i=2; i<=arr.length-1; i+=3){
//         let reverse = arr[i].split("").reverse().join("")
//          arr[i] = reverse;
//     }
//     return arr.join(" ");
// }
// console.log(reverseEveryThirdWord(str))

// 28. write a function to delete all vowel letter from a string without using split or replace method

// function removeVowel(str){
//     let vowel = "aeiou";
//     let newStr = str.toLowerCase();
//     let result= ""
//     for(let i=0; i<newStr.length; i++){
//         if(!vowel.includes(newStr[i])){
//             result+= newStr[i];
//         }
//     }
//     return result
// }
// console.log(removeVowel(str));

// -------------------------two pointer-----------------------

// 1. reverse an array.

// let arr = [1, 2, 3, 4, 5, 6];
// function reverseArr(arr) {
//     let i = 0;
//     let j = arr.length - 1;

//     while (i < j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
//     return arr
// }
// console.log(reverseArr(arr));

// 2. putting all 0 to the left side and all 1 at the right side using pointer.
// let arr=[1,0,0,0,1,1,1,0,1,0];

// let i=0;
// let j=0;

// while(i<arr.length){
//    if(arr[i]===1){
//     i++;
//    }
//    if(arr[i] ===0){
//     let temp = arr[i];
//     arr[i]=arr[j]
//     arr[j]= temp;
//     i++;
//     j++;
//    }
// }
// console.log(arr);

// -------------------pattern programming---------------------

// 1. How to print square in console
// function printSquare(n){
//     for(let i=0;i<=n; i++){
//         for(let j=0; j<n; j++){
//             process.stdout.write("* ");

//         }
//         console.log("*")
//     }
// }
// console.log(printSquare(5))

// 2. How to print Right angle triangle 📐
// function rightAngleTriangle(n){
//     for(let i=0; i<=n; i++){
//         for(let j=0; j<=i; j++){
//             process.stdout.write("* ")
//         }
//         console.log(" ");

//     }
// }
// console.log(rightAngleTriangle(5));

// 3. How to create inverted right triangle

// function invertedRightTriangle(n){
//     for(let i=0; i<=n; i++){
//         for(let j=n; j>=i; j--){
//             process.stdout.write("* ")
//         }
//         console.log(" ");

//     }
// }
// console.log(invertedRightTriangle(5));

// 4. How to create left angle triangle
// function leftAngleTriangle(n){
//     for(let i=0; i<=n; i++){
//         for(let j=n; j>=i; j--){
//             process.stdout.write(" ")
//         }
//         for(let k=0; k<=i; k++){
//             process.stdout.write("*")
//         }        
//         console.log(" ");
//     }
// }
// console.log(leftAngleTriangle(5))

// 5. How to draw cross (X) in console

// function drawX(n){
//     for(let i=1; i<=n;i++){
//         for(let j=1; j<=n; j++){
//             if(i===j || i+j==n+1){
//                 process.stdout.write("*")
//             }
//             else{
//                 process.stdout.write(" ")
//             }
//         }
//         console.log(" ");
//     }
// }
// console.log(drawX(7));

// 6. How to draw V shape in console

// function drawV(n){
//     for(let i=0; i<=n; i++){
//         for(let j=0; j<=n+n; j++){
//             if(i==j || i+j==n+n){
//                 process.stdout.write("*")
//             }else{
//                 process.stdout.write(" ")
//             }
//         }
//         console.log(" ");

//     }
// }
// console.log(drawV(6))

// 1. stack emplementation

class Stack {
    constructor(item) {
        this.item = [];
    }
    push(element) {
        this.item.push(element)
    }
    pop() {
        this.item.pop()
    }
    peek() {
        return this.item[this.item.length - 1]
    }
    clear() {
        return this.item = []
    }
    isEmpty() {
        return this.item === 0
    }
    size() {
        return this.item.length
    }
    print() {
        return console.log(this.item.join("->")
        )
    }
}
const newStack = new Stack();
newStack.push(2);
newStack.push(2);
newStack.push(2);
// newStack.pop()
// newStack.peek()
// newStack.print()

// console.log(newStack.size());

// 2. Queue implementation

class Queue {
    constructor() {
        this.item = [];
    }
    enqueue(element) {
        this.item.push(element)
    }
    //first item will be deducted from array
    dequeue() {
        this.item.shift()
    }
    front() {
        if (this.isEmpty()) {
            return "queue is empty"
        }
        return this.item[0]
    }
    isEmpty() {
        return this.item.length === 0;
    }
    size() {
        return this.item.length
    }
    print() {
        return console.log(this.item.join("<-"))
    }
}
const queue = new Queue();
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()
// queue.print()
// console.log(queue)
// console.log(queue.front());
// console.log(queue.size());

// -------------------------LinkList------------------------

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null
    }
    addToFirst(data) {
        const node = new Node(data)
        if (this.head) {
            node.next = this.head
            this.head = node
        } else {
            this.head = node;
        }
    }
    addToLast(data) {
        const node = new Node(data);
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node
    }
    removeFromFirst() {
        let current = this.head;
        if (current) {
            this.head = current.next;
        } else {
            return console.log("linklist is already empty");
        }
    }
    removeFromLast() {
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    addAt(index, data) {
        const node = new Node(data)
        let current = this.head;
        if (index === 0) {
            node.next = this.head
            this.head = node;
        } else {
            for (let i = 0; i < index - 1; i++) {
                current = current.next
            }
            node.next = current.next;
            current.next = node;
        }
    }
    removeAt(index){
        let current= this.head;
        if(index === 0){
            this.head = current.next
        }else{
            for(let i=0; i<index-1; i++){
                current= current.next
            }
            current.next= current.next.next
        }
    }
    middleNode(){
        let slow=this.head;
        let fast = this.head
        while(fast.next){
            fast=fast.next.next
            slow=slow.next
        }
        return slow;
    }
    thirdLast(){
        let current= this.head;
        while(current.next.next.next){
            current=current.next
        }
        return current;
    }
    firstRepeating(){
        let current = this.head
        let set = new Set()
        while(current){
            if(set.has(current.data)){ return current.data}
            set.add(current.data)
            current= current.next;
        }
        console.log(current.data);
        
    }
    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + "->"
            current = current.next
        }
        result += "null"
        return result
    }
}
const linklist = new LinkList();
linklist.addToFirst(2)
linklist.addToFirst(3)
linklist.addToFirst(2)
linklist.addToFirst(1)
// linklist.removeFromFirst()
linklist.addToLast(5)
// linklist.removeFromLast()
linklist.addAt(0, 0)
linklist.removeAt(0)
// linklist.firstRepeating()
// linklist.print()
// console.log(linklist.middleNode());
console.log(linklist.firstRepeating());
console.log(linklist.print());
