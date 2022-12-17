import { Formik, Form } from "formik"
import TextInput from "../formItems/TextInput";
import { collection, doc } from "firebase/firestore";
import { db } from '../../firebase-config';
import { useFirestoreDocumentMutation } from "@react-query-firebase/firestore";
import { useEffect, useRef } from "react";
import OutsideAlerter from "../OutsideAlerter";
import fileIcon from '../../public/fileIcon.svg';
import Image from "next/image";

const CreateTaskPopup = (props) => {
  
  const inputRef = useRef(null);
  const formRef = useRef();
  const ref = doc(collection(db, "tasks"), props.task.id);
  const mutation = useFirestoreDocumentMutation(ref);
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const handleClickOutside = () => {
    props.setIsEditable(false)
    if (formRef.current.values.taskName) {
      formRef.current.submitForm();
    } 
  }

  return (props.isEditable) ? (
      <>
        <OutsideAlerter handleClickOutside={handleClickOutside}>
          <div className={`bg-darkishGrey my-4 p-1 mx-3 cursor-pointer ${props.isSubtask ? "ml-16" : ""}`}>
            <div className="flex justify-between">
              <div className="flex break-all space-x-2 items-center ">
                <Image src={fileIcon} className="w-6 mx-2" alt="File Icon"/>
                <div>
                <Formik
                  innerRef={formRef}
                  initialValues={{
                    taskName: props.task.taskName,
                    taskIsDone: props.task.taskIsDone,
                    parentId: props.task.parentId,
                    hasChildren: props.task.hasChildren,
                  }}
                  onSubmit={(values) => {
                    mutation.mutate(values);
                    props.setIsEditable(false);
                  }}
                >
                  <Form >
                    <div>
                      <TextInput
                        placeholder="Type a name"
                        name="taskName"
                        type="text"
                        ref={inputRef}
                        autoComplete="off"
                      />
                    </div>
                  </Form>
                  </Formik>
                </div>
              </div>
              <div className="flex items-center">
              </div>
            </div>
          </div>
        </OutsideAlerter>
      </>
  ) : null
}

export default CreateTaskPopup