import Router from "next/router";

const StopButton = (props) => {

  const handleClick = () => {
    props.isPause.current = false;
    Router.push({
      pathname: '/work'
    })
  }

  return (
    <button className="bg-brandYellow text-veryDarkGrey  rounded-md text-xl 
    px-6 py-4" onClick={handleClick}>  
      Finish Work
    </button>
  )
}

export default StopButton