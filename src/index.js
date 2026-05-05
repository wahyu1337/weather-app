// import module
import Header from "./pages/header.js";
import Content from "./pages/content.js";
import { inputCity } from "./pages/content.js";

const container = document.querySelector("#container");

// render
Header();
Content();
// inputCity();

// export
export {container};