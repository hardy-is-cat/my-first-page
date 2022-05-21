function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const cityName = data.name 
    const temp = data.main.temp
    const weather = data.weather[0].main
    const cityEl = document.querySelector(".weather__city")
    const tempEl = document.querySelector(".weather__temp")
    const weatherEl = document.querySelector(".weather__sky")
    cityEl.innerText = cityName
    tempEl.innerText = `${temp}℃`
    weatherEl.innerText = weather
  })
}
function onGeoError() {
  alert("위치를 찾을 수 없습니다")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)