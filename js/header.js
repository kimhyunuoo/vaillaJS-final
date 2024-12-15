// link icon
const linkWebEl = document.querySelector(".links__web");
const transBoxEl = document.querySelector(".webBox");
// background icon
const bgEl = document.querySelector(".bgChange");
const bgBoxEl = document.querySelector(".bgBox");
const bgArrayEl = [
  "url(../images/login__background01.jpg)",
  "url(../images/login__background02.jpg)",
  "url(../images/login__background03.jpg)",
  "url(../images/login__background04.jpg)",
  "url(../images/login__background05.jpg)",
];

function handleOver(event) {
  if (event.type === "mouseover") {
    if (!transBoxEl.classList.contains("visible")) {
      transBoxEl.classList.add("visible");
      transBoxEl.textContent = "Click시에, Google Site로 이동 됩니다";
    }
  } else if (event.type === "mouseout") {
    if (transBoxEl.classList.contains("visible")) {
      transBoxEl.classList.remove("visible");
    }
  }
}

linkWebEl.addEventListener("mouseover", handleOver);
linkWebEl.addEventListener("mouseout", handleOver);

function handleBackGroundOver(event) {
  if (event.type === "mouseover") {
    if (!bgBoxEl.classList.contains("visible")) {
      bgBoxEl.classList.add("visible");
      bgBoxEl.textContent = "배경이 마음에 안드시나요?";
    }
  } else if (event.type === "mouseout") {
    if (bgBoxEl.classList.contains("visible")) {
      bgBoxEl.classList.remove("visible");
    }
  }
}
bgEl.addEventListener("mouseover", handleBackGroundOver);
bgEl.addEventListener("mouseout", handleBackGroundOver);

let trackEl = "";
function handleRandomBackGround() {
  let randomBg = bgArrayEl[Math.floor(Math.random() * bgArrayEl.length)];
  if (randomBg === trackEl) {
    randomBg = bgArrayEl[Math.floor(Math.random() * bgArrayEl.length)];
  }
  trackEl = randomBg;
  return randomBg;
}
function handleBackGroundClick() {
  const randomBg = handleRandomBackGround();

  document.body.style.backgroundPosition = "center center";
  document.body.style.background = `url(${randomBg})`;
}
bgEl.addEventListener("click", handleBackGroundClick);
