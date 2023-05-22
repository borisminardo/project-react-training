import {
  InputBaseProps,
  MyInputProps,
} from "../../../../interfaces/inputProps/FormProps";
import BaseInput from "../../baseUi/BaseInput";

function EmailInput({
  labelname,
  error,
  errormessage,
  type,
  id,
  value,
  placeholder,
  onChange,
  ...otherProps
}: InputBaseProps & MyInputProps) {
  return (
    <>
      <BaseInput
        {...otherProps}
        labelname={labelname}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        error={error}
        errormessage={errormessage}
        onChange={onChange}
      />
    </>
  );
}

export default EmailInput;
