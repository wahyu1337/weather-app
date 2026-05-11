import logs from "./logs.js";
import getInfo from "./response.js";
import { displayWeatherData } from "../pages/content.js";

// current mode state 1 = dark, 0 = light
let currentDarkMode = true;

// event listener
// darkmode button
function darkMode() {
    const darkmode = document.getElementById("darkmode");
    const themeMode = document.getElementById("theme");
    const btnSearch = document.getElementById("btnSearch");
    // event listener
    darkmode.addEventListener("click", () => {
    const container = document.getElementById("container");
    const inputBox = document.getElementById("inputContent");
    const detailContent = document.getElementById("detailContent");
    const inputContent = document.getElementById("inputContent");
        if (currentDarkMode) {
            container.style.backgroundColor = "white";
            container.style.color = "black";
            themeMode.textContent = "light";
            inputContent.style.backgroundColor = "rgba(235, 235, 235, 0.904)";
            btnSearch.style.backgroundColor = "rgba(235, 235, 235, 0.904)";
            detailContent.classList.add("detail-content-light");            
            inputBox.classList.add("light");
            return currentDarkMode = false;
        } else {
            container.style.backgroundColor = "black";
            container.style.color = "white";
            themeMode.textContent = "dark_mode";
            inputContent.style.backgroundColor = "white";
            btnSearch.style.backgroundColor = "white";
            detailContent.classList.remove("detail-content-light");                    
            inputBox.classList.remove("light");
            return currentDarkMode = true;
        }
    }) 
}

// search button
function searchBtn() {
    const btnSearch = document.getElementById("btnSearch");
    btnSearch.addEventListener("click", async () => {
        const inputValue = document.getElementById("input").value;    
        logs(`Searching for ${inputValue}...`);
        
        // get the data information
        try {
            const json = await getInfo(inputValue);
            displayWeatherData(json);
        } catch (err) {
            console.error("Error fetching data: ", err);
        }
    });    
}

export {darkMode, searchBtn};