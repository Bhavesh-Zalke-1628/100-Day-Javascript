
const arr = [1, 2, 3, [4, [12, 32], 5], 6, [3, 5]]

// const [a, b, ...arg] = arr
// console.log(a)
// console.log(b)
// console.log(arg)

// const [a, ...other] = arr
// console.log(a);
// console.log(other);
console.log(arr.flat(1))


const x = arr.filter((a) => Array.isArray(a)).length
console.log(x);



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



