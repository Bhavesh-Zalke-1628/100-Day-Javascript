// Number of test cases
const T = parseInt(prompt("Enter the number of test cases:"));

for (let i = 0; i < T; i++) {
    // Hours Chef slept
    const X = parseInt(prompt("Enter hours Chef slept:"));

    if (X < 7) {
        console.log("YES"); // Chef is sleep-deprived
    } else {
        console.log("NO"); // Chef is not sleep-deprived
    }
}
