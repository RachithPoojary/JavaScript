// creating object using constructor function

function Employee(name,id){
    this.eName = name;
    this.eId = id;

}
let e1 = new Employee("adit",69);
console.log(e1);

var e2 = new Employee("Vedant",96);
console.log(e2);







// creating object using literal way
let obj = {
    eName : "Rachith",
    eId : 450,
    skills : ["java","js","Sql","HTML","CSS","SDLC"],
    isMarried : false,
    kids : null,
    demo:() =>{
        console.log("demo function");
        return null
    },
    marks:{
        ComputerScience : 100,
        Maths : 100
    },
    isPassed : true,
    kids : 10,

}
console.log(obj.isPassed);
console.log(obj);
console.log(obj["eId"]);
console.log(obj.eId);
console.log(obj.demo());
console.log(obj["demo"]());
console.log(obj.kids);
console.log(obj.skills[2]);
console.log(obj.marks["Maths"]);

obj.designation = "Manager";
console.log(obj.designation);

obj["isMarried"]= true;
console.log(obj.isMarried);

delete obj.isMarried;
console.log(obj);




//creating object using object constructor

let x = new Object();
x.name = "Rachith";
x.rollno = 69;
x.skills= " good in bed"; v 
console.log(x);


//static methos in object :
//freeze(), seal(), isFrozen(), keys(), values(), entries(), assign():

let y = {
    name: "yash",
    id : 100,
    isMarried : false,
    gender : "male",
    skills: ["sleeping","eating"]
}
;

// Object.freeze(y);
// Object.seal(y);
y.name = "dhoni";
y.percentage = 90;
delete y.skills;
console.log(y);

// let r1 = Object.isFrozen(y);
// console.log(r1);

let r1 = Object.isSealed(y);
console.log(r1);

let k = Object.keys(y);
console.log(k);

let v = Object.values(y);
console.log(v);

let e = Object.entries(y);
console.log(e);