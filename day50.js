// function outer() {
//     let counter = 0
//     function inner() {
//         counter++;
//         console.log(counter)
//     }
//     return inner
// }

// const x = outer()

// x()
// x()

// console.log(typeof null)
// console.log(typeof undefined)

// name = "bhavesh"

// const arr = []
// const obj = {}

// console.log(typeof Symbol())
// console.log(typeof arr)
// console.log(typeof obj)
// console.log(x)
// acb()
// const x = function (x) {
//     console.log(x)
// }

// function acb() {
//     console.log("hello")
// }

// x(10)



// const obj = {
//     name: "Bhavesh",
//     regularFunc: function () {
//         console.log(this)
//         console.log("Regular:", this.name);
//     },
//     arrowFunc: () => {
//         console.log(this)
//         console.log("Arrow:", this.name);
//     }
// };

// obj.regularFunc(); // Regular: Bhavesh
// obj.arrowFunc();   // Arrow: undefined (inherited from global scope)






abc([10, 20, 30])

function abc([...nums]) {
    console.log(nums)
}