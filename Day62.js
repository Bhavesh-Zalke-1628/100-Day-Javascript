// const obj = {
//     name: "bhavesh",
//     age: 21,
//     greet: function () {
//         console.log(this.name)
//         console.log(this.age)
//     }
// }

// const obj2 = {
//     name: "ram",
//     age: 34
// }

// obj.greet.call(obj2)

// function greet() {
//     console.log(`hello ${this.name}`)
// }


// const person1 = { name: "bhavesh" }
// const person2 = { name: "sham" }

// greet.call(person1)
// greet.call(person2);


// function greet(greeting) {
//     console.log(`${greeting} ${this.name}, you are ${this.age} years old!`)
// }

// const person1 = { name: "bhavesh", age: 25 }
// const person2 = { name: "sham", age: 30 }

// greet.call(person1, "Hello");
// greet.call(person2, "Hi");

// function details(a, b, c) {
//     console.log(`this.name = ${this.name}`);
//     console.log(`a = ${a}, b = ${b}, c = ${c}`);
// }

// const obj = { name: "Bhavesh" };

// details.call(obj, 10, 20, 30);

function abc() {
    let z = this.valueOf()
    console.log(this)
    console.log(typeof z)
    console.log(`my number is  ${this.valueOf()}`)
}

let person1marks = "10"
let person2marks = 20
abc.call(person1marks)
abc.call(person2marks)