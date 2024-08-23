//IMKMIDIATE INVOKE FUNCTION

var a = 100;
console.log(a);

(function () {
  let a = 200;
  console.log(a);
})();

(function () {
  const a = 200;
  console.log(a);
})();

//Array

var arr = [10, false, [1, 2], 100n, null, undefined,()=>{
    console.log("mma");
    return arr;
}]; //array elements
console.log(arr);
console.log(arr[0]);
console.log(arr[5]);
console.log(arr.length);
console.log(arr[2][1]);
console.log(arr[6]());

arr[7]=100000;
arr[12]=true;
console.log(7);
console.log(12);
console.log(9);
console.log(200);

arr[0]= 2684;
delete arr[3];
console.log(arr);

//literal way;
var arr = [10, false, [1, 2], 100n, null, undefined,()=>{
    console.log("mma");
    return arr;
}];
var arr1 = [1,2,3,4,5,6,7]
console.log(arr);
console.log(arr1);

//using array constructor:-
let a1 = new Array(10,20,30,40,50);
console.log(a1);


//using Array.of():-
let a2 = Array.of("str",true,false,null)
console.log(a2);
