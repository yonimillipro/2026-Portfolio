import { useEffect, useState } from "react";
import portraitUrl from "../pro5.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Capabilities from "./components/Capabilities";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MotionController from "./components/MotionController";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const storedTheme = window.localStorage.getItem("yonathan-portfolio-theme");
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("yonathan-portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <MotionController />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="site-shell">
        <Header
          theme={theme}
          onToggleTheme={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
        />
        <main id="main-content">
          <Hero portraitUrl={portraitUrl} resumeUrl={`${import.meta.env.BASE_URL}Yonathans_CV.pdf`} />
          <Projects />
          <Experience />
          <Capabilities />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
