const todo_form = document.getElementById("todo_form");
const todo_list = document.getElementById("todo_list");
const todo_input = todo_form.querySelector("input");

let todos = [];
const todos_key = "todos";

function todo_submit(event) {
    event.preventDefault();
    const new_todo = todo_input.value;
    todo_input.value = "";

    const todoobj = {
        id: Date.now(),
        text: new_todo
    }
    todos.push(todoobj);
    paint_todo(todoobj);
    save_todo(todos);
}

function save_todo(todos) {
    localStorage.setItem(todos_key, JSON.stringify(todos));
}

function delet_todo(event) {
    const delet_target = event.target.parentElement;
    todos = todos.filter((todos) => todos.id !== parseInt(delet_target.id));
    delet_target.remove();
    save_todo(todos);
}

function paint_todo(todoobj) {
    const list = document.createElement("li");
    list.id = todoobj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "X";
    button.addEventListener("click", delet_todo);

    list.appendChild(span);
    list.appendChild(button);

    span.innerText = todoobj.text;
    todo_list.appendChild(list);
}

todo_form.addEventListener("submit", todo_submit)

const todolist = localStorage.getItem(todos_key);

if (todolist !== null) {
    const parse_todos = JSON.parse(todolist);
    todos = parse_todos
    parse_todos.forEach((item) => paint_todo(item));
}