import { useField } from "formik";
import { forwardRef } from "react";

const TextInput = forwardRef(({ label, ...props}, ref) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label className="text-lightestGrey text-xl block" 
      htmlFor={props.id || props.name}>
        {label}
      </label>
      <input ref={ref} id="textInput" className="bg-darkishGrey text-2xl text-almostWhite 
      outline-none w-10/12 rounded-sm p-1 my-1 " {...field} {...props} />
      {meta.touched && meta.error ? <div className="">{meta.error}</div>: null}
    </div>
  );
});

export default TextInput;


