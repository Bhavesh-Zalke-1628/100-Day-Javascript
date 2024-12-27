

const data = `01001000 01100101 01101100 01101100 01101111 00101100 00100000 01001001 00100111 01101101 00100000 01101100 01100101 01100001 01110010 01101110 01101001 01101110 01100111 00100001`

// const arr = data.split(' ')
// const res = arr.map((ele) => {
//     let x = String.fromCharCode(parseInt(ele, 2))
//     return x
// })
// // console.log(res.join(''))



// const data = `01001000 01100101 01101100 01101100 01101111 00101100 00100000 01001001 00100111 01101101 00100000 01101100 01100101 01100001 01110010 01101110 01101001 01101110 01100111 00100001`;

// function binaryCodeReader(data) {
//     return data
//         .split(' ') // Split the binary string into an array
//         .reduce((decoded, binary) => {
//             // Convert each binary string to a character and add it to the result
//             return decoded + String.fromCharCode(parseInt(binary, 2));
//         }, ''); // Initial value for `decoded` is an empty string
// }

// console.log(
//     binaryCodeReader(data)
// );




const arr = [true, false, true]
console.log(
    arr.reduce((store, cur) => {
        store = store + cur
        return store
    }, 0)
)