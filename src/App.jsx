import { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const reveal = () => {
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="container">
      <nav>
        <h2>Rikesh.</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div id="home" className="hero">
        <h1>Hi, I'm <span>Rikesh Vijay</span></h1>
        <p>CSE Student | Aspiring Software Developer</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a Computer Science Engineering student passionate about
          programming, problem-solving, and building modern web applications.
        </p>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Java</span>
          <span>Python</span>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Modern portfolio built using React.</p>
            <a href="https://github.com">GitHub</a>
          </div>
          <div className="card">
            <h3>To-Do App</h3>
            <p>Task management app using React hooks.</p>
            <a href="https://github.com">GitHub</a>
          </div>
          <div className="card">
            <h3>Student Management System</h3>
            <p>CRUD-based academic project.</p>
            <a href="https://github.com">GitHub</a>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: rikesh@email.com</p>
        <p>GitHub: github.com/rikeshvijay948</p>
        <p>LinkedIn: linkedin.com/in/rikesh-vijay</p>
      </section>

      <footer>
        © 2026 Rikesh Vijay. All Rights Reserved.
      </footer>
    </div>
  );
}
