var myObject = {
    color: "red",
    name: "bhavesh",
    // testThis = () => {   // treate the myObject as the this i.e. this gives an correct ans in arrow function 
    //     console.log(this.color); //undefined
    //     console.log(this.name)
    //     // console.log(Window === this); //true
    // };

    test: function () {   // use the global context
        function testThis() {
            console.log(this.color); //undefined
        };

        testThis();
        console.log(this.color); //red
        console.log(this.name);
        // console.log(Window === this); //false
        return "done!"
    }
};
myObject.test();

// console.log(
//     myObject.test()

// );