
// //  Add the  dynamic value in the obect

// const key = "age"
// const value = 21

// const obj = {
//     [key]: value    //dynamic add the value 
// }

// const property = "FirstName"
// const name = "Bhavesh"
// obj.name = "jaduu"

// obj[property] = name // dynamically add the value

// console.log(obj)



const obj = {
    name: "bhavesh",
    age: 21,
    getData: function abc() {
        console.log(Object.isSealed(obj))
        console.log("hello")
        return true
    }
}


Object.seal(obj)
console.log(obj.getData())

