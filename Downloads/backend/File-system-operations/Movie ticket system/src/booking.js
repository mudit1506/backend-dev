import fs from "fs";

function booking(req, res) {
  try {
    const { userId, movieIds } = req.body;

    if (!userId || !movieIds || movieIds.length === 0) {
      return res.status(400).send("UserId and MovieIds are required");
    }

    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
    const movies = JSON.parse(fs.readFileSync("movies.json", "utf-8"));

    const user = users.find((u) => u.userId == userId);
    if (!user) return res.status(404).send("User not found");

    const bookedMovies = movies.filter((m) => movieIds.includes(m.movieId));

    if (bookedMovies.length === 0) {
      return res.status(404).send("Movies not found");
    }

    const newBooking = {
      bookingId: Date.now(),
      user,
      movies: bookedMovies,
    };

    let bookings = [];

    if (fs.existsSync("bookings.json")) {
      bookings = JSON.parse(fs.readFileSync("bookings.json", "utf-8"));
    }

    bookings.push(newBooking);

    fs.writeFileSync("bookings.json", JSON.stringify(bookings, null, 2));
 
    res.status(201).send({
      message: "Booking Successful",
      booking: newBooking,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Booking Error");
  }
}

export default booking;