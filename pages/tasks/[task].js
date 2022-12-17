import { useState } from "react";
import CreateTaskPopup from '../../components/forms/CreateTaskPopup';
import Task from "../../components/Task";
import CreatePreset from "../../components/buttons/CreatePreset";
import { useAppContext } from "../../context/AppContext";
import CurrentTask from "../../components/CurrentTask";

const Tasks = ({ id }) => {
  
  const [createTaskButton, setCreateTaskButton] = useState(false);
  const { tasks } = useAppContext();

  const task = tasks.find(item => item.id === id);

  let currentTaskPath = [];
  let currentTask = task;

  while (currentTask) {
    currentTaskPath.unshift({name: currentTask.taskName, id: currentTask.id});
    currentTask = tasks.find(item => item.id === currentTask.parentId);
  }

  currentTaskPath.unshift({name: "Tasks", id: undefined});

  return (
    <>
      <CurrentTask currentTaskPath={[{name: "Tasks", id: undefined}]}/>
      <div className="absolute top-32 left-0 right-0">
        <CurrentTask currentTaskPath={currentTaskPath}/>
        <Task key={task.id} id={task.id} task={task} />
        <CreateTaskPopup trigger={createTaskButton} setTrigger={setCreateTaskButton} />
        <CreatePreset setTrigger={setCreateTaskButton} text='Create Task' />
      </div>
    </>
   
  );
}

Tasks.getInitialProps = async ({ query }) => {
  const { id } = query
  return {id}
}

export default Tasks

