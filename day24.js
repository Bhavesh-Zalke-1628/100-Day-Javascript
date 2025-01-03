let name = "John";
let age = 30;

const obj = {
    name,
    age,
    gretting: function () {
        console.log(`Hello ${this.name}, your age is ${this.age}`);
    }
};
obj.name = "Ram";
obj.age = 22;

obj.gretting();
const obj1 = {};
obj1.name = "Bhavesh";
obj1.age = 21;
console.log(obj1); 
