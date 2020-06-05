// const resultTable = document.getElementById("tableId");
// const formData = document.getElementById("tableId");

const inputValues = {}


function getDataForm() {
    event.preventDefault()
    const inputValues = document.getElementsByClassName("input")
    for(const prop in inputValues) {
        if (inputValues.hasOwnProperty(prop)) {
            console.log(inputValues[prop].value)
        }
    }
    localStorage.setItem('value-transfer', inputValues[0].value)
    show_table()
}

function show_table() {
    window.document.location = './result.html'
}

