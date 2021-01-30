// document.addEventListener("DOMContentLoaded", () => {


//     console.log("Best way to put Javascript");


// })

// console.log("second best and the most accepted way ");

// var x = 1; --> number

// var x = "sarthakbatra"; --> string

// var x = true; --> boolean

// var x = function () {
//     console.log("checking the data type");
// } --> function

// var x = ["first", "second"] --> object

// var x;

// console.log(typeof x)

// var user = "Sarthak Batra"

// function getName() {
//     let user = "Manish Kamti";

//     console.log("my name is " + user)
// }

// console.dir(getName)


// getName();


// var and let both are valid in the blocks in which they are defined, however
// if the value of var is changed inside a block, it can carry it upwards to the block it is defined in
// Let does not carry the value changed outside the block

// function varAndLet() {
//     let x = 2
//     {
//         let x = 7
//         console.log("Inside the block--> " + x);
//     }
//     console.log("Value in between first scope and second scope--> " + x);
//     {
//         let x = 8
//         console.log("Second Block Value--> " + x);
//     }
//     console.log("Outside the block--> " + x);
// }

// varAndLet();


// function constDemo() {
//     const x = "Rajat"
//     const x = "Manish"
// }

// conditional expressions

// if (truthy) {
//     // first expression
// } else {
//     // falsey second expressions
// }

// Falsey resolutions in Javascript
// 0
// -0
// 0n
// ""
// null
// NaN
// undefined

// if (-0) {
//     console.log("first expression")
// } else {
//     console.log("second expression");
// }

// Show falsey for all remaining values: HW

// if ("Sarthak") {
//     console.log("This will print for truthy");
// }

// Operators

// Arithmetic
// Assignment
// Comparison
// Logical
// Ternary

// Arithmetic

// Modulus
// console.log("Modulus => divides first oeprand with second operand and returns the remainder ")
// console.log(5 % 3)

// Increment
// let checkVar = 5;

// checkVar++;

// console.log(checkVar);

// Decrement
// let checkVar = 5;

// checkVar--;

// console.log(checkVar);

// // Unary Negation
// let checkVar = 5;

// console.log(-checkVar);

// Unary Plus
// let checkVar = "5";
// console.log(checkVar);
// console.log(+checkVar);

// let checkVar = -5;

// console.log(+checkVar)
// let checkVar = "a";
// console.log(+checkVar);


// Exponential

// let checkVar = 5;

// console.log(checkVar ** 2)

// Assignment Operators

// Assignment
// let x



// console.log(x)

// Addition Operator
// x += 5

// console.log(x);

// Negative Operator
// x -= 5

// console.log(x);

// Multiplication Operator

// x *= 5;
// console.log(x)

// Division
// x /= 5
// console.log(x);


// Remainder


// x %= 5
// console.log(x);


// Exponential

// x = 6;
// x **= 5
// console.log(x);


// Comparison Operators
// Equal

// x = 20
// console.log(x == "20");

// Not Equal
// console.log(x != "20");

// Deeply Equal

// console.log(x === "20");

// Strict Not Equal

// console.log(x !== "20")

// Greater than 

// console.log(20 > 10);

// Greater than Equal to 

// console.log(20 >= 10);

// Less than 

// console.log(100 < 120);

// Less than Equal to 

// console.log(10 <= 20);

// Logical Operators


// const fruits = ["apple", "banana", "grape"]
// AND
// if (fruits.includes("apple") && fruits.includes("banana")) {
//     console.log("Both fruits exist")
// }
// OR

// if (fruits.includes("ball") || fruits.includes("banana")) {
//     console.log("at least one exists")
// }
// NOT

// if (!fruits.includes("coconut")) {
//     console.log("coconut does not exist")
// }

// Ternary Operator

// let x = false

// if (x == true) {
//     console.log("case 1");
// } else {
//     console.log("case 2");
// }

// x == true ? console.log("case 1") : console.log("case 2");

// LOOPS

// for
// for (initialization; condition; increment / decrement) {
//     // code to iterate
// }

// for (let i = 0; i < 10; i++) {
//     if (i == 0 || i == 1) {
//         console.log(i + " fruit in the basket")
//     } else {
//         console.log(i + " fruits in the basket");
//     }
// }

// Arrays

// let stringsArray = ["Prashant", "Manish", "Honnaraju", "Pushpinder", "Rajat"];

// let numberArray = [23, 4, 5, 67, 7];

// let booleanArray = [true, true, false, true];

// let mixedArray = [23, "Honnaraju", true];
// console.log(stringsArray);
// console.log(mixedArray[0]);
// console.log(mixedArray[1]);
// console.log(mixedArray[2]);
// console.log(stringsArray.length);
// console.log(typeof mixedArray)

// for (let i = 0; i < stringsArray.length; i++) {
//     console.log(stringsArray[i])
// }

// let movies = ["Chak De", "Sapiens", "The White Tiger", "Iron Man", "Sapiens", "3 idiots", "Sapiens"];

// let count = 0;
// for (let i = 0; i < movies.length; i++) {
//     if (movies[i] == "Sapiens") {
//         count++;
//     }
//     console.log(count);
//     console.log(movies[i])
// }

// Objects

// key value pair
// const batch = [
//     {
//         name: "Prashant",
//         lastName: "Kumar",
//         favMovie: "Chak De! India",
//         bollywood: true
//     },
//     {
//         name: "Manish",
//         lastName: "Kamti",
//         favMovie: "The White Tiger",
//         bollywood: false
//     },
//     {
//         name: "Honnaraju",
//         lastName: "R",
//         favMovie: "Iron Man",
//         bollywood: false
//     }]

// console.log(batch);

// for (let i = 0; i < batch.length; i++) {
//     if (batch[i].bollywood == false) {
//         console.log("This is not a bollywood movie")
//     }
// }

// functions

// function functionName(args, params) {
//     write the instructions
// }
// 
// let square = number => console.log(number ** 2);

// Arrow Functions

// const Honnaraju = document.querySelector("button");

// console.log(Honnaraju);

// function interact() {
//     console.log("Interact with me, class");
// }

// const interact = function () {
//     console.log("Another type of writing a function");
// }

// let interact = () => console.log("And yet another type of function");


// Honnaraju.addEventListener("click", interact);

// While Loop

// --> Runs a piece of code untill the condition inside the while block is 

// let i = 0;

// while (i < 10) {
//     if (i == 0 || i == 1) {
//         console.log(i + " fruit in the basket");
//     } else {
//         console.log(i + " fruits in the basket");
//     }
//     i++;
// }

// Javascript Object Functions
// Length

// let str = "hello"

// console.log(str.length);

// let arr = ["one", "two", "three", "four"];

// console.log(arr.length);

// let arrOfObjs = [
//     {
//         name: "Sonam",
//     },
//     {
//         name: "Prashant",
//     },
//     {
//         name: "Dixita",
//     },
//     {
//         name: "Pushpinder",
//     },
//     {
//         name: "Manish",
//     },
// ]
// console.log(arrOfObjs.length);


// CONCAT

// -->Joins one array/string with another and returns new array/string`
// --> Non destructive (does not mutate the initial arrays/strings)
// --> returns and new array / string which can be captured and manipulated in a variable

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

// str1 = "Hello, my name is "
// str2 = "John Doe"

// console.log(str1.concat(str2));

// JOIN
// --> Join puts all the elements of an array and returns it as a string
// --> Non destructive (does not mutate the initial arrays)
// --> returns and new array which can be captured and manipulated in a variable
// --> The seperator can be passed as the constructor in the join funtion. It accepts a string seperator. In the absence of a seperator, it defaults to a comma.

// let arrStr = ["alpha", "bravo", "charlie", "delta"]

// let singleString = arrStr.join(" ")

// console.log(singleString);

// SHIFT
// --> removes the first element of an array
// --> DESTRUCTIVE. 
// --> Changes the initial array

// let checkArray = ["Dravid", 12, "Dhoni", 7, "Virat Kohli", 9]
// console.log(checkArray.length);
// console.log(checkArray.shift());
// console.log(checkArray.length);

// POP
// --> removes the last element of an array
// --> DESTRUCTIVE
// --> Changes the initial array

// let checkArray = ["Dravid", 12, "Dhoni", 7, "Virat", 9, "This should be popped"]

// console.log(checkArray.length);
// console.log(checkArray.pop());
// console.log(checkArray.length);

// UNSHIFT
// --> adds element(s) at the beginning an array
// --> DESTRUCTIVE
// --> Changes the initial array
// --> The element(s) that you wish to add at the beginning of the array must be passed as comma seperated values inside the unshift function constructor


// const array1 = [1, 2, 3];
// console.log(array1.unshift(4));
// console.log(array1);

// PUSH 
// --> Adds element(s) at the end of an array
// --> DESTRUCTIVE
// --> Changes the initial array
// --> The element(s) that you wish to add at the end of the array must be passed as comma seperated values inside the unshift function constructor

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);

// console.log(animals);

// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);


// SLICE
// NOT DESTRUCTIVE
// --> The element(s) that you wish to add at the end of the array must be passed as comma seperated values inside the unshift function constructor
// Slice creates and returns a new array with start and end index that you pass in the constructor of the slice function.// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));



// arr.splice("INDEX WHERE WE HAVE TO DO OPERATION","NO OF ELEMENTS TO BE REMOVED","ELEMENTS VALUE TO BE ADDED {OPTIONAL}")//DESTRUCTIVE
//return the deleted element in an array const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months)


// FOREACH
// --> runs a function for each element of the array function
// --> returns undefined
// NON DESTRUCTIVE

// let arr = ["something", "five", "delhi", "kolkata", "mumbai"]

// console.log(arr.length);
// arr.forEach(
//     elementOfTheArray => console.log(elementOfTheArray)
// )

// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].length)
// }


// SPLIT



// 26thJan2021

// EventListeners
// AddEventListener

// Syntax
// Target.addEventListener("event", function)
// Target.addEventListener("event", function)




// let demo1 = document.querySelector(".demo1");

// let count = 0

// function toggleClassFunction() {
//     demo1.classList.toggle('BGCheck')
//     count++
//     console.log(count);
//     if (count > 9) {
//         demo1.removeEventListener("click", toggleClassFunction)
//     }
// }

// demo1.addEventListener("click", toggleClassFunction);

// Query Selectors

// let demo2 = document.querySelector(".demo1")

// // console.log(demo2);

// let allQuerySelector = document.querySelectorAll(".demo1")
// let IDExample = document.getElementById("AELD");
// let ClassExample = document.getElementsByClassName("BGCheck");

// console.log(allQuerySelector);
// console.log(IDExample);
// console.log(ClassExample);

// MATH

// Math.Random
// --> Function
// --> Returns and floating point number b / w 0 and 1
// console.log(Math.random());



// Math.floor
// --> function
// rounds a decimal/float down to nearest whole integer
// console.log(Math.floor(1.2));

// Math.ceil
// --> function
// rounds a decimal/float up to nearest whole integer
// console.log(Math.ceil(1.2));


// let arr = ["Swiss", "Scotland", "Finland", "Sweden", "Nainital"];

// const randomNumber = Math.random() * arr.length;

// const index = Math.floor(randomNumber);

// console.log("Today I am visiting--> " + arr[index]);



// Date

// const today = new Date();

// const date = today.getDate();
// console.log(`today's date--> ${date}`);

// const day = today.getDay();
// console.log(`today's day--> ${day}`);

// const fullYear = today.getFullYear();
// console.log(`fullYear--> ${fullYear}`);

// const hours = today.getHours();
// console.log(`hours--> ${hours}`);

// const BdayShahank = new Date("Thursday, February 25, 2021 11:59:59 PM");

// const mlstoBdayS = BdayShahank - today;

// const minutes = mlstoBdayS / 60000

// console.log(minutes);

// let countdowntimer = document.querySelector("#bdayshahank");


// countdowntimer.innerText = Math.round(minutes);

// 28th Jan 2021
// DOM Manipulations

// Adding Elements To The DOM

// 1. append
// 2. appendChild

let blocklevel = document.querySelector("#domm")
console.log(blocklevel);

// syntax to append/child

// target.append("hellow world")
// target.append("node")

// block.append("Hello World. ")



// create elements to add 
// const body = document.body;
// const div = document.createElement("div")
// body.append(div)

// Modifying element text 

// const blockelement = document.querySelector("#domm")

// console.log(blockelement.textContent);
// console.log(blockelement.innerText);

// Modifying HTML inside the elements / nodes

const body = document.body;
const div2 = document.createElement("div")

// not to be used because security risk
// div2.innerHTML = "<h1>We made this</h1>"
// blocklevel.appendChild(div2);

//  safe way of modifying inside element/node


const headingNode = document.createElement("h1");
headingNode.innerText = "This is the new removal candidate";

div2.append(headingNode);
body.append(div2)

// console.log(div2);

// Remove element from dom 

// first way of removing
// target.remove()
// div2.remove();

// second way of removing
// target.removeChild(node)
// body.removeChild(div2)

// Modifying attributes of an element

// accessing attribute
// target.getAttribute("attributeName");

console.log(blocklevel.getAttribute("title"));

// blocklevel.setAttribute("title", "We made this from the JS"); changes the attribute if present
// blocklevel.setAttribute("random", "does it show"); creates the attribute if absent
// blocklevel.removeAttribute("title") removes the attribute

// console.log((blocklevel.dataset));
// const Manish = {
//     firstName: "Manish"
// }

// Manish.lastName = "Kamti"

// console.log(Manish);

// blocklevel.dataset.lastName = "Kamti"

// console.log((blocklevel.dataset));

// MANIPULATE STYLES 

// target.style.cssProperty = "value"

// blocklevel.style.color = "red"
// blocklevel.style.fontSize = "24px"


// MANIPULATE CLASSES

// add classes

// syntax
// target.classList.add("class name")
console.log(blocklevel.classList);

blocklevel.classList.add("changingBG");
// blocklevel.classList.remove("changingBG");

blocklevel.classList.toggle("changingBG");
blocklevel.classList.toggle("BGRED");

// Classes do NOT exist in JS before ECMA2015. 
// As per the ECMA2015 or ES6 standards, class keyword is a syntactical sugar

class ghost {
    constructor(ghostName, ghostColor, ghostStartingPosition) {
        this.name = ghostName;
        this.color = ghostColor;
        this.position = ghostStartingPosition
    }
}

let first = new ghost("Joker", "black", 1);
let second = new ghost("Captain Marvel", "Green", 3);
let third = new ghost("Vamp", "red", "TEN");

console.log(first);
console.log(second);
console.log(third);


// Homework for 28th Jan

const hwblock = document.getElementById('timeBlock');

const days = document.createElement("div");
const hours = document.createElement("div");
const mins = document.createElement("div");

days.style.border = "1px solid red";
days.style.padding = "10px";
days.style.marginRight = "10px";

hours.style.border = "1px solid red";
hours.style.padding = "10px";
hours.style.marginRight = "10px";

mins.style.border = "1px solid red";
mins.style.padding = "10px";

days.style.float = "left";
hours.style.float = "left";
mins.style.float = "left";


const dHead = document.createElement("h1");
const dData = document.createElement("h3");

dHead.innerText = "Days";

days.style.textAlign = "center";
days.append(dHead);
days.append(dData);


const mHead = document.createElement("h1");
const mData = document.createElement("h3");

mHead.innerText = "Mins";

mins.style.textAlign = "center";
mins.append(mHead);
mins.append(mData);


const hHead = document.createElement("h1");
const hData = document.createElement("h3");

hHead.innerText = "Hours";

hours.style.textAlign = "center";
hours.append(hHead);
hours.append(hData);

hwblock.append(days);
hwblock.append(hours);
hwblock.append(mins);

const btn = document.getElementById("getBirthday");

btn.addEventListener("click", function getBirthday() {
  var birthday = new Date("Nov 9, 2021").getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();

    var diff = birthday - now;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    dData.innerText = days;
    hData.innerText = hours;
    mData.innerText = minutes;

  });
});