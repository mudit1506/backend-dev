function totalBill(movies) {
  let total = 0;

  movies.forEach((movie) => {
    total += movie.ticketPrice;
  });

  return total;
}

export default totalBill;