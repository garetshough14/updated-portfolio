import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import LinkedIn from '../images/Linkedin.png';
import Github from '../images/Github.png'
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
    x: "25vh",
    y: "12vh",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Socials = ({ setDarkMode, setShowSocials, showSocials, darkMode }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showSocials && (
        <motion.div
          variants={modalAnimation}
          initial="hidden"
          animate="visible"
          drag
          className={darkMode ? "darkModeModalContainer" : "modalContainer"}
        >
          <div className={darkMode ? "darkModeTopBar" : "topBar"}>
            <div className={darkMode ? "darkModeModalTitle" : "modalTitle"}>Socials</div>
            <motion.button
              onClick={() => {
                setShowSocials(false);
              }}
              whileTap={{ scale: 1.1 }}
              className={darkMode ? "darkModeModalExit" : "modalExit"}
            >
              <ExitSound url={url}/>
            </motion.button>
          </div>
          <div className="modalIconLayout">
          <motion.div 
            className='modalIconContainer'
            // whileHover={{scale: 1.1}}
            onClick={() => {setDarkMode(true)}}
        >
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/garetshough14">
          <img className="Icons" src={Github} alt="Logo" />
          </a>
          <div>Github</div>
        </motion.div>

        <motion.div 
            className='modalIconContainer'
            // whileHover={{scale: 1.03}}
            onClick={() => {setDarkMode(false)}}
        >
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/garet-hough-42bb8222b/">
        <img className="Icons" src={LinkedIn} alt="Logo" />
        </a>
        <div>LinkedIn</div>
        </motion.div>
        </div>


        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Socials;
