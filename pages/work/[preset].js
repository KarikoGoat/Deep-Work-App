import { useRef, useState } from 'react';
import Timer from "../../components/Timer"
import StopButton from "../../components/buttons/StopButton";
import PauseButton from "../../components/buttons/PauseButton";
import { useAppContext } from "../../context/AppContext";
import Task from "../../components/Task";
import AddTaskToWorkPopup from '../../components/forms/AddTaskToWorkPopup'

const Presets = ({ id }) => {

  const isPause = useRef(false);
  const [addTaskPopup, setAddTaskPopup] = useState(true);
  let { tasks, presets } = useAppContext();
  const preset = presets.find(item => item.id === id);
  tasks = tasks.filter(task => task.parentId === "");

  return (
    <>
      <div className="flex flex-col md:flex-row  space-y-2 md:space-x-2 h-max">
        <div className='bg-veryDarkishGrey'> 
          <div className="absolute  md:fixed top-32 inset-x-1/2 flex flex-col items-center space-y-16 md:top-48 md:right-0 md:left-0 md:my-36 md:w-5/12">
            <Timer {...preset} isPause={isPause}/>
            <div className="flex space-x-4 ">
              <PauseButton isPause={isPause}/>
              <StopButton isPause={isPause}/>
            </div>
          </div>
        </div>
        <div className={`${addTaskPopup ? "fixed" : "absolute"} top-96 w-full md:right-0 md:top-24 px-4 md:px-1 md:w-7/12`}>
          {tasks.map((task) => {
            return (
              <Task key={task.id} id={task.id} task={task}/>
            )
          })}
        </div>
      </div>
      <AddTaskToWorkPopup trigger={addTaskPopup} setTrigger={setAddTaskPopup} /> 
    </>
  );
}

Presets.getInitialProps = async ({ query }) => {
  const { id } = query
  return {id}
}

export default Presets