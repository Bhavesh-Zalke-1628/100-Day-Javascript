

// Linear searching in array

const arr = [1, 2, 3, 4, 5]
let item = 5
let found = false
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
        console.log("Item found")
        found = true;
        return;
    }
}

if (found) {
    console.log("item fund")
} else {
    console.log("item not fund")
}