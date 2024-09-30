let import_data = require("./App");
console.log(import_data);

let{add,sub,data} = import_data;
add(10,20);
sub(30,40);
console.log(data[2]);