
function reverseNumber(num) {
    num = num + ""
    let rev = num.split('').reverse().join('')
    console.log(rev)
}


reverseNumber(1101)