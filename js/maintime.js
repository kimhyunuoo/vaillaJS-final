const timeStampEl = document.querySelector(".textGroup__timeStamp");

function superStamp() {
  const presentEl = new Date();
  const dayEls = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayEl = dayEls[presentEl.getDay()];
  const hourEl = String(presentEl.getHours()).padStart(2, "0");
  const minEl = String(presentEl.getMinutes()).padStart(2, "0");

  timeStampEl.style.fontWeight = "600";
  timeStampEl.innerHTML = `${hourEl}:${minEl} <span class="small-text">${dayEl}</span>`;
}

superStamp();
setInterval(superStamp, 1000);
