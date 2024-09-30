//! default export

// import value from "./APP.mjs"
// console.log(value);

//! named export

import { add, sub, data } from "./APP.mjs";

add(10, 20);
sub(30, 40);
console.log(data[3]);
