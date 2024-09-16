let ele = document.getElementsByClassName("container");
let div1 = ele[0];
// console.log(div1);
// ele[0].computedStyleMap.height = "200px";
// ele[0].computedStyleMap.width = "200px";
// ele[0].computedStyleMap.border = "2px solid black";

// let [div] =[...ele];
// div.computedStyleMap.background = "hotpink";

// let body = documnet.querySelector("body");
// body.style.height = "100vh";
// body.style.display = "flex";
// body.style.alignItems = "center";
// body.style.justifyContent = "center";

//! how to add the child elements In HTML  Document:

// div1.innerHTML=`
// <h1>hello world</h1>
// <p>paragraph 1</p>
// <span>span content 1</span>
// `;

let h1 = document.createElement("h1");
let p = document.createElement("p");
let span = document.createElement("span");

h1.innerHTML = "hello world";
p.innerText = "paragraph 1";
span.innerText = " span content 1";

// console.log(h1,p,span);
div.append(h1,p,span);
// div1.appendChild(h1);

//! Attribute methods:

let h1 = document.querySelector("h1");
let p = document.querySelector("p");

h1.setAttribute("title","JAVASCRIPT");
p.setAttribute("class","demo");

let user = document.querySelector("#username");
let pass = document.querySelector("#password");

user.setAttribute("placeholder","Enter username");
pass.setAttribute("placeholder","Enter password");

//!Uncaught TypeError : Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only 1 present.

user.setAttribute("required","");
pass.setAttribute("required","");

/// let type = pass.getAttribute("type");
// console.log(type);

let type = pass.getAttribute("class");
// console.log(type);

h1.removeAttribute("style");

let r1 = user.hasAttribute("required");
console.log(r1);
console.log(p.hasAttribute("title"));

// let nL = document.querySelectorAll("h1");
// for(let i = 0;i<nL.length;i++){
//     nL[i].removeAttribute("style");
// }

[...nL].map((v)=>{
    v.removeAttribute("style");
});