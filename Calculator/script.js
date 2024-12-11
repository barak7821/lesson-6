let firstNum = ""
let operator = ""

// הוספת מספר לתצוגה
function addNum(num) {
    let display = document.getElementById("display")
    display.value += num
}

// שמירת האופרטור
function setOp(op) {
    if (operator !== "") return
    operator = op
    firstNum = document.getElementById("display").value
    let display = document.getElementById("display")
    display.value += operator
}

// חישוב התוצאה
function calc() {
    let display = document.getElementById("display")
    let currentValue = parseFloat(display.value.split(operator)[1])
    let result = 0

    if (operator === "+") {
        result = parseFloat(firstNum) + currentValue
    } else if (operator === "-") {
        result = parseFloat(firstNum) - currentValue
    } else if (operator === "*") {
        result = parseFloat(firstNum) * currentValue
    } else if (operator === "/") {
        if (currentValue === 0) {
            result = "Error"
        } else {
            result = parseFloat(firstNum) / currentValue
        }
    }
    

    display.value = result.toString()
    console.log(result)
    operator = ""
}

// ניקוי התצוגה
function clr() {
    let display = document.getElementById("display")
    display.value = ""
    firstNum = ""
    operator = ""
}