export let add = (a, b) => {
    console.log(a + b);
  };
  export let sub = (a, b) => {
    if (a > b) console.log(a - b);
    console.log(b - a);
  };

  export let data = [10, "str", 100n, true, () => "arr", null];

//   export default [add,sub,data];