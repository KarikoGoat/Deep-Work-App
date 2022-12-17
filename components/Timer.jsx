import { useState, useEffect, useRef } from "react";

const Timer = (props) => {

  let time = props.presetTime;
  const isOvertime = useRef(false)
  const [isPauseColor, setIsPauseColor] = useState(false);
  const [hours, setHours] = useState(Math.floor((time / (60 * 60))));
  const [minutes, setMinutes] = useState(Math.floor((time / 60) % 60));
  const [seconds, setSeconds] = useState(Math.floor(time % 60));

  if (time > 0) time--;

  const getTime = () => {
    setHours(Math.floor((time / (60 * 60))));
    setMinutes(Math.floor((time / 60) % 60));
    setSeconds(Math.floor(time % 60));
    if (isOvertime.current) {
      time++;
    } else {
      if (time == 0) {
        setTimeout(() => isOvertime.current = true, 1);
        time++;
      } else {
        time--;
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPauseColor(true)
      if (!props.isPause.current) {
        setIsPauseColor(false)
        getTime();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className={`${isPauseColor ? "text-almostVeryDarkGrey" : 
      isOvertime.current ? "text-red" : "text-almostWhite"} text-7xl`}>
        {isOvertime.current ? "-" : ""}{hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
    </>
  )
}

export default Timer