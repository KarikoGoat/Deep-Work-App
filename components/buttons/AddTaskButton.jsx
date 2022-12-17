import CreateTaskPopup from "../forms/CreateTaskPopup";
import { useState } from "react";
import Image from "next/image"
import addIcon from "../../public/addIcon.svg";


const AddTaskButton = (props) => {

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    props.setTrigger(true)
  }

  return (
    <>
      <button className="m-2 min-w-max" name="taskInsideButton"
      onClick={handleClick}>
        <Image src={addIcon} className="w-7 p-1 hover:bg-[#606670]" alt="Expand Down Icon" />
      </button> 
    </>
  )
}

export default AddTaskButton