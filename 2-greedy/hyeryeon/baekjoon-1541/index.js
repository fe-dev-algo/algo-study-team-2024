//"55-50+40"
let input = require("fs").readFileSync("input.txt").toString();

let groups = input.split("-");
let totalSum = 0;

for (let i = 0; i < groups.length; i++) {
  let current = groups[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i == 0) {
    totalSum += current;
  } else totalSum -= current;
}
console.log(totalSum);
