//! EVENT PROPOGATION

let gp = document.querySelector(".gp");
let p = document.querySelector(".p");
let c = document.querySelector(".c");

let phase = [null, "capture", "target", "bubbling"];

document.addEventListener(
  "click",
  (e) => {
    console.log(phase[e.eventPhase]);
    console.log("document clicked");
  },
  true
);

gp.addEventListener("click", (e) => {
  console.log(phase[e.eventPhase]);
  console.log("gp clicked");
});

p.addEventListener(
  "click",
  (e) => {
    console.log(phase[e.eventPhase]);
    console.log("p clicked");
  },
  { capture: false }
);

c.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    e.stopImmediatePropagation();
    // console.log(phase[e.eventPhase]);
    console.log("child clicked - 1");
  },
  true
);

c.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    e.stopImmediatePropagation();
    // console.log(phase[e.eventPhase]);
    console.log("child clicked - 2");
  },
  true
);

//! CALL() , APPLY() , BIND():

let obj = {
  name: "xyz",
  id: 121,
};
function f1(a,b){
    console.log(a,b);
    console.log("start");
    console.log(this);
    console.log("end");
}

f1.call(obj,100,200);
f1.apply(obj,[100,200]);
let boundfn = f1.bind(obj);
boundfn(100,200);