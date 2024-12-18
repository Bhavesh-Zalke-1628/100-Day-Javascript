const arr = [45, 3, 4, , 55]


let min = arr[0];
let max = arr[0]
for (let index = 0; index < arr.length; index++) {

    if (arr[index] < min)
        min = arr[index]
    if (arr[index] > max)
        max = arr[index]
}
console.log(min)
console.log(max)

