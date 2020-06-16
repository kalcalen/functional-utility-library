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
