

const person = { name: "bhavesh" }

function greet(cities) {
    console.log(`Hello ${this.name} from ${cities}`);
}


greet.call(person, ["pune", "mum", "ngp"])
greet.call(person, ["pune", "mum", "ngp"])

// bind  ex function return krta hai aur ham us function  ko run krte hai
// ❌ immediate run nhi  hota hai 
const boundGreet = greet.bind(person, ["New York", "Los Angeles", "Chicago"]);

boundGreet()