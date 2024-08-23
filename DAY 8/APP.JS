//types of functions

//Arrow function

const ar = () => {
    console.log("Start");
    console.log("End");
    return "arrow Function";
}
var x = ar();
console.log(x);

var arr= v => v+10;
let arr1 = r => console.log("lauda bc");

arr1(10);
console.log(arr(50));

//Higher Order Function and CallBack function

function demo (p,q){
    p();
    console.log(q);
}
demo(() => console.log("Argument Function"),20);

let arr69 = (s,t) => {
    console.log(s);
    s(10,20);
};

arr69(function (a,b){
    console.log(a+b);
    console.log("callback function");
},100);

//nested function

function outer(){
    let i = 1;
    const y = 30;
    var arr96 = (q,s) => {
        console.log(q);
        console.log(s);
        const c = "js";
        console.log(c);
    };
    console.log(arr96(1,2));
    console.log(i,y);
}

outer();

//lexical scoping or scope chaining :-

let h = 100;
var l = 500;
function f1(){
    function f2() {
        function f3() {
            console.log(l);
        }
        console.log(h);
        f3();
    }
    f2();
}
f1();
