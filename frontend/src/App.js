import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <Router>
      <div className="screen-content">
        <div className="container nav-header">
          <Header theme={theme} />
          <div className="themeToggle px-3" onClick={themetoggle}>
            <WiMoonAltWaningCrescent4 />
          </div>
        </div>
        <main className="py-3 main-content">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
            </Routes>
          </Container>
        </main>
        <Footer theme={theme} />
      </div>
    </Router>
  );
};

export default App;
