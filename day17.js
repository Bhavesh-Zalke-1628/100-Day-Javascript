// const obj = {
//     name: "bhavesh",
//     roll: 12
// }

// console.log(obj)


// const obj1 = new Object(undefined)
// console.log(obj1)


// const target = {
//     name: "bhaecehs",
//     roll: 12

// }

// const source = {
//     name: "bhasa",
//     roll: 21
// }



// assign the property of  the source object to target objec

// const newObj = Object.assign(target, source)
// console.log(newObj)
// console.log(target)
// console.log(newObj == target)
// console.log(newObj == source)




//  create the new object with the properties of the existing object

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

console.log(person)

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"






const obj = new Object({
    name: "Golu",
    rol: -1
})


console.log(Object.isFrozen())
obj['feature'] = true
console.log(obj)