import { db } from '../../firebase-config';
import { doc, collection, query, where } from 'firebase/firestore';
import { useFirestoreDocumentDeletion } from '@react-query-firebase/firestore';
import Image from 'next/image';
import deleteIcon from '../../public/deleteIcon.svg';

const TaskDeleteButton = (props) => {

  //const childrenRef = query(collection(db, "tasks"), where("parentId", "==", props.id));
  //const childrenDelete = useFirestoreDocumentDeletion(childrenRef);
  const parentRef = doc(collection(db, "tasks"), props.id);
  const parentDelete = useFirestoreDocumentDeletion(parentRef);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    parentDelete.mutate()
  }

  return (
    <button className="hover:bg-[#555F67] w-full text-left px-4 py-2 text-xl text-veryLightGrey" 
    name="taskInsideButton" onClick={handleClick}>
      <div className='flex space-x-1 ' name="taskInsideButton">
        <Image src={deleteIcon} name="taskInsideButton" className="w-4 mx-3" alt='Delete Icon' />
        Delete Task
      </div>
    </button>
  )
}

export default TaskDeleteButton