
let array = []

function pushValue() {
    let elementInput = document.getElementById("elementInput").value
    array.push(elementInput)
    addList(array)
    document.getElementById("elementInput").value = ""
}

function addList(tableElement) {
    tableRow = document.getElementById("tableRow");
    let value = ""
    for (let i = 0; i < tableElement.length; i++) {
        value = value +
            `<tr>
                  <td>${i + 1}</td>
                  <td>${tableElement[i]}</td>
                  <td>
                       <button onclick='dltElement(${i})' class="btn">Delete</button>
                       <button onclick='editElement(${i})' class="btn">Edit</button>
                  </td>
            </tr>`
    }
    tableRow.innerHTML = value
}

function dltElement(tableRow) {
    array.splice(tableRow, 1)
    addList(array)
}
function editElement(number) {
    element = number
    document.getElementById("elementInput").value = array[element]
}

function updateValue() {
    let elementInput =  document.getElementById("elementInput").value;
    array[element] = elementInput
    addList(array) 
}

function searchValue(value) {
    findValue = []
    for (let a = 0; a < array.length; a++) {
        if (array[a] == value) {
            findValue.push(array[a]) 
        }
    }
    addList(findValue)
}

