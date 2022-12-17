import { useField } from "formik";

const SelectInput = ({ label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label className="text-lightestGrey text-xl mx-2" htmlFor={props.id || props.name}>{label}</label>
      <select className="bg-darkishGrey text-xl text-almostWhite my-2 p-1
      outline-none w-16 rounded-sm py-2" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default SelectInput;