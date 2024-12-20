
function findIndex(arr, target, path = []) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return path.concat(i); // Found the target, return the path
        } else if (Array.isArray(arr[i])) {
            // Recursively search in the nested array
            const result = findIndex(arr[i], target, path.concat(i));
            if (result) return result;
        }
    }
    return null; // If not found, return null
}

const arr = [1, [2, [3, [10], 4], 5], 8];
const target = 10;
const indexPath = findIndex(arr, 3);

console.log(indexPath);  // Output: [1, 1, 1, 0]
