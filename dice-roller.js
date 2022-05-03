const arg = process.argv
console.log(arg.slice(2))
const rollDice = function (num) {
  rolls = ""
  for (let i = 0; i < num; i++) {
    rolls += Math.ceil(Math.random() * 6) + ", "
  }
  return rolls
}
console.log("Rolled", arg[2], "dice:", rollDice(arg[2]))
