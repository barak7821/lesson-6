// שאלה 1
function checkId(id) {

    if(id.length === 9 && !isNaN(id)){
        console.log("Valid Id")
        return true
    } else {
        console.log("invalid Id")
        return false
    }

}

checkId(123456789)
checkId("123456789")
checkId("1234567899")
checkId("12345678t")

// שאלה 2

function primeNumber(number) {

    if (number <= 1) {
        return false
    }

    let squareroot = Math.sqrt(number)

    for (let index = 2; index <= squareroot; index++) {
        if (number % index === 0) {
            return false
        }
    }
    return true
}

console.log(primeNumber(5))
console.log(primeNumber(12))
console.log(primeNumber(1))
console.log(primeNumber(11))

// שאלה 3

function addSpace(text) {
    let newText = ""

    for(let index = 0; index < text.length; index++){
        if(text[index] === text[index].toUpperCase()){
            newText += " "
        }
        newText += text[index]
    }
    return newText
}
console.log(addSpace("abCdEf"))