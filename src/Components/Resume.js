import React from "react";
import "../CSS/Modal.css";
import { motion, AnimatePresence } from "framer-motion";
import ExitSound from "./ExitSound";
import url from '../sounds/close-click.mp3';


const modalAnimation = {
  hidden: {
    x: "15vh",
    opacity: 0,
  },
  visible: {
    x: "20vh",
    y: "15vh",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Resume = ({ darkMode, showResume, setshowResume}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showResume && (
        <motion.div
          variants={modalAnimation}
          initial="hidden"
          animate="visible"
          drag
          className={darkMode ? "darkModeModalContainer" : "modalContainer"}
        >
          <div className={darkMode ? "darkModeTopBar" : "topBar"}>
            <div className={darkMode ? "darkModeModalTitle" : "modalTitle"}>
              Resume
            </div>
            <motion.button
              onClick={() => {
                setshowResume(false);
              }}
              whileTap={{ scale: 1.1 }}
              className={darkMode ? "darkModeModalExit" : "modalExit"}
            >
              <ExitSound url={url}/>
            </motion.button>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', height: '100%', width: '100%'}}>
          <iframe
            title="pdf-file"
            src={require("../resume/Hough_Resume_edited.pdf")}
            width="90%"
            height="90%"
          />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Resume;