"use strict"
const obj = {
    name: "bhaesh",
    age: 21
}

console.log(obj)


Object.defineProperties(obj, {
    village: {
        value: "katri",
        writable: false,
        configurable: false,
        enumerable: true
    },
    jilla: {
        value: "Ytl"
    }
})

console.log(obj.village)
console.log(obj.jilla)