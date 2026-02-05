let names = ["Aman", "Ravi","Neha"];
console.log(numbers);
console.log(names);

//length
console.log("Length:", numbers.length);

//push() - add at the end
numbers.push(60);
console.log("After push:", numbers);47

//pop() - remove from end
numbers.pop();
console.log("After pop:", numbers)

//unshift() - add at start 
numbers.unshift();
console.log("After unshift:",numbers);

//shift()-remove from start
numbers.shift();
console.log("After shift:",numbers);

//indexOf()
console.log("Index of 30:",numbers.indexOf(30));

//includes()
console.log("Includes 40:",numbers.includes(40));

//slice()- does NOT change original array 
let sliceArray=numbers.slice(1,4);

//concat()
let moreNumbers = [70, 80];
let c = numbers.concat(moreNumbers);
console.log("Concat:", c);

//join()
console.log("Join:", names.join("-"));

//reverse()
names.reverse();
console.log("Reverse:",names);

//sort()
let unsorted = [5,2,9,1];
unsorted.sort();
console.log("Sort:", unsorted);

//forEach()
numbers.forEach((num)=>{
    console.log("ForEach value:", num);
});

//map() - new array return
let doubled = numbers.map((num)=>num*2);
console.log("Map (double):", doubled);

//filter()
let evenNumbers = numbers.filter((num)=> num%2 == 0);
console.log("Filter (even):",evenNumbers);

//find()
let found = numbers.find((num)=> num>30);
console.log("Find (>30):", found);

//findIndex()
let foundIndex = numbers.findIndex((num)=> num == 40);
console.log("Find Index (40):", foundIndex);

//every()
let allPositive = numbers.every((num)=> num>0);
console.log("Every (>0):", allPositive);

//some()
let hasBig = numbers.some((num)=> num>100);
console.log("Some (>100):", hasBig);

//flat()
let nested = [1,2,[3,4],[5,6]];
console.log("Flat:", nested.flat());

//Array.isArray()
console.log("Is Array:", Array.isArray(numbers));

//toString()
console.log("ToString:",numbers.toString());

let users = [
    {name: "Aman", age: 22},
    {name: "Ravi", age: 17},
    {name: "Neha", age: 25},
];

//Filter adults
let adults = users.filter(user => user.age >=18);
console.log("Adults:", adults);

//Get only names
let userNames = users.map(user=> user.name);
console.log("User Names:", userNames);

//Total age
let totalAge = users.reduce((sum, user)=>sum+user.age, 0);
console.log("Total Age:", totalAge);