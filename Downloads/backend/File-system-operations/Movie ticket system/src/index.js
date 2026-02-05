import express from "express";
import createUser from "./src/createUser.js";
import loginUser from "./src/login.js";
import createMovie from "./src/createMovie.js";
import booking from "./src/booking.js";
import summary from "./src/summary.js";

const app = express();
app.use(express.json());

app.post("/user", createUser);
app.post("/login", loginUser);

app.post("/movie", createMovie);

app.post("/booking", booking);

app.get("/summary/:userId", summary);

app.listen(8080, () => console.log("Server Running"));