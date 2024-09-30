let parent = {
    name : "rachith",
    id  : 14,
    getName() {
        console.log(this.name);
    },
    setName(n){
        this.name = n;
    },
};

let child = {
    name : "hardik pandya;"
}

child.__proto__ = parent;

child.setName("ananya pandey");
console.log(child.name);
console.log(child.id);
child.getName();
