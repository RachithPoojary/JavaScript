var b="str";
console.log(b);
var b= true;
console.log(b);

var n;
n = 100;
console.log(n);

// ! Cannot redeclare block-scoped variable
let a= 90;
//let a = 80;
a=1000;
console.log(a);

// !Uncaught TypeError:
// Assignment to constant variable
const z=800;
//z=9000;
console.log(z);

// |'const' declaration must be initialized.
// const y;