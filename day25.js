var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};


for (const key in student) {
    let size = 0;
    if (Object.hasOwnProperty(key))
        size++;
    console.log(size)
}