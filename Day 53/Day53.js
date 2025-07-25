function demoConsoleFunctions() {
    // 1. Basic logs
    console.log("✅ console.log - This is a normal log");
    console.info("ℹ️ console.info - This is an info message");
    console.warn("⚠️ console.warn - This is a warning");
    console.error("❌ console.error - This is an error");
    console.debug("🐞 console.debug - This is a debug message");

    // 2. Table display
    const person = { name: "Bhavesh", age: 22, city: "Mumbai" };

    const people = [
        {
            name: "Alice",
            age: 25
        },
        {
            name: "Bob",
            age: 30,
            img: {
                url: "bhavesh"
            }
        },
    ];

    console.table(person);
    console.table(people);

    // 3. Inspecting function/object properties
    function test() {
        console.log("Inside test function");
    }
    test.customProp = "custom";
    console.dir(test);

    // 4. Assertions
    let x = 10;
    console.assert(x > 20, "Assertion failed: x is not greater than 20");

    // 5. Counters
    console.count("counter");
    console.count("counter");
    console.count("counter");
    console.countReset("counter");
    console.count("counter");

    // 6. Grouping
    console.group("Group: User Info");
    console.log("Name: Bhavesh");
    console.log("Age: 22");
    console.groupEnd();

    console.groupCollapsed("Collapsed Group");
    console.log("Inside collapsed group");
    console.groupEnd();

    // 7. Timers
    console.time("Process Time");
    for (let i = 0; i < 1e6; i++) { } // simulate delay
    console.timeLog("Process Time", "⏱️ Mid-point check");
    console.timeEnd("Process Time");

    // 8. Stack trace
    // function level1() {
    //     level2();
    // }
    // function level2() {
    //     console.trace("🔍 Stack trace example");
    // }
    // level1();

    // 9. Clear console (uncomment if needed)
    // console.clear();
}

demoConsoleFunctions();
