import Image from "next/image"
import { useEffect, useState } from "react";
import dropDownMenuIcon from "../../public/dropDownMenuIcon.svg";
import DropDownMenu from "../DropDownMenu";
import OutsideAlerter from "../OutsideAlerter";

const TaskOptionsButton = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  
  const handleClickOutside = () => {
    setIsOpen(false);
  }

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(!isOpen)
  }

  return (
    <>
      <OutsideAlerter handleClickOutside={handleClickOutside}>
        <div>
          <button className="m-2 min-w-max" name="taskInsideButton" onClick={handleClick}  >
            <Image id={props.id} name="taskInsideButton"  className="w-8 hover:bg-[#606670]" src={dropDownMenuIcon} alt="Dropdown Menu Icon" /> 
          </button>
          <DropDownMenu setIsEditable={props.setIsEditable} setTrigger={props.setTrigger} trigger={isOpen} id={props.id}/>
        </div>
      </OutsideAlerter>
    </>
  )
}

export default TaskOptionsButton