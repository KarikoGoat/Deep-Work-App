import Image from "next/image"
import { db } from '../../firebase-config';
import { doc, collection, query, where } from 'firebase/firestore';
import { useFirestoreDocumentMutation } from "@react-query-firebase/firestore";
import { useState } from "react";
import uncheckedIcon from "../../public/uncheckedIcon.svg";
import checkedIcon from "../../public/checkedIcon.svg";

const CheckButton = (props) => {
  const ref = doc(collection(db, "tasks"), props.task.id);
  const mutation = useFirestoreDocumentMutation(ref, {merge: true});

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    mutation.mutate({taskIsDone: !props.task.taskIsDone})
  }

  return (
    <>
      <button className="m-2  min-w-max"  name="taskInsideButton" onClick={handleClick}>
        <Image className="w-8" src={props.task.taskIsDone ? checkedIcon : uncheckedIcon} alt="Task Check Button" name="taskInsideButton"/> 
      </button>
    </>
  )
}

export default CheckButton