// function manyArg() {
//     console.log(typeof arguments)
//     let arg = Array.from(arguments)
//     let finalArr = arg.map((e) => e)
//     console.log(finalArr)
// }

// function manyArg2(...args) {
//     console.log(args)
//     let finalArr = args.map((e) => e)
//     console.log(finalArr)
// }


// // manyArg(1, 2, 3, 4)
// // manyArg2(1, 2, 3, 4, 5, 6, 7)


// const name = ["bhavesh", 'zalke', 'katri']
// const newName = ['hello', ...name, "govind"]
// console.log(newName)
// const siteName = "bhavesh.com"
// console.log([...siteName])

// console.log(object)


// set  

// let emptySet = new Set()

// // console.log(emptySet.size)

// const arr = [1, 1, 2, 3, 4, 5]

// const newSet = new Set([...arr])
// // console.log(newSet)

// newSet.add(225)
// newSet.clear()
// // console.log(newSet)


// set difference 


function setDifference(setA, setB) {
    return new Set([...setA].filter(el => !setB.has(el)))
}

// setDifference()


let map = new Map()

let arr = [
    ["1", "bhaes"],
    ["2", "bhaes"],
    ["3", "bhaes"],
    ["4", "bhaes"],
]


console.log(arr.map((arrayItem) => map.set(arrayItem[0], arrayItem[1])))
