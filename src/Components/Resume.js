import React from "react";
import "../CSS/Modal.css";
import { motion, AnimatePresence } from "framer-motion";

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

const Resume = ({ darkMode, showModal, setShowModal, playExitSound }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
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
                setShowModal(false);
                playExitSound()
              }}
              whileTap={{ scale: 1.1 }}
              className={darkMode ? "darkModeModalExit" : "modalExit"}
            >
              x
            </motion.button>
          </div>
          <iframe
            title="pdf-file"
            src={require("../resume/Hough_Resume_edited.pdf")}
            width="100%"
            height="100%"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Resume;
