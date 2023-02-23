import React, {useState, useRef} from "react";
import "../CSS/Desktop.css";
import Folder from "../images/folder.png";
import TrashBin from "../images/trashbin.png";
import {motion} from 'framer-motion'
import Resume from './Resume'
import Settings from "./Settings";
import SettingsImage from '../images/settings.png'
import Projects from "./Projects";
import ResumeImg from "../images/resume.png";
import Socials from './Socials';
import SocialsImage from '../images/socials.png'
import Trash from './Trash'
import sound from '../sounds/normal-click.mp3'

const Desktop = () => {
  const [showResume, setshowResume] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showSocials, setShowSocials] = useState(false)
  const [darkMode,setDarkMode] = useState(false)
  const [showTrash,setShowTrash] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const audioRef = useRef(null)

  const playOpenSound = () => {
    audioRef.current.currentTime = 0
    audioRef.current.play()
  }

  return (

    
    <div className={darkMode ? "darkModeImage" : "backgroundImage"}>
    <Socials showSocials={showSocials} setShowSocials={setShowSocials} darkMode={darkMode} setDarkMode={setDarkMode}/>  
    <Settings showSettings={showSettings} setShowSettings={setShowSettings} darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Projects showProjects={showProjects} setShowProjects={setShowProjects} darkMode={darkMode}/>
    <Trash showTrash={showTrash} setShowTrash={setShowTrash} darkMode={darkMode}/>
    <audio ref={audioRef} src={sound} />

    <Resume showResume={showResume} setshowResume={setshowResume} darkMode={darkMode}/>
      <div className="iconLayout">

        <motion.div 
            className="seperateContainers"
            whileHover={{scale: 1.1}}
            >
          <img onClick={() =>{
            setShowProjects(true)
            playOpenSound()
            }} className="Icons" src={Folder} alt="Logo" />
          <div className={darkMode ? "darkModeIconText" : "iconText"}>Projects</div>
        </motion.div>

        <motion.div 
            className="seperateContainers"
            whileHover={{scale: 1.1}}
        >
          <img className="Icons" src={SettingsImage} alt="Logo" onClick={() =>{
            setShowSettings(true)
            playOpenSound()
            }}/>
          <div className={darkMode ? "darkModeIconText" : "iconText"}>Settings</div>
        </motion.div>

        <motion.div 
            className="seperateContainers"
            whileHover={{scale: 1.1}}
        >
          <img onClick={() =>{
            setshowResume(true)
            playOpenSound()
            }} className="Icons" src={ResumeImg} alt="Logo" />
          <div className={darkMode ? "darkModeIconText" : "iconText"}>Resume</div>
        </motion.div>

        <motion.div 
            className="seperateContainers"
            whileHover={{scale: 1.1}}
        >
          <img className="Icons" src={SocialsImage} alt="Logo" onClick={() =>{
            setShowSocials(true)
            playOpenSound()
            }}/>
          <div className={darkMode ? "darkModeIconText" : "iconText"}>Socials</div>
        </motion.div>

        <motion.div 
            className="seperateContainers"
            whileHover={{scale: 1.1}}
        >
          <img className="Icons" src={TrashBin} alt="Logo" onClick={() =>{
            setShowTrash(true)
            playOpenSound()
            }}/>
          <div className={darkMode ? "darkModeIconText" : "iconText"}>Trash</div>
        </motion.div>
        
      </div>
      <div className={darkMode ? "darkModeFooterContainer" : "footerContainer"}>
      {/* {fadeIn && (
        <div className={`dropdown-menu ${fadeIn ? "show" : ""}`}>
          <div className="dropdownTopBar">Administrator</div>
          <div className="columnContainer">
          <div className="selectionColumn1">
            <div className="columnItem"></div>
            <div className="columnItem"></div>
            <div className="columnItem"></div>
          </div>
          <div className="selectionColumn2">
            
          </div>
          </div>
        </div>
        )} */}
        <button onClick={() => setFadeIn(!fadeIn)} className={darkMode ? "darkModeStartButton startButtonStyling" : "startButton startButtonStyling"}>Start</button>
    </div>
    </div>
  );
};

export default Desktop;
