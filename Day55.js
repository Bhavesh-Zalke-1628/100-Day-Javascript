// // Input: "hello"
// // Output: "olleh"
// function reverseString(str) {

//     return str.split("").reverse().join("")
// }

// console.log(reverseString("hello"))



// // Input: "racecar"
// // Output: true
// function isPalindrome(str) {

//     const res = str.split("").reverse().join("")
//     if (res == str) {
//         console.log("is plindrom")
//     } else {
//         console.log("no")
//     }
// }

// isPalindrome("racecar")

// // Input: [3, 5, 1, 9, 7]
// // Output: 9
// function findMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     console.log(max)
// }

// findMax([3, 5, 10, 9, 70])


// // Input: "hello world"
// // Output: 3
// function countVowels(str) {
//     const res = str.toLowerCase().split("")
//     let count = 0;
//     const vovels = ['a', 'e', 'i', 'o', 'u']
//     res.forEach(element => {
//         if (vovels.includes(element)) count++
//     });
//     console.log(count)
// }

// countVowels("Hello wOrLd bhavesh")


// Input: 5
// Output: 120
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }
    console.log(fact)
}
factorial(0)