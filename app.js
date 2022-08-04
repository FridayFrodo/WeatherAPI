const API_KEY = `b43b052d30fff2a992393355d05e814e`
const cityName = document.getElementById('cityInput')
const submitBtn = document.getElementById('citySubmit')

submitBtn.addEventListener('click', function () {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data))

  const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
  }
  const displayTemperature = (temperature) => {
    setInnerText('cityOutput', temperature.name)
    setInnerText('temperatureStatus', temperature.main.temp)
    setInnerText('weatherStatus', temperature.weather[0].main)
    const wIconUrl = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgLoc = document.getElementById('weatherIcon')
    imgLoc.setAttribute('src', wIconUrl)
  }
})
