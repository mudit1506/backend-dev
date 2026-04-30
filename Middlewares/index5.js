import xss from "xss"
const app = express();
app.use(express.json());
const sanitizeInput = (req, res, next) => {
    for (let key in req.body) {
        if (typeof req.body[key] === "string") {
            req.body[key] = xss(req.body[key]);
        }
    }
    next();
};
app.use(sanitizeInput);
app.post("/submit", (req, res) => {
    res.json({
        message: "Data sanitized successfully",
        data: req.body
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});