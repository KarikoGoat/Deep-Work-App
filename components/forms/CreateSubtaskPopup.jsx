import { Formik, Form } from "formik"
import TextInput from "../formItems/TextInput";
import { query, collection } from "firebase/firestore";
import { db } from '../../firebase-config';
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import fileIcon from '../../public/fileIcon.svg';
import Image from "next/image";
import { useEffect, useRef } from "react";
import OutsideAlerter from "../OutsideAlerter";

const CreateTaskPopup = (props) => {
  
  const inputRef = useRef(null);
  const formRef = useRef();
  const ref = query(collection(db, "tasks"));
  const mutation = useFirestoreCollectionMutation(ref);
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  
  const handleClickOutside = () => {
    props.setTrigger(false)
    
    if (formRef.current.values.taskName) {
      formRef.current.submitForm();
    } 
  }

  return (props.trigger) ? (
      <>
        <OutsideAlerter handleClickOutside={handleClickOutside}>
          <div className="bg-darkishGrey my-4 p-1 mx-3 ml-16 cursor-pointer block"
          id="addForm">
            <div className="flex justify-between">
              <div className="flex break-all items-center ">
                <Image src={fileIcon} className="w-6 mx-2" alt="File Icon"/>
                <div>
                <Formik
                  innerRef={formRef}
                  initialValues={{
                    taskName: "",
                    taskIsDone: false,
                    parentId: props.parentId ? props.parentId : "",
                    hasChildren: false,
                  }}
                  onSubmit={(values) => {
                    mutation.mutate(values);
                    props.setTrigger(false);
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