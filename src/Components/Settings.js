import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dark from "../images/dark.png";
import Star from "../images/star.png";
import "../CSS/Desktop.css";
import "../CSS/Modal.css";



const modalAnimation = {
  hidden: {
    x: "15vw",
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

const Settings = ({ showSettings, setShowSettings, setDarkMode, darkMode }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showSettings && (
        <motion.div
          variants={modalAnimation}
          initial="hidden"
          animate="visible"
          drag
          className={darkMode ? "darkModeModalContainer" : "modalContainer"}
        >
          <div className={darkMode ? "darkModeTopBar" : "topBar"}>
            <div className={darkMode ? "darkModeModalTitle" : "modalTitle"}>Settings</div>
            <motion.button
              onClick={() => {
                setShowSettings(false);
              }}
              whileTap={{ scale: 1.1 }}
              className={darkMode ? "darkModeModalExit" : "modalExit"}
            >
              x
            </motion.button>
          </div>
          <motion.div 
            className="seperateContainers"
            // whileHover={{scale: 1.1}}
            onClick={() => {setDarkMode(true)}}
        >

          <img className="Icons" src={Dark} alt="Logo" />
          <div>Dark Mode</div>
        </motion.div>

        <motion.div 
            className="seperateContainers"
            // whileHover={{scale: 1.03}}
            onClick={() => {setDarkMode(false)}}
        >
        <img className="Icons" src={Star} alt="Logo" />
        <div>Light Mode</div>
        </motion.div>


        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Settings;
