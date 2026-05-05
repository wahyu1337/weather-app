export default function Header() {
    // header parent
    const header = document.querySelector("#header");
    // header child
    const titleHeader = document.createElement("h1");
    titleHeader.textContent = "Ways - Weather App";
    titleHeader.classList.add("header-title");

    // append
    header.appendChild(titleHeader);
}