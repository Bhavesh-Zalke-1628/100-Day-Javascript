const arr = [1, 2, 12, 4, 7, 5, 6, 138, 138,]


function abc(arr) {
    const res = [...arr].sort((a, b) => a - b)   //array.sort() change the original array         
    return res[res.length - 1]

}

console.log(
    abc(arr)
)

console.log(arr)