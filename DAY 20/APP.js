let h1 = document.getElementsByTagName("h1")[0];
h1.setAttribute("class","demo");
h1.className = "active";
h1.id = "h111";
h1.title = "Hello world";

h1.classList.add("demo","f12","active","link");
h1.classList.remove("f12","link");

let e1 = h1.classList.contains("f12");
console.log(r1);
let r2 = h1.classList.contains("demo");
console.log(r2);

// let r3 = h1.classList.toggle("toggle");
// console.log(r3);

let r4 = h1.classList.toggle("demo");
console.log(r4);

//!  DOM EVENTS:-

let div = document.querySelector(".container");

// div.onclick = (e) => {
//     console.log(e);
//     let f = e.target;
//     f.style.background = "hotprink";
//     f.style.color = "#fff";
//     div.style.padding = "20px";
//     console.log("clicked")
// };

// div.addEventListener("click",function(e){
//     console.log(e);
//     this.style.background = "blue";
//     this.style.color = "#fff";
// });

let show = document.querySelector("#show");
let hide = document.querySelector("#hide");
show.addEventListener("click",(e)=>(div.computedStyleMap.visibility = "value"));
let hidefn = (e) => (div.computedStyleMap.visibility = "hidden");
