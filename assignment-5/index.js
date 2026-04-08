
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";


import addBooks from "./ques-4/Q4Createbook.js";
import updateBook from "./Q4Updatebook.js";
import deleteBook from "./ques-4/Q4Deletebook.js";
import readBook from "./ques-4/Q4Readbook.js";
import authorBook from "./ques-1/Q1Authorfiltering.js";
import yearBook from "./ques-1/Q1Yeariltering.js";

dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));


let port = process.env.PORT || 8001
app.get("/", (req,res)=>{
    res.send("<h1>Hii</h1>");
});


app.post("/add",addBooks);
app.post("/update/:id",updateBook);
app.post("/delete/:id",deleteBook);
app.post("/read",readBook);
app.post("/author",authorBook);
app.post("/year",yearBook);



app.listen(port,()=>{
    console.log("Server Connected on the PORT");
})