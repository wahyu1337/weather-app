import logs from "./logs.js";
import getInfo from "./response.js";
import { displayWeatherData } from "../pages/content.js";

// current mode state 1 = dark, 0 = light
let currentDarkMode = true;

// event listener
// darkmode button
function darkMode() {
    const darkmode = document.getElementById("darkmode");
    const themeIcon = document.getElementById("theme");
    
    darkmode.addEventListener("click", () => {
        const container = document.getElementById("container");
        if (currentDarkMode) {
            container.classList.add("light");
            themeIcon.textContent = "light_mode";
            currentDarkMode = false;
        } else {
            container.classList.remove("light");
            themeIcon.textContent = "dark_mode";
            currentDarkMode = true;
        }
    });
}

// search button
function searchBtn() {
    const btnSearch = document.getElementById("btnSearch");
    const input = document.getElementById("input");

    const handleSearch = async () => {
        const inputValue = input.value;
        if (!inputValue) return;

        logs(`Searching for ${inputValue}...`);
        
        try {
            const json = await getInfo(inputValue);
            if (json) {
                displayWeatherData(json);
            }
        } catch (err) {
            console.error("Error fetching data: ", err);
        }
    };

    btnSearch.addEventListener("click", handleSearch);

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    });
}

export {darkMode, searchBtn};