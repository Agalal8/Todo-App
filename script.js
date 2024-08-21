

function addTask() {
    console.log('hello');
    let todoInput= inputField.value;
    console.log(todoInput);
    if(todoInput === ""){
        alert("add a new task");
    }
    else {
        console.log("a7a");
        const listItem = document.createElement("li");
        listItem.innerText = todoInput;
        const listContainer = document.getElementById("list");
        listContainer.appendChild(listItem);
        inputField.value = " ";
     }
}
    
const inputField = document.querySelector("#todo-input");
console.log(inputField);
inputField.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        addTask();
    }
})