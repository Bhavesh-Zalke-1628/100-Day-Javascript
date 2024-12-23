function abc() {
    {
        console.log(x)
        let x = 10;
        var y = 20
    }
    console.log(x, y)
}

abc()


// function abc() {
//     (function () {
//         var x = 10
//         var y = 20
//     })()     // used iffe to solved this problem because the scope of iffe is limited out block

//     console.log(x, y)
// }
// abc()