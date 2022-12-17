import CloseButton from "../buttons/CloseButton"
import { useAppContext } from "../../context/AppContext";
import Task from "../Task";


const CreatePresetPopup = (props) => {
  
  let { tasks } = useAppContext();
  tasks = tasks.filter(task => task.parentId === "");
  
  return (props.trigger) ? (
      <div className="fixed -top-100  bottom-0 right-0 left-0 w-full h-screen
      bg-black/50 flex justify-center items-center z-20">
        <div className="relative p-32 w-10/12 h-5/6 bg-veryDarkishGrey rounded-lg">
          <div className="bg-almostVeryDarkishGrey flex justify-between items-center
          absolute top-0 left-0 right-0 px-4 py-2 rounded-t-md ">
            <h1 className="text-almostWhite text-xl">Add Tasks</h1>
            <CloseButton setTrigger={props.setTrigger} />
          </div>
          <div>
            <div className="absolute left-3 right-3 top-16 bottom-4 overflow-y-scroll">
              {tasks.map((task) => {
                return (
                  <Task key={task.id} id={task.id} task={task}/>
                )
              })}
            </div>
          </div>
        </div>
      </div>
  ) : null
}

export default CreatePresetPopup