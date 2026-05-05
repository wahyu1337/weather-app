import getInfo from "../components/handler.js";

export default function Content() {
    // content parent
    const content = document.querySelector("#content");

    // content child
    const contentTitle = document.createElement("h2");
    contentTitle.textContent = "This is content title!";
    contentTitle.classList.add("content-title");

    // append
    content.appendChild(contentTitle);
}

async function inputCity () {
    const city = prompt("Input your city or country name", "makassar");
    if (city) {
        const weatherData = await getInfo(city);
        // console data city.
        console.log("Weather Data received:", weatherData);
    }
}

export {inputCity}