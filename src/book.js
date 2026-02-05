import fs from "fs";
function book(bookId,title,author,price){
    try{
        let book=[];
        let ob={
            bookId,
            title,
            author,
            price
        };
        if(fs.existsSync("book.json")){
            let data=JSON.parse(fs.readFileSync("book.json","utf-8"));
        book=data;
        }
        book.push(ob);
        fs.writeFileSync("book.json",JSON.stringify(book,null,2));
        return "book added successfully";
    }
    catch(err){
        console.log(err);
    }
}
export default book;