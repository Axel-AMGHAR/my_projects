//kickstart 2020
// PROBLEM https://codingcompetitions.withgoogle.com/kickstart/round/000000000019ffc7/00000000001d3f56

const fs = require("fs");
const input = fs
  .readFileSync(0, "utf8")
  .trim()
  .split("\n");

const solve = (B, arr) => {
  let res = 0;
  arr.forEach(item => {
    item = parseInt(item);
    if (B < item) return res;
    res++;
    B -= parseInt(item);
  });
  return res;
};

let currentline = 0;
function readline() {
  return input[currentline++];
}

let T = readline();

for (let i = 1; i <= T; i++) {
  let [N, B] = readline().split(" ");
  let arr = readline().split(" ");
  console.log(`Case #${i}: ${solve(parseInt(B), arr.sort())}`);
}
