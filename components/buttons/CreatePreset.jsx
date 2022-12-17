

const CreatePreset = (props) => {
  return (
    <button className="bg-veryLightGrey text-veryDarkGrey  rounded-md text-xl 
    px-4 py-2 m-6" onClick={() => props.setTrigger(true)}>  
      Create New
    </button>
  )
}

export default CreatePreset