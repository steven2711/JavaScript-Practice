////// Objects and Classes ////////////

// class Set {
//   constructor(arr) {
//     this.arr = arr;
//   }

//   add(val) {
//     if (!this.has(val)) this.arr.push(val);
//   }

//   delete(val) {
//     this.arr = this.arr.filter(x => x !== val); // creates a new
//     // array with all the values that does not equal x. works
//     // well with smaller arrays
//   }

//   get size() {
//     return this.arr.length;
//   }

//   has(val) {
//     return this.arr.includes(val);
//   }
// }

// const s = new Set([1, 2, 5, 8, 70]);

// console.log(s.size);

// console.log(s.has(2));

// class NewSet extends Set {
//   constructor(arr) {
//     super(arr);
//     this.originalArray = arr;
//   }

//   delete() {}
// }

// const nS = new NewSet([4, 7, 2, 4, 90, 100, , 5, 8]);

// nS.add(300);

// console.log(nS.size);

// function Dog(name, color) {
//   (this.name = name), (this.color = color);
// }

// let hound = new Dog("Stupid", "black");

// console.log(hound);

// function Cat(name, color) {
//   (this.name = name), (this.color = color);
// }

// let ally = new Cat("Dumb", "blue");

// console.log(ally);

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat() {
//     console.log("nom nom nom");
//   }
// };

// Dog.prototype = Object.create(Animal.prototype);
// // Dog inherits all of Animals properties. DRY methodology.
// // If you find yourself rrepeating methods on multiple objects
// // create a supertype for the like objects.

// let collie = new Dog();

// console.log(collie.eat());

// let watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//     Plot:
//       "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True"
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot:
//       "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True"
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot:
//       "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True"
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot:
//       "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True"
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot:
//       "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True"
//   }
// ];

// // Add your code below this line

// var averageRating = watchList
//   .filter(x => x.Director === "Christopher Nolan")
//   .map(x => Number(x.imdbRating));

// // Add your code above this line

// console.log(averageRating);

// function number(num) {
//   return function anotherNum(num2) {
//     return num * num2;
//   };
// }

// let holder = number(3);

// console.log(holder(3));

// function sumAll(arr) {
//   let newArr = [...arr].sort((a, b) => {
//     return a - b;
//   });

//   let finalValue = 0;

//   for (let i = newArr[0]; i <= newArr[1]; i++) {
//     finalValue += i;
//   }

//   return finalValue;
// }

// console.log(sumAll([1, 4])); // 10
// console.log(sumAll([4, 1])); // 10
// console.log(sumAll([5, 10])); // 45
// console.log(sumAll([10, 5])); // 45

//////// Compare two arrays and return the different elements //////////

// function diffArray(arr1, arr2) {
//   return arr1
//     .filter(num => !arr2.includes(num))
//     .concat(arr2.filter(num => !arr1.includes(num)));
// }

// console.log(
//   diffArray(
//     ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// );

/////// Remove elements from an array //////////////

// function destroyer(arr) {
//   let [array, ...others] = arguments;

//   return array.filter(num => !others.includes(num));
//   // make a point to understand this further
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// // First argument is the array.

function whatIsInAName(collection, source) {
  let sourceArray = Object.entries(source);

  return collection.filter(item => console.log(Object.entries(item)));
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);

// iterate through the collection.
// if the item contains the source, return the item
