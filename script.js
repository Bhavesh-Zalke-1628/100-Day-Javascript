
function ler() {
    console.log(this)
}

const ler2 = () => {
    console.log(this)
}


ler()
ler2()