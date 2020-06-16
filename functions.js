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
