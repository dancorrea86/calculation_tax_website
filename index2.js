const formData = document.getElementById('resultSN')

function alterTable() {
    const formData = document.getElementById("resultSN");
    formData.innerHTML = localStorage.getItem('value-transfer')
}

document.addEventListener('DOMContentLoaded', function() {
    alterTable()
})