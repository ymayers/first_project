// const getCategories = async () => {
//   const resp = await axios.get(
//     "https://api.thecatapi.com/v1/categories",
//     api_key
//   );
//   resp.data;
//   DOMAIN = basedomain;

// button.addEventListener("click", async () => {
//   const movie = userInput.value.toLocaleLowerCase();
//   const response = await axios.get(`${DOMAIN}?apikey=62a3311&t=${movie}`);
//   const title = response.data.Title;
//   const year = response.data.Year;
//   const poster = response.data.Poster;
//   let movieList = [{ movieName: `${title}`, yearMade: `${year}` }];
//   const renderList = function(movieArr) {
//     for (let i = 0; i < movieArr.length; i += 1) {
//       const yourMovieName = document.createElement("li");
//       const yourMovieYear = document.createElement("li");
//       const yourMoviePoster = document.createElement("img");
//       yourMoviePoster.setAttribute("src", `${poster}`);
//       yourMovieName.innerHTML = movieList[i].movieName;
//       yourMovieYear.innerHTML = movieList[i].yearMade;
//       yourMoviePoster.innerHTML = movieList[i].poster;
//       movieTitle.append(yourMovieName);
//       movieTitle.append(yourMovieYear);
//       moviePoster.append(yourMoviePoster);
//     }
//   };
//   renderList(movieList);
// });
