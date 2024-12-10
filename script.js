// שאלה 1
function checkId(id) {
    id = id + ""

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