import React from "react";
import "../CSS/Modal.css";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsImg from "../images/projects.png";
import Bat from "../images/bat.png";
import Film from "../images/film.png";
import "../CSS/Desktop.css";
import ExitSound from "./ExitSound";
import url from '../sounds/close-click.mp3';

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
              <ExitSound url={url}/>
            </motion.button>
          </div>
          <motion.div className="modalIconLayout">
            <div className='modalIconContainer'> 
            <a target="_blank" rel="noopener noreferrer" href="https://luceroweb.github.io/haunted-house-game/#/">
            <img className="Icons" src={Bat} alt="Logo" />
            </a>
            <div>Haunted House</div>
            </div>
            <div className='modalIconContainer'>
            <a target="_blank" rel="noopener noreferrer" href="https://luceroweb.github.io/trivia-and-chill/">
            <img className="Icons" src={Film} alt="Logo" />
            </a>
            <div>Trivia and Chill</div>
            </div>
            <div className='modalIconContainer'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/">
            <img className="Icons" src={ProjectsImg} alt="Logo" />
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
