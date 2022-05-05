// The second argument/parameter is expected to be a (callback) function
/*const findWaldo = function (names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  }
}
*/

const findWaldo = function (names, found) {
  names.forEach((nameZ, index) => {
    if (nameZ === "Waldo") {
      found(index)
    }
  })
}


const actionWhenFound = function (index) {
  console.log("Found him at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);