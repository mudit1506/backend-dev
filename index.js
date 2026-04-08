import express from "express";

let app = express()
let port = 8000;

app.get("/", (req, res)=>{
    res.send("hii  this is new app")
}) // we cannot pass multiple response at once because header will create problem.


app.post("/home", (req, res)=>{
    console.log(req.body);
    let{id,name}=req.body
    res.send("home page")
})


app.listen(port, ()=>{
    console.log(" connect");
})