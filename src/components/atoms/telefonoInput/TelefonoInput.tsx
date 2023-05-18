import {
  InputBaseProps,
  MyInputProps,
} from "../../../interfaces/inputProps/MyInputProps";
import OnlyNumberInput from "../../../shared/onlyNumberInput/OnlyNumberInput";
import BaseInput from "../baseInput/BaseInput";

function TelefonoInput({
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
        value={OnlyNumberInput(value)}
        placeholder={placeholder}
        errormessage={errormessage}
        onChange={onChange}
      />
    </>
  );
}

export default TelefonoInput;
