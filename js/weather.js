const weatherEl = document.querySelector(".weather");
const weatherIconEl = weatherEl.querySelector(".weather .weather__icon");
const weatherScreenEl = document.querySelector(".weather__screen");
const API_KEY = "a3a5d593038ea39027a6962fdf659257";

// 요소의 가시성을 관찰하는 부분은 인터넷 참고
let isHide = false;

// Weather API
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weatherEl = document.querySelector(".cityName > span");
      const cityEl = document.querySelector(".cityWeather > span");
      const cityTempEl = document.querySelector(".cityTemp > span");
      const localName = data.name;
      const cityWeather = data.weather[0].main;
      const cityTemp = data.main.temp;
      weatherEl.innerText = `🌏 ${localName}`;
      cityEl.innerText = `🌤️ ${cityWeather}`;
      cityTempEl.innerText = `🌡️ ${cityTemp}°C`;
    });
}
function onGeoError() {
  alert("Can't fond you. No Weather for you.");
}
// Weather Screen
function handleWeatherScreen() {
  if (!isHide) {
    weatherIconEl.style.transform = "translateY(-30px)";
    weatherScreenEl.style.width = "300px";
    weatherScreenEl.style.height = "200px";
    weatherScreenEl.style.background = "#fff";
    weatherScreenEl.style.position = "absolute";
    weatherScreenEl.style.opacity = 0.7;
    weatherScreenEl.style.display = "block";
    weatherScreenEl.style.borderRadius = "30px";
    // 요소의 가시성을 관찰하는 부분은 인터넷 참고
    isHide = true;
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  } else {
    weatherScreenEl.style.opacity = 0;
    weatherIconEl.style.transform = "translateY(0px)";
    weatherScreenEl.style.display = "none";
    // 요소의 가시성을 관찰하는 부분은 인터넷 참고
    isHide = false;
  }
}
weatherIconEl.addEventListener("click", handleWeatherScreen);
