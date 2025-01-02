const obj = {
    name: "Bhavesh",
    age: 21
}


console.log(
    Object.hasOwnProperty('name')
)


for (const val in obj) {
    console.log(obj[val])
}