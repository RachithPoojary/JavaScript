//& LOOPING STATEMENTS

let str = "JAVASCRIPT";
let arr = [10,20,30,40,50];

//?  FOR LOOP
// for(let i = 0;i<5;i++){
//     console.log(i);
// }

// for(let i = 0;i<arr.length-1;i++){
//     console.log(i);
//     console.log(arr[i]);
// }
// for(let i = 0;i<str.length-1;i++){
//     console.log(i);
//     console.log(str[i]);
// }

//?  WHILE LOOP

let k = 1;
// while (k < 5) {
//   console.log(k);
//   k++;
// }
//?  DO-WHILE LOOP
let j = 1;
// do {
//     console.log(j);
//     j++;
// }while(j<5);

//?  FOR IN LOOP

// for(let i in str){
//     console.log(i);
// }
// for(let i in arr){
//     console.log(i);
// }

//?  FOR OF LOOP
// for(let i of str){
//     console.log(i);
// }
// for(let i of arr){
//     console.log(i);
// }

//& Object.assign();

// let data = {
//     name : "xyz",
//     id : 123,
//     percentage : 55
// };
// console.log(data);

// let address = {
//     doorNo : 55 ,
//     locatio : "jspiders",
//     percentage : 100
// }
// console.log(address);

// let demo ={
//     key1 : "key1",
//     key2 : "key2"
// }

// let res = Object.assign(data,address,demo);
// console.log(res);
// console.log(data);
// console.log(address);

//&  symbol:(primitive datatype):-

// let x = Symbol(100);
// console.log(x);
// let y = Symbol(100);
// console.log(y);

// console.log(x===y);

let s1 = Symbol("key1");
let s2 = Symbol("key2");

let obj = {};
obj[s1]="value1";
obj[s2]="value2";

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));