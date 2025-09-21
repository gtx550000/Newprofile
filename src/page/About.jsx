import React from "react";
import Aboutprofile from "../components/aboutmeprofile";
import { motion } from "framer-motion";
import { FaGraduationCap, FaGithub } from "react-icons/fa";
import "../components/css/popup.css";
import "../components/css/Education.css";
import "../components/css/Projects.css";
import "../components/css/fix.css";

/* ---------- data ---------- */
const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    university: "King Mongkut's University of Technology North Bangkok",
    year: "2022 - present",
    details:
      "Developed web applications with React and Node.js, and conducted automated functional tests using Playwright to identify and resolve issues effectively.",
  },
  {
    degree: "Business Computer",
    university: "Siba College",
    year: "2019 - 2021",
    details: "Experienced in IoT projects with a solid foundation in networking and computer troubleshooting.",
  },
];

const projectsData = [
  {
    title: "Rent Game Platform (React & Node.js)",
    description:
      "Developed a game rental and purchase platform with features including shopping cart, payment system, and an admin dashboard for product and order management.",
    techStack: ["React", "Node.js", "Postman", "Docker", "MUI"],
    githubLink: "https://github.com/gtx550000/Reant_game_",
    liveLink: "https://yourapp.netlify.app/rent",
    image:
      "https://via.placeholder.com/400x250/87CEEB/FFFFFF?text=Rent+Platform",
  },
  {
    title: "Chat Bot by n8n (React)",
    description:
      "Real-time chat application using n8n for workflow management and automated responses.",
    techStack: ["React", "N8n", "Supabase"],
    githubLink: "https://github.com/gtx550000/my-8bit-chatbot",
    liveLink: "https://yourapp.netlify.app/chat",
    image: "https://via.placeholder.com/400x250/90EE90/FFFFFF?text=Chat+App",
  },
  {
    title: "Portfolio Website (React)",
    description:
      "Developed a personal portfolio website using React and Bootstrap, enhanced with animations powered by Framer Motion.",
    techStack: ["React", "Bootstrap", "Framer Motion"],
    githubLink: "https://github.com/yourusername/portfolio-react",
    liveLink: "https://yourportfolio.com",
    image:
      "https://via.placeholder.com/400x250/FFD700/FFFFFF?text=Portfolio+Website",
  },
];

/* ---------- motion variants ---------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

/* ---------- component ---------- */
const About = () => {
  return (
    <div className="fade-in">
      <Aboutprofile />

      <hr
        className="featurette-divider"
        style={{ width: "80%", margin: "20px auto", borderTop: "2px solid" }}
      />

      {/* ⬇️ ใส่ wrapper จัด layout */}
      <section className="about-sections">
        {/* Education */}
        <div className="education-container">
          <motion.h2 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            Education
          </motion.h2>

          <motion.div
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {educationData.map((edu, idx) => (
              <motion.div key={idx} className="timeline-item" variants={itemVariants}>
                <div className="timeline-icon"><FaGraduationCap /></div>
                <div className="timeline-content">
                  <h3>{edu.degree}</h3>
                  <p className="university">{edu.university}</p>
                  <span className="year">{edu.year}</span>
                  <p className="details">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Projects */}
        <div className="projects-container">
          <motion.h2 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            Project
          </motion.h2>

          <motion.div
            className="project-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projectsData.map((project, idx) => (
              <motion.div key={idx} className="project-card" variants={itemVariants}>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                  {project.techStack.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub /> GitHub
                    </a>
                  )}
                  
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="featurette-divider" />

      {/* Footer */}
      <div className="container px-5">
        <footer className="container">
          <p className="float-end">
            <a href="/">Back to Home</a>&nbsp;&nbsp;<a href="/credit">Go to Credit</a>
          </p>
          <p>&copy;Credit by Bootstrap&middot;</p>
        </footer>
      </div>
    </div>
  );
};

export default About;
