//!  static methods in array:

let n = 100;
let  ar  =[10,20,30];
let obj = { name : 'xyz'};

console.log(typeof n)
console.log(typeof ar)
console.log(typeof obj)

console.log(Array.isArray(n))
console.log(Array.isArray(ar))
console.log(Array.isArray(obj))

//! non-static methods in array:
//! push,unshift, pop, shift:

let arr = [20,30];
let r1 = arr.push(40,50,60);  //^ returns the new length of an array.
console.log(r1);

arr.unshift("str",100n,true);
console.log(arr);

let arr1 = [90,80,70,10,20];
// arr1.pop();
// arr1.pop();
// let r2 = arr1.pop();
// console.log(r2);

arr1.shift();
let r3 = arr1.shift();
console.log(r3);
console.log(arr1);

//! slice:
let arr2 = ['str1',true,[30],1n,undefined,{name:"xyz"},100,"js"];
let newAr1 = arr2.slice(2,5);
console.log(newAr1);
console.log(arr2);

let newAr2 = arr2.slice(5);
console.log(newAr2);

let newAr3 = arr2.slice(-3,-1);
console.log(newAr3);

//? splice(): !important:

let arr3 = [20,30,"js",()=>"arr",10n,false];
//let r4 = arr3.splice(2,0,"react","java");
let r4 = arr3.splice(2,2,"react","java","php","node");
console.log(r4);
console.log(arr3.length);
console.log(arr3);

let arr4 = ['str1',true,[30],1n,undefined,{name:"xyz"},100,"js"];

//indexOf():
let ar11 = ["str1",undefined,true,[30],1n,true,undefined,{name : "xyz"},100,"js",];
let r11 = ar11.indexOf(true,2);
console.log(r11);

let r12 = ar11.lastIndexOf(undefined,5);
console.log(r12);

let x = [10,20];
let y = [30,40];
let z = [50,60];

let r13 = y.concat(z,x);
console.log(r13);

//! flat():

let p = [10,20,[30,[40,50,[100,200]]]];
let res1 = p.flat(3);
console.log(res1);