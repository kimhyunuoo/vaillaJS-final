const todoListEl = document.querySelector(".todoList");
const todoHeadingEl = document.querySelector(".todoList h3");
const todoInputEl = document.querySelector(".todoList input");
const todoListUlEl = document.querySelector(".todoListUl");
// bottom todo
const todoFormEl = document.querySelector("footer form");
const todoTimeEl = document.querySelector("footer .timeTodo");
const todoTimeListEl = document.querySelector(".timeTodo__list");

function handleInputChange(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    todoHeadingEl.textContent = todoInputEl.value;
    todoInputEl.setAttribute("readonly", true);
    // 체크박스 만들기 === mdn 및 gpt 참고
    const checkBoxEl = document.createElement("input");
    checkBoxEl.type = "checkbox";
    todoInputEl.parentNode.insertBefore(checkBoxEl, todoInputEl);

    function outLineCenter() {
      if (todoInputEl.classList.contains("checked")) {
        todoInputEl.classList.remove("checked");
        todoInputEl.style.color = "#fff";
        todoInputEl.style.transition = "all .2s ease-in-out";
      } else {
        todoInputEl.classList.add("checked");
        todoInputEl.style.color = "#ccc";
        todoInputEl.style.transition = "all .2s ease-in-out";
      }
    }
    checkBoxEl.addEventListener("click", outLineCenter);

    todoHeadingEl.textContent = "GOLDS BOARD";
    todoHeadingEl.style.fontSize = "17px";
    todoHeadingEl.style.fontWeight = "900";
    todoHeadingEl.style.border = "1px solid #fff";
    todoHeadingEl.style.borderRadius = "20px";
    todoHeadingEl.style.padding = "10px";
    todoHeadingEl.style.opacity = "1";
    todoInputEl.style.border = "none";
    todoFormEl.style.opacity = 1;
  }
}
todoInputEl.addEventListener("keydown", handleInputChange);

function paintTodo(newValue) {
  const liEl = document.createElement("li");
  const spanEl = document.createElement("span");
  liEl.appendChild(spanEl);
  spanEl.innerText = newValue;
  todoTimeListEl.appendChild(liEl);
}
function handleTodoSubmit(event) {
  event.preventDefault();
  const newValue = todoTimeEl.value;
  todoTimeEl.value = "";
  paintTodo(newValue);
}
todoFormEl.addEventListener("submit", handleTodoSubmit);
