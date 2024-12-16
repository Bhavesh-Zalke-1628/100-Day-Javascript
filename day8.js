const arr = [1, 3, 5, 7, 9, 2]


// loop the total number and check the condition any one can full 
// filed the condition then return true otherwise false
const x = arr.some((num) => {
    num % 2 == 0
})
console.log(x)


// the total can satisfy the condition 
const y = arr.every(num => num % 2 == 0)
console.log(y)