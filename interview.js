//Q1
const input1 = {a:1, b:2, c:3, d:10, e:12};
const input2 = {a:2, e:12, f:6, d:10};

const output = {d:10, e:12}; //order is not important //output

function func(input1,input2){
let obj = {};

for(let i in input1){
  if(input1[i] === input2[i]){
    obj[i] = input1[i];
  }
}
  return obj;
}
console.log(func(input1,input2));

//Q2 find second largest number in below arrays

const input3 = [1,5,2,-2,9,7];
const input4 = [8,2,10,4,6,-6];

let newArray = [...new Set(input3)].sort((a,b)=>a-b);
let newArray2 = [...new Set(input4)].sort((a,b)=>a-b);

console.log(newArray[newArray.length-2]);
console.log(newArray2[newArray2.length-2]);

//without using set

function result(arr){
    let input = arr.sort((a,b)=>a-b);
    let res = input[input.length-1];

  for(let i=input.length-2;i>=0;i--){
    if(res != input[i]){
      res = input[i];
      break;
    }
  }
  return res;
}

console.log(result(input3));
console.log(result(input4));

//Q3 rotate array by 2 places output:11,4,-2,2,7

const roArray = [2,7,11,4,-2];

for(let i = 0;i<2;i++){
  let temp = roArray[0];
  for(let i = 0;i<roArray.length;i++){
    roArray[i] = roArray[i+1];
  }
  roArray[roArray.length-1] = temp
}
console.log(roArray);

//Q4 Missing number in array

const inn = [5,7,9,11,15,17];

//for all missing
// for(let i=0;i<inn.length-1;i++){
//   let current = inn[i];
//   let next = current+2;
//   if(next === inn[i+1]){
//     continue
//   }else{
//     console.log(next);
//     //break; //for first missing number only
//   }
// }

//optimize code for above only using if

for(let i=0;i<inn.length-1;i++){
  let current = inn[i];
  let next = current+2;
  if(next !== inn[i+1]){
    console.log(next);
    break;
  }
}

//Q4 missing number in 3 multiple
const ban = [3,6,9,12,18];
let num = ban[0];
for(let i=1;i<ban.length;i++){
  let next = num * (i+1);
  if(next !== ban[i]){
    console.log(next);
    //break; if we want first number
  }
}

 const str = "This is JavaScript Code";
 const str2 = "JavaScript";

//approch 1 (noob)
// let part1 = str.substring(0,4).split('').reverse().join('');
// let part2 = str.substring(5,7).split('').reverse().join('');
// let part3 = str.substring(8,18).split('').reverse().join('');
// let part4 = str.substring(19,23).split('').reverse().join('');

// console.log(`${part1} ${part2} ${part3} ${part4}`);

//approch 2
//best way to do above code

// Split the string into words, reverse each word, and join them back
const reverseStr = str.split(' ').map(word => word.split('').reverse().join('')).join(' ');

console.log(reverseStr);

//approch 3 (for custom customReverse) 
//as you know string cannot be reverse in javascript so we have created custom customReverse function using prototype
String.prototype.customReverse = function () {
  const characters = this.split(''); // Split the string into an array of characters
  const reversedCharacters = characters.reverse(); // Reverse the characters
  const reversedString = reversedCharacters.join(''); // Join the characters back into a string
  return reversedString;
};

// Example usage:
const reversedStr = str.customReverse();
console.log(reversedStr);

//Q5
const greet = "this is JavaScript code you have to find max occur char";
// Create an object to store character frequencies
const charFrequency = {};

// Iterate through the string and count character occurrences
for (const char of greet) {
  if (char !== ' ') { // Exclude spaces from counting
    //console.log(char);
    if (charFrequency[char]) {
      charFrequency[char]++;
    } else {
     charFrequency[char] = 1;
    }
  }
}

// Find the character with the maximum occurrence
let maxChar = '';
let maxCount = 0;

for (const char in charFrequency) {
  if (charFrequency[char] > maxCount) {
    maxChar = char;
    maxCount = charFrequency[char];
  }
}

console.log(`The character "${maxChar}" occurs ${maxCount} times.`);


const input = [2, 7, 11, 4, -2];

const outputSum = [];

for(let i = 0;i<input.length;i++){
  let sum = 0;
  for(let j = 0;j<input.length;j++){
    if(i !== j){
      sum += input[j];
    }
  }
  outputSum.push(sum);
}
console.log(outputSum);

 /* Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame. 

Interviewers expect the candidate to showcase their ability to clearly explain the purpose of the debounce function and its usage in scenarios where function calls need to be controlled. They are looking for the person’s ability to articulate technical concepts clearly. 

Sample answer: By delaying the execution of the debounce function until the specified time frame has passed, the frequency can be limited. */

function debounce(func, delay) { 

  let timer; 

  return function() { 

    clearTimeout(timer); 

    timer = setTimeout(func, delay); 

  }; 

} 
