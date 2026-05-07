// current mode state 1 = dark, 0 = light
let currentDarkMode = true;

// event listener
export default function darkMode() {
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