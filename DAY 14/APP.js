//! find():

let arr = [20,11,15,26,30,10,22,89];

let fn = (v,i,arr)=>{
    console.log(v);
    // console.log(i)
    // console.log(arr)
    return v>22;
};

let r1 = arr.find(fn);
console.log(r1);

//! findIndex():

let r2 = arr.findIndex(function(v,i,arr){
    return v>20;
});
console.log(r2);

//! filter():

let r3 = arr.filter((m,i,arr)=>{
    return m>15;
});
console.log(r3);
// console.log(arr);

//! map() :
let r4 = arr.map((m,i,a)=>{
    return m+10;
});
console.log(r4);
// console.log(arr);

//!some() :
// let r5 = arr.some(function(m,i,arr){
//     console.log(m);
//     return m>20;
// });
// console.log(r5);

let r5 = arr.some(function(m,i,arr){
    console.log(m);
    return m>200;
});
console.log(r5);

//! every() :

// let r6 = arr.every(function(v,i,arr){
//     console.log(v);
//     return v>1;
// });
// console.log(r6);

//! forEach():

arr.forEach((v,i,arr)=>{
    console.log(v,i,arr)
    });

//! reduce():

let arr1 = [10,20,30,40,50];

let red = arr.reduce(function(acc,cv){
    console.log(acc);
    console.log(cv);
    return acc + cv;
},10);
console.log(red);

//! reduceRight() :

let reduce = arr.reduceRight((acc,cv)=>{
    console.log(cv);
    return acc + cv;
},100);
console.log(reduce);