function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature")
    let temperature = response.data.current.temperature;

    temperatureElement.innerHTML = math.round(temperature);
}

function searchCity(city) {
    let apiKey = "878a32b10ft3o44bf60e6240f38ea233"
     let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}';
     axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city")
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector(#search-form);
searchFormElement.addEventListener("submit", handleSearchSubmit);
