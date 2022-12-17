
const FormSaveButton = (props) => {
  return (
    <button className="bg-brandYellow text-veryDarkGrey rounded-md text-xl 
    px-6 py-2 absolute bottom-0 right-0 m-6" type="submit">  
      {props.text}
    </button>
  )
}

export default FormSaveButton