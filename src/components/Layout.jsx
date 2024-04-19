import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="page"
        unmountOnExit
      >
        <div>
          <Navbar theme={theme} setTheme={setTheme} />
          {children}
          <Footer />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Layout;
