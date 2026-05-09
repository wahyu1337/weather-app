import logs from "./logs.js";
import getInfo from "./response.js";
import { displayWeatherData } from "../pages/content.js";

// current mode state 1 = dark, 0 = light
let currentDarkMode = true;

// event listener
// darkmode button
function darkMode() {
    const darkmode = document.querySelector("#darkmode");
    const themeMode = document.getElementById("theme");
    // event listener
    darkmode.addEventListener("click", () => {
    const container = document.getElementById("container");
    const inputBox = document.getElementById("inputContent");
    const detailContent = document.getElementById("detailContent");
        if (currentDarkMode) {
            container.style.backgroundColor = "white";
            container.style.color = "black";
            themeMode.textContent = "light";
            detailContent.classList.add("detail-content-light");            
            inputBox.classList.add("light");
            return currentDarkMode = false;
        } else {
            container.style.backgroundColor = "black";
            container.style.color = "white";
            themeMode.textContent = "dark_mode";
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