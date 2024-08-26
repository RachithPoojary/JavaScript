//class ,object and constructor:

let a = 10;
let b = 20;

class Employee {
//   name = "Rachith"; //we are not supposed to use the var,let and const keyword.
  constructor(name, id) {
    this.eName = name;
    this.eId = id;
  }
  static demo(a, b) {
    var x = 69; //inside the class inside the function we should use var or let or const keyword.
    console.log(a,b);
    console.log("hello world"); //we are not supposed to use the function keyword to declare the function.
    return x;
  }
  f1(){
    console.log("non-static method");
    console.log(this.eId);
  }
}
let e1= new Employee("Dhoni",7); //Constructor call
console.log(e1);

let e2= new Employee("Rohit",45); //Constructor call
console.log(e2);

let e3= new Employee("Virat",18); //Constructor call
console.log(e3);
e3.f1();

console.log(Employee.demo(100, 200));
console.log(Employee.name);


