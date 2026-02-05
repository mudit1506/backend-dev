import fs from "fs";
function borrowBooks(memberId,book) {
  try {
    if (!fs.existsSync("library.json")) 
        return "No members found!";

    let members =JSON.parse(fs.readFileSync("library.json", "utf-8"));
    let member = members.find((value) => value.member=== memberId);
    if (!member) {
        return "Member not found!";
    }
    member.borrowedBooks.push(book);

    fs.writeFileSync("library.json", JSON.stringify(members, null, 2));
    return "Books borrowed successfully!";
  } 
  catch (error) {
    console.log(error);
  }
}
export default borrowBooks;