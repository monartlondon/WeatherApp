
async function getWeather(city, apikey, units="metric") {  
  const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`
  const res = await fetch(path) 
  const json = await res.json()
  return json
}

    const inputCity = document.getElementById('input-city')
    const form = document.getElementById('form')
    const cityName = document.getElementById('city')
    const tempDisplay = document.getElementById('temp-display')
    const weatherDesc = document.getElementById('weather-description')
    const lowTemp = document.getElementById ('low-temp')
    const highTemp = document.getElementById('high-temp')
    const background = document.getElementById("_img");
    
    form.addEventListener('submit', (event) => {
       event.preventDefault()
       const apikey = 'f4b27ffc64aff7046b5859c92dff27a5'
       const city = inputCity.value
   
    getWeather(city, apikey).then((json) => {
        cityName.innerHTML = json.name 
        tempDisplay.innerHTML = Math.round(json.main.temp) + " °C"
        weatherDesc.innerHTML = json.weather[0].description
        lowTemp.innerHTML = "Min " + Math.round(json.main.temp_min) + " °C"
        highTemp.innerHTML = "Max " + Math.round(json.main.temp_max) + " °C"
    }).catch((error) => {
        console.log(error.message)
    })      
})

const date = new Date().toLocaleDateString()
document.getElementById("date").innerHTML = date;

