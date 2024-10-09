//! guess the order of execution :-
//! In asynchronous code:

setTimeout(()=> {
    console.log("hello");

},0);

let p1 = Promise.resolve("resolved promise");
p1.then(
    (d)=>console.log(d),
    (e)=>console.log(e)
);

let p2 = new Promise((res,rej)=>{
    let r = true;
    if(!r) res("resolved promise 1");
        else rej("rejected promise 1")

});

let demo = async () => {
    try {
        console.log("start");
        await p2;
        console.log("end");

    }catch(error){
        console.log("error");
    }
};

demo();
console.log("hello world");

//! set
// let ar = [10,20,30,40,10,10,10,10];
// console.log(ar.length);

let s1 = new Set([1,10,"10",20,30,50,90,"20"]);
// s1.add(1);
// s1.add(10);
// s1.add(20);
// s1.add(2);
// s1.add("2");
// s1.add("20");
// s1.add(1000);
// s1.add(69);

s1.delete(10);
console.log(s1.has("10"));
console.log(s1.size);
// s1.clear();
// let x = s1.values();
// console.log(x);

// for(let v of x){
//     console.log(v);
// }

let key = s1.keys();
for(let k of key){
    console.log(k);
}
console.log(s1);

let newSet = new Set(ar);
console.log([...newSet]);