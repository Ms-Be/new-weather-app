function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function searchCity(city){
let apiKey = "b2a5adcct04b33178913oc335f405433";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(refreshWeather);

}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  
  searchCity (searchInputElement.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

searchCity("Harare");




