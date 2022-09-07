const storageKey = "todoList";
var dataString = localStorage.getItem(storageKey);
var todoList = JSON.parse(localStorage.getItem(storageKey));

if (dataString) {
    todoList = JSON.parse(dataString);
} else {
    todoList = [];
}
window.addEventListener('load', () => {
    addItem();
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");


    // header.addEventListener('submit', (e) => {
    //     const task = input.value;

    //     if (dataString) {
    //         todoList = JSON.parse(dataString);
    //     } else {
    //         todoList = [];
    //     }
    //     //load();

    // });
});

function addItem() {
    var input = document.getElementById("new-task-input");
    var newItem = input.value;
    console.log(newItem);
    if (newItem) {
        todoList.push(newItem);
        render();
        input.value = "";
        localStorage.setItem(storageKey, JSON.stringify(todoList));
    } else {
        render();
    }

}

function render() {

    var htmlList = document.getElementById("todo-list");
    var content = todoList.map(function(item) {
        return '<li>' + item + '</li>';
    });

    htmlList.innerHTML = content.join('');
}