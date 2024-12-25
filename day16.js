function calArgumentLength(...args) {
    return args.length
}

const lengthOfArg = calArgumentLength(1, 2, "bhavesh", true)
console.log(lengthOfArg)


function x(params) {
    console.log(arguments.length)
}


x(1, 2, 3, 4, 'bhavesh', true)