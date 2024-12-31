const obj = {
    name: "bhavesh",
    age: 21
}



// const res = Object.entries(obj)

// for (const [key, value] of res) {
//     console.log(typeof key)
//     console.log(typeof value)
//     console.log(`${key} : ${value}`);
// }

// console.log(res)



// Object.fromEntries()


// The fromEntries work on the  iterable  thing 

const data = [["name ", "Bhavesh"]]

let res = Object.fromEntries(data)

console.log(
    console.log(res)
)
