let ourForm=document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")
let inputResult =[];

ourForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    inputResult = ourField.value
    createList()
    addToLocalStorage()
})

function createList() {
   let ourNewHtml = `<li>${inputResult} <button onclick="deleteItem(this)">delete item</button></li>`
    ourList.innerHTML += ourNewHtml
    ourField.value=""
    ourField.focus()
}

function deleteItem(elementToDelete) {
   elementToDelete.parentElement.remove()
}
//set to local storage
function addToLocalStorage() {
    localStorage.setItem("inputResult", JSON.stringify(inputResult))
    let resultFromStorage = JSON.parse(localStorage.getItem("inputResult"))
    inputResult.concat(resultFromStorage)
    console.log(inputResult)
}
