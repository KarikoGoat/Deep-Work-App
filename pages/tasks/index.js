import { useState } from "react";
import MainButton from "../../components/buttons/MainButton";
import CreateTaskPopup from '../../components/forms/CreateTaskPopup';
import Task from "../../components/Task";
import CreatePreset from "../../components/buttons/CreatePreset";
import CurrentTask from "../../components/CurrentTask";
import { useAppContext } from "../../context/AppContext";


const Tasks = () => {

  const [createTaskButton, setCreateTaskButton] = useState(false);
  
  let {tasks} = useAppContext();
  tasks = tasks.filter(task => task.parentId === "");

  if (tasks.length === 0 && !createTaskButton) {
    return (
      <>
        <div className="flex flex-col items-center space-y-20 my-32">
          <p className="text-8xl text-almostWhite text-center my-16 mx-10">No tasks added yet.</p>
          <MainButton setTrigger={setCreateTaskButton} text='Add Task'/>
          <CreateTaskPopup trigger={createTaskButton} setTrigger={setCreateTaskButton} />
        </div>
      </>
    );
  }
  
  return (
    <> 
      <CurrentTask currentTaskPath={[{name: "Tasks", id: undefined}]}/>
      <div className="absolute top-36 left-0 right-0">
        {tasks.map((task) => {
          return (
            <Task key={task.id} id={task.id} task={task}/>
          )
        })}
        <CreateTaskPopup trigger={createTaskButton} setTrigger={setCreateTaskButton} />
        <CreatePreset setTrigger={setCreateTaskButton} text='Create Task' />
      </div>
    </>
  );

    
}

export default Tasks