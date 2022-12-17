import DeleteButton from "./buttons/DeleteButton";
import EditButton from "./buttons/EditButton";
import StartButton from "./buttons/StartButton";

const Preset = (props) => {

  const preset = props.preset

  return (
    <>
      <div className="bg-darkishGrey my-4 p-6">
        <div className="flex justify-end space-x-6">
          <EditButton {...preset} setEditPresetButton={props.setEditPresetButton} />
          <DeleteButton {...preset} />
        </div>
        <h1 className="text-6xl text-almostWhite  ">
        {preset.presetName}
        </h1>
        <h1 className="text-almostWhite text-2xl my-4">
          {preset.presetTimeHours}: 
          {preset.presetTimeMinutes == 0 ? 
            "0"+preset.presetTimeMinutes : 
            preset.presetTimeMinutes 
          }:
          {preset.presetTimeSeconds == 0 ? 
            "0"+preset.presetTimeSeconds : 
            preset.presetTimeSeconds 
          }
        </h1>
        <StartButton text="Start Work" 
        setIsWorking={props.setIsWorking} 
        setCurrentPreset={props.setCurrentPreset}
        preset={preset}  />
      </div>
    </>
  )
}

export default Preset