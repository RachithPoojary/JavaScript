//! Document Object Model ( DOM )

// console.log(window.document);
// console.dir(window.document);

let div1 = document.getElementById("active");
let s1 = document.getElementsByClassName("s1");

// console.log(s1[0]);
// console.log(s1[1]);
// console.log(s1[2]);

console.log(Array.isArray(s1));
let convert = Array.from(s1);
console.log(convert);
// console.log(Array.isArray(convert));

// let c = [...s1];
// console.log(c);
// console.log(Array.prototype.slice.call(s1));

let [p,q,r] = convert;
p.innerText = "SPAN CONTENT 1";
// q.innerText = "SPAN CONTENT 2";
// q.innerHTML = "SPAN CONTENT 2";

// r.innerText = `<h1> hello world</h1>`;
// r.innerHTML = `<h1> hello world</h1>`;

let para = document.getElementsByTagName("p");
console.log(para);

let se = document.querySelector(".s1");
console.log(se);

let p1 = document.querySelector("p");
console.log(p1);

let qs = document.querySelectorAll(".s1");
console.log(qs);


