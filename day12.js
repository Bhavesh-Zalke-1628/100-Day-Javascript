
// this is the check for the truthy value compare with the left side of the value
// mrk == "Absent"
// 0 == "absent"
//  marks = "absent"


function checkMarks(mrk) {
    let marks = mrk || "Absent"
    console.log(marks)
}

checkMarks(10)
checkMarks(20)
checkMarks(0)

// the total call goes to the second function beccasue the same name function can overied in same scope  


// the ?? (Nullish Coalescing Operator) 
// this return  truthy value  when the given mark value is undefined or null

function checkMarks(mrk) {
    console.log("helo")
    let marks = mrk ?? "Absent"
    console.log(marks)
}

