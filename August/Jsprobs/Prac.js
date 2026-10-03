// // // Splice practice


// // // let arr= [44,33,13,23]
// // // console.log(arr)

// // // let arr2=[231,23123,14123,143123,132166]

// // // arr['BirthDate']=423
// // // console.log(arr)

// // // // SPlice 
// // // let items= [1,2,3,4,5,6]

// // // items.splice(2,1,90,22,22,22)
// // // console.log(items)






// // // Array mapping filters practice

// // const movies = [
// //     {
// //       title: "The Dark Knight",
// //       genre: "Action",
// //       year: 2008,
// //       imdbRating: 9.0,
// //       actors: ["Christian Bale", "Heath Ledger", "Michael Caine"]
// //     },
// //     {
// //       title: "Inception",
// //       genre: "Thriller",
// //       year: 2010,
// //       imdbRating: 8.8,
// //       actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
// //     },
// //     {
// //       title: "Shawshank Redemption",
// //       genre: "Drama",
// //       year: 1994,
// //       imdbRating: 9.3,
// //       actors: ["Tim Robbins", "Morgan Freeman"]
// //     },
// //     {
// //       title: "Pulp Fiction",
// //       genre: "Crime",
// //       year: 1994,
// //       imdbRating: 8.9,
// //       actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
// //     },
// //     {
// //       title: "The Godfather",
// //       genre: "Drama",
// //       year: 1972,
// //       imdbRating: 9.2,
// //       actors: ["Marlon Brando", "Al Pacino"]
// //     },
// //     {
// //       title: "The Matrix",
// //       genre: "Action",
// //       year: 1999,
// //       imdbRating: 8.7,
// //       actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
// //     },
// //     {
// //       title: "Forrest Gump",
// //       genre: "Drama",
// //       year: 1994,
// //       imdbRating: 8.8,
// //       actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
// //     },
// //     {
// //       title: "The Silence of the Lambs",
// //       genre: "Thriller",
// //       year: 1991,
// //       imdbRating: 8.6,
// //       actors: ["Jodie Foster", "Anthony Hopkins"]
// //     },
// //     {
// //       title: "The Shawshank Redemption",
// //       genre: "Drama",
// //       year: 1994,
// //       imdbRating: 9.3,
// //       actors: ["Tim Robbins", "Morgan Freeman"]
// //     },
// //     {
// //       title: "The Departed",
// //       genre: "Crime",
// //       year: 2006,
// //       imdbRating: 8.5,
// //       actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
// //     },
// //     {
// //       title: "The Prestige",
// //       genre: "Mystery",
// //       year: 2006,
// //       imdbRating: 8.5,
// //       actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
// //     },
// //     {
// //       title: "The Hangover",
// //       genre: "Comedy",
// //       year: 2009,
// //       imdbRating: 7.7,
// //       actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
// //     },
// //     {
// //       title: "Die Hard",
// //       genre: "Action",
// //       year: 1988,
// //       imdbRating: 8.2,
// //       actors: ["Bruce Willis", "Alan Rickman"]
// //     },
// //     {
// //       title: "Fight Club",
// //       genre: "Drama",
// //       year: 1999,
// //       imdbRating: 8.8,
// //       actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
// //     },
// //     {
// //       title: "Gladiator",
// //       genre: "Action",
// //       year: 2000,
// //       imdbRating: 8.5,
// //       actors: ["Russell Crowe", "Joaquin Phoenix"]
// //     },
// //     {
// //       title: "The Social Network",
// //       genre: "Biography",
// //       year: 2010,
// //       imdbRating: 7.7,
// //       actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
// //     },
// //     {
// //       title: "The Shining",
// //       genre: "Horror",
// //       year: 1980,
// //       imdbRating: 8.4,
// //       actors: ["Jack Nicholson", "Shelley Duvall"]
// //     },
// //     {
// //       title: "The Departed",
// //       genre: "Crime",
// //       year: 2006,
// //       imdbRating: 8.5,
// //       actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
// //     },
// //     {
// //       title: "The Revenant",
// //       genre: "Adventure",
// //       year: 2015,
// //       imdbRating: 8.0,
// //       actors: ["Leonardo DiCaprio", "Tom Hardy"]
// //     },
// //     {
// //       title: "The Usual Suspects",
// //       genre: "Crime",
// //       year: 1995,
// //       imdbRating: 8.5,
// //       actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio Del Toro"]
// //     },
// //     {
// //       title: "Interstellar",
// //       genre: "Sci-Fi",
// //       year: 2014,
// //       imdbRating: 8.6,
// //       actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
// //     }
// //   ];
  
// // //   console.log(movies);


// // // Tasks:

// // // Perform the following tasks using the map(), filter(), and chaining methods:

// // // a. Mapping:

// // // Create a new array containing only the titles of the movies.

// // // let arr= movies.map(i=>
// // // {
// // //    return i.title
// // // }
// // // )
// // // console.log(arr)

// // // Create a new array containing only the movie titles along with their IMDb ratings.

// // // let arr= movies.map(i=>
// // // {
// // //     return{
// // //         title: i.title,
// // //         ratings: i.imdbRating
// // //     } 
// // // }
// // // )
// // // console.log(arr)

// // // b. Filtering:

// // // Filter the movies to create an array of thriller movies released after the year 2000.

// // // let array=movies.filter(i=>
// // // {
// // //     return i.year>2000 && i.genre =='Thriller'
// // // }
// // // )
// // // console.log(array)


// // // Filter the movies to create an array of drama movies with IMDb ratings above 8.5.

// // // let array=movies.filter(i=>
// // // {
// // //     return i.imdbRating>8.5 && i.genre =='Drama'
// // // }
// // // )
// // // console.log(array)




// // // Filter the movies to create an array of action movies starring Leonardo DiCaprio.

// // // let array=movies.filter(i=>
// // // {
// // //     return i.actors.includes('Leonardo DiCaprio') && i.genre =='Action'
// // // }
// // // )
// // // console.log(array)



// // // c. Chaining:

// // // Chain operations to find all drama movies featuring Christian Bale.

// // // let arr=movies.filter(i=>{return i.actors.includes('Christian Bale')}).map(i=> i.title)
// // // console.log(arr)

// // // Chain operations to find all drama movies featuring Tim Robbins.

// // let arr=movies.filter(i=>{return i.actors.includes('Tim Robbins')}).filter(i=> i.genre=='Drama').map(i=>i.title)
// // console.log(arr)
  




// // const promisetry = new Promise((res,rej)=>{
// // setTimeout(()=>{
// // res ('Data received')
// // },1000)
// // })
// // promisetry.then((data)=>
// // {
// // console.log(data)
// // }).catch((error)=>
// // {
// // console.log(error)
// // })


// // let age = 20;

// // const Age_Verify= new Promise((resolve,reject)=>
// // {
// //     if(age>=18)
// //     {
// //         resolve('Allowed')
// //     }
// //     else
// //     {
// //         reject('Not allowded')
// //     }
// // }).then((data)=>
// // {
// //     console.log(data)
// // }).catch((error)=>
// // {
// //     console.log(error)
// // })




// // let verify= VerifyAge(0);

// // function VerifyAge(age)
// // {
// // return new Promise((resolve,reject)=>
// // {
// //     if(age>=18)
// //     {
// //         resolve('Allowed')
// //     }
// //     else
// //     {
// //         reject('Not allowded')
// //     }
// // })
// // }




// // verify.then((data)=>
// // {
// // console.log(data)
// // }).catch((error)=>
// // {
// // console.log(error)
// // })




// // GetUser=()=>
// // {
// //     return new Promise((res,rej)=>
// //     {
// //         setTimeout(()=>
// //         {
// //             res('User found')
// //         },2000)
// //     })
// // }

// // GetUser().then((data)=>
// // {
// // console.log(data)
// // }).catch((error)=>
// // {
// // console.log(error)
// // })


// // GetPosts=()=>
// // {
// //     return new Promise((res,rej)=>
// //     {
// //         setTimeout(()=>
// //         {
// //             res('Posts found')
// //         },2000)
// //     })
// // }
// // GetPosts().then((data)=>
// // {
// // console.log(data)
// // }).catch((error)=>
// // {
// // console.log(error)
// // })








// // GetUser=()=>
// // {
// //     return new Promise((res,rej)=>
// //     {
// //         setTimeout(()=>
// //         {
// //             res('User found')
// //         },2000)
// //     })
// // }

// // GetUser().then((data)=>
// // {
// // console.log(data)
// // return GetPosts()
// // }).then((data)=>
// // {
// // console.log(data)
// // }).catch((error)=>
// // {
// // console.log(error)
// // })


// // GetPosts=()=>
// // {
// //     return new Promise((res,rej)=>
// //     {
// //         setTimeout(()=>
// //         {
// //             res('Posts found')
// //         },2000)
// //     })
// // }
// // GetPosts().then((data)=>
// // {
// // console.log(data)
// // }).catch((error)=>
// // {
// // console.log(error)
// // })





// // GetUser()
// //    ↓
// // GetPosts()
// //    ↓
// // GetComments()






// // GetUser=()=>
// // {
// //     return new Promise((res,rej)=>
// //     {
// //         setTimeout(()=>
// //         {
// //             res ('User found')
// //         },2000)
// //     })
// // }

// // GetPosts=()=>
// // {
// //     return new Promise((res,rej)=>
// //     {
// //         setTimeout(()=>
// //         {
// //             res ('Posts found')
// //         },2000)
// //     })
// // }

// // GetComments=()=>
// // {
// //     return new Promise((res,rej)=>
// //     {
// //         setTimeout(()=>
// //         {
// //             res ('Comments found')
// //         },2000)
// //     })
// // }



// // GetUser().then((data)=>
// // {
// // console.log(data)
// // return GetPosts()
// // }).then((data)=>
// // {
// // console.log(data)
// // return GetComments()
// // }).then((data)=>
// // {
// // console.log(data)
// // }).catch((error)=>{
// //     console.log(error)
// // })



// GetUser=()=>
// {
//     return new Promise((res,rej)=>
//     {
//         setTimeout(()=>
//         {
//             res ('User found')
//         },2000)
//     })
// }

// GetPosts=()=>
// {
//     return new Promise((res,rej)=>
//     {
//         setTimeout(()=>
//         {
//             rej ('Posts not found')
//         },2000)
//     })
// }

// GetComments=()=>
// {
//     return new Promise((res,rej)=>
//     {
//         setTimeout(()=>
//         {
//             res ('Comments found')
//         },2000)
//     })
// }




// // async function GetuserDetails()
// // {

// // try{

// // let data= await GetUser()
// // console.log(data)

// // let data1= await GetPosts()
// // console.log(data1)

// // let data2= await GetComments()
// // console.log(data2)

// // }catch(error)
// // {
// //     console.log(error)
// // }

// // }

// // GetuserDetails()




// // GetUser()
// // GetPosts()
// // GetComments()




// // async function GetuserDetails()
// // {
// //     try{
// //     let user= await GetUser()
// //     console.log(user)

// //     let post= await GetPosts()
// //     console.log(post)

// //     let comment= await GetComments()
// //     console.log(comment)
// //     }catch(error)
// //     {
// //         console.log(error)
// //     }

// // }



// // GetuserDetails()




// // Using promise all

// async function GetuserDetails() {


//     try{
// let data= await Promise.all([

// GetUser(),
// GetPosts(),
// GetComments()

// ])
// // This below method prints in array format
// // console.log(data)

// // so here we use destruturing to get seperate values out of array and assign to varaible
// let [user,post,comments]=data

// console.log(user)
// console.log(post)
// console.log(comments)



//     }catch(error)
//     {
//         console.log(error)
//     }



// }
// GetuserDetails()


//Quote api practice

// Using promise now

// let Quote= fetch('https://zenquotes.io/api/today')
// Quote.then((data)=>
// {
// return data.json()
// }).then((data)=>
// {
//     console.log(data)
// })


//Using Async await

async function getQuote()
{
    await fetch('https://zenquotes.io/api/today').then((data)=>
    {
        return data.json()
    }).then((data)=>
    {
        console.log(data)
    }).catch(()=>
    {
        console.log('Issue with server')
    })
    
}

getQuote()