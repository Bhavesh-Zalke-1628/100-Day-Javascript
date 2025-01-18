function findMostFrequent(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement = null;

    // Count the frequency of each element
    for (const element of arr) {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;

        // Update the most frequent element if needed
        if (frequencyMap[element] > maxFrequency) {
            maxFrequency = frequencyMap[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

// Test cases
console.log(findMostFrequent([1, 3, 2, 3, 4, 3, 2, 2])); // Output: 3 or 2
console.log(findMostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'banana'])); // Output: 'banana'
console.log(findMostFrequent([7])); // Output: 7
