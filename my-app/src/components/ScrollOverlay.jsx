import React, { useEffect, useState } from "react";
import "../App.css";

export default function ScrollOverlay() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="scroll-overlay">
      <ul>
        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          About
        </li>
        <li
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </li>
        <li
          className={activeSection === "resume" ? "active" : ""}
          onClick={() => scrollToSection("resume")}
        >
          Resume
        </li>
        <li
          className={activeSection === "blog" ? "active" : ""}
          onClick={() => scrollToSection("blog")}
        >
          Blog
        </li>
      </ul>
    </nav>
  );
}
