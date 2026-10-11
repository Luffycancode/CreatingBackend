const button = document.getElementById("Button");
const api = "https://www.omdbapi.com/?apikey=42d5d9fa";
const MovieDetails = document.getElementById("MovieDetails");
const menu = document.querySelector(".menu");

button.addEventListener("click", () => {

    const GetMovieName = document.getElementById("MovieName").value.trim();

    if (GetMovieName === "") {
        MovieDetails.style.display = "block";
        MovieDetails.innerHTML = `
            <h2 style="color:red; text-align:center;">
                ❌ Please enter a movie name!
            </h2>
        `;
        return;
    }

    const AddMovieName = `${api}&t=${GetMovieName}`;

    fetch(AddMovieName)
        .then((response) => response.json())
        .then((data) => {

            if (data.Response === "False") {
                MovieDetails.style.display = "block";
                MovieDetails.innerHTML = `
                    <h2 style="color:red; text-align:center;">
                        ❌ Movie not found!
                    </h2>
                `;
                return;
            }

            const rating = Number(data.imdbRating);
            let recommendation = "";

            if (rating >= 8) {
                recommendation = "<h2 style='color:limegreen; text-align:center;'>🍿 Must Watch!</h2>";
            } else if (rating >= 6) {
                recommendation = "<h2 style='color:orange; text-align:center;'>👍 Worth Watching</h2>";
            } else {
                recommendation = "<h2 style='color:red; text-align:center;'>👎 Skip It</h2>";
            }

            MovieDetails.style.display = "block";
            menu.style.marginTop = "50px";

            MovieDetails.innerHTML = `
                <div class="movie-card">

                    <div class="poster-section">
                        <img src="${data.Poster}" alt="${data.Title}">
                        ${recommendation}
                    </div>

                    <div class="movie-info">
                        <h2>${data.Title}</h2>

                        <p><strong>Year:</strong> ${data.Year}</p>
                        <p><strong>Genre:</strong> ${data.Genre}</p>
                        <p><strong>Director:</strong> ${data.Director}</p>
                        <p><strong>Actors:</strong> ${data.Actors}</p>
                        <p><strong>IMDb Rating:</strong> ⭐ ${data.imdbRating}</p>
                        <p><strong>Plot:</strong> ${data.Plot}</p>
                    </div>

                </div>
            `;
        })
        .catch((error) => {
            console.error(error);

            MovieDetails.style.display = "block";
            MovieDetails.innerHTML = `
                <h2 style="color:red; text-align:center;">
                    ❌ Something went wrong. Please try again.
                </h2>
            `;
        });

});