const inputEl = document.querySelector(".sizeInput");
function handleWidth(event) {
  if (event.type === "keydown") {
    inputEl.style.width = "350px";
  } else if (event.type === "mouseout") {
    setTimeout(() => {
      inputEl.style.width = "190px";
    }, 2000);
  }
}
function handleLogin(event) {
  if (event.key === "Enter") {
    inputEl.setAttribute("readonly", true);
    todoListEl.style.opacity = 1;
    inputEl.style.border = "none";
    document.body.style.backdropFilter = "none";
  }
}
inputEl.addEventListener("keydown", handleWidth);
inputEl.addEventListener("mouseout", handleWidth);
inputEl.addEventListener("keydown", handleLogin);
