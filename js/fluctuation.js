const fluctuationEl = document.querySelector(".fluctuations");

function updateGreeting() {
  let getHour = new Date().getHours();

  if (getHour >= 6 && getHour < 17) {
    fluctuationEl.textContent = "Good Morning,";
  } else {
    fluctuationEl.textContent = "Good Evening,";
  }
}

updateGreeting();
setInterval(updateGreeting, 3600000);
