export default function Content() {
    const container = document.getElementById("container");
}

function displayWeatherData (data) {
    // DOM
    const contentLocation = document.getElementById("location");
    const contentDetail = document.getElementById("detailContent");
    // if no data.
    if (!data) return;

    // city & detail weather
    document.getElementById("cityName").textContent = `${data.name}`.toUpperCase();
    // reset after data searched
    document.getElementById("input").value = "";

    document.getElementById("countryName").textContent = `(${data.sys.country})`;
    // icon    
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const iconElement = document.getElementById("icon");
    iconElement.style.display = "block";
    iconElement.src = iconUrl;
    
    // set icon color
    iconElement.style.color = "#ffcc00;";
    
    document.getElementById("tempValue").textContent = `${data.main.temp}°C`;
    document.getElementById("humidityValue").textContent = `${data.main.humidity}%`;
    document.getElementById("pressureValue").textContent = data.main.pressure;
    document.getElementById("windValue").textContent = data.wind.speed;
    
    contentLocation.style.display = "flex";
    contentDetail.style.display = "flex";
}

export {displayWeatherData};