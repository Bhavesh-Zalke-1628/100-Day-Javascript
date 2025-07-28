function removeDuplicates(arr) {
    const seen = {};
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            newArr.push(arr[i]);
            seen[arr[i]] = true;
        }
    }
    console.log(newArr);
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);  // Output: [1, 2, 3, 4, 5]
