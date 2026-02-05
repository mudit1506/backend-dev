// 1 Hello world
console. log("Node, Ja Backend Started");// console is used to print the data

// 2 variables
// let is used to  declare a varaible in block scope which we can also redeclare later if need 
let name = "Aman";	 //strings 
let age = 22;		 //number
const country = "India"; //const is used to deaclare a varible which we constant though out the code
let isStudent = true;	 //bollean

console.log(name);
console.log(age); 
console.log(country); 
console.log(isStudent);

// Data Types Example
let score;              // undefined - when just a variable is decleared without its value;
let data = null;        // null- when data is null 

console.log(score); 
console.log(data);

// object - It is the collection of key-value pair
let user = {
      name: "Rahul",
      age: 25,
      email: "rahul@gmail.com"
};
console.log(user);
console.log(user.name);

// Array - Its is used to store same type of data where length can be pre defined.It store linear data.
let numbers = [18, 29, 30, 40];
let users = ["Aman", "Ravi", "Tiba"];
console.log(numbers);
console.log(users[1]);


// 6 Operators
let a = 19;
let b = 5;
console.log("Add:", a+b);