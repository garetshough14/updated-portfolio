import React from "react";
import "../CSS/Modal.css";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsImg from "../images/projects.png";
import Bat from "../images/bat.png";
import Film from "../images/film.png";
import "../CSS/Desktop.css";

const modalAnimation = {
  hidden: {
    x: "15vh",
    // y: "60vh",
    opacity: 0,
  },
  visible: {
    x: "20vh",
    y: "15vh",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Projects = ({ darkMode, showProjects, setShowProjects }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showProjects && (
        <motion.div
          variants={modalAnimation}
          initial="hidden"
          animate="visible"
          drag
          className={darkMode ? "darkModeModalContainer" : "modalContainer"}
        >
          <div className={darkMode ? "darkModeTopBar" : "topBar"}>
            <div className={darkMode ? "darkModeModalTitle" : "modalTitle"}>
              Projects
            </div>
            <motion.button
              onClick={() => {
                setShowProjects(false);
              }}
              whileTap={{ scale: 1.1 }}
              className={darkMode ? "darkModeModalExit" : "modalExit"}
            >
              x
            </motion.button>
          </div>
          <motion.div className="projectIcons">
            <div style={{display: "flex", flexDirection: "column", textAlign: 'center', width: "100%", margin: "10px" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://luceroweb.github.io/haunted-house-game/#/">
            <img className="projectIcons" src={Bat} alt="Logo" />
            </a>
            <div>Haunted House</div>
            </div>
            <div style={{display: "flex", flexDirection: "column", textAlign: 'center', width: "100%", margin: "10px" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://luceroweb.github.io/trivia-and-chill/">
            <img className="projectIcons" src={Film} alt="Logo" />
            </a>
            <div>Trivia and Chill</div>
            </div>
            <div style={{display: "flex", flexDirection: "column", textAlign: 'center', width: "100%", margin: "10px" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/">
            <img className="projectIcons" src={ProjectsImg} alt="Logo" />
            </a>
            <div>Karots Saving</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Projects;
