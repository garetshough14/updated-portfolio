import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Desktop.css";




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

const Trash = ({setShowTrash, showTrash, darkMode }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showTrash && (
        <motion.div
          variants={modalAnimation}
          initial="hidden"
          animate="visible"
          drag
          className={darkMode ? "darkModeModalContainer" : "modalContainer"}
        >
          <div className={darkMode ? "darkModeTopBar" : "topBar"}>
            <div className={darkMode ? "darkModeModalTitle" : "modalTitle"}>Trash</div>
            <motion.button
              onClick={() => {
                setShowTrash(false);
              }}
              whileTap={{ scale: 1.1 }}
              className={darkMode ? "darkModeModalExit" : "modalExit"}
            >
              x
            </motion.button>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Trash;
