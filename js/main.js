// var elMovies = $_(".movies");
// var elMovieTemplate = $_("#movie-card-template").content;

// elMovies.innerHTML = "";

// var createMovieElement = function (movie) {
//   var elNewMovie = elMovieTemplate.cloneNode(true);

//   elNewMovie.querySelector(".movie__img").src = movie.img;
//   elNewMovie.querySelector(".movie__img").alt = movie.name;
//   elNewMovie.querySelector(".movie__name").textContent = movie.name;
//   elNewMovie.querySelector(".movie__type").textContent =
//     movie.type.join(", ");

//   return elNewMovie;
// };

// movie.forEach(function (movie) {
//   elMovies.appendChild(createMovieElement(movie));
// });

var elCards = document.querySelector(".movies");
for (var i = 0; i < movies.length; i++) {
  var elMovieDiv = document.createElement("li");
  elMovieDiv.setAttribute("class", "card-list")

  var elMovieImg = document.createElement("img")
  elMovieImg.src = "https://picsum.photos/200/150";
  elMovieImg.setAttribute("class", "photo")
  var elMovieTittle = document.createElement("h2");
  elMovieTittle.textContent = movies[i].Tittle;

  var elMovieSummary = document.createElement('p')
  elMovieSummary.textContent = movies[i].summary;
  elMovieSummary.setAttribute("class", "movies-p")

  var elMovieYear = document.createElement('p')
  elMovieYear.textContent = movies[i].movie_year;
  
  elMovieDiv.appendChild(elMovieImg);
  elMovieDiv.appendChild(elMovieTittle);
  elMovieDiv.appendChild(elMovieSummary);
  elMovieDiv.appendChild(elMovieYear);
  elCards.appendChild(elMovieDiv);
  console.log(elMovieDiv);
}