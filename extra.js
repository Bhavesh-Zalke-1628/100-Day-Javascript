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




// your code goes here

function chekLucky(str) {
    let x = str.split("")
    console.log(x[6])
}

chekLucky("bhavesh")


const S = "abcdefghij";

const luckyLetter = S[6];
console.log(luckyLetter);