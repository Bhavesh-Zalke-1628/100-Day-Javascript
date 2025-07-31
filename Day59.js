
const data = `01001000 01100101 01101100 01101100 01101111 00101100 00100000 01001001 00100111 01101101 00100000 01101100 01100101 01100001 01110010 01101110 01101001 01101110 01100111 00100001`;
const binData = "01001000 01100101 01101100 01101100 01101111 00101100 00100000 01001001 00100000 01100001 01101101 00100000 01000010 01101000 01100001 01110110 01100101 01110011 01101000"

const binaryToText = (binary) => {
    return binary.split(" ")
        .map(e => String.fromCharCode(parseInt(e, 2)))
        .join("")
};

console.log(binaryToText(binData))


//  string to binary 
// const textToBinary = (text) => {
//     return text.split("")
//         .map(e => e.charCodeAt(0).toString(2).padStart(8, '0'))
//         .join(" ");
// };

// console.log(textToBinary("Hello, I am Bhavesh"))
// const binData = "01001000 01100101 01101100 01101100 01101111 00101100 00100000 01001001 00100000 01100001 01101101 00100000 01000010 01101000 01100001 01110110 01100101 01110011 01101000"

const textToBinary = (text) => {
    const res = text.split("")
        .map(e => e.charCodeAt().toString(2).padStart(8, "0"))
        .join(" ")

    console.log(binData == res)
    console.log(res)
};



textToBinary("Hello, I am Bhavesh")


