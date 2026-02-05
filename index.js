import registerMember from "./src/member.js";
import borrowBooks from "./src/borrowRecord.js";
import book from "./src/book.js";


console.log(registerMember("101","akarsh","normal"));
console.log(book("1001","maths","500"));
console.log(borrowBooks("akarsh","maths"));