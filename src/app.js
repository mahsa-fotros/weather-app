function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name + ", " + response.data.sys.country;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  console.log(response.data);
}
let apiKey = "8c015c55555e4a56a568e7b57076b8d1";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(displayTemperature);
