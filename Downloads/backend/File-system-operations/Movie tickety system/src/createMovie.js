import fs from "fs";

function createMovie(req, res) {
  try {
    const { name, ticketPrice } = req.body;

    if (!name || !ticketPrice) {
      return res.status(400).send("Movie name and ticket price required");
    }

    let movies = [];

    if (fs.existsSync("movies.json")) {
      movies = JSON.parse(fs.readFileSync("movies.json", "utf-8"));
    }

    const newMovie = {
      movieId: Date.now(),
      name,
      ticketPrice,
    };

    movies.push(newMovie);

    fs.writeFileSync("movies.json", JSON.stringify(movies, null, 2));

    res.status(201).send({
      message: "Movie Added Successfully",
      movie: newMovie,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Movie Creation Error");
  }
}

export default createMovie;