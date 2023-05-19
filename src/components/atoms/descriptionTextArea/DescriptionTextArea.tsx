import {
  MyInputProps,
  TextAreaBaseProps,
} from "../../../interfaces/inputProps/MyInputProps";
import BaseTextArea from "../baseInput/BaseTextArea";

function DescriptionTextArea({
  labelname,
  className,
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
        className={className}
        value={value}
        placeholder={placeholder}
        errormessage={errormessage}
        onChange={onChange}
      />
    </>
  );
}

export default DescriptionTextArea;
