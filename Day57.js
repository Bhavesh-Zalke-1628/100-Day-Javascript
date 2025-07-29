function abc(num1, num2) {
    var x = 11
    console.log(x)
    {
        var x = 10
        var y = 20
    }
    console.log(x, y)
}
// abc(10, 20)



function test() {
    var a = 10;
    if (true) {
        var a = 20;
        let b = 30;
        console.log(a, b); // ?
    }
    console.log(a); // ?
    console.log(b); // ?
}
// test();


function tempDeadZone() {
    console.log(x); // ?
    let x = 5;
}
// tempDeadZone();


function constExample() {
    const PI = 3.14;
    {
        const PI = 3.14159;
        console.log(PI); // ?
    }
    console.log(PI); // ?
}
// constExample();


function hoistingExample() {
    console.log(a); // ?
    var a = 10;
    console.log(a); // ?
}
// hoistingExample();

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}