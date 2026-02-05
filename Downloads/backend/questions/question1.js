// Create a Node.js progeam that reads a text file,counts the number of words ,and writes the count to a new file.

const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }

  let wordCount = 0;

  if (data.trim().length > 0) {
    wordCount = data.trim().split(/\s+/).length;
  }

  fs.writeFile("output.txt", `Number of words: ${wordCount}`, (err) => {
    if (err) {
      console.error("Error writing file:", err.message);
      return;
    }
    console.log("Word count written successfully");
  });
});