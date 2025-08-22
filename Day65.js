// const pro1 = new Promise((res, rej) => {
//     try {
//         res("Heyy ram")
//     } catch (error) {
//         rej(error || "Error ")
//     }
// })

// const pro2 = new Promise((res, rej) => {
//     try {
//         res("Heyy sham")

//     } catch (error) {
//         rej(error || "Error ")
//     }
// })



// const pro3 = Promise.resolve("huluuuu")

// Promise.all([pro1, pro2, pro3])
//     .then(data => console.table(data))
//     .catch(e => console.log(error))


function outer() {
    return function () {
        return 10 + 2
    }
}
console.log(
    outer()()
);