const raisinAlarm = function (cookie) {
  let answer = "All good!"
  for (const key in cookie) {
    if (cookie[key] === "🍇") {
      answer = "Raisin Alert!"
    }
  } return answer
};

//console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
//console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
//console.log(raisinAlarm(["🍫", "🍫", "🍫"]));