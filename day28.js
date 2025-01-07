const operation = {
    value: 20,
    multi() {
        return this.value * 10;
    },
    divide: function () {
        console.log(this.value)
        return this.value / 10
    },
};

console.log(operation.multi());  //
console.log(operation.divide());   //NaN