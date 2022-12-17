import CloseButton from "../buttons/CloseButton"
import { Formik, Form } from "formik"
import * as Yup from "yup";
import TextInput from "../formItems/TextInput";
import FormSaveButton from "../buttons/FormSaveButton";
import { query, collection } from "firebase/firestore";
import { db } from '../../firebase-config';
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import TimeInput from "../formItems/TimeInput";

const CreatePresetPopup = (props) => {
  
  const ref = query(collection(db, "presets"));
  const mutation = useFirestoreCollectionMutation(ref);
  
  return (props.trigger) ? (
      <div className="fixed -top-100  bottom-0 right-0 left-0 w-full h-screen
      bg-black/50 flex justify-center items-center z-20">
        <div className="relative p-32 w-10/12 h-5/6 bg-veryDarkishGrey rounded-lg">
          <div className="bg-almostVeryDarkishGrey flex justify-between items-center
          absolute top-0 left-0 right-0 px-4 py-2 rounded-t-md ">
            <h1 className="text-almostWhite text-xl">Create Preset</h1>
            <CloseButton setTrigger={props.setTrigger} />
          </div>
          <div>
            <Formik
              initialValues={{
                presetName: "",
                presetTime: 0,
                presetTimeHours: "0",
                presetTimeMinutes: "0",
                presetTimeSeconds: "0",
              }}
              validationSchema={Yup.object({
                presetName: Yup.string()
                  .max(30, "Must be 30 characters or less")
                  .required("Required")
              })}
              onSubmit={(values) => {
                values.presetTime =                      
                  Number(values.presetTimeSeconds) + 
                  Number(values.presetTimeMinutes) * 60 + 
                  Number(values.presetTimeHours) * 60 * 60;
                mutation.mutate(values);
                props.setTrigger(false);
              }}
            >
              <Form className="flex-col">
                <div className="absolute  top-12 left-0 m-8">
                  <TextInput
                    label="Preset Name"
                    name="presetName"
                    type="text"
                    autoComplete="off"
                  />
                  <TimeInput />
                </div>
              <FormSaveButton text='Save' />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
  ) : null
}

export default CreatePresetPopup