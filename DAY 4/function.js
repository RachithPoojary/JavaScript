let b = 20;
console.log(b);

// console.log(z); //!z is not defined -> Error
let v;
console.log(v); //!undefined -> datatype

function f1(a,b){
    console.log(a);
    console.log(b);
    let c = 90;
    const d = 40;
    console.log(d);
    console.log(c);
    console.log("start");
    console.log("end");
}
// f1("str", 20);
f1();