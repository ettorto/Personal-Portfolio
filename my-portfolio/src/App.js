import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Ernest Torgbor Torto</h1>
        <h2>Software Developer | Full-Stack Engineer</h2>
      </header>
      
      <section id="about">
        <h2>About Me</h2>
        <p>BSc. Computer Science, Ashesi University (Graduating August 2024).</p>
        <p>Awarded The MasterCard Foundation Scholar Program (2020 – 2024).</p>
      </section>
      
      <section id="experience">
        <h2>Work Experience</h2>
        <h3>Associate Project Control Manager - Huawei Technologies, Ghana (October 2024 - Present)</h3>
        <ul>
          <li>Ensure tasks are properly sequenced to meet deadlines.</li>
          <li>Monitor progress and adjust schedules as necessary.</li>
          <li>Assess potential risks and develop mitigation plans.</li>
          <li>Ensure clear communication of project goals and updates.</li>
          <li>Maintain project documentation for audits and reviews.</li>
        </ul>
        
        <h3>Full Stack Developer Intern - Axxend Corporation, Ghana (June 2022 - July 2022)</h3>
        <ul>
          <li>Interviewed clients to identify functional requirements for the support portal.</li>
          <li>Worked with a team of seven to brainstorm ideas for various projects.</li>
          <li>Tested project functionalities and documented areas of improvement.</li>
        </ul>
      </section>
      
      <section id="projects">
        <h2>Projects and Research</h2>
        <ul>
          <li><strong>Filo</strong> (September 2024 - Present) - 2D game using Unity, C#, and Figma.</li>
          <li><strong>Connecto</strong> (May 2024 - July 2024) - Mobile app using Flutter and Firestore, connecting students to mentors.</li>
          <li><strong>Password Generator</strong> (June 2024) - Built with React, TypeScript, Styled-components, and Tailwind CSS.</li>
          <li><strong>Hairworldgh</strong> (Jan 2024 - Apr 2024) - E-commerce platform using PHP, CSS, JavaScript, and HTML.</li>
          <li><strong>FitFam Project</strong> (Sept 2023 - Dec 2023) - Gym management system using React and Firestore.</li>
        </ul>
      </section>
      
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Languages: English, Ga, Twi</li>
          <li>Programming: HTML, React, Java, Python, PHP, JavaScript, CSS, OpenGL, C++, Flutter</li>
        </ul>
      </section>
      
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:ernest.torto@alumni.ashesi.edu.gh">ernest.torto@alumni.ashesi.edu.gh</a></p>
        <p>Email: <a href="mailto:ernesttorto1@gmail.com">ernesttorto1@gmail.com</a></p>
        <p>Phone: +233 54 695 9144</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ernest-torto" target="_blank">LinkedIn Profile</a></p>
      </section>
      
      <footer>
        <p>&copy; 2025 Ernest Torgbor Torto</p>
      </footer>
    </div>
  );
}

export default App;