const formData = document.getElementById('resultSN')

function alterTable() {
    const formData = document.getElementById("resultSN");
    formData.innerHTML = location.search.substring(1)
}

document.addEventListener('DOMContentLoaded', function() {
    alterTable()
})