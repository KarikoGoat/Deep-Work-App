import CheckButton from "./buttons/CheckButton";
import TaskExpandDownButton from "./buttons/TaskExpandDownButton";
import TaskOptionsButton from "./buttons/TaskOptionsButton";
import CreateSubtaskPopup from "./forms/CreateSubtaskPopup";
import Subtask from "./Subtask";
import AddTaskButton from "./buttons/AddTaskButton";
import Router from "next/router";
import EditTaskPopup from './forms/EditTaskPopup';
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const Task = (props) => {

  const task = props.task;
  const [addTaskButton, setAddTaskButton] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
 
  const {tasks} = useAppContext();
  const subtasks = tasks.filter(item => item.parentId === task.id);

  const numOfSubtasks = subtasks.length;
  const numOfDoneSubtasks = subtasks.filter(subtask => subtask.taskIsDone).length;
  
  const handleClick = () => {
    Router.push({
      pathname: `/tasks/${task.taskName}`,
      query: { id: props.id},
    }) 
  };


  return (
    <div className="">
      {isEditable ? <EditTaskPopup  task={task} id={props.id} isSubtask={false} isEditable={isEditable} setIsEditable={setIsEditable} /> :
        <div className="bg-darkishGrey my-4 p-1 mx-3 cursor-pointer" onClick={handleClick}>
          <div className="flex justify-between">
            <div className="flex break-all space-x-2 items-center ">
              <CheckButton task={task} />
              <h1 className="text-2xl text-almostWhite">
                {task.taskName}
              </h1>
              <h1 className="text-almostVeryDarkGrey text-xl">
                {subtasks.length != 0 ? `${numOfDoneSubtasks}/${numOfSubtasks}` : null}
              </h1>
            </div>
            <div className="flex items-center">
              {subtasks.length != 0 ? 
                <TaskExpandDownButton isClosed={isClosed} setIsClosed={setIsClosed} /> : null
              }
              <TaskOptionsButton setIsEditable={setIsEditable} setTrigger={setAddTaskButton} id={props.id} subtask={subtasks}/>
              <AddTaskButton setTrigger={setAddTaskButton} />
            </div>
          </div>
        </div>
      }
      <CreateSubtaskPopup setIsClosed={setIsClosed} parentId={props.id} trigger={addTaskButton} setTrigger={setAddTaskButton} />
      {!isClosed ? subtasks.map((subtask) => {
        return (
          <Subtask setCurrentTask={props.setCurrentTask} 
          key={subtask.id} id={subtask.id} task={subtask} currentTaskId={props.currentTaskId} />
        )
      }) : null}
    </div>
  )
}

export default Task