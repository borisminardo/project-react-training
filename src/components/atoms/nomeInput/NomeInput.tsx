import {
  InputBaseProps,
  MyInputProps,
} from "../../../interfaces/inputProps/MyInputProps";
import TextInputAZ from "../../../shared/onlyTextInputAZ/TextInputAZ";
import BaseInput from "../baseInput/BaseInput";

function NomeInput({
  labelname,
  className,
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
        className={className}
        value={TextInputAZ(value)}
        placeholder={placeholder}
        errormessage={errormessage}
        onChange={onChange}
      />
    </>
  );
}

export default NomeInput;
