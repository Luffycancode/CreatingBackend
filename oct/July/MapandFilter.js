const movies = [
    {
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      imdbRating: 9.0,
      actors: ["Christian Bale", "Heath Ledger", "Michael Caine"]
    },
    {
      title: "Inception",
      genre: "Thriller",
      year: 2010,
      imdbRating: 8.8,
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
      title: "Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "Pulp Fiction",
      genre: "Crime",
      year: 1994,
      imdbRating: 8.9,
      actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
    },
    {
      title: "The Godfather",
      genre: "Drama",
      year: 1972,
      imdbRating: 9.2,
      actors: ["Marlon Brando", "Al Pacino"]
    },
    {
      title: "The Matrix",
      genre: "Action",
      year: 1999,
      imdbRating: 8.7,
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
      title: "Forrest Gump",
      genre: "Drama",
      year: 1994,
      imdbRating: 8.8,
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
      title: "The Silence of the Lambs",
      genre: "Thriller",
      year: 1991,
      imdbRating: 8.6,
      actors: ["Jodie Foster", "Anthony Hopkins"]
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Prestige",
      genre: "Mystery",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
    },
    {
      title: "The Hangover",
      genre: "Comedy",
      year: 2009,
      imdbRating: 7.7,
      actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
    },
    {
      title: "Die Hard",
      genre: "Action",
      year: 1988,
      imdbRating: 8.2,
      actors: ["Bruce Willis", "Alan Rickman"]
    },
    {
      title: "Fight Club",
      genre: "Drama",
      year: 1999,
      imdbRating: 8.8,
      actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
    },
    {
      title: "Gladiator",
      genre: "Action",
      year: 2000,
      imdbRating: 8.5,
      actors: ["Russell Crowe", "Joaquin Phoenix"]
    },
    {
      title: "The Social Network",
      genre: "Biography",
      year: 2010,
      imdbRating: 7.7,
      actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
    },
    {
      title: "The Shining",
      genre: "Horror",
      year: 1980,
      imdbRating: 8.4,
      actors: ["Jack Nicholson", "Shelley Duvall"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Revenant",
      genre: "Adventure",
      year: 2015,
      imdbRating: 8.0,
      actors: ["Leonardo DiCaprio", "Tom Hardy"]
    },
    {
      title: "The Usual Suspects",
      genre: "Crime",
      year: 1995,
      imdbRating: 8.5,
      actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio Del Toro"]
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      imdbRating: 8.6,
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    }
  ];
  
//   console.log(movies);



// 1. **Data Preparation:**
//     - Use the provided array **`movies`** containing objects representing movies.
//     - Each movie object has the following properties: **`title`**, **`genre`**, **`year`**, **`imdbRating`**, and **`actors`**.
//     - here is movies data: https://github.com/akshkgd/frontend-cohort/blob/main/map and filters/data.js
  







// 2. **Tasks:**
//     - Perform the following tasks using the **`map()`**, **`filter()`**, and chaining methods:
        
        // a. **Mapping:**
        
        // - Create a new array containing only the titles of the movies.
        // - Create a new array containing only the movie titles along with their IMDb ratings.

// -------->

        // let MovieTitle= movies.map(movie=>movie.title)
        // console.log(MovieTitle)

        // let MovieTitleAndImdbRating= movies.map((movie)=>({Title: movie.title,Rating: movie.imdbRating}))
        // let MovieTitleAndImdbRatings= movies.map(movie=>movie.title +" "+ movie.imdbRating)
        // console.log(MovieTitleAndImdbRating)
        // console.log(MovieTitleAndImdbRatings)




        
        // b. **Filtering:**
        
        // - Filter the movies to create an array of thriller movies released after the year 2000.
        // - Filter the movies to create an array of drama movies with IMDb ratings above 8.5.
        // - Filter the movies to create an array of action movies starring Leonardo DiCaprio.


// -------->

        // 1
        // let ThrillerMovies=movies.filter(movie=>movie.genre==='Thriller' && movie.year>2000)
        // console.log(ThrillerMovies)


        //2
        // let DramaMovies=movies.filter(movie=>movie.genre==='Drama' && movie.imdbRating>8.5) 
        // console.log(DramaMovies)


        //3
        // let ActionMovies=movies.filter(movie=>movie.genre==='Action' && movie.actors.includes("Leonardo DiCaprio")) 
        // console.log(ActionMovies)
        //No data found here! 

        
        // c. **Chaining:**
        
        // - Chain operations to find all drama movies featuring Christian Bale.
        // - Chain operations to find all drama movies featuring Tim Robbins.





// -------->
// 1
        // let DramaMovie= movies.filter(movie=>movie.genre==='Drama').filter(movie=>movie.actors.includes('Christian Bale'))
        // console.log(DramaMovie)



//2
        // let DramaMovie= movies.filter(movie=>movie.genre==='Drama').filter(movie=>movie.actors.includes('Tim Robbins'))
        // console.log(DramaMovie)
