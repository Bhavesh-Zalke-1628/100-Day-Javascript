
// // console.log(x)
// // console.log(a)
// // var x = 10
// // let a = 20



// function abc() {
//     var x = 10
//     {

//         let x = 10
//         console.log(x)
//         const y = 23

//     }
//     const y = 23
//     console.log(x)
// }

// abc()


// const x = 10;
// const y = "10"

// console.log(x == y)


// clouser
// function outer() {
//     let x = 10;

//     function inner() {
//         x++;
//         console.log(x);
//     }

//     return inner();
// }
// outer()

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        success ? resolve("✅ Done!") : reject("❌ Error!");
    }, 1000);
});

myPromise
    .then((result) => console.log(result))
    .catch((err) => console.error(err));

function delay() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("⏱️ Resolved after 1 second"), 1000);
    });
}

async function example() {
    try {
        const result = await delay(); // waits until promise resolves
        console.log(result);
    } catch (err) {
        console.error("Error:", err);
    }
}

example();
