let s1="Akarsh";
let s2="Verma";
let s3="My name is Akarsh Verma";

console.log(s1);
console.log(s2);
console.log(s3);

//String length
let text = "Karatometer";
console.log("length:",text.length);

//Access Character (Index)
let Word ="Node";
console.log(Word[0]);


//toUpperCase()
console.log("Upper:",s1.toUpperCase());
//toLowerCase()
console.log("lower:",s1.toLowerCase());

//trim()
console.log("Trimmed:",s3.trim());
console.log("Trimmed:",s3.trimEnd());
console.log("Trimmed:",s3.trimStart());

//include()
let sentence="I love JavaScript";
console.log("Includes 'love';",sentence.includes("love"));

//startsWith()
let email="admin@gmail.com";
console.log("Start with admin:",email.startsWith("admin"));

// endsWith()
console.log("Ends with .com:",email.endsWith(".com"));

//slice()
let lang="JavaScript"
console.log("Slice (0,4):",lang.slice(0,4));

//substring()
console.log("Substring (4,10):",lang.substring(4,10));

//replace()
let greet="hello World";
console.log("Replace:",greet.replace("World","Node"));

//replaceAll()
let hiText="hi hi hi";
console.log("Replace All:",hiText.replaceAll("hi","hello"));

//split()
let names="Aman,Ravi,Neha";
let nameArray=names.split(" , ");
console.log("Split:",nameArray);

//concat()
let a="hello"
let b="Akarsh"
console.log("Concat:",a.concat(" ",b));

//Template Literals
let userName="Akarsh";
let age=22;
console.log(`My name is ${userName} and age is ${age}`);

//String Comparison
let password="1234";
let inputPass="1234";
console.log("Password Match:",password === inputPass);

// String Immutability
let str="hello";
str.toUpperCase();
console.log("Immutable String:",str);

//Email Validation
let userEmail="user@gmail.com";

if(userEmail.includes("@") && userEmail.endsWith(".com")){
    console.log("Valid Email");
}else{
    console.log("Invalid Email");
}

//Real Backend Example - Password Trim
let userPassword=" admin123 ";
userPassword=userPassword.trim();
console.log("Trimmed Password:",userPassword);

//Count Words in String
let sentence2="Node js backend learning";
let words=sentence2.split(" ");
console.log("Word Count:",words.length);

// replaceAll in String
let input="I&Am&AbC"
let output=input.replaceAll("&" ," ");
console.log(output.toLowerCase());

let given="aabbdcc";