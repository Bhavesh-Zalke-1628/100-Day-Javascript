// swapped key to value 



const obj = { a: 1, b: 2 }


function swapedObject() {
    const swapedObj = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            swapedObj[obj[key]] = key;
        }
    }
    return swapedObj;
}


console.log(swapedObject(obj))
