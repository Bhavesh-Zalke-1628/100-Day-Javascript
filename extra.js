// console.log(!"abc")
// console.log(+false)

// console.log("" == false)
// console.log("" === false)



// console.log(NAN == NAN)
// console.log(NAN === NAN)


// console.log(1 * "bhavesh")

// console.log(typeof typeof 1000)



// const arr = [1, 2, 3, 4, 5]
// arr[10] = 100
// arr[500] = 100
// console.log(arr)
// console.log(arr.length)


// function abc() {
//     "use strict"
//     xyz = 100
//     console.log(xyz)

// }

// console.log(abc())


// function abc() {
//     // "use strict"
//     var xyz = 100
//     console.log(xyz)
// }

// console.log(abc())

// console.log(1 + undefined)
// var xyz = 1 + abc
// console.log(abc)
// var abc = 100
// console.log(xyz)



// const data = {
//     name: "bhavesh",
// }
// const abc = [1, 2, 3, 4]

// console.log(delete data)
// console.log(delete abc)
// console.log(delete abc[1])


// delete keyword return the boolean value


// const [x, y, z] = "123456"
// console.log(x, y, z)


// const a = []
// // const b = []
// // const c = []

// const b = a
// console.log(a == b)
// console.log(a === b)

/*
const nums = [2, 7, 11, 15]
let target = 9

function twoSum(num, target) {
    let a = num[0]
    let b = num[1]
    for (let i = 0; i < num.length; i++) {
        if (a + b == target) {
            console.log(`[${i}, ${i + 1}]`)
            break
        } else {
            console.log("Target not match")
        }
        a = num[i + 1]
        b = num[i + 2]
    }
}

twoSum(nums, target)
*/


// const nums = [2, 7, 11, 15];
// let target = 9;

// function twoSum(nums, target) {
//     const map = {}; // Stores the number and its index

//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];

//         // Check if the complement exists in the map
//         if (map.hasOwnProperty(complement)) {
//             console.log(`[${map[complement]}, ${i}]`);
//             return;
//         }

//         // Store the current number and its index in the map
//         map[nums[i]] = i;
//     }

//     console.log("No solution found");
// }

// twoSum(nums, target);



function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
// init();


function outer() {
    let username = "bhavesh"
    function innerFun() {
        console.log('inner username', username)
    }
    innerFun()
}
// console.log(' outer username', username)

// outer()




function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
// myFunc();






// Given an integer array arr and a mapping function fn,
// return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built -in Array.map method.




// console.log(transformArray(arr, fn)); // Output: [0, 2, 6, 12]

// console.log(10 + '20')
// console.log('20' + 10)
// console.log(true - (-true))
// console.log("bhavesh" - true)


// ++++++++++++++++++++++++++++++++++++
// promise 

// // creating a promise 
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Print bhavesh")
//         resolve()
//     }, 2000);
// })


// // consuming the promise 
// promiseOne
//     .then(() => {
//         console.log("promise consumed")
//     })
//     .catch(() => {
//         console.log("promise not consumed")
//     })

// new Promise((res, rej) => {
//     setTimeout(() => {

//         console.log("promise two")
//     }, 1000);
//     res()
// }).then(function () {
//     console.log('promise consumed')
// })



const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "bhavesh", email: "Zalke@gmail.com" })
    }, 100);
})


// promiseThree.then(function (user) {
//     console.log(user.username)
//     console.log(user.email)
// })



const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "bhavesh" })
        } else {
            reject('Error :Something went wronge')
        }
    }, 1000);
})


// promiseFour
//     .then(function (user) {
//         console.log(user)
//         return user.username
//     })
//     .then((name) => console.log(name))
//     .catch(function (err) {
//         console.log(err)
//     })
//     .finally(() => console.log("this is executed always"))




const promiseFith = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "vaishnavi" })
        } else {
            reject('Error :Something went wronge')
        }
    }, 1000);
})


async function consumedPromiseFive() {
    const response = await promiseFith
    console.log(response)
}

// consumedPromiseFive()

async function getAllUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}

getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.json()
    })
    .then((data) => console.log(data))