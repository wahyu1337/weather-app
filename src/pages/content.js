export default function Content() {
    const container = document.getElementById("container");
}

function displayWeatherData (data) {
    // DOM
    const container = document.getElementById("container");
    const contentLocation = document.getElementById("location");
    const contentDetail = document.getElementById("detailContent");
    
    // if no data.
    if (!data) return;

    // city & detail weather
    document.getElementById("cityName").textContent = `${data.name}`.toUpperCase();
    // reset after data searched
    document.getElementById("input").value = "";

    document.getElementById("countryName").textContent = `(${data.sys.country})`;
    
    // Update weather theme
    updateWeatherTheme(container, data.weather[0].main);

    // icon    
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    const iconElement = document.getElementById("icon");
    iconElement.style.display = "block";
    iconElement.src = iconUrl;
    
    document.getElementById("tempValue").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("humidityValue").textContent = `${data.main.humidity}%`;
    document.getElementById("pressureValue").textContent = `${data.main.pressure} hPa`;
    document.getElementById("windValue").textContent = `${data.wind.speed} m/s`;
    
    contentLocation.style.display = "flex";
    contentDetail.style.display = "flex";
}

function updateWeatherTheme(container, weatherMain) {
    // Remove all weather classes
    const weatherClasses = [
        "weather-clear", 
        "weather-clouds", 
        "weather-rain", 
        "weather-snow", 
        "weather-thunderstorm", 
        "weather-haze"
    ];
    container.classList.remove(...weatherClasses);

    // Map weather condition to class
    let themeClass = "";
    const main = weatherMain.toLowerCase();

    if (main.includes("clear")) themeClass = "weather-clear";
    else if (main.includes("cloud")) themeClass = "weather-clouds";
    else if (main.includes("rain") || main.includes("drizzle")) themeClass = "weather-rain";
    else if (main.includes("snow")) themeClass = "weather-snow";
    else if (main.includes("thunderstorm")) themeClass = "weather-thunderstorm";
    else themeClass = "weather-haze";

    container.classList.add(themeClass);
}

export {displayWeatherData};