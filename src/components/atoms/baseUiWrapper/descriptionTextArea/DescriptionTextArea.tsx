import {
  MyInputProps,
  TextAreaBaseProps,
} from "../../../../interfaces/inputProps/FormProps";
import BaseTextArea from "../../baseUi/BaseTextArea";

function DescriptionTextArea({
  labelname,
  errormessage,
  id,
  value,
  placeholder,
  onChange,
  ...otherProps
}: TextAreaBaseProps & MyInputProps) {
  return (
    <>
      <BaseTextArea
        {...otherProps}
        labelname={labelname}
        id={id}
        value={value}
        placeholder={placeholder}
        errormessage={errormessage}
        onChange={onChange}
      />
    </>
  );
}

export default DescriptionTextArea;
