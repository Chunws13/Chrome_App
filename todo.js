const todo_form = document.getElementById("todo_form");
const todo_list = document.getElementById("todo_list");
const todo_input = todo_form.querySelector("input");

const todos = [];
const todos_key = "todos";

function todo_submit(event) {
    event.preventDefault();
    const new_todo = todo_input.value;
    todo_input.value = "";
    todos.push(new_todo);
    paint_todo(new_todo);
    save_todo(todos);
}

function save_todo(todos) {
    localStorage.setItem(todos_key, JSON.stringify(todos));
}

function delet_todo(event) {
    const delet_target = event.target.parentElement;
    delet_target.remove();
}

function paint_todo(new_todo) {
    const list = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "X";
    button.addEventListener("click", delet_todo);

    list.appendChild(span);
    list.appendChild(button);
    span.innerText = new_todo;
    todo_list.appendChild(list);
}

todo_form.addEventListener("submit", todo_submit)

const todolist = localStorage.getItem(todos_key);
console.log(todolist);

if (todolist !== null) {
    const parse_todos = JSON.parse(todolist);
    console.log(parse_todos);
    parse_todos.forEach((item) => console.log(item));

}