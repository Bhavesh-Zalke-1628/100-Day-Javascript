


// function debounce(func, delay) {
//     let timeoutId;
//     return function (...args) {
//         clearTimeout(timeoutId); // Clear previous timeout
//         timeoutId = setTimeout(() => {
//             func.apply(this, args); // Call the original function
//         }, delay);
//     };
// }

// // Example usage:
// const saveInput = debounce(() => console.log("Saving data..."), 1000);

// saveInput();
// saveInput();
// saveInput(); // Only this one runs after 1 second


const arr = [1, [2, [6, 9], [3, [4, 5]]]]


function faltTheArray(arr) {
    let temArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            temArr = [...temArr, ...faltTheArray(arr[i])];
        } else {
            temArr.push(arr[i]);
        }
    }

    return temArr.sort((a, b) => a - b);
}

console.log(faltTheArray(arr));  // ✅ [1, 2, 3, 4, 5]


