
const MainButton = (props) => {
  return (
    <button className="bg-brandYellow text-veryDarkGrey  rounded-md text-2xl 
    px-8 py-4" onClick={() => props.setTrigger(true)}>  
      {props.text}
    </button>
  )
}

export default MainButton