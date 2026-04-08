import express from "express";
const app2 = express();
const port = 8000;

app2.use(express.urlencoded({ extended: true }));
app2.set('view engine', 'ejs');

app2.get('/contact', (req, res) => {
  res.render('contact');
});

app2.post('/contact', (req, res) => {
  const { Name, Email, Message } = req.body;

  console.log("Form Data:", Name, Email, Message);

  res.send(`${Name}, your message has been received!`);
});

app2.use((req, res) => {
  res.status(404).render('404', {
    pageTitle: "404 Error!",
    message: "Page Not Found!"
  });
});


app2.listen(port, () => {
  console.log("Server running at http://localhost:", port);
});