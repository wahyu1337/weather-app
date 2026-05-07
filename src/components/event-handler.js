import logs from "./logs.js";

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
        if (currentDarkMode) {
            container.style.backgroundColor = "white";
            container.style.color = "black";
            themeMode.textContent = "light"
            inputBox.classList.add("light");
            return currentDarkMode = false;
        } else {
            container.style.backgroundColor = "black";
            container.style.color = "white";
            themeMode.textContent = "dark_mode";
            inputBox.classList.remove("light");
            return currentDarkMode = true;
        }
    }) 
}

// search button
function searchBtn() {
    const btnSearch = document.getElementById("btnSearch");
    btnSearch.addEventListener("click", () => {
        const inputValue = document.getElementById("input").value;    
        logs(inputValue);
    });
}

export {darkMode, searchBtn};