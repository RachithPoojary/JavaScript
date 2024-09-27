//!async

async function demo() {
    try{
        console.log("start")
        let x = 100;
        var y = x;
        console.log(y);
        const c = 10;
        c = 90;
        console.log(c);
        return 100;
    }catch(error){
        console.log(error);
        console.log(typeof error);
        console.log("error");
    }finally{
        console.log("finally");
    }
}
demo();
// r1.then(
//     (d)=> console.log(d),
//     (e)=>console.log("error")
// );

//!await

let p1 = Promise.resolve("promise resolved");

let demo = async () => {
    try{
        console.log("start");
        await p1;
        let y = 100;
        console.log(y);
        console.log("end");

    } catch (e) {
        console.log("error");
    }
};
demo();
console.log("hello world");
console.log("welcome");


async function fetchData()
 {
    let data = await window.fetch("https://api.github.com/usres");
    let finalData = await data.json();
    console.log(fibalData);
}
fetchData();