// import module
import "./style.css";
import Header from "./pages/header.js";
import Content from "./pages/content.js";
import Footer from "./pages/footer.js";
import logs from "./components/logs.js";
import { darkMode, searchBtn } from "./components/event-handler.js";

// render
Header();
Content();
Footer("Ways");

// event listener
// dark mode
darkMode();

// search button
searchBtn();