const findWaldo = function (names, found) {
  names.forEach((nameZ, index) => {
    if (nameZ === "Waldo") {
      found(index)
    }
  })
}


/* function (index) {
  console.log("Found him at index " + index);
}
*/

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function (index) {
  console.log("Waldo is located at:", index);
});