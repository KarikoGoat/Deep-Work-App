import { useState } from 'react';


const PauseButton = (props) => {

  const [textPause, setTextPause] = useState(true)

  const handleClick = () => {
    props.isPause.current = !props.isPause.current;
    setTextPause(!textPause);
  }

  return (
    <button className="bg-veryLightGrey text-veryDarkGrey  rounded-md text-xl 
    px-6 py-4" onClick={() => handleClick()}
    >  
      {textPause ? "Pause" : "Resume"}
    </button>
  )
}

export default PauseButton