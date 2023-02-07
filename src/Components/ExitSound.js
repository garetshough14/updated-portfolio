import React, {useRef} from "react";
import exitaudio from '../sounds/close-click.mp3'
import Resume from "./Resume";

const ExitSound = () => {

    const exitAudioRef = useRef(null);
  
    const playExitSound = () => {
      exitAudioRef.current.currentTime = 0
      exitAudioRef.current.play()
    }
    
    return (
      <div>
        <Resume playExitSound={playExitSound} />
        <audio ref={exitAudioRef} src={exitaudio}/>
      </div>
    );
  };
  
  export default ExitSound;