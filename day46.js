let n = 10

for (let i = 0; i < n; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000);
}