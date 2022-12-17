import MainButton from "../../components/buttons/MainButton"
import CreatePresetPopup from "../../components/forms/CreatePresetPopup"
import { useState } from "react";
import Preset from "../../components/Preset";
import CreatePreset from "../../components/buttons/CreatePreset";
import { useAppContext } from "../../context/AppContext";


const Work = () => {

  const [createPresetButton, setCreatePresetButton] = useState(false);
  const [editPresetButton, setEditPresetButton] = useState(false);

  let { presets } = useAppContext();

  if (presets.length === 0) {
    return (
      <>
        <div className="flex flex-col items-center space-y-20 my-32">
          <p className="text-8xl text-almostWhite text-center my-16 mx-10">No work presets yet.</p>
          <MainButton setTrigger={setCreatePresetButton} text='Create Preset'/>
          <CreatePresetPopup trigger={createPresetButton} setTrigger={setCreatePresetButton} />
        </div>
      </>
    );
  } 
  return (
    <>
      <div className={`${editPresetButton || createPresetButton ? "fixed" : "absolute"} top-24 left-0 right-0`}>
        {presets.map((preset) => {
          return (
            <Preset key={preset.id} preset={preset} setEditPresetButton={setEditPresetButton}/>
          )
        })}
        
        <CreatePreset setTrigger={setCreatePresetButton} text='Create New' />
        
      </div>
      <CreatePresetPopup trigger={createPresetButton} setTrigger={setCreatePresetButton} />
    </>
    
  );
}

export default Work;


