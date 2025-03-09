



const arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0]


var i = 0;
var j = 0;

while (arr[i] < arr.length) {
    if (arr[i] == 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}

console.log(arr)