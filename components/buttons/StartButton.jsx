import Router from "next/router";


const StartButton = (props) => {

  const handleClick = () => {
    Router.push({
      pathname: `/work/${props.preset.presetName}`,
      query: { id: props.preset.id}
    })
  }

  return (
    <button className="bg-brandYellow text-veryDarkGrey  rounded-md text-xl 
    px-6 py-3"  onClick={handleClick}>  
      {props.text}
    </button>
  )
}

export default StartButton;