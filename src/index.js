// import module
import "./style.css";
import Header from "./pages/header.js";
import Content from "./pages/content.js";
import Footer from "./pages/footer.js";
import { darkMode, searchBtn} from "./components/event-handler.js";
import { inputCity } from "./pages/content.js";

// render
Header();
Content();
Footer("Ways");

// for dark mode
darkMode();
searchBtn();