import { useState, useEffect } from "react"

const Poop = (props) => {

  const [state, setState] = useState('')

  useEffect(() => {
    setState('hello')
  }, [])

  return (
    <div className="text-almostWhite">{state} {props.name}</div>
  )
}

export default Poop