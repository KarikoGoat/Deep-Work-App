import { useState } from "react";
import CheckButton from "./buttons/CheckButton";
import TaskExpandDownButton from "./buttons/TaskExpandDownButton";
import TaskOptionsButton from "./buttons/TaskOptionsButton";
import CreateSubtaskPopup from "./forms/CreateSubtaskPopup";
import AddTaskButton from "./buttons/AddTaskButton";
import Router from "next/router";
import EditTaskPopup from './forms/EditTaskPopup';
import { useAppContext } from "../context/AppContext";


const Subtask = (props) => { 

  const task = props.task;
  const [addTaskButton, setAddTaskButton] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const {tasks} = useAppContext();
  const subtasks = tasks.filter(item => item.parentId === task.id);


  const numOfSubtasks = subtasks.length
  const numOfDoneSubtasks = subtasks.filter(subtask => subtask.taskIsDone).length

  const remaining = subtasks.length - 3;

  const handleClick = () => {
    Router.push({
      pathname: `/tasks/${task.taskName}`,
      query: { id: props.id},
    })
  }

  return (
    <>
      {isEditable ? <EditTaskPopup task={task} isEditable={isEditable} setIsEditable={setIsEditable} isSubtask={true}/> :
      <div className="bg-darkishGrey my-4 p-1 mx-3 ml-16 cursor-pointer" onClick={handleClick}>
          <div className="flex justify-between">
            <div className="flex break-all space-x-2 items-center">
              <CheckButton task={task}/>
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
              <TaskOptionsButton setIsEditable={setIsEditable} setTrigger={setAddTaskButton} id={props.id} subtasks={subtasks}/>
              <AddTaskButton setTrigger={setAddTaskButton} />
            </div>
          </div>
        
        <div className="ml-16 flex flex-col break-all">
          {!isClosed ? subtasks.slice(0, 3).map((subtask) => {
          return (
            <h1 key={subtask.id} className="text-xl text-almostVeryDarkGrey">{subtask.taskName},</h1>
          )
          }) : null} 
          <h1 className="text-xl text-almostVeryDarkGrey">
            {remaining > 0 ? `${remaining} more ...` : ""}
          </h1>
        </div> 
      </div>
      }
      <CreateSubtaskPopup setIsClosed={setIsClosed} parentId={props.id} trigger={addTaskButton} setTrigger={setAddTaskButton} />
    </>
  )
}

export default Subtask