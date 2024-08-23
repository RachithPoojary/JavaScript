"use strict";
//Variable Hoisting
// console.log(b);//undefined
// console.log(a);

// let a = 50;
// var b = 90;
// const c = 68;

// console.log(a,b,c);

demo();
function demo(){
    let z = 80;
    const y = 30;
    var x = 100;
    console.log("demo function");
    return 200;
}

// p=8000; //Uncaught ReferenceError : p is not defined
// console.log(p);

//Uncaught SyntaxError : Duplicate parameter name not allowed in this context
function f1(n,m)  //function f1(n,m,m)
{
    console.log(n+m);

}
f1(10,20,30);

//WINDOW

console.log(window);
console.log(this);
console.log(window == this);

//alert("ALERT POPUP")

var b = 20;
let a = 10;
const c = 30;

function f2(){
    var b = 100;
    console.log(b);
    console.log(this.b);
    console.log(window.b);

}
f2();

function f3 (a = 200,b = 300){
    console.log(a);
    console.log(b);

}
f3("str",true)















































































