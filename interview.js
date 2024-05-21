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

function sumArray(arr) { 

  return arr.reduce((total, num) => total + num, 0); 

} 

How to access the Redux store outside a component?

To access the redux store outside a react component, Redux connect the function works great for regular React components.

The examples below show how to access a JWT token from the Redux store.

Option 1: Export the Store

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
Here, we are creating the store and export it. This will make it available to other files. Here we’ll see an api the file making a call where we need to pass a JWT token to the server:

import store from './store'

export function getProtectedThing() {
  // grab current state
  const state = store.getState()

  // get the JWT token out of it
  // (obviously depends on how your store is structured)
  const authToken = state.currentUser.token

  // Pass the token to the server
  return fetch('/user/thing', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => res.json())
}
Option 2: Pass the value from a React Component

It’s simple to get access to the store inside a React component — no need to pass the store as a prop or import it, just use the connect() function from React Redux, and supply a mapStateToProps() a function that pulls out the data.

import React from 'react'
import { connect } from 'react-redux'
import * as api from 'api'

const ItemList = ({ authToken, items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          <button
            onClick={
              () => api.deleteItem(item, authToken)
            }>
            DELETE THIS ITEM
          </button>
        </li>
      )}
    </ul>
  )
}

const mapStateToProps = state => ({
  authToken: state.currentUser && state.currentUser.authToken,
  items: state.items
})

export connect(mapStateToProps)(ItemList)

How to dispatch an action on load?

For class component, you can dispatch an action in componentDidMount() method and in render() the method you can verify the data.

/**
 * Dispatch an action on load
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return this.props.isLoaded
      ? <div>{'Loaded'}</div>
      : <div>{'Not Loaded'}</div>
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.isLoaded
})

const mapDispatchToProps = { fetchData }

export default connect(mapStateToProps, mapDispatchToProps)(App)

How to reset the state in Redux?

To reset the state in Redux, you can define a new action and a corresponding reducer that returns the initial state of your application.

Here’s an example:

// Define a reset action type
const RESET_STATE = 'RESET_STATE';

// Define an action creator function for the reset action
export const resetState = () => ({
  type: RESET_STATE
});

// Define a reducer that handles the reset action
const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    return initialState; // replace initialState with your initial state object
  }
  return state;
};

Write a JavaScript function to check if a given number is prime. 

Interviewers can analyze the candidate’s knowledge of JavaScript algorithms and mathematical concepts. They expect the candidate to translate a mathematical concept into functional code.  

Sample answer: To check if a given number is prime, loop from 2 to the square root of the number. If any integer evenly divides it, the number is not prime. 

function isPrime(num) { 

  if (num <= 1) return false; 

  for (let i = 2; i <= Math.sqrt(num); i++) { 

    if (num % i === 0) return false; 

  } 

  return true; 

} 

Write a function that accepts a number and returns its factorial (e.g., factorial of 5 is 5 x 4 x 3 x 2 x 1). 

By presenting this question in the interview, hiring managers can assess the capability of the candidate to handle numeric calculations. They can also determine how well the interviewee can pay attention to handling edge cases, if applicable. 

Sample answer: 

function factorial(num) { 

  if (num === 0 || num === 1) { 

    return 1; 

  } else { 

    return num * factorial(num – 1); 

  } 

} 

What does the .bind() method do?
The .bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. This is tricky because it involves understanding how the this keyword works and how it can be explicitly set.

const obj = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = obj.getX;
console.log(unboundGetX());  // Output: undefined

const boundGetX = unboundGetX.bind(obj);
console.log(boundGetX());  // Output: 42

//If you have two strings, how can you check if they are anagram?

var stringFirst = "Dormitory";
var stringSecond = "Dirty room";

isAnagram(stringFirst, stringSecond); // check if true

function isAnagram(stringFirst, stringSecond) {
// Changing both words to lowercase to remove case insensitivity
var x = stringFirst.toLowerCase();
var y = stringSecond.toLowerCase();

// Sorting both the strings and joining the output array to a string and then comparing the results
x = x.split("").sort().join("");
y = y.split("").sort().join("");

return x === y;
}

// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

function sortByKey(arr, key) { 

  return arr.sort((a, b) => a[key] – b[key]); 

} 
