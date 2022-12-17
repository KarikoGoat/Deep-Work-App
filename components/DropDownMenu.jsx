import TaskDeleteButton from "./buttons/TaskDeleteButton";
import TaskEditButton from "./buttons/TaskEditButton";

const DropDownMenu = (props) => {
  return (props.trigger) ? (
    <>
      <div className="absolute bg-grey w-56 right-5 flex flex-col 
      items-start" name="taskInsideButton">
        <TaskEditButton setIsEditable={props.setIsEditable} />
        <TaskDeleteButton id={props.id} />
      </div>
    </>
  ) : null
}

export default DropDownMenu