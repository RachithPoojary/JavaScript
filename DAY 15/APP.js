//! includes() and fill()

let arr = [10,20,30,40,50,40,60,30,100];

let r1 = arr.includes(10,1);
console.log(r1);

let a = [20,"str",[90,70],{name : "value"},null,undefined];
a.fill(10,2,4);
console.log(a);

// let fruits = [ "mango","water melon","banana","sapodilla","grapes","oranges","apple"];
// fruits.sort();
// console.log(fruits);

let ar = [20,100,4,9,121,1100,34];
// ar.sort(function(m,n){
//     return m-n;
// });
// console.log(ar.reverse());

ar.sort((a,b)=>{
    if (a > b ) return 1;
    else if (b>a) return -1;
    return 0; 
});

console.log(ar);
console.log(ar.reverse());

//! String methods :

let str = "javascript";

console.log(str.slice(2,6));
console.log(str.slice(-4,-1));
console.log(str.slice(-2));

console.log(str.substring(3,6));
console.log(str.substr(5,2));

let s1 = "hello world";
console.log(s1.includes("he"));
console.log(s1.includes(" ",7));
console.log(s1.includes("Hello"));

console.log(s1.indexOf("1",5));
console.log(s1.indexOf(" wo"));
console.log(s1.lastIndexOf("l",8));

console.log(s1.toUpperCase());

let s2 = "HELLO WORLD";
console.log(s2.toLocaleLowerCase());

console.log(s2.charAt(6));
console.log(s2.charCodeAt(5));
console.log(s2.charCodeAt(0));
console.log(s2.length);



