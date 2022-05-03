/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below

// Test / Driver Code below...
const conceptList = [];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

function joinList(conceptList) {
  let answer = "";
  if (conceptList.length === 0) {
    return answer
  }
  for (let i = 0; i < conceptList.length - 1; i++) {
    answer += conceptList[i] + ", "
  };
  answer += conceptList[conceptList.length - 1];
  return answer
}