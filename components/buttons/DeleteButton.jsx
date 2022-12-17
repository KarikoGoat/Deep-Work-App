import { db } from '../../firebase-config';
import { doc, collection } from 'firebase/firestore';
import { useFirestoreDocumentDeletion } from '@react-query-firebase/firestore';

const DeleteButton = (props) => {

  const ref = doc(collection(db, "presets"), props.id)
  const mutation = useFirestoreDocumentDeletion(ref);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    mutation.mutate()
  }

  return (
    <button className="border-none text-veryLightGrey text-xl" 
    onClick={handleClick}>
      Delete Preset
    </button>
  )
}

export default DeleteButton;