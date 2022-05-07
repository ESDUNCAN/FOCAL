/*function sumToOne(n) {
  let sum = 0;
  for (let i = n; i >= 1; i--) {
    sum += i;
  }
  return sum;
} 

console.log(sumToOne(4));
*/

function sumtoone(n) {
  if (n >= 1) {
    console.log(n);
    sumtoone(n - 1);
  }
}
console.log(sumtoone(4))

function sumToOne(num) {
  if (num === 1) {
    return 1
  }
  else {
    return num + sumToOne(num - 1)
  }
}
//console.log(sumToOne(4))


