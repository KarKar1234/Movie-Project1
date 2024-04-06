const apiKey = "cc07a8da0f01533db9bb47fa33ea6e00";

// movie details https://api.themoviedb.org/3/movie/157336?api_key=cc07a8da0f01533db9bb47fa33ea6e00
// movie trailer https://api.themoviedb.org/3/movie/157336/videos?api_key=cc07a8da0f01533db9bb47fa33ea6e00

document.addEventListener("DOMContentLoaded", function () {
async function movieSearch(e) {
    e.preventDefault();

    const searchTerm = document.querySelector('input[name="moviesearch1"]').value;
    console.log(searchTerm);

    const apiURL = `https://search.imdbot.workers.dev/?q=${searchTerm}`;
    
    const apiURL2 = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=cc07a8da0f01533db9bb47fa33ea6e00`

    
    const response2 = await fetch(apiURL2);
    const movieData2 = await response2.json();
    console.log(movieData2);
   

    const response = await fetch(apiURL);
    const movieData = await response.json();
    console.log(movieData);

    const Title = movieData.description[0]["#TITLE"];
    const Year = movieData.description[0]["#YEAR"];
    const Actors = movieData.description[0]["#ACTORS"];
    const Poster = movieData.description[0]["#IMG_POSTER"];
    const Summary = movieData2.results[0].overview;
    const voteAverage = movieData2.results[0].vote_average;
    const voteCount = movieData2.results[0].vote_count;

    document.querySelector(".middle-search-area").classList.remove("display-initial")

    document.querySelector(".middle-search-area").classList.add("display-results")





    const movieResults = `
    <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
        <div class="card text-white card-has-bg click-col result-card" id="${Title}" style="background-image: url('${Poster}')">
            <img class="card-img" src="${Poster}" alt="${Title}">
        <div class="card-img-overlay d-flex flex-column">
        <div class="card-body">
            <small class="card-meta mb-2">${Year}</small>
                <h4 class="card-title mt-0 text-white ">${Title}</h4>
                <small class="card-meta">Actors: ${Actors}</small>
    </div>
    <div class="card-footer">
      <div class="media">
        <div class="media-body">
          <p>Rating: ${voteAverage}</p>
          <small>${Summary}</small>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`;

document.querySelector("#movie-results").innerHTML = movieResults;
}



document.querySelector("#search-form1").addEventListener("submit", function(e) {
  e.preventDefault();
  movieSearch(e);
});

document.querySelector("#bot1").addEventListener("touchstart", function(e) {
  e.preventDefault();
  movieSearch(e);
});


  
  // document.querySelector("#search-form1").addEventListener("submit", movieSearch);
  // document.querySelector("#search-form1").addEventListener("touchstart", movieSearch);


  // document.addEventListener("DOMContentLoaded", function () {
  //   document.querySelector(".hamburger").addEventListener("click", function () {
  //     document.querySelector(".navbar-nav").classList.toggle("showNav");
  //   });
  // });




});