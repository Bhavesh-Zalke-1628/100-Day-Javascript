// function abc(cities) {
//     console.log(this)
//     console.log(cities)
// }

// const person = { name: "bhavesh" }

// abc.apply(person, ["pune", "mum", 'ngp'])
// abc.call(person, "pune", "mumbai")


function abc(cities) {
    console.log(this)
    console.log(cities)
}

const person = { name: "bhavesh" }

abc.apply(["pune", "mum", 'ngp'])
abc.call("pune", "mumbai")