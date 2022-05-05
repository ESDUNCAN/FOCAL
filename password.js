function obfuscate(string) {
  let answer = ""
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      answer = "4"
    }
    else if (string[i] === "e") {
      answer = "3"
    }
    else if (string[i] === "o") {
      answer = "0"
    }
    else if (string[i] === "l") {
      answer = "1"
    }
    else
      answer += answer[i]
  }
  return answer
}

console.log(obfuscate("abcedfhi"))