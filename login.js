const loginForm = document.querySelector("#LogIn")
const loginInput = document.querySelector("#LogIn input");
const loginButtn = document.querySelector("#LogIn button");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function click_submit_btn(info) {
    // info.preventDefault();
    const user_name = loginInput.value;
    localStorage.setItem(USERNAME_KEY, user_name);
    paintGreetings(save_username);
};

function paintGreetings(save_username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${save_username}`;
}

const save_username = localStorage.getItem(USERNAME_KEY);

if (save_username === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", click_submit_btn);

} else {
    paintGreetings(save_username);
};