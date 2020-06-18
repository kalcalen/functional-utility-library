// Map Method

function mapMethod(inputMap) {
   let nbaPlayers = [
      {
         name: "Carmelo Anthony",
         team: "Knicks",
         position: "Small Forward",
      },
      {
         name: "John Stockton",
         team: "Jazz",
         position: "Point Guard",
      },
      {
         name: "Joel Embiid",
         team: "Sixers",
         position: "Center",
      },
      {
         name: "Donovan Mitchell",
         team: "Jazz",
         position: "Shooting Guard",
      },
      {
         name: "Kemba Walker",
         team: "Celtics",
         position: "Point Guard",
      },
   ];
   if (inputMap === "name") {
      const nba = nbaPlayers.map((playerObj) => playerObj.name);
      return nba;
   } else if (inputMap === "team") {
      const nba = nbaPlayers.map((playerObj) => playerObj.team);
      return nba;
   } else if (inputMap === "position") {
      const nba = nbaPlayers.map((playerObj) => playerObj.position);
      return nba;
   }
}

// Some Method

function someMethod(inputSome) {
   let result = inputSome.some(function (value) {
      return value > 50;
   });

   return result;
}

// Every Method

function everyMethod(inputEvery) {
   let result = inputEvery.every(function (value) {
      // 'Every' goes through the array to see if value is bigger than zero
      return value > 0;
   });

   return result;
}

// Join Method

function joinMethod(inputJoin) {
   // Breaks dashes

   let sepResult = inputJoin.split(/\W/);
   // Separates string
   let newResult = sepResult.join(" ");

   return newResult;

   // Can also be written as: return inputJoin.split(/\W/).join(" ");
}

// Split Method

function splitMethod(inputSplit) {
   return inputSplit.split(/\W/);
}

// Concat Instead of push
function concatNoPush(inputConcatNoPush) {
   var chicagoBulls = ["Dennis Rodman", "Scottie Pippin", "Steve Kerr"];
   return chicagoBulls.concat(inputConcatNoPush);
}

// Concat Method
function combineConcat(concatInput1, concatInput2) {
   return (newConcatArray = concatInput1.concat(concatInput2));
}

// Remove elements from an array using slice instead of splice
function sliceNoSplice(inputSlice) {
   var actionMovies = [
      "Rush Hour",
      "Drunken Master",
      "Bad Boys",
      "The Warriors",
      "Deadpool",
   ];
   // Returns array of movies from the 0 index to inputted number using slice
   return actionMovies.slice(0, inputSlice);
}

// Slice method
function sliceMethod(inputSliceArr1, inputSliceArr2) {
   // Two inputs for this function to determine which parts of the array will be cut
   var stonerFoods = ["Pizza", "Burgers", "Ice Cream", "HotDogs", "Tacos"];
   var newArray = stonerFoods.slice(inputSliceArr1, inputSliceArr2);

   return newArray;
}

// Impletment the filter method on a prototype
function filterMethod(input) {
   var randomArr = [35, 87, 22, 96, 22, 66, 8, input];

   Array.prototype.userFilter = function (oddNumbers) {
      var newArray = [];
      // Empty array that numbers will be pushed into
      for (let i = 0; i <= this.length; i++) {
         if (oddNumbers(this[i])) {
            newArray.push(this[i]);
         }
      }
      return newArray;
   };

   // filteredArray takes array filters out all odd numbers
   var filteredArray = randomArr.userFilter(function (item) {
      return item % 2 === 1;
   });
   return filteredArray;
}
