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