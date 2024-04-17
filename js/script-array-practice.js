//STEP 1
// let movies = ["Everything Everywhere All at Once", "Train To Busan", "Spider-Man: No Way Home", "The Invisible Man", "The Ritual"]
// console.log(movies[1])

//STEP 2
// let movies = new Array(5)
// movies[0] = "Everything Everywhere All at Once"
// movies[1] = "Train To Busan"
// movies[2] = "Spider-Man: No Way Home"
// movies[3] = "The Invisible Man"
// movies[4] = "The Ritual"
// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = "Everything Everywhere All at Once"
// movies[1] = "Train To Busan"
// movies[2] = "Spider-Man: No Way Home"
// movies[3] = "The Invisible Man"
// movies[4] = "The Ritual"
// movies.splice(2,0, "Thor: Ragnarok")
// console.log(movies.length)

//STEP 4
// let movies = []
// movies[0] = "Everything Everywhere All at Once"
// movies[1] = "Train To Busan"
// movies[2] = "Spider-Man: No Way Home"
// movies[3] = "The Invisible Man"
// movies[4] = "The Ritual"
// delete movies[0]
// console.log(movies)

//STEP 5
// let movies = []
// movies[0] = "Everything Everywhere All at Once"
// movies[1] = "Train To Busan"
// movies[2] = "Spider-Man: No Way Home"
// movies[3] = "The Invisible Man"
// movies[4] = "The Ritual"
// movies[5] =  "Thor: Ragnarok"
// movies[6] = "Talk to Me"

// for (let film in movies) {
//     console.log(movies[film])
// }


//STEP 6
// let movies = []
// movies[0] = "Everything Everywhere All at Once"
// movies[1] = "Train To Busan"
// movies[2] = "Spider-Man: No Way Home"
// movies[3] = "The Invisible Man"
// movies[4] = "The Ritual"
// movies[5] =  "Thor: Ragnarok"
// movies[6] = "Talk to Me"

// for (let film of movies) {
//     console.log(film)
// }

//STEP 7
// let movies = []
// movies[0] = "Everything Everywhere All at Once"
// movies[1] = "Train To Busan"
// movies[2] = "Spider-Man: No Way Home"
// movies[3] = "The Invisible Man"
// movies[4] = "The Ritual"
// movies[5] =  "Thor: Ragnarok"
// movies[6] = "Talk to Me"
// movies.sort()
// for (let film of movies) {
//     console.log(film)
// }

//STEP 8
// let movies = []
// movies[0] = "Everything Everywhere All at Once"
// movies[1] = "Train To Busan"
// movies[2] = "Spider-Man: No Way Home"
// movies[3] = "The Invisible Man"
// movies[4] = "The Ritual"
// movies[5] =  "Thor: Ragnarok"
// movies[6] = "Talk to Me"

// let leastFavMovies = ["The Stand In", "Fantasy Island", "Voyagers" ]
// console.log("Movies I like:\n\n")
// for (let film of movies) {
//     console.log(film)
// }
// console.log("\nMovies I regret watching:\n\n")
// for (let badFilm of leastFavMovies) {
//     console.log(badFilm)
// }

//STEP 9
// let movies = []
// movies[0] = "Everything Everywhere All at Once"
// movies[1] = "Train To Busan"
// movies[2] = "Spider-Man: No Way Home"
// movies[3] = "The Invisible Man"
// movies[4] = "The Ritual"
// movies[5] =  "Thor: Ragnarok"
// movies[6] = "Talk to Me"

// let leastFavMovies = ["The Stand In", "Fantasy Island", "Voyagers" ]

// movies = movies.concat(leastFavMovies)
// console.log(movies.sort().reverse())

//STEP 10

// let movies = []
// movies[0] = "Everything Everywhere All at Once"
// movies[1] = "Train To Busan"
// movies[2] = "Spider-Man: No Way Home"
// movies[3] = "The Invisible Man"
// movies[4] = "The Ritual"
// movies[5] =  "Thor: Ragnarok"
// movies[6] = "Talk to Me"

// let leastFavMovies = ["The Stand In", "Fantasy Island", "Voyagers" ]

// movies = movies.concat(leastFavMovies)
// let lastMovie = movies.reverse().find(() => true)
// console.log(lastMovie)

//STEP 11
// let movies = []
// movies[0] = "Everything Everywhere All at Once"
// movies[1] = "Train To Busan"
// movies[2] = "Spider-Man: No Way Home"
// movies[3] = "The Invisible Man"
// movies[4] = "The Ritual"
// movies[5] =  "Thor: Ragnarok"
// movies[6] = "Talk to Me"

// let leastFavMovies = ["The Stand In", "Fantasy Island", "Voyagers" ]

// movies = movies.concat(leastFavMovies)
// let firstMovie = movies.find(() => true)
// console.log(firstMovie)

//STEP 12

// let movies = []
// movies[0] = "Everything Everywhere All at Once"
// movies[1] = "Train To Busan"
// movies[2] = "Spider-Man: No Way Home"
// movies[3] = "The Invisible Man"
// movies[4] = "The Ritual"
// movies[5] =  "Thor: Ragnarok"
// movies[6] = "Talk to Me"

// let leastFavMovies = ["The Stand In", "Fantasy Island", "Voyagers" ]

// movies = movies.concat(leastFavMovies)
// let leastFavIndices = leastFavMovies.map(movie => movies.indexOf(movie)).filter(index => index !== -1)

// let favoriteMovies = [
//     "Man of Steel",
//     "The Dark Knight",
//     "Justice League"
//   ]
//   leastFavIndices.forEach((index, i) => {
//     movies.splice(index, 1, favoriteMovies[i])
//   })
  
//   console.log(movies)

//STEP 13

// let favoriteMovies = [
//     ["Train To Busan", 1],
//     ["Spider-Man: No Way Home", 2],
//     ["Thor: Ragnarok", 3],
//     ["The Invisible Man", 4],
//     ["Talk to Me", 5]]
// let movieNames = favoriteMovies
//     .filter(item => typeof item[0] === "string")
//     .map(item => item[0])
// for (let film of movieNames) {
//     console.log(film)
// }

//STEP 14
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"]

// let showEmployee = function(arr) {
//     console.log("Employees:\n\n")
//     for (let employee of arr) {
//         console.log(employee)
//     }
// }
// showEmployee(employees)

//STEP 15
// function filterValues(arr) {
//     return arr.filter(value => value !== false && value !== null && value !== 0 && value !== '');
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))


//STEP 16

// function getRandomItemFromArray(arr) {
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     return arr[randomIndex];
// }
// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(getRandomItemFromArray(numberArray))
//STEP 17

// function getMax(arr) {
//     arr.sort((a, b) => a - b)
//     return arr[arr.length - 1 ]
// }
// let someArr = [1,2,34,5,1,100,5]
// console.log(getMax(someArr))