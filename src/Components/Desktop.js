import React, {useState} from "react";
import "../CSS/Desktop.css";
import Folder from "../images/folder.png";
import TrashBin from "../images/trashbin.png";
import {motion} from 'framer-motion'
import Modal from './Resume'
import Settings from "./Settings";
import Computer from '../images/computerOne.png'
import Projects from "./Projects";
import ResumeImg from "../images/resume.png";
import Socials from './Socials';
import SocialsImage from '../images/socials.png'

const Desktop = () => {
  const [showModal, setShowModal] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showSocials, setShowSocials] = useState(false)
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "darkModeImage" : "backgroundImage"}>
    <Socials showSocials={showSocials} setShowSocials={setShowSocials} darkMode={darkMode} setDarkMode={setDarkMode}/>  
    <Settings showSettings={showSettings} setShowSettings={setShowSettings} darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Projects showProjects={showProjects} setShowProjects={setShowProjects} darkMode={darkMode}/>

    <Modal showModal={showModal} setShowModal={setShowModal} darkMode={darkMode}/>
      <div className="iconLayout">
        <motion.div 
            className="seperateContainers"
            whileHover={{scale: 1.1}}
        >
          <img onClick={() =>{setShowModal(true)}} className="Icons" src={ResumeImg} alt="Logo" />
          <div className={darkMode ? "darkModeIconText" : "iconText"}>Resume</div>
        </motion.div>

        <motion.div 
            className="seperateContainers"
            whileHover={{scale: 1.1}}
            >
          <img onClick={() =>{setShowProjects(true)}} className="Icons" src={Folder} alt="Logo" />
          <div className={darkMode ? "darkModeIconText" : "iconText"}>Projects</div>
        </motion.div>

        <motion.div 
            className="seperateContainers"
            whileHover={{scale: 1.1}}
        >
          <img className="Icons" src={Computer} alt="Logo" onClick={() =>{setShowSettings(true)}}/>
          <div className={darkMode ? "darkModeIconText" : "iconText"}>Settings</div>
        </motion.div>

        <motion.div 
            className="seperateContainers"
            whileHover={{scale: 1.1}}
        >
          <img className="Icons" src={TrashBin} alt="Logo" />
          <div className={darkMode ? "darkModeIconText" : "iconText"}>Trash</div>
        </motion.div>

        <motion.div 
            className="seperateContainers"
            whileHover={{scale: 1.1}}
        >
          <img className="Icons" src={SocialsImage} alt="Logo" onClick={() =>{setShowSocials(true)}}/>
          <div className={darkMode ? "darkModeIconText" : "iconText"}>Socials</div>
        </motion.div>
        
      </div>
      <div className={darkMode ? "darkModeFooterContainer" : "footerContainer"}>
        <div className={darkMode ? "darkModeStartButton" : "startButton"}>Start</div>
    </div>
    </div>
  );
};

export default Desktop;
