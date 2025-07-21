const arr = [1, 2, 3, 88, 1, 5, 2, 2, 5, 22, 7, 2]
const newArr = new Set(arr)
console.log(newArr)
const res = arr.filter((ele, idx) => {
    console.log(idx)
    console.log(arr.indexOf(ele) == idx)
    return arr.indexOf(ele) == idx
})

console.log(res)