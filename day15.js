
//  using recursion
// const arr = [x => x + 1, x => x * x, x => 2 * x];
// let x = 5;

// function cal(arr, x, index = arr.length - 1) {
//     if (index < 0) {
//         return x;
//     }
//     return cal(arr, arr[index](x), index - 1);
// }

// const result = cal(arr, x);
// console.log(result);



//  using compose function 

const arr = [x => x + 1, x => x * x, x => 2 * x];
let x = 5;


function compose(functions) {
    return function (x) {
        return functions.reduceRight((value, func) => func(value), x);
    };
}



let result = compose(arr)
console.log(result(10))