let str = " This is JavaScript lecture and we are learning JavaScript";
let r1 = str.replace("javaScript","java");
console.log(r1);

let r2 = str.replaceAll("JavaScript","Java");
console.log(r2);

let s1 = "                    hello world                       ";
let r3 = s1.trim();
console.log(s1);
console.log(r3);
console.log(s1.trimEnd);
console.log(s1.trimStart);

let s2 = "java script hello";
let r4 = s2.split(" ");
console.log(r4);

let s3 = "java";
let r5 = s3.split("");
console.log(r5);
console.log(s2.split("a"));


//!how to reverse a string

let x = s3.split("").reverse().join("");
console.log(x);

let y = s3.split("");
let z = y.reverse();
let rev =  z.join("");

console.log(rev);

console.log(("str"+ "str"));
let s4 = "reduce right";

let r6 = s4.split("").reduceRight((acc,cv) => acc + cv,"");
console.log(r6);


//! Date class:

let a = new Date();
console.log(a);
console.log(a.getFullYear);
console.log(a.getMonth);
console.log(a.getDate);
console.log(a.getHours);
console.log(a.getMinutes);
console.log(a.getSeconds);
console.log(a.getMilliseconds);
console.log(a.getTime);
console.log(a.getTimezoneOffset);
console.log(a.toUTCString);

let b = new Date();
console.log(b);
b.setFullYear(1989);
b.setMonth(7);
b.setDate(14);
// b.setHour(10,59,10);
b.setMinutes(20);
b.setSeconds(22);
console.log(b);

//! Math :

//let n = new Math(); //! Uncaught TypeError : Math is not a constructor

console.log(Math.round(2.5));
console.log(Math.round(3.4));
console.log(Math.round(-1.5));
console.log(Math.round(-3.7));
console.log(Math.round(-9.35));

console.log(Math.ceil(7.6));
console.log(Math.ceil(5.1));
console.log(Math.ceil(-1.6));

console.log(Math.floor(10.75));
console.log(Math.floor(-7.9));

console.log(Math.trunc(-10.434));
console.log(Math.trunc(3715.871726386));

console.log(Math.random());

let random = Math.random() * (9999-1000)+1000;
console.log(Math.trunc(random));