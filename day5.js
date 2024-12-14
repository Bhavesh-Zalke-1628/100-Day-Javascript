// console.log("BHAVESH" + 1)
// console.log("zalke" + "100")


// console.log('2' + 2 + 2)
// console.log('2' + 2 - '2')




// the concept of the object of object
// const a = {

// }

// const b = {
//     name: "bhavesh"
// }
// const c = {
//     name: "Rohit"
// }

// const d = {
//     name: "Krishna "
// }

// // a[b] = {
// //     name: "ankit"
// // }

// a[c] = {
//     name: "Kailas"
// }

// // a[d] = {
// //     name: "ram"
// // }

// console.log(a)



// const x = 0;
// const z = false
// console.log(x == z)
// console.log(x === z)


// this is an example of the NaN
// const x = 0 / 0;
// console.log(x)


// NaN is the invalid data and it is not same for the all time ivalid data are same

// console.log(NaN == NaN)
// console.log(NaN === NaN)
// console.log(typeof NaN == typeof NaN)

// console.log(isNaN("helo"))


// const arr = [1, 2, 3, 4]

// const x = arr.map((e) => {
//     return e > 2
// })

// console.log(arr)
// console.log(x)



// //  sort not work on the number
// // firstly convert into the string then sort on the first letter
// const arr = [100, 50, 150, 200]

// arr.sort()
// console.log(arr)

// const arr = [100, 50, 150, 200]
// console.log(arr)
// arr.unshift(10)
// console.log(arr)


// function abc(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }



// curry function

// function curriedFunction(param1) {
//     return function (param2) {
//         return function (param3) {
//             return param1 + param2 + param3;
//         };
//     };
// }

// console.log(curriedFunction(1)(2)(3));
// // console.log(x)



// temporal deadzone


// function abc(a = 10) {
//     if (true) {
//         let x = 20
//         console.log(x)
//     }
//     console.log(a)
//     console.log(x)
// }


// abc()





// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, that forms a closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();


