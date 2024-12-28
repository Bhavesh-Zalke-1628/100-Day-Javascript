
const arr = [1, 2, 3, 4, 12, 32, 5, 6, 3, 5]



// Useful property in Object
const res = Object.groupBy(arr, function (val) {
    return val > 4 ? "hello" : "By"
})

res?.hello.map((e) => console.log(typeof e))

// const [a, b, ...arg] = arr
// console.log(a)
// console.log(b)
// console.log(arg)

// const [a, ...other] = arr
// console.log(a);
// console.log(other);
// console.log(arr.flat(1))


const x = arr.filter((a) => Array.isArray(a)).length
// console.log(x);



const obj = {
    name: "Jadu",
    email: "jadu@fb.com",
    age: 21
}

// const { name, email, age } = obj

// console.log(name, email, age)


// const { name, ...other } = obj
// console.log(name)
// console.log(other)


// console.log(
//     Object.entries(obj)
// )


// const fruits = [
//     { name: "apples", quantity: 300 },
//     { name: "bananas", quantity: 500 },
//     { name: "oranges", quantity: 200 },
//     { name: "kiwi", quantity: 150 }
// ];

// // Callback function to Group Elements
// function myCallback({ quantity }) {
//     return quantity > 200 ? "ok" : "low";
// }

// // Group by Quantity
// const result = Object.groupBy(fruits, myCallback);
// console.log(result)