import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import General from "./components/General.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// import nameInput from "./js/nameInput.js";

import "./index.css";
import "./styles/General.css";
import "./styles/Education.css";
import "./styles/Header.css";
import "./styles/Footer.css";
import "./styles/Resume.css";
import "./styles/Experience.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <General />
    <Footer />
  </StrictMode>
);
