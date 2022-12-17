import CloseButton from "../buttons/CloseButton"
import { Formik, Form } from "formik"
import * as Yup from "yup";
import TextInput from "../formItems/TextInput";
import FormSaveButton from "../buttons/FormSaveButton";
import { collection, doc } from "firebase/firestore";
import { db } from '../../firebase-config';
import TimeInput from "../formItems/TimeInput";
import { useFirestoreDocumentMutation } from '@react-query-firebase/firestore';

const CreatePresetPopup = (props) => {

  const ref = doc(collection(db, "presets"), props.id);
  const mutation = useFirestoreDocumentMutation(ref);
  
  return (props.trigger) ? (
      <div className="fixed top-0 bottom-0 right-0 -left-6 w-full h-screen
      bg-black/50 flex justify-center items-center z-20 ">
        <div className="relative p-32 w-10/12 h-5/6 bg-veryDarkishGrey rounded-lg">
          <div className="bg-almostVeryDarkishGrey flex justify-between items-center
          absolute top-0 left-0 right-0 px-4 py-2 rounded-t-md ">
            <h1 className="text-almostWhite text-xl">Edit Preset</h1>
            <CloseButton setTrigger={[props.setTrigger, props.setEditPresetButton]}  />
          </div>
          <div>
            <Formik
              initialValues={{
                presetName: props.presetName,
                presetTime: props.presetTime,
                presetTimeHours: props.presetTimeHours,
                presetTimeMinutes: props.presetTimeMinutes,
                presetTimeSeconds: props.presetTimeSeconds,
              }}
              validationSchema={Yup.object({
                presetName: Yup.string()
                  .max(30, "Must be 30 characters or less")
                  .required('Required')
                  
              })}
              onSubmit={(values, { setSubmitting }) => {
                values.presetTime =                      
                  Number(values.presetTimeSeconds);
                  Number(values.presetTimeMinutes) * 60;
                  Number(values.presetTimeHours) * 60 * 60;
                mutation.mutate(values);
                props.setEditPresetButton(false)
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