import Image from "next/image"
import { useState } from "react";
import expandDownDown from "../../public/expandDownDown.svg";
import expandDownUp from "../../public/expandDownUp.svg";

const TaskExpandDownButton = (props) => {

  const [buttonToggle, setButtonToggle] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setButtonToggle(!buttonToggle);
    props.setIsClosed(!props.isClosed)
  }

  return (
    <>
      <button className="m-2 min-w-max">
        <Image className="w-8 hover:bg-[#606670]" name="taskInsideButton" src={buttonToggle ? expandDownUp : expandDownDown} 
        onClick={handleClick} alt="Expand Down Icon" /> 
      </button>
    </>
  )
}

export default TaskExpandDownButton