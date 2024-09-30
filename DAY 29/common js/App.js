let add = (a, b) => {
  console.log(a + b);
};
let sub = (a, b) => {
  if (a > b) console.log(a - b);
  console.log(b - a);
};

let data = [10, "str", 100n, true, () => "arr", null];

module.exports = {
  add,
  sub,
  data
};
