import Image from 'next/image';
import editIcon from '../../public/editIcon.svg';

const TaskDeleteButton = (props) => {

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    props.setIsEditable(true);
  }

  return (
    <button className="hover:bg-[#555F67] w-full text-left px-4 py-2 text-xl text-veryLightGrey" 
    name="taskInsideButton" onClick={handleClick}>
      <div className='flex space-x-1 ' name="taskInsideButton">
        <Image src={editIcon} name="taskInsideButton" className="w-4 mx-3 w-5" alt='Delete Icon' />
        Edit Task
      </div>
    </button>
  )
}

export default TaskDeleteButton