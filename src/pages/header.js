export default function Header() {
    // header parent
    const header = document.querySelector("#header");
    // header child
    // left header
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("left-header");
    // left header content
    const title = document.createElement("p");
    title.textContent = "Ways - Weather Apps";
    title.style.color = "white";
    // append left div
    leftDiv.appendChild(title);


    // right header
    const rightDiv = document.createElement("div");
    rightDiv.classList.add("right-header");
    // right header content
    const textMode = document.createElement("p");
    textMode.textContent = "Dark Mode";
    textMode.style.color = "white";
    const darkMode = document.createElement("button");
    darkMode.textContent = "test";
    darkMode.id = "darkmode";
    // append right div
    rightDiv.appendChild(textMode);
    rightDiv.appendChild(darkMode);

    // append left - right header
    header.appendChild(leftDiv);
    header.appendChild(rightDiv);
}