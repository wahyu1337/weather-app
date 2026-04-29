// import module
import Header from "./pages/header.js";
import Content from "./pages/content.js";

const container = document.querySelector("#container");

// render
Header();
Content();

// export
export {container};