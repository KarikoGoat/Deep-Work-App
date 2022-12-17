import { useState } from 'react';
import EditPresetPopup from '../forms/EditPresetPopup';

const EditButton = (props) => {
  
  const [editPresetButton, setEditPresetButton] = useState(false);

  const handleClick = () => {
    setEditPresetButton(true);
    props.setEditPresetButton(true);
  }

  return (
    <>
      <button className="border-none text-veryLightGrey text-xl" name="taskInsideButton" 
      onClick={handleClick}>
        Edit Preset
      </button>
      <EditPresetPopup {...props} trigger={editPresetButton} setEditPresetButton={props.setEditPresetButton} setTrigger={setEditPresetButton} />
   
    </>
  )
}

export default EditButton;