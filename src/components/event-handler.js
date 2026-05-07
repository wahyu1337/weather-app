import logs from "./logs.js";

// current mode state 1 = dark, 0 = light
let currentDarkMode = true;

// event listener
// darkmode
function darkMode() {
    const darkmode = document.querySelector("#darkmode");
    // event listener
    darkmode.addEventListener("click", () => {
    const container = document.getElementById("container");
        if (currentDarkMode) {
            container.style.backgroundColor = "white";
            container.style.color = "black"
            return currentDarkMode = false;
        } else {
            container.style.backgroundColor = "black";
            container.style.color = "white";
            return currentDarkMode = true;
        }
    }) 
}

function searchBtn() {
    const btnSearch = document.getElementById("btnSearch");
    btnSearch.addEventListener("click", () => {
        const inputValue = document.getElementById("input").value;    
        logs(inputValue);
    });
}

export {darkMode, searchBtn};